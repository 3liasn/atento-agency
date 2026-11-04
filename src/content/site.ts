export const SITE = {
  name: "Atento",
  tagline: "Tu recepción con IA, siempre atenta.",
  description:
    "Asistente con inteligencia artificial para clínicas dentales y de estética. Responde en segundos por WhatsApp y web 24/7, agenda citas reales y recupera pacientes sin cambiar tu agenda.",
  whatsappNumber: "595981000000",
  whatsappUrl: "https://wa.me/595981000000?text=Hola%20Atento%2C%20quiero%20informaci%C3%B3n%20para%20mi%20cl%C3%ADnica",
  navLinks: [
    { label: "Oferta", href: "#oferta" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Precios", href: "#precios" },
    { label: "FAQ", href: "#faq" },
    { label: "Demo interactiva", href: "/demo" },
  ],
  stats: [
    { value: "< 15 seg", label: "Tiempo promedio de respuesta 24/7" },
    { value: "+35%", label: "Conversión de consultas a citas confirmadas" },
    { value: "0 leads", label: "Pacientes perdidos fuera de horario" },
    { value: "48-72 h", label: "Puesta en marcha con tu protocolo" },
  ],
  problem: {
    title: "El 64% de las consultas a clínicas ocurren fuera del horario comercial",
    subtitle:
      "Cuando un paciente potencial escribe por dolor o interés estético, espera respuesta inmediata. Si nadie contesta en 10 minutos, le escribe a la clínica de al lado.",
    points: [
      {
        title: "Respuestas tardías en WhatsApp",
        desc: "Tu equipo de recepción está atendiendo a pacientes en sala. Los mensajes se acumulan y los leads se enfrían.",
      },
      {
        title: "Pérdida nocturna y fines de semana",
        desc: "Las personas buscan tratamientos de noche y los domingos. Sin atención inmediata, la consulta se pierde para siempre.",
      },
      {
        title: "Seguimiento manual inexistente",
        desc: "Muchos pacientes preguntan precio y no confirman. Sin follow-up estructurado, esos presupuestos nunca se cierran.",
      },
      {
        title: "Saturación del equipo humano",
        desc: "Tu recepcionista repite 50 veces al día los mismos precios orientativos en lugar de cuidar la experiencia presencial.",
      },
    ],
  },
  benefits: [
    {
      icon: "⚡",
      title: "Responde en 10 segundos",
      desc: "Atención inmediata día, noche y festivos con tono cálido, empático y adaptado a odontología y medicina estética.",
    },
    {
      icon: "📅",
      title: "Agendamiento guiado 24/7",
      desc: "Califica el motivo de consulta, ofrece los horarios libres y confirma la reserva directamente en tu flujo habitual.",
    },
    {
      icon: "🔄",
      title: "Follow-up inteligente",
      desc: "Recontacta con delicadeza a pacientes que pidieron información pero no confirmaron fecha, reactivando presupuestos.",
    },
    {
      icon: "💬",
      title: "Español natural y clínico",
      desc: "Comprende términos dentales y estéticos (limpieza, carillas, botox, ortodoncia invisible) sin sonar como un robot rígido.",
    },
    {
      icon: "🔌",
      title: "Sin cambiar tu software",
      desc: "Nos adaptamos a tu calendario actual (Google Calendar, agendas médicas o alertas directas a tu equipo).",
    },
    {
      icon: "👤",
      title: "Handoff humano transparente",
      desc: "Si el caso requiere atención médica o criterio especial, el bot deriva la conversación al personal al instante.",
    },
  ],
  steps: [
    {
      step: "01",
      title: "Diagnóstico y protocolo clínico",
      desc: "Analizamos tus tratamientos frecuentes, precios orientativos, preguntas habituales y tono de tu clínica.",
    },
    {
      step: "02",
      title: "Configuración en 48–72 horas",
      desc: "Entrenamos tu IA, conectamos el canal oficial de WhatsApp y el widget web, y realizamos pruebas con casos reales.",
    },
    {
      step: "03",
      title: "Puesta en marcha y optimización",
      desc: "Tu clínica empieza a captar citas automáticamente con métricas de conversión semanales y soporte continuo.",
    },
  ],
  pricingTiers: [
    {
      name: "Esencial",
      recommended: false,
      setupUsd: 490,
      monthlyUsd: 149,
      monthlyEurApprox: 139,
      description: "Ideal para consultorios individuales o clínicas que quieren cubrir el canal web y WhatsApp básico.",
      features: [
        "Asistente IA para WhatsApp y Web 24/7",
        "Calificación de motivos y agendamiento básico",
        "Configuración de horarios de atención",
        "Hasta 500 conversaciones mensuales",
        "Soporte por email y WhatsApp",
      ],
      cta: "Empezar con Esencial",
    },
    {
      name: "Crecimiento",
      recommended: true,
      badge: "Más elegido",
      setupUsd: 990,
      monthlyUsd: 299,
      monthlyEurApprox: 279,
      description: "Diseñado para clínicas en expansión que buscan maximizar conversión y recuperar presupuestos.",
      features: [
        "Todo lo del plan Esencial",
        "Follow-up automático de presupuestos no cerrados",
        "Recordatorios preventivos anti-ausentismo (no-show)",
        "Handoff humano inteligente a tu recepción",
        "Hasta 2.000 conversaciones mensuales",
        "Ajustes periódicos de protocolos y copy",
        "Soporte prioritario con SLA de 4 horas",
      ],
      cta: "Elegir Crecimiento",
    },
    {
      name: "Premium",
      recommended: false,
      setupUsd: 1990,
      monthlyUsd: 499,
      monthlyEurApprox: 469,
      description: "Para clínicas multicentro, redes dentales o centros estéticos de alto volumen con necesidades a medida.",
      features: [
        "Todo lo del plan Crecimiento",
        "Soporte multi-sede y multi-agenda",
        "Reportes avanzados de conversión y ROI",
        "Integración personalizada con CRM / software clínico",
        "Conversaciones ilimitadas incluidas",
        "SLA garantizado y account manager dedicado",
      ],
      cta: "Hablar de Plan Premium",
    },
  ],
  testimonials: [
    {
      quote:
        "Antes perdíamos hasta 10 pacientes cada fin de semana. Desde el primer mes con Atento agendamos 28 valoraciones fuera de horario.",
      author: "Dra. Valeria Méndez",
      role: "Directora Médica · Odontología Integral",
      city: "Madrid",
      tag: "Ejemplo ficticio de demo",
    },
    {
      quote:
        "El seguimiento automático de presupuestos de ortodoncia recuperó a pacientes que dábamos por perdidos. La inversión se pagó sola en 15 días.",
      author: "Dr. Carlos Santoro",
      role: "Socio Fundador · Centro Sonrisas",
      city: "Santiago",
      tag: "Ejemplo ficticio de demo",
    },
    {
      quote:
        "Las pacientes de estética consultan mucho de noche sobre botox y ácido hialurónico. El asistente responde cálido y filtra las citas reales.",
      author: "Dra. Sofía Alarcón",
      role: "Especialista en Medicina Estética",
      city: "Bogotá",
      tag: "Ejemplo ficticio de demo",
    },
  ],
  faqs: [
    {
      q: "¿Reemplaza Atento a mi recepcionista o secretaria?",
      a: "No, la potencia. Atento atiende las preguntas repetitivas (precios orientativos, ubicación, horarios) y captura citas cuando el personal está ocupado o fuera de turno. Tu equipo puede intervenir en cualquier conversación con un solo clic.",
    },
    {
      q: "¿Cómo se integra con mi agenda actual?",
      a: "Podemos integrarlo con Google Calendar, calendarios en la nube o configurar un flujo en el que la cita se pre-reserva y se envía una notificación inmediata por WhatsApp a tu recepción para validarla.",
    },
    {
      q: "¿El asistente inventa información o diagnósticos médicos?",
      a: "No. La IA se programa bajo guardarraíles estrictos: solo responde con la información validada por tu clínica, brinda rangos de precio orientativos aprobados por ti y recuerda siempre que el diagnóstico definitivo lo realiza el profesional en consulta.",
    },
    {
      q: "¿Cuánto tiempo toma tener el sistema listo?",
      a: "El despliegue estándar toma entre 48 y 72 horas hábiles tras recibir tu ficha de servicios, preguntas frecuentes y horarios.",
    },
    {
      q: "¿Qué sucede si un paciente necesita hablar con una persona?",
      a: "El asistente detecta la intención o palabra clave ('humano', 'urgencia', 'doctora') y solicita el número telefónico para transferir el caso de inmediato a tu equipo humano con el historial de la conversación.",
    },
    {
      q: "¿Los precios incluyen impuestos y soporte?",
      a: "Los precios están expresados en USD netos (también facturables en EUR equivalente). Incluyen el entrenamiento inicial, soporte técnico continuo y ajustes periódicos de prompts para optimizar la conversión.",
    },
    {
      q: "¿Hay permanencia o contrato a largo plazo?",
      a: "No hay permanencia obligatoria. Creemos en relaciones basadas en resultados: puedes pausar o cancelar el servicio mensual avisando con 15 días de anticipación.",
    },
  ],
};
