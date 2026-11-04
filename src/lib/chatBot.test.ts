import assert from "node:assert";
import {
  getInitialBotGreeting,
  replyBot,
  extractPatientName,
  isAffirmative,
  isNegative,
  matchSlot,
  parsePhone,
  TREATMENTS,
  AVAILABLE_SLOTS,
} from "./chatBot.ts";

console.log("🧪 Iniciando tests unitarios para chatBot.ts...");

// Test 1: Saludo inicial
const initial = getInitialBotGreeting();
assert.strictEqual(initial.state.step, "init");
assert(initial.messages.length >= 2, "Debe tener al menos 2 mensajes iniciales");
assert(initial.quickReplies && initial.quickReplies.length > 0, "Debe ofrecer quickReplies iniciales");
console.log("✓ Test 1: Saludo inicial correcto");

// Test 2: Input vacío no debe romper
const emptyReply = replyBot(initial.state, "");
assert.strictEqual(emptyReply.state.step, "init");
assert(emptyReply.messages[0].includes("Disculpa"));
console.log("✓ Test 2: Manejo de input vacío correcto");

// Test 3: Reconocimiento de nombre y transición a ask_treatment
const step1 = replyBot(initial.state, "Hola, me llamo Carlos Gómez");
assert.strictEqual(step1.state.step, "ask_treatment");
assert.strictEqual(step1.state.patientName, "Carlos Gómez");
console.log("✓ Test 3: Extracción de nombre multi-palabra correcta");

// Test 4: Selección de tratamiento con acentos y variaciones (blanqueamiento)
const step2 = replyBot(step1.state, "Quiero blanqueamiento dental");
assert.strictEqual(step2.state.step, "show_pricing");
assert(step2.state.treatment?.toLowerCase().includes("blanqueamiento"));
assert(step2.messages.some((m) => m.includes("$180 - $260 USD")));
console.log("✓ Test 4: Reconocimiento de tratamiento y muestra de precio correcto");

// Test 5: Transición a selección de horarios
const step3 = replyBot(step2.state, "Sí, ver horarios disponibles");
assert.strictEqual(step3.state.step, "ask_time");
assert.deepStrictEqual(step3.quickReplies, AVAILABLE_SLOTS);
console.log("✓ Test 5: Selección de horarios correcto");

// Test 6: Reserva de horario y solicitud de teléfono
const step4 = replyBot(step3.state, AVAILABLE_SLOTS[0]);
assert.strictEqual(step4.state.step, "ask_phone");
assert.strictEqual(step4.state.selectedTime, AVAILABLE_SLOTS[0]);
console.log("✓ Test 6: Registro de horario y pedido de teléfono correcto");

// Test 7: Confirmación final de la cita
const step5 = replyBot(step4.state, "+34 600 11 22 33");
assert.strictEqual(step5.state.step, "confirmed");
assert.strictEqual(step5.state.phone, "+34 600 11 22 33");
assert(step5.messages.some((m) => m.includes("pre-reservada con éxito")));
console.log("✓ Test 7: Cita pre-reservada con resumen completo");

// Test 8: Handoff a humano desde cualquier paso
const handoffResponse = replyBot(step2.state, "Quiero hablar con un humano o recepcionista");
assert.strictEqual(handoffResponse.state.step, "human_handoff");
assert.strictEqual(handoffResponse.state.needsHuman, true);
assert(handoffResponse.messages.some((m) => m.includes("recepcionista")));

const handoffPhone = replyBot(handoffResponse.state, "+34 699 88 77 66");
assert.strictEqual(handoffPhone.state.step, "confirmed");
assert(handoffPhone.messages.some((m) => m.includes("notificado al equipo de recepción")));
console.log("✓ Test 8: Handoff a humano funcionando impecablemente");

// Test 9: Tratamientos disponibles
assert.strictEqual(TREATMENTS.length, 5);
console.log("✓ Test 9: 5 tratamientos clínicos verificados");

