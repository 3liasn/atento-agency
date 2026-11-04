# Generador de informe de competencia — Meta Ads Library

Script autónomo en Node.js (sin dependencias externas) que genera un **informe de una página en Markdown** sobre anuncios públicos de clínicas en el sector consultado.

## Uso rápido

```bash
node scripts/informe-meta-ads.mjs \
  --query "clinica estetica madrid" \
  --country ES \
  --input scripts/fixtures/meta-ads-ejemplo.json \
  --out /tmp/informe-ejemplo.md
```

Si no se especifica `--out`, guarda el archivo en `docs/informes/<slug-query>-<YYYY-MM-DD>.md` (fecha en zona horaria `Asia/Taipei`).

## Flags disponibles

| Flag | Obligatorio | Valor por defecto | Descripción |
| :--- | :---: | :--- | :--- |
| `--query` | Sí | — | Término de búsqueda (ej. `"clinica estetica madrid"`). |
| `--country` | No | `ES` | Código ISO de país de 2 letras (`ES`, `MX`, `CO`, `US`, etc.). |
| `--input` | No | — | Ruta a un JSON local con anuncios descargados o con el fixture. |
| `--out` | No | `docs/informes/<slug>-<fecha>.md` | Ruta del archivo Markdown de salida. |

## Orden de fuentes y fallback

1. **`--input <archivo.json>`:** si se indica, lee ese JSON local. Si el JSON contiene `"_fixture": true`, el informe lo etiqueta explícitamente como **FIXTURE**.
2. **Lectura en vivo (Meta Ad Library API):** solo se intenta si está definida la variable de entorno `META_AD_LIBRARY_TOKEN` (con timeout de 10 segundos). Nunca se imprime el token.
3. **Fallback seguro (`scripts/fixtures/meta-ads-ejemplo.json`):** si no hay token o falla la red/API, usa automáticamente el fixture y añade un bloque destacado `AVISO DE FIXTURE` en el Markdown.

## Resumen con modelo barato opcional (`FREELLM_URL`)

- Si la variable de entorno `FREELLM_URL` está definida, el script envía **únicamente los textos y CTAs ya obtenidos** para redactar un resumen breve de 3 líneas (timeout de 8 s).
- Si `FREELLM_URL` no está definida o no responde, utiliza una **plantilla fija determinista** (recuento de anunciantes, total de anuncios y CTA más frecuente).
- Nunca se imprime el valor de `FREELLM_URL`.

## Reglas de transparencia (cero métricas inventadas)

La biblioteca pública de anuncios de Meta no publica métricas privadas de rendimiento comercial. Por diseño, el informe reporta siempre como **`no disponible`**:

- **CPC (Costo por clic):** `no disponible`
- **CTR (Porcentaje de clics):** `no disponible`
- **Presupuesto / Gasto publicitario:** `no disponible`
- **Conversiones / Costo por lead:** `no disponible`
