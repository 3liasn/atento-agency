import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Atento — Recepción con IA para clínicas (prueba)",
  description:
    "Agente de recepción WhatsApp/chat 24/7 para clínicas de estética y dentales en España y EE. UU. Sitio de prueba.",
  robots: { index: false, follow: false },
};

const WA =
  "https://wa.me/15550000000?text=" +
  encodeURIComponent("Hola, quiero info sobre Atento para mi clínica");
const DEMO = "https://atento-agency.vercel.app/demo";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="bg-gradient-to-r from-teal-700 to-indigo-700 px-3 py-2 text-center text-xs font-semibold tracking-wide text-white">
        Sitio de prueba (piloto). Precios y condiciones sujetos a cambio.
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-900/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <div className="text-lg font-bold tracking-tight">Atento</div>
          <nav className="hidden gap-5 text-sm text-slate-500 md:flex">
            <a href="#problema">Problema</a>
            <a href="#como">Cómo funciona</a>
            <a href="#demo">Demo</a>
            <a href="#planes">Planes</a>
            <a href="#fundadores">Fundadores</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a
            href={WA}
            data-placeholder="true"
            className="inline-flex h-10 items-center rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Tu recepción con IA, siempre atenta.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-700">
              Atento responde por WhatsApp y chat a cada paciente, agenda su cita y hace el seguimiento. 24/7, sin ampliar tu equipo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={DEMO} target="_blank" rel="noopener" className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-teal-700 to-indigo-700 px-5 font-semibold text-white">
                Ver demo en vivo
              </a>
              <a href={WA} data-placeholder="true" className="inline-flex h-11 items-center rounded-full bg-white px-5 font-semibold ring-1 ring-slate-900/10">
                Hablar por WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Pensado para clínicas de estética y dentales en España y EE. UU. · 100 % online
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero.jpg" alt="Recepción clínica con asistencia digital Atento" className="aspect-[4/3] w-full object-cover" />
          </div>
        </section>

        <section id="problema" className="bg-[#F7F8FB] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-700">El problema</p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight">Cada mensaje sin respuesta es una cita que no llega</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Fuera de horario", "Mensajes que llegan fuera de horario y nadie contesta."],
                ["Citas que se caen", "Citas que se caen sin recordatorio ni reagendado."],
                ["Respuesta lenta", "Respuestas lentas: el paciente escribe a otra clínica."],
              ].map(([t, b]) => (
                <article key={t} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-1 text-sm text-slate-600">{b}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-xl text-slate-600">Cada conversación sin atender es una consulta que no llegó a la agenda.</p>
          </div>
        </section>

        <section id="como" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-700">Cómo funciona</p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight">De la primera consulta al seguimiento, sin fricción</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["01", "Conectamos tu clínica", "Conectamos tu WhatsApp y tus tratamientos: precios, horarios y reglas de tu clínica."],
                ["02", "Atento responde y agenda", "Atento responde, califica y agenda en tu calendario, con tu tono."],
                ["03", "Seguimiento y handoff", "Seguimiento automático y paso a tu equipo cuando hace falta."],
              ].map(([n, t, b]) => (
                <div key={n} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-700 to-indigo-700 text-xs font-bold text-white">{n}</div>
                  <div>
                    <h3 className="font-semibold">{t}</h3>
                    <p className="mt-1 text-sm text-slate-600">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="bg-[#F7F8FB] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-700">Demo en vivo</p>
            <h2 className="text-3xl font-semibold tracking-tight">Pruébalo tú mismo</h2>
            <div className="mt-6 max-w-xl rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <p className="text-slate-600">Escribe como lo haría un paciente y mira cómo responde el asistente.</p>
              <a href={DEMO} target="_blank" rel="noopener" className="mt-5 inline-flex h-11 items-center rounded-full bg-slate-900 px-5 font-semibold text-white">Abrir demo</a>
            </div>
          </div>
        </section>

        <section id="planes" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-700">Planes</p>
            <h2 className="text-3xl font-semibold tracking-tight">Elige el ritmo de tu recepción</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                { name: "Esencial", setup: "$490", monthly: "$149/mes", rec: false, bullets: ["Chat web + WhatsApp básico", "Agenda de citas", "Horario y reglas de tu clínica", "Soporte por email"] },
                { name: "Crecimiento", setup: "$990", monthly: "$299/mes", rec: true, bullets: ["Todo lo de Esencial", "Follow-up de leads", "Recordatorios de cita", "Handoff a humano"] },
                { name: "Premium", setup: "$1.990", monthly: "$499/mes", rec: false, bullets: ["Todo lo de Crecimiento", "Multi-sede", "Reportes y métricas", "Integraciones y SLA"] },
              ].map((p) => (
                <article key={p.name} className={`relative rounded-2xl bg-white p-6 shadow-sm ${p.rec ? "ring-2 ring-teal-700 shadow-xl" : "ring-1 ring-black/5"}`}>
                  {p.rec && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-700 to-indigo-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">Recomendado</span>}
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-4 text-3xl font-semibold">{p.setup}</p>
                  <p className="text-sm text-slate-500">setup</p>
                  <p className="mt-1 font-semibold text-teal-700">{p.monthly}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2"><span className="text-teal-700">✓</span>{b}</li>
                    ))}
                  </ul>
                  <a href={WA} data-placeholder="true" className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-slate-900 px-4 text-sm font-semibold text-white">Agendar llamada</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fundadores" className="bg-[#F7F8FB] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border border-slate-200 bg-[#F7F8FB] p-8 md:p-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-700">Oferta fundadores</p>
              <h2 className="text-3xl font-semibold tracking-tight">Programa Fundadores: 3 plazas</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-700">Para las 3 primeras clínicas: setup gratis o 50 % de descuento, más 14 días de prueba. A cambio, nos cuentas tu experiencia con sinceridad.</p>
              <p className="mt-3 max-w-2xl text-slate-500">El testimonio será real y escrito por ti, sin guion. Aún no publicamos testimonios porque estamos en piloto.</p>
              <p className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-700 ring-1 ring-black/5">3 plazas · se elige setup gratis o 50 % en la llamada</p>
              <div className="mt-6">
                <a href={WA} data-placeholder="true" className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-teal-700 to-indigo-700 px-6 font-semibold text-white">Quiero una plaza fundadora</a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-700">FAQ</p>
            <h2 className="text-3xl font-semibold tracking-tight">Preguntas frecuentes</h2>
            <div className="mt-6 max-w-3xl space-y-3">
              {[
                ["¿Qué es Atento?", "Una agencia de IA que instala un recepcionista virtual en WhatsApp y chat para que tu clínica responda, agenda y haga seguimiento 24/7."],
                ["¿Funciona con mi WhatsApp actual?", "Sí: conectamos el número de tu clínica. Los detalles de la integración los cerramos en la llamada de diagnóstico."],
                ["¿Qué pasa si el agente no sabe responder?", "Pasa la conversación a una persona de tu equipo con el contexto completo."],
                ["¿Cuánto tarda la puesta en marcha?", "Te lo confirmamos en la llamada según tu agenda, tratamientos y herramientas actuales. No prometemos plazos genéricos."],
                ["¿Qué pasa con los datos de mis pacientes?", "Lo tratamos con seriedad en la llamada (RGPD en España, normas aplicables en EE. UU.). No afirmamos certificaciones que no tengamos documentadas."],
                ["¿Atendéis en España y EE. UU.?", "Sí. El foco de este piloto son clínicas premium e hispanas en España y Estados Unidos."],
                ["¿Cómo funciona la oferta fundadores?", "Las 3 primeras clínicas eligen setup gratis o 50 % de descuento, más 14 días de prueba, a cambio de un testimonio real escrito por ellas."],
              ].map(([q, a]) => (
                <details key={q} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="text-teal-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[17px] leading-relaxed text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/5 py-10 text-sm text-slate-500">
        <div className="mx-auto max-w-6xl space-y-1 px-4">
          <p>Atento · Sitio de prueba · © 2026</p>
          <p>TODO: política de privacidad (pendiente)</p>
        </div>
      </footer>

      <a
        href={WA}
        data-placeholder="true"
        aria-label="Escribir por WhatsApp. NÚMERO DE PRUEBA, reemplazar"
        title="Escribir por WhatsApp — NÚMERO DE PRUEBA, reemplazar"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-white"
      >
        <span className="sr-only">Escribir por WhatsApp. NÚMERO DE PRUEBA, reemplazar</span>
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" fill="currentColor">
          <path d="M19.11 17.33c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.46h-.53c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.65.2 1.25.18 1.72.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
          <path d="M16.02 3C9.39 3 4 8.38 4 15c0 2.12.56 4.18 1.62 6L4 29l8.2-1.58A11.94 11.94 0 0 0 16.02 27C22.65 27 28 21.62 28 15S22.65 3 16.02 3zm0 21.8c-1.9 0-3.76-.5-5.38-1.45l-.39-.23-4.87.94.98-4.75-.25-.4A9.8 9.8 0 0 1 6.2 15c0-5.42 4.42-9.82 9.82-9.82S25.84 9.58 25.84 15s-4.4 9.8-9.82 9.8z" />
        </svg>
      </a>
      <p data-placeholder="true" className="fixed bottom-20 right-5 z-50 max-w-[140px] rounded-lg bg-amber-100 px-2 py-1 text-[10px] font-bold uppercase leading-tight text-amber-900 shadow md:bottom-24">
        NÚMERO DE PRUEBA, reemplazar
      </p>
    </div>
  );
}
