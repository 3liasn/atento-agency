import React from "react";
import Link from "next/link";
import { SITE } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-teal-50/50 via-white to-slate-50/30">
      {/* Decorative background grid and blurs */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0d94880a_1px,transparent_1px),linear-gradient(to_bottom,#0d94880a_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-12 left-1/2 -z-10 -translate-x-1/2 blur-3xl opacity-40"
        aria-hidden="true"
      >
        <div className="h-64 w-[40rem] rounded-full bg-gradient-to-tr from-teal-300 via-emerald-200 to-indigo-200" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-50/80 px-3.5 py-1.5 text-xs font-semibold text-teal-800 mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Especializado en clínicas dentales y centros de estética
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Tu recepción con IA,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600">
                siempre atenta
              </span>{" "}
              y agendando citas.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Asistente con inteligencia artificial que responde en segundos por WhatsApp y web las 24 horas, califica tratamientos, reserva citas reales y hace seguimiento de pacientes sin cambiar tu agenda.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-teal-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-teal-700/20 transition-all hover:bg-teal-700 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <span>Probar demo interactiva</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition-all hover:bg-slate-50 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <svg className="w-5 h-5 text-emerald-600 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.525 1.761.809 2.796.809 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.796-5.769-5.796zm0 13.084c-1.109 0-2.193-.298-3.14-.863l-3.491.916.932-3.404c-.619-1.026-.946-2.197-.945-3.399.002-3.96 3.224-7.182 7.184-7.182 3.96 0 7.182 3.222 7.182 7.182 0 3.96-3.222 7.182-7.182 7.182z" />
                </svg>
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Puesta en marcha en 48-72 h
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Sin permanencia forzada
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Español clínico y empático
              </span>
            </div>
          </div>

          {/* Right Visual: Interactive Mockup Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xl shadow-teal-900/10">
              {/* Fake Phone / WhatsApp Window Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-sm shadow-sm">
                    CA
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Clínica Dental Aurora</p>
                    <p className="text-xs text-teal-700 font-medium flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      En línea · Recepción IA 24/7
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-semibold text-teal-700">
                  WhatsApp
                </span>
              </div>

              {/* Chat Conversation Preview */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-teal-600 px-3.5 py-2 text-white shadow-xs">
                    <p>Hola, buenas noches. Quería consultar por un blanqueamiento dental. ¿Cuánto cuesta y cuándo tienen hora?</p>
                    <span className="mt-1 block text-right text-[10px] text-teal-100">22:41</span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-[88%] rounded-2xl rounded-tl-none bg-slate-100 px-3.5 py-2.5 text-slate-800 shadow-xs border border-slate-200/50">
                    <p className="font-medium text-teal-900 mb-1">Atento · Asistente Aurora</p>
                    <p>¡Buenas noches! Encantados de saludarte. En Clínica Aurora el blanqueamiento LED en clínica tiene un rango orientativo de <strong>$180 a $260 USD</strong> (1 sesión de 60 min).</p>
                    <p className="mt-1.5">Tenemos 2 horarios libres para valoración mañana:</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="rounded-md bg-white border border-teal-200 px-2 py-1 text-[11px] font-semibold text-teal-800">
                        Mañana 11:30 hs
                      </span>
                      <span className="rounded-md bg-white border border-teal-200 px-2 py-1 text-[11px] font-semibold text-teal-800">
                        Mañana 16:00 hs
                      </span>
                    </div>
                    <span className="mt-1 block text-left text-[10px] text-slate-400">22:41 · Responde en 8 seg</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-teal-600 px-3.5 py-2 text-white shadow-xs">
                    <p>Me sirve a las 16:00 hs. Me llamo Lucía García.</p>
                    <span className="mt-1 block text-right text-[10px] text-teal-100">22:42</span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-[88%] rounded-2xl rounded-tl-none bg-emerald-50 border border-emerald-200/80 px-3.5 py-2 text-emerald-900 shadow-xs">
                    <p className="font-semibold text-emerald-800 flex items-center gap-1">
                      <span>✓</span> Cita pre-reservada para Lucía
                    </p>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Confirmación y recordatorio listos. Datos cargados en la agenda de la clínica.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Banner inside Mockup */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">¿Quieres probar la conversación completa?</span>
                <Link
                  href="/demo"
                  className="font-bold text-teal-700 hover:text-teal-900 underline underline-offset-2"
                >
                  Abrir demo →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-200 pt-8 sm:pt-10">
          {SITE.stats.map((stat, i) => (
            <div key={i} className="rounded-xl bg-white/80 p-4 border border-slate-100 shadow-xs text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-700 tracking-tight">{stat.value}</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
