import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  normalizarAnuncios,
  generarResumenFijo,
  renderMarkdown,
  generarInforme,
} from "./informe-meta-ads.mjs";

console.log("🧪 Iniciando tests unitarios para scripts/informe-meta-ads.mjs...");

const fixturePath = path.join(process.cwd(), "scripts", "fixtures", "meta-ads-ejemplo.json");
const rawFixture = JSON.parse(fs.readFileSync(fixturePath, "utf-8"));

// Test 1: El fixture está marcado explícitamente como _fixture: true
assert.strictEqual(rawFixture._fixture, true, "El fixture debe tener _fixture: true");
const anuncios = normalizarAnuncios(rawFixture);
assert.strictEqual(anuncios.length, 4, "El fixture debe normalizar 4 anuncios");
console.log("✓ Test 1: Normalización de fixture correcta");

// Test 2: renderMarkdown incluye Asia/Taipei, FIXTURE, anunciantes, textos/CTA y «no disponible»
const resumen = generarResumenFijo({
  query: "clinica estetica madrid",
  country: "ES",
  anuncios,
});

const md = renderMarkdown({
  query: "clinica estetica madrid",
  country: "ES",
  fechaTaipei: "2026-11-04 20:00 (Asia/Taipei)",
  fuenteLabel: "FIXTURE (scripts/fixtures/meta-ads-ejemplo.json)",
  esFixture: true,
  avisoFixture: rawFixture._aviso,
  anuncios,
  resumen,
});

assert(md.includes("Asia/Taipei"), "El Markdown debe incluir zona horaria Asia/Taipei");
assert(md.includes("FIXTURE"), "El Markdown debe avisar claramente que es FIXTURE");
assert(md.includes("clinica estetica madrid"), "El Markdown debe incluir la query");
assert(md.includes("Centro Estético Velázquez (Ficticio)"), "Debe listar los anunciantes vistos");
assert(md.includes("Enviar mensaje por WhatsApp"), "Debe listar los CTA vistos");
assert(md.includes("- **CPC (Costo por clic):** no disponible"), "CPC debe figurar como no disponible");
assert(md.includes("- **CTR (Porcentaje de clics):** no disponible"), "CTR debe figurar como no disponible");
assert(
  md.includes("- **Presupuesto / Gasto publicitario:** no disponible"),
  "Presupuesto debe figurar como no disponible"
);

// Verificar que no haya CPC ni CTR con números inventados
assert(!/CPC[^:\n]*:\s*[$€0-9]/i.test(md), "No debe inventar cifras de CPC");
assert(!/CTR[^:\n]*:\s*[0-9]/i.test(md), "No debe inventar cifras de CTR");
console.log("✓ Test 2: Markdown de 1 página verificado (Asia/Taipei, FIXTURE, cero CPC/CTR inventados)");

// Test 3: generarInforme escribe archivo usando --input fixture
const tmpOut = path.join(os.tmpdir(), `informe-meta-ads-test-${Date.now()}.md`);
const resultado = await generarInforme({
  query: "clinica estetica madrid",
  country: "ES",
  input: "scripts/fixtures/meta-ads-ejemplo.json",
  out: tmpOut,
});

assert.strictEqual(resultado.esFixture, true);
assert(fs.existsSync(tmpOut), "Debe escribir el archivo de salida");
const writtenContent = fs.readFileSync(tmpOut, "utf-8");
assert(writtenContent.includes("Asia/Taipei"));
assert(writtenContent.includes("no disponible"));
fs.unlinkSync(tmpOut);
console.log("✓ Test 3: Generación de archivo desde fixture verificada");

console.log("\n🎉 TODOS LOS TESTS DE informe-meta-ads.mjs PASARON CON ÉXITO.");
