export const SITE = {
  name: "Atento",
  tagline: "Tu recepción, siempre atenta.",
  description:
    "Asistente con inteligencia artificial para clínicas dentales y de estética. Responde en segundos por WhatsApp y web 24/7, agenda citas reales y recupera pacientes sin cambiar tu agenda.",
  whatsappNumber: "886979516713",
  whatsappUrl: "https://wa.me/886979516713?text=Hola%20Atento%2C%20quiero%20informaci%C3%B3n%20para%20mi%20cl%C3%ADnica",
  primaryCta: {
    label: "Ver la demo con mi clínica",
    href: "https://wa.me/886979516713?text=Hola%20Atento%2C%20quiero%20ver%20la%20demo%20con%20mi%20cl%C3%ADnica",
    reassurance: "Sin tarjeta · sin permanencia · te respondo yo, no un robot",
  },
  navLinks: [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Demo", href: "#demo" },
    { label: "Precios", href: "#precios" },
    { label: "Fundadores", href: "#fundadores" },
    { label: "Preguntas", href: "#faq" },
  ],
  stats: [
    { value: "24/7", label: "Respuesta continua" },
    { value: "Agenda + follow-up", label: "WhatsApp + web" },
    { value: "Guiada", label: "Puesta en marcha" },
    { value: "48-72 h", label: "Con tu protocolo" },
  ],
  problem: {
    title: "Cada mensaje sin respuesta es una cita que no llega",
    subtitle:
      "Cuando un paciente potencial escribe por dolor o interés estético, espera respuesta inmediata. Si nadie contesta, la consulta se pierde.",
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
    ],
  },
  benefits: [
    {
      icon: "01",
      title: "Respuesta inmediata 24/7",
      desc: "Atención inmediata día, noche y festivos con tono cálido, empático y adaptado a odontología y medicina estética.",
    },
    {
      icon: "02",
      title: "Agendamiento guiado 24/7",
      desc: "Califica el motivo de consulta, ofrece los horarios libres y confirma la reserva directamente en tu flujo habitual.",
    },
    {
      icon: "03",
      title: "Follow-up inteligente",
      desc: "Recontacta con delicadeza a pacientes que pidieron información pero no confirmaron fecha, reactivando presupuestos.",
    },
    {
      icon: "04",
      title: "Español natural y clínico",
      desc: "Comprende términos dentales y estéticos (limpieza, carillas, botox, ortodoncia invisible) sin sonar como un robot rígido.",
    },
    {
      icon: "05",
      title: "Sin cambiar tu software",
      desc: "Nos adaptamos a tu calendario actual (Google Calendar, agendas médicas o alertas directas a tu equipo).",
    },
    {
      icon: "06",
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
      desc: "Configuramos Atento con tu protocolo, conectamos el canal oficial de WhatsApp y el widget web, y realizamos pruebas con casos reales.",
    },
    {
      step: "03",
      title: "Puesta en marcha y optimización",
      desc: "Tu clínica empieza a captar citas automáticamente con métricas de conversión semanales y soporte continuo.",
    },
    {
      step: "04",
      title: "Prueba de 14 días",
      desc: "Validas el tono, el triaje y la agenda con pacientes reales. Sin permanencia obligatoria si no encaja.",
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
        "Recepción por WhatsApp y web 24/7",
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
      badge: "Recomendado",
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
  legalNote: "Cumplimiento normativo (RGPD/HIPAA) sin verificar; no afirmamos certificaciones.",
  founders: {
    totalSpots: 3,
    spotsTaken: 0,
    badge: "Programa Fundadores · Cupos Limitados",
    title: "Oferta Fundadores: Solo para las primeras 3 clínicas",
    subtitle:
      "Lanza la nueva recepción de tu clínica con condiciones de lanzamiento irrepetibles a cambio de construir juntos tu caso de éxito.",
    durationTrialDays: 14,
    options: [
      {
        tag: "Opción A",
        title: "Setup 100% Gratis",
        setupDiscountText: "Setup bonificado ($0 USD)",
        trialText: "14 días de prueba gratis",
        description:
          "Bonificación completa del costo de setup en cualquiera de nuestros planes. Solo pagas la suscripción mensual regular una vez finalizada la prueba de 14 días.",
      },
      {
        tag: "Opción B",
        title: "50% OFF en Setup + Onboarding VIP",
        setupDiscountText: "50% de descuento en el setup",
        trialText: "14 días de prueba gratis",
        description:
          "Pagas solo la mitad del setup inicial y accedes a soporte directo prioritario en el ajuste de tus protocolos clínicos y respuestas.",
      },
    ],
    inExchange: [
      "Testimonio sincero (en vídeo breve o por escrito) tras tus primeras 2 a 4 semanas de uso.",
      "Permiso para mostrar métricas reales y resultados alcanzados (con el nombre de tu clínica o 100% anonimizados, a acordar según tu preferencia).",
      "Garantía de transparencia: el testimonio será real y aprobado por ti antes de publicarse.",
    ],
    afterNote:
      "Aviso de transparencia: Desde la clínica n.º 4 en adelante aplican los precios regulares de setup y mensualidad de cada plan sin bonificación.",
    cta: "Postular a 1 de los 3 cupos fundadores",
    ctaHref:
      "https://wa.me/886979516713?text=Hola%20Atento%2C%20quiero%20uno%20de%20los%203%20cupos%20fundadores%20para%20mi%20cl%C3%ADnica",
  },
  faqs: [
    {
      q: "¿Cómo funciona la oferta fundadores y qué requisitos tiene?",
      a: "La oferta fundadores es exclusiva para las primeras 3 clínicas que inicien con Atento. Ofrece 14 días de prueba gratis y a elegir: setup 100% bonificado ($0 USD) o 50% de descuento en el setup inicial en cualquiera de nuestros planes regulares. A cambio solicitamos un testimonio sobre la experiencia y autorización para compartir métricas de resultados conseguidos (las cuales pueden ser anonimizadas si lo prefieres). El testimonio siempre será aprobado formalmente por ti antes de publicarse. A partir de la 4.ª clínica aplican las tarifas completas estándar.",
    },
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
      a: "No. Atento se configura bajo guardarraíles estrictos: solo responde con la información validada por tu clínica, brinda rangos de precio orientativos aprobados por ti y recuerda siempre que el diagnóstico definitivo lo realiza el profesional en consulta.",
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

  trust: {
    aiNotice:
      "Este asistente es una inteligencia artificial entrenada con el protocolo de tu clínica. Tu equipo puede intervenir en cualquier momento.",
    trialBadge: "14 días de prueba · sin permanencia obligatoria",
    privacyLabel: "Privacidad y RGPD — sin verificar",
    privacyNote:
      "Trabajamos con datos de pacientes. Cumplimiento normativo (RGPD/HIPAA) sin verificar: no afirmamos certificaciones hasta revisión legal.",
    dataTitle: "Qué pasa con tus datos",
    dataPoints: [
      {
        title: "Qué se guarda",
        desc: "Mensajes de la demo y formularios de contacto para responderte. En producción: conversaciones necesarias para atender y agendar.",
      },
      {
        title: "Quién accede",
        desc: "Solo el equipo de Atento y, cuando lo conectes, el personal de tu clínica. No vendemos datos a terceros.",
      },
      {
        title: "Cómo se borran",
        desc: "Puedes pedir la eliminación de tus datos de contacto y demos escribiendo por WhatsApp. Los plazos legales se confirmarán en la política publicada.",
      },
    ],
    founder: {
      name: "Silvio",
      role: "Fundador",
      note:
        "Atento nace para clínicas dentales y de estética que quieren recepción seria por WhatsApp sin improvisar. Espacio reservado para bio y foto reales; sin inventar trayectoria ni clientes.",
      // Foto real pendiente: colocar archivo en /public/founder.jpg y poner photoSrc: "/founder.jpg"
      photoSrc: null as string | null,
    },
    audienceNote: "Para clínicas dentales y de estética premium · Madrid y EE. UU.",
  },
};