// Test 10: Extracción detallada de nombres multi-palabra y variantes
console.log("\n🧪 Ejecutando tests específicos para nombres multi-palabra...");
assert.strictEqual(extractPatientName("Hola, me llamo Carlos Gómez"), "Carlos Gómez");
assert.strictEqual(extractPatientName("Soy María José Pérez"), "María José Pérez");
assert.strictEqual(extractPatientName("Me llamo Ana y quiero un blanqueamiento"), "Ana");
assert.strictEqual(extractPatientName("Carlos Gómez"), "Carlos Gómez");
assert.strictEqual(extractPatientName("Prefiero consultar un precio"), "Paciente");
assert.strictEqual(extractPatientName("Soy María, quiero limpieza"), "María");

// Mensaje combinado: nombre + tratamiento
const combo1 = replyBot(initial.state, "Me llamo Ana y quiero un blanqueamiento");
assert.strictEqual(combo1.state.patientName, "Ana");
assert.strictEqual(combo1.state.step, "show_pricing");
assert(combo1.state.treatment?.toLowerCase().includes("blanqueamiento"));

const combo2 = replyBot(initial.state, "Carlos Gómez");
assert.strictEqual(combo2.state.patientName, "Carlos Gómez");
assert.strictEqual(combo2.state.step, "ask_treatment");
console.log("✓ Test 10: Casos de nombres multi-palabra y combinados verificados");

// Test 11: Validaciones en show_pricing
console.log("\n🧪 Ejecutando tests de transiciones en show_pricing...");
assert.strictEqual(isNegative("no gracias"), true);
assert.strictEqual(isNegative("después"), true);
assert.strictEqual(isNegative("sí"), false);

const pricingState = {
  step: "show_pricing" as const,
  patientName: "Carlos Gómez",
  treatment: "Limpieza y profilaxis dental",
};

// Afirmativo -> ask_time
const pricingAffirmative = replyBot(pricingState, "Sí, agendar cita");
assert.strictEqual(pricingAffirmative.state.step, "ask_time");

// No afirmativo inválido ("asdf") -> permanece en show_pricing
const pricingInvalid = replyBot(pricingState, "asdf");
assert.strictEqual(pricingInvalid.state.step, "show_pricing");

// Negación ("no gracias") -> permanece en show_pricing
const pricingNegative = replyBot(pricingState, "no gracias");
assert.strictEqual(pricingNegative.state.step, "show_pricing");

// "Ver otros tratamientos" -> vuelve a ask_treatment
const pricingOther = replyBot(pricingState, "Ver otros tratamientos");
assert.strictEqual(pricingOther.state.step, "ask_treatment");

// "pensándolo" no debe interpretarse como "sí"
assert.strictEqual(isAffirmative("pensándolo"), false);
assert.strictEqual(isAffirmative("lo estoy pensando"), false);
const pricingThinking = replyBot(pricingState, "pensándolo bien...");
assert.strictEqual(pricingThinking.state.step, "show_pricing");
console.log("✓ Test 11: Validaciones de transiciones en show_pricing verificadas");

// Test 12: Validaciones en ask_time
console.log("\n🧪 Ejecutando tests de transiciones en ask_time...");
assert.strictEqual(matchSlot("la primera"), AVAILABLE_SLOTS[0]);
assert.strictEqual(matchSlot("16:00"), AVAILABLE_SLOTS[1]);
assert.strictEqual(matchSlot("pasado mañana"), AVAILABLE_SLOTS[2]);
assert.strictEqual(matchSlot("el sábado a las 9"), undefined);

const timeState = {
  step: "ask_time" as const,
  patientName: "Carlos Gómez",
  treatment: "Limpieza y profilaxis dental",
};

// Cada slot en AVAILABLE_SLOTS debe avanzar a ask_phone con ese selectedTime
for (const slot of AVAILABLE_SLOTS) {
  const res = replyBot(timeState, slot);
  assert.strictEqual(res.state.step, "ask_phone");
  assert.strictEqual(res.state.selectedTime, slot);
}

