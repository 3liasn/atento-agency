#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DEFAULT_FIXTURE_PATH = path.join(process.cwd(), "scripts", "fixtures", "meta-ads-ejemplo.json");

export function parseArgs(argv = process.argv.slice(2)) {
  const args = {
    query: "",
    country: "ES",
    out: "",
    input: "",
  };

  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === "--query" && argv[i + 1]) {
      args.query = argv[++i];
    } else if (token === "--country" && argv[i + 1]) {
      args.country = argv[++i];
    } else if (token === "--out" && argv[i + 1]) {
      args.out = argv[++i];
    } else if (token === "--input" && argv[i + 1]) {
      args.input = argv[++i];
    }
  }

  return args;
}

export function slugify(text) {
  return (
    String(text || "consulta")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "consulta"
  );
}

export function formatTaipeiDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const map = {};
  for (const p of parts) {
    map[p.type] = p.value;
  }
  return {
    dateOnly: `${map.year}-${map.month}-${map.day}`,
    full: `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute} (Asia/Taipei)`,
  };
}

export function normalizarAnuncios(rawPayload) {
  if (!rawPayload || typeof rawPayload !== "object") return [];

  const list = Array.isArray(rawPayload.anuncios)
    ? rawPayload.anuncios
    : Array.isArray(rawPayload.data)
      ? rawPayload.data
      : Array.isArray(rawPayload)
        ? rawPayload
        : [];

  return list
    .map((item) => {
      const anunciante = String(
        item.anunciante || item.page_name || item.advertiser || "Anunciante no especificado"
      ).trim();

      let texto = "no disponible";
      if (typeof item.texto === "string" && item.texto.trim()) {
        texto = item.texto.trim();
      } else if (Array.isArray(item.ad_creative_bodies) && item.ad_creative_bodies[0]) {
        texto = String(item.ad_creative_bodies[0]).trim();
      }

      let cta = "no disponible";
      if (typeof item.cta === "string" && item.cta.trim()) {
        cta = item.cta.trim();
      } else if (Array.isArray(item.ad_creative_link_titles) && item.ad_creative_link_titles[0]) {
        cta = String(item.ad_creative_link_titles[0]).trim();
      }

      const fechaInicio = String(
        item.fechaInicio || item.ad_delivery_start_time || "no disponible"
      ).trim();

      return { anunciante, texto, cta, fechaInicio };
    })
    .filter((a) => a.anunciante.length > 0);
}

export const normalizar = normalizarAnuncios;

export function generarResumenFijo({ query, country, anuncios }) {
  if (!anuncios || anuncios.length === 0) {
    return `Resumen (plantilla fija): No se encontraron anuncios activos para «${query}» en ${country}.`;
  }

  const anunciantesSet = new Set(anuncios.map((a) => a.anunciante));
  const ctaCounts = new Map();
  for (const a of anuncios) {
    const key = a.cta || "no disponible";
    ctaCounts.set(key, (ctaCounts.get(key) || 0) + 1);
  }

  let topCta = "no disponible";
  let topCount = 0;
  for (const [cta, count] of ctaCounts.entries()) {
    if (count > topCount) {
      topCta = cta;
      topCount = count;
    }
  }

  return `Resumen (plantilla fija): Se analizaron ${anuncios.length} anuncios de ${anunciantesSet.size} anunciantes para «${query}» (${country}). El CTA más repetido en los textos públicos es «${topCta}» (${topCount} de ${anuncios.length} anuncios).`;
}

async function intentarResumenBarato({ query, country, anuncios }) {
  const freellmUrl = process.env.FREELLM_URL;
  if (!freellmUrl || anuncios.length === 0) {
    return generarResumenFijo({ query, country, anuncios });
  }

  const textosObtenidos = anuncios
    .slice(0, 10)
    .map((a, idx) => `${idx + 1}. [${a.anunciante}] Texto: "${a.texto}" | CTA: "${a.cta}"`)
    .join("\n");

  const prompt = [
    `Resume en 3 líneas en español los patrones de estos anuncios públicos para "${query}" (${country}).`,
    "Usa EXCLUSIVAMENTE los textos listados abajo. Prohibido inventar CPC, CTR, presupuestos o métricas no presentes.",
    textosObtenidos,
  ].join("\n\n");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(freellmUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, max_tokens: 180 }),
      signal: controller.signal,
    });
    if (!res.ok) {
      return generarResumenFijo({ query, country, anuncios });
    }
    const data = await res.json();
    const text = (data.text || data.response || data.choices?.[0]?.message?.content || "").trim();
    if (!text) {
      return generarResumenFijo({ query, country, anuncios });
    }
    return `Resumen (modelo ligero sobre textos obtenidos): ${text}`;
  } catch {
    return generarResumenFijo({ query, country, anuncios });
  } finally {
    clearTimeout(timer);
  }
}

