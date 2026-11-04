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

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
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
      // Extraer nombre de expresiones como "Hola, me llamo Carlos" o "Soy Maria"
      let name = rawInput;
      const cleanMatch = rawInput.match(/(?:me llamo|soy|mi nombre es)\s+([A-Za-zÀ-ÿ]+)/i);
      if (cleanMatch && cleanMatch[1]) {
        name = cleanMatch[1];
      } else if (rawInput.split(" ").length <= 3) {
        name = rawInput.replace(/[^A-Za-zÀ-ÿ\s]/g, "").trim();
      }
      if (!name) name = "Paciente";

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

      // Proceder a horarios
      return {
        state: { ...currentState, step: "ask_time" },
        messages: [
          `Perfecto ${currentState.patientName || ""}. Tenemos estos 3 espacios disponibles esta semana con la Dra. Méndez en Clínica Aurora:`,
          "Por favor elige el horario que más te convenga:",
        ],
        quickReplies: AVAILABLE_SLOTS,
      };
    }

    case "ask_time": {
      const chosenSlot = AVAILABLE_SLOTS.find((s) => norm.includes(normalizeText(s))) || rawInput;
      return {
        state: {
          ...currentState,
          step: "ask_phone",
          selectedTime: chosenSlot,
        },
        messages: [
          `Anotado: ${chosenSlot}. Para formalizar la pre-reserva y enviarte el recordatorio de confirmación por WhatsApp, ¿a qué número de WhatsApp te escribimos?`,
        ],
        quickReplies: ["+34 612 34 56 78", "+1 (305) 555-0199", "+54 9 11 4000-0000"],
      };
    }

    case "ask_phone": {
      const phone = rawInput;
      return {
        state: {
          ...currentState,
          step: "confirmed",
          phone,
        },
        messages: [
          `🎉 ¡Listo, ${currentState.patientName || "Paciente"}! Tu cita ha quedado pre-reservada con éxito en Clínica Dental Aurora.`,
          `📋 Resumen de tu solicitud:\n• Paciente: ${currentState.patientName || "Confirmado"}\n• Tratamiento: ${currentState.treatment || "Valoración general"}\n• Horario: ${currentState.selectedTime || "A convenir"}\n• WhatsApp de contacto: ${phone}`,
          "Te hemos enviado un recordatorio de cortesía. Recuerda que no requiere pago anticipado. Si necesitas reprogramar, solo tienes que responder a este mismo chat.",
        ],
        quickReplies: ["Reiniciar conversación", "Agendar para otra persona", "Contactar por WhatsApp"],
      };
    }

    case "human_handoff": {
      const phone = rawInput;
      return {
        state: {
          ...currentState,
          step: "confirmed",
          phone,
          needsHuman: true,
        },
        messages: [
          `✅ Gracias por dejar tu contacto (${phone}). Hemos notificado al equipo de recepción de Clínica Aurora.`,
          "Una recepcionista humana te escribirá o llamará a la brevedad para resolver todas tus dudas personalizadas.",
        ],
        quickReplies: ["Reiniciar asistente", "Ver tratamientos"],
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
