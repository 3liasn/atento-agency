export interface ChatState {
  step: "init" | "ask_treatment" | "show_pricing" | "ask_time" | "ask_phone" | "confirmed" | "human_handoff";
  patientName?: string;
  treatment?: string;
  selectedTime?: string;
  phone?: string;
  needsHuman?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export interface BotResponse {
  state: ChatState;
  messages: string[];
  quickReplies?: string[];
}

export interface TreatmentInfo {
  id: string;
  name: string;
  keywords: string[];
  priceRange: string;
  duration: string;
  description: string;
}

export const TREATMENTS: TreatmentInfo[] = [
  {
    id: "limpieza",
    name: "Limpieza y profilaxis dental",
    keywords: ["limpieza", "profilaxis", "sarro", "higiene", "placa"],
    priceRange: "$45 - $70 USD",
    duration: "45 minutos",
    description: "Eliminación de sarro por ultrasonido, pulido dental y aplicación de flúor.",
  },
  {
    id: "blanqueamiento",
    name: "Blanqueamiento dental LED",
    keywords: ["blanqueamiento", "blanquear", "manchas", "aclarar", "dientes blancos"],
    priceRange: "$180 - $260 USD",
    duration: "1 sesión (60 min)",
    description: "Tratamiento en clínica con luz LED fría y gel desensibilizante, hasta 4 tonos más claros.",
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia / Alineadores invisibles",
    keywords: ["ortodoncia", "brackets", "alineadores", "invisalign", "frenillos", "invisibles"],
    priceRange: "Valoración diagnóstica inicial sin costo. Planes desde $1.200 USD",
    duration: "Escaneo 3D (30 min)",
    description: "Estudio digital 3D y simulación de sonrisa para alineadores transparentes o brackets cerámicos.",
  },
  {
    id: "implantes",
    name: "Implantes dentales y prótesis",
    keywords: ["implante", "implantes", "corona", "diente perdido", "tornillo", "protesis"],
    priceRange: "Desde $650 USD por pieza (incluye tornillo de titanio y corona)",
    duration: "Evaluación con TAC (40 min)",
    description: "Rehabilitación fija con titanio biocompatible y corona estética de zirconio.",
  },
  {
    id: "estetica",
    name: "Valoración estética (Carillas / Armonización)",
    keywords: ["estetica", "carillas", "armonizacion", "diseno de sonrisa", "botox", "acido hialuronico", "labios"],
    priceRange: "Consulta de diagnóstico y diseño digital: $50 USD (bonificable en tratamiento)",
    duration: "45 minutos",
    description: "Diseño digital de sonrisa, carillas de resina o porcelana y perfilado labial armonioso.",
  },
];

export const AVAILABLE_SLOTS = [
  "Mañana a las 11:30 hs",
  "Mañana a las 16:00 hs",
  "Pasado mañana a las 10:00 hs",
];

export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

const STOP_WORDS = new Set([
  "y",
  "e",
  "quiero",
  "quisiera",
  "necesito",
  "busco",
  "para",
  "con",
  "tengo",
  "estoy",
  "vengo",
  "me",
  "mi",
  "un",
  "una",
  "el",
  "la",
  "los",
  "las",
  "que",
  "por",
  "favor",
  "prefiero",
  "consultar",
  "precio",
  "precios",
  "presupuesto",
  "cita",
  "citas",
  "turno",
  "turnos",
  "agendar",
  "horario",
  "horarios",
  "limpieza",
  "blanqueamiento",
  "ortodoncia",
  "brackets",
  "implante",
  "implantes",
  "carillas",
  "botox",
  "estetica",
]);

function capitalizeWord(word: string, isFirst: boolean): string {
  const lower = word.toLowerCase();
  const particles = new Set(["de", "del", "la", "las", "los"]);
  if (!isFirst && particles.has(lower)) {
    return lower;
  }
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function extractPatientName(rawInput: string): string {
  if (!rawInput || typeof rawInput !== "string") return "Paciente";

  // Quitar saludos iniciales comunes
  const text = rawInput
    .replace(/^(?:hola|buenas tardes|buenas noches|buen d[ií]a|buenas|saludos)[,.\s]*/i, "")
    .trim();

  // Intentar regex con prefijo explícito (ej. "me llamo", "soy", "mi nombre es", "me dicen")
  const prefixMatch = text.match(/(?:me llamo|soy|mi nombre es|me dicen)\s+([^,.;!?]+)/i);
  let candidate = "";

  if (prefixMatch && prefixMatch[1]) {
    candidate = prefixMatch[1].trim();
  } else {
    // Si no hay prefijo, separar antes de signos de puntuación
    const punctuationSplit = text.split(/[,.;!?]/)[0].trim();
    const words = punctuationSplit.split(/\s+/).filter(Boolean);

    // Si tiene entre 1 y 3 palabras y ninguna es stop word ni contiene números
    if (words.length >= 1 && words.length <= 3) {
      const hasInvalidWord = words.some((w) => {
        const norm = normalizeText(w);
        return STOP_WORDS.has(norm) || /[^A-Za-zÀ-ÿ'’-]/.test(w);
      });
      if (!hasInvalidWord) {
        candidate = words.join(" ");
      }
    }
  }

  if (!candidate) return "Paciente";

  // Si extrajimos con prefijo, recortar si contiene stop words
  const candidateWords = candidate.split(/\s+/).filter(Boolean);
  const acceptedWords: string[] = [];

  for (let i = 0; i < candidateWords.length; i++) {
    const rawWord = candidateWords[i].replace(/[^A-Za-zÀ-ÿ'’-]/g, "");
    if (!rawWord) break;
    const norm = normalizeText(rawWord);

    // Si encontramos una stop word y ya tenemos palabras, cortamos aquí
    if (STOP_WORDS.has(norm)) {
      break;
    }
    acceptedWords.push(rawWord);
    if (acceptedWords.length >= 4) break; // Máximo 4 palabras de nombre
  }

  if (acceptedWords.length === 0) return "Paciente";

  // Capitalizar cada palabra respetando partículas intermedias
  const formatted = acceptedWords
    .map((word, idx) => capitalizeWord(word, idx === 0))
    .join(" ")
    .trim();

  return formatted || "Paciente";
}

export function isAffirmative(text: string): boolean {
  if (!text) return false;
  const norm = normalizeText(text);

  // Si contiene negación explícita, no es afirmativo
  if (/\b(no|todavia no|luego|despues|mas tarde|ahora no|cancelar)\b/i.test(norm)) {
    return false;
  }

  // Tokens o frases afirmativas
  const affirmativePattern =
    /\b(si|claro|dale|ok|okay|vale|perfecto|agendar|reservar|cita|horarios?|disponibles?|quiero agendar)\b/i;

  return (
    affirmativePattern.test(norm) ||
    norm.includes("ver horarios") ||
    norm.includes("ver horario") ||
    norm.includes("agendar cita")
  );
}

export function isNegative(text: string): boolean {
  if (!text) return false;
  const norm = normalizeText(text);
  return /\b(no|no gracias|despues|luego|mas tarde|todavia no|ahora no|cancelar)\b/i.test(norm);
}

export function matchSlot(text: string): string | undefined {
  if (!text) return undefined;
  const norm = normalizeText(text);

  // Coincidencia directa con algún slot completo
  for (const slot of AVAILABLE_SLOTS) {
    if (norm.includes(normalizeText(slot))) {
      return slot;
    }
  }

  // Coincidencia por número de opción o índice ordinal
  if (
    /\b(1|primero|primera|primera opcion|la primera|el primero|opcion 1)\b/i.test(norm) &&
    !/\b(2|3|segund|tercer)\b/i.test(norm)
  ) {
    return AVAILABLE_SLOTS[0];
  }
  if (
    /\b(2|segundo|segunda|segunda opcion|la segunda|el segundo|opcion 2)\b/i.test(norm) &&
    !/\b(1|3|primer|tercer)\b/i.test(norm)
  ) {
    return AVAILABLE_SLOTS[1];
  }
  if (
    /\b(3|tercero|tercera|tercera opcion|la tercera|el tercero|opcion 3)\b/i.test(norm) &&
    !/\b(1|2|primer|segund)\b/i.test(norm)
  ) {
    return AVAILABLE_SLOTS[2];
  }

  // Coincidencia por hora o combinación hora + día
  if (norm.includes("11:30") || norm.includes("11.30") || norm.includes("once y media")) {
    return AVAILABLE_SLOTS[0];
  }

  if (
    norm.includes("16:00") ||
    norm.includes("16.00") ||
    norm.includes("16 hs") ||
    norm.includes("4 pm") ||
    norm.includes("4 de la tarde") ||
    (norm.includes("manana") && norm.includes("16"))
  ) {
    return AVAILABLE_SLOTS[1];
  }

  if (
    norm.includes("10:00") ||
    norm.includes("10.00") ||
    norm.includes("10 hs") ||
    norm.includes("diez de la manana") ||
    (norm.includes("pasado manana") && (norm.includes("10") || norm.includes("manana")))
  ) {
    return AVAILABLE_SLOTS[2];
  }

  return undefined;
}

export function parsePhone(raw: string): string | undefined {
  if (!raw || typeof raw !== "string") return undefined;
  const trimmed = raw.trim();

  // Si contiene letras, no es un teléfono válido
  if (/[A-Za-zÀ-ÿ]/.test(trimmed)) {
    return undefined;
  }

  // Caracteres permitidos: dígitos, +, (), -, ., /, espacios
  if (!/^[0-9+\-()./\s]+$/.test(trimmed)) {
    return undefined;
  }

  // Si incluye '+', solo puede estar al principio
  if (trimmed.indexOf("+") > 0) {
    return undefined;
  }

  // Extraer sólo los dígitos y validar rango E.164 (8 a 15 dígitos)
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) {
    return undefined;
  }

  return trimmed;
}

function detectHumanIntent(normalized: string): boolean {
  const triggers = [
    "humano",
    "persona",
    "recepcionista",
    "secretaria",
    "doctor",
    "doctora",
    "asesor",
    "hablar con alguien",
    "alguien real",
    "operador",
    "atencion telefonica",
  ];
  return triggers.some((t) => normalized.includes(t));
}

function matchTreatment(text: string): TreatmentInfo | undefined {
  const norm = normalizeText(text);
  for (const t of TREATMENTS) {
    if (norm.includes(normalizeText(t.name))) return t;
    for (const kw of t.keywords) {
      if (norm.includes(normalizeText(kw))) return t;
    }
  }
  return undefined;
}

export function getInitialBotGreeting(): { state: ChatState; messages: string[]; quickReplies: string[] } {
  return {
    state: { step: "init" },
    messages: [
      "¡Hola! 👋 Te damos la bienvenida a Clínica Dental Aurora.",
      "Soy el asistente virtual inteligente de la clínica. ¿Cómo te llamas para poder dirigirme a ti?",
    ],
    quickReplies: ["Hola, me llamo Carlos", "Soy María", "Prefiero consultar un precio"],
  };
}

export function replyBot(currentState: ChatState, userInput: string): BotResponse {
  const rawInput = (userInput || "").trim();
  const norm = normalizeText(rawInput);

  if (norm.length === 0) {
    return {
      state: currentState,
      messages: ["Disculpa, no recibí ningún mensaje. ¿En qué te podemos ayudar hoy en Clínica Aurora?"],
      quickReplies: ["Ver tratamientos", "Quiero agendar cita", "Hablar con un humano"],
    };
  }

  // Si en cualquier punto piden un humano
  if (detectHumanIntent(norm)) {
    return {
      state: { ...currentState, step: "human_handoff", needsHuman: true },
      messages: [
        "Por supuesto. Comprendo perfectamente que quieras atención personalizada con nuestro equipo clínico.",
        "Por favor indícame tu número de WhatsApp o teléfono con código de área para que nuestra recepcionista te contacte en los próximos minutos.",
      ],
      quickReplies: ["Dejar mi número", "Volver al asistente automático"],
    };
  }

  // Manejo por estado
  switch (currentState.step) {
    case "init": {
      const name = extractPatientName(rawInput);
      const matched = matchTreatment(rawInput);

      if (matched) {
        return {
          state: {
            ...currentState,
            step: "show_pricing",
            patientName: name,
            treatment: matched.name,
          },
          messages: [
            `¡Mucho gusto, ${name}! Encantado de saludarte.`,
            `Respecto a ${matched.name}: ${matched.description}`,
            `💰 Rango orientativo: ${matched.priceRange} (duración: ${matched.duration}).`,
            "¿Te gustaría agendar una cita o valoración con nuestros especialistas?",
          ],
          quickReplies: ["Sí, agendar cita", "Ver otros tratamientos", "Hablar con recepcionista"],
        };
      }

      return {
        state: { ...currentState, step: "ask_treatment", patientName: name },
        messages: [
          `¡Mucho gusto, ${name}! Un placer ayudarte hoy.`,
          "¿Qué tratamiento o motivo de consulta tienes en mente?",
        ],
        quickReplies: [
          "Limpieza dental",
          "Blanqueamiento LED",
          "Ortodoncia invisible",
          "Implantes dentales",
          "Valoración estética",
        ],
      };
    }

    case "ask_treatment": {
      const treatment = matchTreatment(rawInput);
      if (treatment) {
        return {
          state: {
            ...currentState,
            step: "show_pricing",
            treatment: treatment.name,
          },
          messages: [
            `Excelente elección. Sobre ${treatment.name}:`,
            `${treatment.description}`,
            `💰 Rango orientativo en Clínica Aurora: ${treatment.priceRange} (${treatment.duration}).`,
            "¿Te reservamos una cita de valoración para revisarte en persona?",
          ],
          quickReplies: ["Sí, ver horarios disponibles", "Ver otro tratamiento", "Hablar con una recepcionista"],
        };
      }

      // Si no reconoció un tratamiento exacto
      return {
        state: currentState,
        messages: [
          `Gracias por el detalle. Atendemos esa consulta habitualmente. Para brindarte el rango de costos preciso realizamos una primera valoración diagnóstica orientativa ($30 - $50 USD).`,
          "Puedes elegir uno de nuestros tratamientos principales o comentarnos si prefieres ver horarios de agenda:",
        ],
        quickReplies: [
          "Limpieza dental",
          "Blanqueamiento LED",
          "Ortodoncia invisible",
          "Implantes dentales",
          "Ver horarios de cita",
        ],
      };
    }

    case "show_pricing": {
      if (norm.includes("otro") || norm.includes("volver") || norm.includes("lista")) {
        return {
          state: { ...currentState, step: "ask_treatment" },
          messages: ["Sin problema, cuéntame qué otro tratamiento te interesa consultar:"],
          quickReplies: [
            "Limpieza dental",
            "Blanqueamiento LED",
            "Ortodoncia invisible",
            "Implantes dentales",
            "Valoración estética",
          ],
        };
      }

      // Si el mensaje trae una frase de cambio de tratamiento
      const newTreatment = matchTreatment(rawInput);
      if (newTreatment && (!currentState.treatment || normalizeText(newTreatment.name) !== normalizeText(currentState.treatment))) {
        return {
          state: {
            ...currentState,
            treatment: newTreatment.name,
          },
          messages: [
            `Por supuesto. Sobre ${newTreatment.name}:`,
            `${newTreatment.description}`,
            `💰 Rango orientativo en Clínica Aurora: ${newTreatment.priceRange} (${newTreatment.duration}).`,
            "¿Te gustaría agendar una cita o valoración con nuestros especialistas?",
          ],
          quickReplies: ["Sí, ver horarios disponibles", "Ver otros tratamientos", "Hablar con recepcionista"],
        };
      }

      // Si confirma o responde afirmativamente
      if (isAffirmative(rawInput)) {
        return {
          state: { ...currentState, step: "ask_time" },
          messages: [
            `Perfecto ${currentState.patientName || ""}. Tenemos estos 3 espacios disponibles esta semana con la Dra. Méndez en Clínica Aurora:`,
            "Por favor elige el horario que más te convenga:",
          ],
          quickReplies: AVAILABLE_SLOTS,
        };
      }

      // Si responde negativamente
      if (isNegative(rawInput)) {
        return {
          state: currentState,
          messages: [
            "Comprendo perfectamente, sin compromiso. Si deseas consultar otro tratamiento o resolver dudas con el equipo clínico, avísanos.",
            "¿Qué te gustaría hacer?",
          ],
          quickReplies: ["Ver otros tratamientos", "Hablar con recepcionista", "Sí, ver horarios disponibles"],
        };
      }

      // Texto no reconocido: se queda en show_pricing y no avanza
      return {
        state: currentState,
        messages: [
          "¿Te gustaría que te muestre los horarios disponibles para una cita o prefieres consultar los detalles de otro tratamiento?",
        ],
        quickReplies: ["Sí, ver horarios disponibles", "Ver otros tratamientos", "Hablar con recepcionista"],
      };
    }

    case "ask_time": {
      if (norm.includes("otro") || norm.includes("volver")) {
        return {
          state: { ...currentState, step: "ask_treatment" },
          messages: ["De acuerdo, volvemos a la lista de tratamientos. ¿Cuál deseas consultar?"],
          quickReplies: [
            "Limpieza dental",
            "Blanqueamiento LED",
            "Ortodoncia invisible",
            "Implantes dentales",
            "Valoración estética",
          ],
        };
      }

      const slot = matchSlot(rawInput);
      if (slot) {
        return {
          state: {
            ...currentState,
            step: "ask_phone",
            selectedTime: slot,
          },
          messages: [
            `Anotado: ${slot}. Para formalizar la pre-reserva y enviarte el recordatorio de confirmación por WhatsApp, ¿a qué número de WhatsApp te escribimos?`,
          ],
          quickReplies: ["+34 612 34 56 78", "+1 (305) 555-0199", "+54 9 11 4000-0000"],
        };
      }

      // Si no coincide con un slot válido
      return {
        state: currentState,
        messages: [
          "Por el momento solo disponemos de estos 3 espacios en la agenda inmediata:",
          "Si necesitas otro día o franja horaria especial, con gusto te comunicamos con nuestra recepcionista:",
        ],
        quickReplies: [...AVAILABLE_SLOTS, "Hablar con recepcionista"],
      };
    }

    case "ask_phone": {
      const validPhone = parsePhone(rawInput);
      if (validPhone) {
        return {
          state: {
            ...currentState,
            step: "confirmed",
            phone: validPhone,
          },
          messages: [
            `🎉 ¡Listo, ${currentState.patientName || "Paciente"}! Tu cita ha quedado pre-reservada con éxito en Clínica Dental Aurora.`,
            `📋 Resumen de tu solicitud:\n• Paciente: ${currentState.patientName || "Confirmado"}\n• Tratamiento: ${currentState.treatment || "Valoración general"}\n• Horario: ${currentState.selectedTime || "A convenir"}\n• WhatsApp de contacto: ${validPhone}`,
            "Te hemos enviado un recordatorio de cortesía. Recuerda que no requiere pago anticipado. Si necesitas reprogramar, solo tienes que responder a este mismo chat.",
          ],
          quickReplies: ["Reiniciar conversación", "Agendar para otra persona", "Contactar por WhatsApp"],
        };
      }

      return {
        state: currentState,
        messages: [
          "El número ingresado no parece válido. Por favor indícanos un número de teléfono o WhatsApp con código de país o área (por ejemplo: +34 600 11 22 33):",
        ],
        quickReplies: ["+34 612 34 56 78", "+1 (305) 555-0199", "+54 9 11 4000-0000"],
      };
    }

    case "human_handoff": {
      if (norm.includes("volver")) {
        return {
          state: { ...currentState, step: "ask_treatment", needsHuman: false },
          messages: ["De vuelta al asistente automático. ¿Qué tratamiento te gustaría consultar hoy?"],
          quickReplies: [
            "Limpieza dental",
            "Blanqueamiento LED",
            "Ortodoncia invisible",
            "Implantes dentales",
          ],
        };
      }

      if (norm.includes("dejar mi numero")) {
        return {
          state: currentState,
          messages: [
            "Por favor indícanos tu número de WhatsApp o teléfono con código de área para que nuestra recepcionista te contacte a la brevedad.",
          ],
          quickReplies: ["+34 612 34 56 78", "+1 (305) 555-0199", "+54 9 11 4000-0000"],
        };
      }

      const validPhone = parsePhone(rawInput);
      if (validPhone) {
        return {
          state: {
            ...currentState,
            step: "confirmed",
            phone: validPhone,
            needsHuman: true,
          },
          messages: [
            `✅ Gracias por dejar tu contacto (${validPhone}). Hemos notificado al equipo de recepción de Clínica Aurora.`,
            "Una recepcionista humana te escribirá o llamará a la brevedad para resolver todas tus dudas personalizadas.",
          ],
          quickReplies: ["Reiniciar asistente", "Ver tratamientos"],
        };
      }

      return {
        state: currentState,
        messages: [
          "No hemos reconocido un número telefónico válido. Por favor ingresa tu número con código de área para que podamos comunicarte con recepción.",
        ],
        quickReplies: ["+34 612 34 56 78", "+1 (305) 555-0199", "+54 9 11 4000-0000"],
      };
    }

    case "confirmed": {
      if (norm.includes("reiniciar") || norm.includes("nuevo") || norm.includes("otra")) {
        return getInitialBotGreeting();
      }
      return {
        state: currentState,
        messages: [
          "Tu cita ya está registrada. Si tienes alguna otra duda o consulta adicional sobre tu visita, aquí estamos.",
        ],
        quickReplies: ["Reiniciar conversación", "Consultar otro tratamiento"],
      };
    }

    default:
      return getInitialBotGreeting();
  }
}
