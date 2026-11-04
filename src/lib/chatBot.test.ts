import assert from "node:assert";
import {
  getInitialBotGreeting,
  replyBot,
  TREATMENTS,
  AVAILABLE_SLOTS,
} from "./chatBot.ts";

console.log("🧪 Iniciando tests unitarios para chatBot.ts...");

// Test 1: Saludo inicial
const initial = getInitialBotGreeting();
assert.strictEqual(initial.state.step, "init");
assert(initial.messages.length >= 2, "Debe tener al menos 2 mensajes iniciales");
assert(initial.quickReplies.length > 0, "Debe ofrecer quickReplies iniciales");
console.log("✓ Test 1: Saludo inicial correcto");

// Test 2: Input vacío no debe romper
const emptyReply = replyBot(initial.state, "");
assert.strictEqual(emptyReply.state.step, "init");
assert(emptyReply.messages[0].includes("Disculpa"));
console.log("✓ Test 2: Manejo de input vacío correcto");

// Test 3: Reconocimiento de nombre y transición a ask_treatment
const step1 = replyBot(initial.state, "Hola, me llamo Carlos Gómez");
assert.strictEqual(step1.state.step, "ask_treatment");
assert(step1.state.patientName?.includes("Carlos"));
console.log("✓ Test 3: Extracción de nombre correcta");

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

console.log("\n🎉 TODOS LOS TESTS DE chatBot.ts PASARON CON ÉXITO.");
