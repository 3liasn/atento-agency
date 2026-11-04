# Fusión Atento: PR #1 (contenido) + PR #2 Higgsfield (diseño)

Base: tip actual de PR #1 (`orq/sin-opus-lee-spec-md-e-implementa-landin-…`).
Referencia visual: capturas `/workspace/atento-prueba.png` y `/workspace/atento-prueba-full.png`.
Diseño fuente: rama `origin/prueba-higgsfield` (`src/app/page.tsx`, `public/hero.jpg`, `public/prueba.html`).
`public/hero.jpg` ya está en este árbol (copiado de PR #2).

## Objetivo
Una sola landing Next.js que conserve el contenido/funcionalidad de PR #1 y adopte el look Higgsfield de PR #2. PR draft NUEVO. Sin merge a master. Sin tocar producción.

## Conservar de PR #1 (NO romper)
1. `/demo` + `ChatDemo` + `src/lib/chatBot.ts` + tests 1–13 en `src/lib/chatBot.test.ts` (`npm test` debe pasar).
2. Precios exactos: Esencial $490 + $149/mes; Crecimiento $990 + $299/mes; Premium $1.990 + $499/mes.
3. Oferta fundadores: 3 cupos; setup gratis O 50%; 14 días de prueba a cambio de testimonio.
4. FAQ completa de `SITE.faqs`.
5. WhatsApp real: `wa.me/886979516713` (`SITE.whatsappNumber` / `SITE.whatsappUrl`).
6. Componentes y página demo existentes salvo los cambios de diseño/contenido listados abajo.

## Traer de PR #2 (diseño + imagen)
1. Usar `public/hero.jpg` en el Hero (foto recepción clínica Higgsfield), no el mockup de chat falso como visual principal.
2. Estética limpia Higgsfield:
   - Fondo blanco / `#F7F8FB` en secciones alternas.
   - Gradiente teal→indigo (`from-teal-700 to-indigo-700`) en CTAs principales y badges.
   - Tipografía bold tracking-tight; cards `rounded-2xl` con `ring-1 ring-black/5 shadow-sm`.
   - Navbar sticky blanca con blur; botón WhatsApp verde `#25D366`.
   - Hero en 2 columnas (texto | imagen) en desktop; imagen con `rounded-2xl shadow-xl`.
   - Floating botón WhatsApp abajo a la derecha (mantener este número 886979516713).
3. Banner superior de piloto opcional, sin el WA falso 15550000000 de PR #2.
4. Sección problema al estilo Higgsfield: títulos cualitativos SIN porcentajes inventados (p. ej. «Cada mensaje sin respuesta es una cita que no llega»), 3 cards.
5. NO copiar el WA `15550000000` ni `data-placeholder` de PR #2.

## Quitar cifras SIN fuente (web + PLAN-VENTAS.md)
Eliminar o reescribir TODO lo cuantitativo sin fuente verificable. Detectado:
- `< 15 seg` / «menos de 15 segundos» como promesa de métrica.
- `+35%` conversión.
- `0 leads` / «0 leads perdidos».
- `64%` / «El 64% de las consultas…».
- `60-70%` de mensajes fuera de horario (PLAN-VENTAS).
- `+30%` / «aumenta más del 30%» (PLAN-VENTAS follow-up).
- KPI «Incremento objetivo del 25% al 35%» y «FRT … < 15 segundos» en PLAN-VENTAS §7.
Busca más con grep (`%`, `seg`, `leads`, `conversión` numérica) y quítalas también.

Reemplazos permitidos (cualitativos, sin inventar números):
- Stats del Hero: quitar la fila de stats con cifras O sustituir por beneficios cualitativos (p. ej. «Respuesta 24/7», «Agenda y follow-up», «WhatsApp + web», «Puesta en marcha guiada»).
- Problem title: sin «64%»; usar copy cualitativo al estilo PR #2.
- PLAN-VENTAS: reescribir bullets/plantillas sin esas cifras; KPIs como objetivos cualitativos o «por medir con clientes piloto».
- Mantener precios USD (son oferta comercial, no «estadística»).
- «15 días de aviso» de cancelación y «14 días de prueba» / «48-72 h» de setup SÍ se mantienen (condiciones del producto, no claims de mercado).

## Testimonios
- NO puede haber testimonios inventados.
- Quitar la sección Testimonials de `page.tsx` O dejar un bloque «Casos piloto en preparación» sin nombres/citas falsas.
- Eliminar array `SITE.testimonials` (Valeria Méndez, Carlos Santoro, Sofía Alarcón) o vaciarlo y no renderizarlo.
- Oferta fundadores: a cambio de un testimonio REAL futuro está bien; no mostrar citas falsas.

## Citas legales
- Donde aparezca RGPD / HIPAA / cumplimiento normativo: marcar explícitamente «sin verificar» (p. ej. en PLAN-VENTAS §8 y cualquier copy legal del Footer/FAQ).
- No afirmar certificaciones no documentadas.

## Archivos a tocar (orientativo)
- `src/content/site.ts` — stats, problem title, testimonials, legal notes.
- `src/components/Hero.tsx` — layout 2 cols + `hero.jpg` + sin cifras.
- `src/components/Problem.tsx`, `Benefits.tsx`, `HowItWorks.tsx`, `Pricing.tsx`, `FoundersOffer.tsx`, `Faq.tsx`, `Navbar.tsx`, `Footer.tsx`, `Contact.tsx` — alinear look Higgsfield.
- `src/app/page.tsx` — orden de secciones; quitar Testimonials inventados.
- `src/app/globals.css` — tokens si hace falta.
- `PLAN-VENTAS.md` — limpiar cifras y marcar legales «sin verificar».
- NO tocar `src/lib/chatBot.ts` / tests salvo que un cambio de copy rompa imports (no debería).
- NO desplegar a producción. NO tocar master. NO tocar Supabase.

## Gates obligatorios
1. `npm test` (tests 1–13 del chatbot).
2. `npm run lint`
3. `npm run build`
Actualiza `.orquesta-gates` para incluir `npm test` además de lint y build.

## Entrega del PR
- Rama nueva vía orquesta, PR **draft**, base `master`.
- Título sugerido: `[fusión] Landing Atento: contenido PR#1 + diseño Higgsfield (sin cifras sin fuente)`
- Body: qué se fusionó, cifras quitadas, WhatsApp de prueba intacto, captura pendiente.


## Referencias visuales (Silvio 4/11)
Ver `docs/REFS-VISUAL.md` y `docs/referencias/`. Aplicar a Hero (serif editorial + acento) y sección AgentMockup (celular ES + Concept · fictional data). No copiar marcas.