// "la segunda" / "2" -> slot 2 (AVAILABLE_SLOTS[1])
const slot2ViaOrdinal = replyBot(timeState, "la segunda");
assert.strictEqual(slot2ViaOrdinal.state.step, "ask_phone");
assert.strictEqual(slot2ViaOrdinal.state.selectedTime, AVAILABLE_SLOTS[1]);

const slot2ViaNumber = replyBot(timeState, "2");
assert.strictEqual(slot2ViaNumber.state.step, "ask_phone");
assert.strictEqual(slot2ViaNumber.state.selectedTime, AVAILABLE_SLOTS[1]);

// "mañana a las 16:00" -> slot 2 (AVAILABLE_SLOTS[1])
const slot2ViaHour = replyBot(timeState, "mañana a las 16:00");
assert.strictEqual(slot2ViaHour.state.step, "ask_phone");
assert.strictEqual(slot2ViaHour.state.selectedTime, AVAILABLE_SLOTS[1]);

// "el sábado a las 9" -> se queda en ask_time, sin horario asignado
const slotInvalidSat = replyBot(timeState, "el sábado a las 9");
assert.strictEqual(slotInvalidSat.state.step, "ask_time");
assert.strictEqual(slotInvalidSat.state.selectedTime, undefined);

// "hola" -> se queda en ask_time
const slotInvalidHola = replyBot(timeState, "hola");
assert.strictEqual(slotInvalidHola.state.step, "ask_time");
assert.strictEqual(slotInvalidHola.state.selectedTime, undefined);
console.log("✓ Test 12: Validaciones y selección de slots en ask_time verificadas");

// Test 13: Validaciones en ask_phone y human_handoff
console.log("\n🧪 Ejecutando tests de validación telefónica...");
assert.strictEqual(parsePhone("+34 600 11 22 33"), "+34 600 11 22 33");
assert.strictEqual(parsePhone("123"), undefined);
assert.strictEqual(parsePhone("no tengo teléfono"), undefined);

const phoneState = {
  step: "ask_phone" as const,
  patientName: "Carlos Gómez",
  treatment: "Limpieza y profilaxis dental",
  selectedTime: AVAILABLE_SLOTS[0],
};

// Teléfonos válidos -> confirmed
const validPhones = ["+34 600 11 22 33", "(305) 555-0199", "0981 123 456"];
for (const phone of validPhones) {
  const res = replyBot(phoneState, phone);
  assert.strictEqual(res.state.step, "confirmed", `Debe confirmar con ${phone}`);
  assert.strictEqual(res.state.phone, phone);
}

// Teléfonos inválidos en ask_phone -> se queda en ask_phone
const invalidPhones = ["no tengo", "12", "abc123", ""];
for (const bad of invalidPhones) {
  const res = replyBot(phoneState, bad);
  assert.strictEqual(res.state.step, "ask_phone", `Debe rechazar en ask_phone: ${bad}`);
  assert.strictEqual(res.state.phone, undefined);
}

// Mismo conjunto en human_handoff
const handoffState = {
  step: "human_handoff" as const,
  patientName: "Carlos Gómez",
  needsHuman: true,
};

for (const phone of validPhones) {
  const res = replyBot(handoffState, phone);
  assert.strictEqual(res.state.step, "confirmed", `Handoff debe confirmar con ${phone}`);
  assert.strictEqual(res.state.phone, phone);
}

for (const bad of invalidPhones) {
  const res = replyBot(handoffState, bad);
  assert.strictEqual(res.state.step, "human_handoff", `Handoff debe rechazar: ${bad}`);
  assert.strictEqual(res.state.phone, undefined);
}
console.log("✓ Test 13: Validación estricta de teléfono en ask_phone y human_handoff verificada");

console.log("\n🎉 TODOS LOS TESTS DE chatBot.ts PASARON CON ÉXITO.");