async function cargarDatosFuente({ query, country, inputPath }) {
  // 1) Si se pasa --input explícito
  if (inputPath) {
    const absInput = path.resolve(process.cwd(), inputPath);
    const raw = JSON.parse(fs.readFileSync(absInput, "utf-8"));
    const esFixture = Boolean(raw._fixture);
    return {
      anuncios: normalizarAnuncios(raw),
      esFixture,
      fuenteLabel: esFixture
        ? `FIXTURE (archivo de ejemplo vía --input: ${path.basename(absInput)})`
        : `Archivo local (${path.basename(absInput)})`,
      avisoFixture: raw._aviso || "",
    };
  }

  // 2) Intento de lectura en vivo si hay token configurado
  const token = process.env.META_AD_LIBRARY_TOKEN;
  if (token) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    try {
      const params = new URLSearchParams({
        search_terms: query,
        ad_reached_countries: JSON.stringify([country]),
        ad_active_status: "ACTIVE",
        fields: "page_name,ad_creative_bodies,ad_creative_link_titles,ad_delivery_start_time",
        limit: "25",
        access_token: token,
      });
      const url = `https://graph.facebook.com/v19.0/ads_archive?${params.toString()}`;
      const res = await fetch(url, { signal: controller.signal });
      if (res.ok) {
        const payload = await res.json();
        return {
          anuncios: normalizarAnuncios(payload),
          esFixture: false,
          fuenteLabel: "Meta Ads Library API (lectura en vivo)",
          avisoFixture: "",
        };
      }
    } catch {
      // Fallback silencioso a fixture
    } finally {
      clearTimeout(timer);
    }
  }

  // 3) Fallback al fixture por defecto
  const rawFixture = JSON.parse(fs.readFileSync(DEFAULT_FIXTURE_PATH, "utf-8"));
  return {
    anuncios: normalizarAnuncios(rawFixture),
    esFixture: true,
    fuenteLabel: "FIXTURE (scripts/fixtures/meta-ads-ejemplo.json — sin lectura en vivo)",
    avisoFixture:
      rawFixture._aviso ||
      "FIXTURE: datos de ejemplo ficticios, no reales. Se usa cuando no hay lectura en vivo disponible.",
  };
}

