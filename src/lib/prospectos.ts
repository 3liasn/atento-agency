import fs from "node:fs";
import path from "node:path";

export interface Prospecto {
  nombre: string;
  ciudad: string;
  pais: string;
  nicho: string;
  web: string;
  telefono_o_whatsapp_publico: string;
  email_publico: string;
  rating: string;
  cantidad_resenas: string;
  chat_o_reservas_online: string;
  anuncios_en_meta: string;
  puntaje: string;
  motivo: string;
  fuente: string;
  slug: string;
  servicios: string[];
  ficticio: boolean;
}

export function parseCsvRow(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];

    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        result.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
  }

  result.push(current.trim());
  return result;
}

export function parseCsv(text: string): Prospecto[] {
  if (!text || typeof text !== "string") return [];

  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length < 2) return [];

  const headers = parseCsvRow(lines[0]).map((h) => h.trim());
  const prospectos: Prospecto[] = [];

  for (let idx = 1; idx < lines.length; idx++) {
    const values = parseCsvRow(lines[idx]);
    const record: Record<string, string> = {};

    for (let c = 0; c < headers.length; c++) {
      record[headers[c]] = values[c] ?? "";
    }

    const rawServicios = record["servicios"] || "";
    const servicios = rawServicios
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);

    const rawFicticio = (record["ficticio"] || "").trim().toLowerCase();
    const ficticio = rawFicticio === "si" || rawFicticio === "sí" || rawFicticio === "true";

    prospectos.push({
      nombre: record["nombre"] || "",
      ciudad: record["ciudad"] || "",
      pais: record["pais"] || "",
      nicho: record["nicho"] || "",
      web: record["web"] || "",
      telefono_o_whatsapp_publico: record["telefono_o_whatsapp_publico"] || "",
      email_publico: record["email_publico"] || "",
      rating: record["rating"] || "",
      cantidad_resenas: record["cantidad_resenas"] || "",
      chat_o_reservas_online: record["chat_o_reservas_online"] || "",
      anuncios_en_meta: record["anuncios_en_meta"] || "",
      puntaje: record["puntaje"] || "",
      motivo: record["motivo"] || "",
      fuente: record["fuente"] || "",
      slug: record["slug"] || "",
      servicios,
      ficticio,
    });
  }

  return prospectos;
}

export function loadProspectos(csvPath?: string): Prospecto[] {
  const targetPath = csvPath ?? path.join(process.cwd(), "data", "prospectos.example.csv");
  const raw = fs.readFileSync(targetPath, "utf-8");
  return parseCsv(raw);
}

export function getProspectoBySlug(slug: string, csvPath?: string): Prospecto | undefined {
  if (!slug) return undefined;
  const list = loadProspectos(csvPath);
  return list.find((p) => p.slug === slug);
}
