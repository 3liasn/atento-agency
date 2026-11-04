import React from "react";

export function AgentMockup() {
  return (
    <section className="py-20 md:py-28 bg-surface border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-600">
              Operación autónoma
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mt-3 leading-[1.18]">
              Cada conversación, un paciente{" "}
              <span className="italic text-accent font-semibold">confirmado</span>.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Atento atiende las dudas de tus pacientes en segundos. Califica el tratamiento, consulta la disponibilidad de tus doctores y agenda la cita directamente en tu calendario habitual.
            </p>

            <div className="mt-8 space-y-4 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-3.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-50 text-accent font-bold text-xs ring-1 ring-rose-200">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Resumen y triaje inmediato</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Detecta urgencias, consultas estéticas o revisiones con todos los detalles ordenados.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-50 text-accent font-bold text-xs ring-1 ring-rose-200">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Reserva según disponibilidad real</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Propone horarios libres del especialista adecuado sin solapamientos ni retrasos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-50 text-accent font-bold text-xs ring-1 ring-rose-200">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Confirmación y recordatorio automático</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Envía el mensaje de confirmación por WhatsApp y reduce el ausentismo a la mitad.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: iPhone Frame with Clean UI */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[360px]">
              {/* iPhone Outer Chassis */}
              <div className="relative rounded-[48px] border-[10px] border-slate-900 bg-slate-900 shadow-2xl ring-1 ring-black/10 p-2.5">
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-5 w-24 bg-slate-900 rounded-full z-20 flex items-center justify-end pr-2 space-x-1">
                  <div className="h-2 w-2 rounded-full bg-slate-950 ring-1 ring-slate-800" />
                </div>

                {/* iPhone Inner Screen */}
                <div className="relative rounded-[38px] bg-[#FAF7F2] overflow-hidden pt-7 pb-4 px-3.5 flex flex-col space-y-3">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-2 text-[11px] font-semibold text-slate-800 select-none">
                    <span>09:41</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 21l3.52-.92C9.28 20.66 10.6 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
                      </svg>
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0012 4z" />
                      </svg>
                      <span className="text-[10px]">100%</span>
                    </div>
                  </div>

                  {/* App Mini Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-black/5 px-1">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                        A
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 leading-none">Atento Recepción</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Clínica activa · 24/7</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full ring-1 ring-emerald-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      En línea
                    </span>
                  </div>

                  {/* Card 1: Resumen listo */}
                  <div className="rounded-2xl bg-white p-3.5 ring-1 ring-black/5 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">Resumen listo</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-accent ring-1 ring-rose-200/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Activo
                      </span>
                    </div>
                    <div className="space-y-1 text-[11px] text-slate-600">
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">Paciente:</span>
                        <span className="font-semibold text-slate-800">Laura Mendoza</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">Motivo:</span>
                        <span className="font-semibold text-slate-800">Limpieza y valoración</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">Preferencia:</span>
                        <span className="font-semibold text-slate-800">Jueves por la tarde</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Cita reservada */}
                  <div className="rounded-2xl bg-white p-3.5 ring-1 ring-black/5 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">Cita reservada</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-accent ring-1 ring-rose-200/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Agendado
                      </span>
                    </div>
                    <div className="rounded-xl bg-slate-50/80 p-2.5 text-[11px] space-y-1">
                      <p className="font-semibold text-slate-900">Jueves 14 de Noviembre · 16:30 hs</p>
                      <p className="text-slate-600">Dra. Carmen Soto · Sillón 2</p>
                    </div>
                  </div>

                  {/* Card 3: Mensaje enviado (con doble check) */}
                  <div className="rounded-2xl bg-white p-3.5 ring-1 ring-black/5 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">Mensaje enviado</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-accent ring-1 ring-rose-200/60">
                        <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6L7 17l-5-5" />
                          <path d="m22 10-7.5 7.5L13 16" />
                        </svg>
                        Confirmado
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-700 bg-slate-50/90 rounded-xl p-2.5 leading-relaxed">
                      «Hola Laura, tu cita para valoración quedó confirmada para este jueves 14 a las 16:30 con la Dra. Soto. ¡Te esperamos!»
                    </p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-600">
                      <span>14:32</span>
                      <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L7 17l-5-5" />
                        <path d="m22 10-7.5 7.5L13 16" />
                      </svg>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="pt-1 flex justify-center">
                    <div className="h-1 w-24 rounded-full bg-slate-300" />
                  </div>
                </div>
              </div>

              {/* Fictional data label */}
              <p className="mt-4 text-center text-xs text-slate-600 font-medium tracking-wide">
                Concept · fictional data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