export function renderMarkdown({
  query,
  country,
  fechaTaipei,
  fuenteLabel,
  esFixture,
  avisoFixture,
  anuncios,
  resumen,
}) {
  const porAnunciante = new Map();
  for (const ad of anuncios) {
    if (!porAnunciante.has(ad.anunciante)) {
      porAnunciante.set(ad.anunciante, []);
    }
    porAnunciante.get(ad.anunciante).push(ad);
  }

  const lines = [];
  lines.push(`# Informe de competencia — Meta Ads Library`);
  lines.push("");
  if (esFixture) {
    lines.push(
      `> **AVISO DE FIXTURE:** ${avisoFixture || "Este informe se ha generado con datos de ejemplo (FIXTURE) porque no se utilizó lectura en vivo."}`
    );
    lines.push("");
  }
  lines.push(`- **Fecha de generación:** ${fechaTaipei}`);
  lines.push(`- **Búsqueda (query):** \`${query}\``);
  lines.push(`- **País:** \`${country}\``);
  lines.push(`- **Fuente de datos:** ${fuenteLabel}`);
  lines.push("");
  lines.push(`## 1. Resumen ejecutivo`);
  lines.push("");
  lines.push(resumen || generarResumenFijo({ query, country, anuncios }));
  lines.push("");
  lines.push(`## 2. Anunciantes detectados (${porAnunciante.size})`);
  lines.push("");

  if (porAnunciante.size === 0) {
    lines.push("No disponible (0 anuncios encontrados en la fuente consultada).");
    lines.push("");
  } else {
    lines.push("| Anunciante | Nº de anuncios vistos | CTA principal visto |");
    lines.push("| :--- | :---: | :--- |");
    for (const [nombre, lista] of porAnunciante.entries()) {
      const ctaEjemplo = lista[0]?.cta || "no disponible";
      lines.push(`| ${nombre} | ${lista.length} | ${ctaEjemplo} |`);
    }
    lines.push("");
  }

  lines.push(`## 3. Textos y llamadas a la acción (CTA) vistos`);
  lines.push("");
  if (porAnunciante.size === 0) {
    lines.push("- Textos de anuncios: no disponible");
    lines.push("");
  } else {
    for (const [nombre, lista] of porAnunciante.entries()) {
      lines.push(`### ${nombre}`);
      for (const ad of lista.slice(0, 5)) {
        lines.push(`- **Texto visto:** «${ad.texto}»`);
        lines.push(`  - **CTA:** ${ad.cta || "no disponible"} · **Inicio:** ${ad.fechaInicio || "no disponible"}`);
      }
      lines.push("");
    }
  }

  lines.push(`## 4. Métricas privadas y huecos de información`);
  lines.push("");
  lines.push(
    "La biblioteca pública de anuncios no publica costos ni conversiones internas. Atento **nunca inventa ni estima** estas cifras:"
  );
  lines.push("");
  lines.push("- **CPC (Costo por clic):** no disponible");
  lines.push("- **CTR (Porcentaje de clics):** no disponible");
  lines.push("- **Presupuesto / Gasto publicitario:** no disponible");
  lines.push("- **Conversiones / Costo por lead:** no disponible");
  lines.push("");
  lines.push("---");
  lines.push(
    "Informe orientativo de 1 página elaborado por **Atento** · WhatsApp oficial: https://wa.me/886979516713 (+886 979 516 713)"
  );

  return lines.join("\n") + "\n";
}

export async function generarInforme({ query, country = "ES", out = "", input = "", now = new Date() }) {
  const effectiveQuery = (query || "clinica estetica madrid").trim();
  const effectiveCountry = (country || "ES").trim().toUpperCase();
  const { dateOnly, full: fechaTaipei } = formatTaipeiDate(now);

  const fuente = await cargarDatosFuente({
    query: effectiveQuery,
    country: effectiveCountry,
    inputPath: input,
  });

  const resumen = await intentarResumenBarato({
    query: effectiveQuery,
    country: effectiveCountry,
    anuncios: fuente.anuncios,
  });

  const markdown = renderMarkdown({
    query: effectiveQuery,
    country: effectiveCountry,
    fechaTaipei,
    fuenteLabel: fuente.fuenteLabel,
    esFixture: fuente.esFixture,
    avisoFixture: fuente.avisoFixture,
    anuncios: fuente.anuncios,
    resumen,
  });

  const outPath =
    out ||
    path.join(
      process.cwd(),
      "docs",
      "informes",
      `${slugify(effectiveQuery)}-${dateOnly}.md`
    );

  fs.mkdirSync(path.dirname(path.resolve(process.cwd(), outPath)), { recursive: true });
  fs.writeFileSync(path.resolve(process.cwd(), outPath), markdown, "utf-8");

  return {
    outPath: path.resolve(process.cwd(), outPath),
    markdown,
    esFixture: fuente.esFixture,
    totalAnuncios: fuente.anuncios.length,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.query) {
    console.error(
      "Uso: node scripts/informe-meta-ads.mjs --query \"<busqueda>\" [--country ES] [--input archivo.json] [--out salida.md]"
    );
    process.exit(1);
  }

  const res = await generarInforme(args);
  const tag = res.esFixture ? "[FIXTURE]" : "[LIVE/INPUT]";
  console.log(`${tag} Informe generado (${res.totalAnuncios} anuncios): ${res.outPath}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch((err) => {
    console.error("Error generando informe:", err.message || err);
    process.exit(1);
  });
}
