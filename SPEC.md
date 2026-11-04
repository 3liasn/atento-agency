# Atento — SPEC (landing + demo)

Marca: **Atento** — «Tu recepción con IA, siempre atenta.»
Nicho: clínicas dentales y de estética (España / US hispano / LatAm premium).
Idioma UI: **español**. 100% online.

## Páginas
1. `/` — Landing profesional, moderna, responsive (móvil primero), rápida.
2. `/demo` — Demo jugable: chat widget de «Clínica Dental Aurora» (ficticia).

## Landing (`/`) — secciones obligatorias
- Navbar: logo Atento, anclas (Oferta, Precios, Cómo funciona, FAQ, Demo), CTA WhatsApp.
- Hero: titular claro + subtítulo + CTA primario «Probar demo» + CTA secundario WhatsApp. Mensaje: asistente IA que responde 24/7 por WhatsApp/web, agenda citas y hace seguimiento de leads.
- Problema: clínicas pierden leads por respuesta lenta (citar dolor sin inventar estudios falsos; cifras orientativas OK).
- Oferta / beneficios: responde en segundos, agenda 24/7, follow-up automático, español natural, sin cambiar el software de agenda a la fuerza.
- Cómo funciona: 3 pasos (diagnóstico → configuración 48–72h → live con métricas).
- Precios (setup + mensual), 3 tiers en USD (también mención EUR):
  - Esencial: setup $490 · $149/mes — chat web + WhatsApp básico, agenda, horario.
  - Crecimiento: setup $990 · $299/mes — + follow-up leads, recordatorios, handoff humano. **Recomendado**.
  - Premium: setup $1.990 · $499/mes — multi-sede, reportes, integraciones, SLA.
- Prueba social placeholder (3 testimonios ficticios claramente de demo).
- FAQ (6–8 preguntas).
- Contacto: botón WhatsApp (wa.me/886979516713 placeholder) + formulario placeholder (nombre, clínica, ciudad, WhatsApp; onSubmit previene default y muestra «Pronto te contactamos»).
- Footer con marca y aviso «Proyecto piloto / demo».

## Demo (`/demo`)
- Página de «Clínica Dental Aurora» con chat widget embebido.
- El asistente (client-side, sin API keys) debe:
  - Saludar, preguntar nombre y tratamiento de interés (limpieza, blanqueamiento, ortodoncia, implantes, valoración estética).
  - Dar rangos de precio orientativos ficticios.
  - Ofrecer slots de cita ficticios y confirmar reserva.
  - Si preguntan por humano, ofrecer dejar WhatsApp.
- UI de chat moderna (burbujas), tipografía clara, sin dependencias de OpenAI.

## Técnico
- Next.js App Router + TypeScript + Tailwind ya inicializados.
- Componentes en `src/components/`. Contenido ES en `src/content/` o constants.
- Diseño: tipografía limpia, acento teal/índigo, mucho whitespace, contraste AA, sin stock photos pesadas (usar SVG/ilustraciones CSS).
- `npm run build` y `npm run lint` deben pasar.
- NO secretos. NO tocar VPS/trading/APEX. NO mergear.

## Extra
- `PLAN-VENTAS.md` en español: cómo encontrar 20 prospectos online, plantilla de outreach, precios.
