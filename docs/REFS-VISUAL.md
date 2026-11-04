# Guía visual Atento (referencias Silvio, 4/11/2026)

Usar como guía de estilo. **No copiar marcas, logos ni textos** de Hollin / Optikka / Axon. Las maquetas con datos de ejemplo van marcadas como ficticias.

## Hollin (clave) — `/workspace/orq-atento-fusion/referencias/hollin.png`
- Fondo cálido off-white / beige editorial (`#FAF7F2` o similar), mucho espacio en blanco.
- Titular **serif editorial enorme** (Playfair Display / Instrument Serif / similar vía `next/font`): una frase corta; **una palabra en cursiva con el color de acento** (rojo `#E11D48` o naranja `#EA580C`).
- Subcopy sans limpia; honestidad: el producto **dice que es una IA**.
- Foto de producto **cálida y realista** (ya tenemos `/hero.jpg`; envolver con sombra suave y radio amplio).
- **Maqueta de celular** (iPhone frame) mostrando al agente en español: resumen listo, cita retenida/reservada, mensaje enviado. Cards blancas limpias, acento rojo en estados activos.
- Etiqueta pequeña: `Concept · fictional data` (y si la foto es generada, mencionarlo).
- No inventar testimonios ni cifras.

## Optikka — `referencias/optikka.png`
- Paleta sobria + **un solo acento** (rojo). Tipografía geométrica sans, aireado.
- Una frase corta con la palabra clave en el acento.

## Axon Labs — `referencias/axon.png`
- Cuadrícula técnica, gris + **acento naranja** puntual en CTAs/indicadores.
- Sensación blueprint / arquitectura de producto (líneas finas, no ruido).

## Dashboard cards — `referencias/dashboard-cards.png`
- Tarjetas de interfaz limpias, ring suave, mucho whitespace, badges de estado.

## Qué aplicar YA (alcance mínimo)
1. **Hero**: tipografía serif grande + palabra de acento en italic; fondo off-white; foto `hero.jpg`; CTA con acento único (rojo o naranja, no gradiente teal→indigo); copy que diga que es IA.
2. **Nueva sección** `AgentMockup` (después del Hero o de Problem): phone frame + cards en español (resumen, cita, mensaje enviado) + label `Concept · fictional data`.
3. Tokens: `--color-surface` cálido, `--color-accent` rojo/naranja único; cards `rounded-2xl ring-1 ring-black/5`.
4. Corregir bugs del merge previo si siguen: `Contact.tsx` SVG `viewBox="0  24 24"` → `0 0 24 24`; botones con `text-slate-950` sobre gradiente oscuro → `text-white`.
5. No tocar `chatBot.ts` / tests / precios / `595981000000`.
