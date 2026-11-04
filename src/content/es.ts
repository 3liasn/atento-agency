export const WHATSAPP_NUMBER = "15550000000"; // PLACEHOLDER — NÚMERO DE PRUEBA, reemplazar
export const DEMO_URL = "https://atento-agency.vercel.app/demo";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero info sobre Atento para mi clínica")}`;

export const es = {
  testBanner: "Sitio de prueba (piloto). Precios y condiciones sujetos a cambio.",
  brand: "Atento",
  tagline: "Tu recepción con IA, siempre atenta.",
  nav: {
    problema: "Problema",
    como: "Cómo funciona",
    demo: "Demo",
    planes: "Planes",
    fundadores: "Fundadores",
    faq: "FAQ",
    whatsapp: "WhatsApp",
  },
  hero: {
    title: "Tu recepción con IA, siempre atenta.",
    subtitle:
      "Atento responde por WhatsApp y chat a cada paciente, agenda su cita y hace el seguimiento. 24/7, sin ampliar tu equipo.",
    ctaPrimary: "Ver demo en vivo",
    ctaSecondary: "Hablar por WhatsApp",
    trust:
      "Pensado para clínicas de estética y dentales en España y EE. UU. · 100 % online",
  },
  problema: {
    id: "problema",
    eyebrow: "El problema",
    title: "Cada mensaje sin respuesta es una cita que no llega",
    cards: [
      {
        title: "Fuera de horario",
        body: "Mensajes que llegan fuera de horario y nadie contesta.",
      },
      {
        title: "Citas que se caen",
        body: "Citas que se caen sin recordatorio ni reagendado.",
      },
      {
        title: "Respuesta lenta",
        body: "Respuestas lentas: el paciente escribe a otra clínica.",
      },
    ],
    close:
      "Cada conversación sin atender es una consulta que no llegó a la agenda.",
  },
  como: {
    id: "como",
    eyebrow: "Cómo funciona",
    title: "De la primera consulta al seguimiento, sin fricción",
    steps: [
      {
        n: "01",
        title: "Conectamos tu clínica",
        body: "Conectamos tu WhatsApp y tus tratamientos: precios, horarios y reglas de tu clínica.",
      },
      {
        n: "02",
        title: "Atento responde y agenda",
        body: "Atento responde, califica y agenda en tu calendario, con tu tono.",
      },
      {
        n: "03",
        title: "Seguimiento y handoff",
        body: "Seguimiento automático y paso a tu equipo cuando hace falta.",
      },
    ],
  },
  demo: {
    id: "demo",
    eyebrow: "Demo en vivo",
    title: "Pruébalo tú mismo",
    body: "Escribe como lo haría un paciente y mira cómo responde el asistente.",
    cta: "Abrir demo",
  },
  planes: {
    id: "planes",
    eyebrow: "Planes",
    title: "Elige el ritmo de tu recepción",
    cta: "Agendar llamada",
    items: [
      {
        name: "Esencial",
        setup: "$490",
        monthly: "$149/mes",
        recommended: false,
        bullets: [
          "Chat web + WhatsApp básico",
          "Agenda de citas",
          "Horario y reglas de tu clínica",
          "Soporte por email",
        ],
      },
      {
        name: "Crecimiento",
        setup: "$990",
        monthly: "$299/mes",
        recommended: true,
        bullets: [
          "Todo lo de Esencial",
          "Follow-up de leads",
          "Recordatorios de cita",
          "Handoff a humano",
        ],
      },
      {
        name: "Premium",
        setup: "$1.990",
        monthly: "$499/mes",
        recommended: false,
        bullets: [
          "Todo lo de Crecimiento",
          "Multi-sede",
          "Reportes y métricas",
          "Integraciones y SLA",
        ],
      },
    ],
  },
  fundadores: {
    id: "fundadores",
    eyebrow: "Oferta fundadores",
    title: "Programa Fundadores: 3 plazas",
    body: "Para las 3 primeras clínicas: setup gratis o 50 % de descuento, más 14 días de prueba. A cambio, nos cuentas tu experiencia con sinceridad.",
    note: "El testimonio será real y escrito por ti, sin guion. Aún no publicamos testimonios porque estamos en piloto.",
    slots: "3 plazas · se elige setup gratis o 50 % en la llamada",
    cta: "Quiero una plaza fundadora",
  },
  faq: {
    id: "faq",
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es Atento?",
        a: "Una agencia de IA que instala un recepcionista virtual en WhatsApp y chat para que tu clínica responda, agenda y haga seguimiento 24/7.",
      },
      {
        q: "¿Funciona con mi WhatsApp actual?",
        a: "Sí: conectamos el número de tu clínica. Los detalles de la integración los cerramos en la llamada de diagnóstico.",
      },
      {
        q: "¿Qué pasa si el agente no sabe responder?",
        a: "Pasa la conversación a una persona de tu equipo con el contexto completo.",
      },
      {
        q: "¿Cuánto tarda la puesta en marcha?",
        a: "Te lo confirmamos en la llamada según tu agenda, tratamientos y herramientas actuales. No prometemos plazos genéricos.",
      },
      {
        q: "¿Qué pasa con los datos de mis pacientes?",
        a: "Lo tratamos con seriedad en la llamada (RGPD en España, normas aplicables en EE. UU.). No afirmamos certificaciones que no tengamos documentadas.",
      },
      {
        q: "¿Atendéis en España y EE. UU.?",
        a: "Sí. El foco de este piloto son clínicas premium e hispanas en España y Estados Unidos.",
      },
      {
        q: "¿Cómo funciona la oferta fundadores?",
        a: "Las 3 primeras clínicas eligen setup gratis o 50 % de descuento, más 14 días de prueba, a cambio de un testimonio real escrito por ellas.",
      },
    ],
  },
  whatsapp: {
    label: "Escribir por WhatsApp",
    placeholderNote: "NÚMERO DE PRUEBA, reemplazar",
  },
  footer: {
    line: "Atento · Sitio de prueba · © 2026",
    privacyTodo: "TODO: política de privacidad (pendiente)",
  },
  meta: {
    title: "Atento — Recepción con IA para clínicas (prueba)",
    description:
      "Agente de recepción WhatsApp/chat 24/7 para clínicas de estética y dentales en España y EE. UU. Sitio de prueba.",
  },
} as const;

export type EsContent = typeof es;
