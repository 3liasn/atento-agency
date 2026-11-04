import React from "react";

export function AgentMockup() {
  return (
    <section className="py-20 md:py-28 bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <p className="eyebrow mb-4">Cómo se ve en el móvil</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-[1.15]">
              Cada conversación, un paciente{" "}
              <span className="italic text-accent font-semibold">confirmado</span>.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
              Atento atiende las dudas en segundos. Califica el tratamiento, consulta
              disponibilidad y agenda la cita en tu calendario habitual.
            </p>

            <div className="mt-8 space-y-4 text-left max-w-lg mx-auto lg:mx-0">
              {[
                {
                  n: "1",
                  t: "Resumen y triaje inmediato",
                  d: "Detecta urgencias, consultas estéticas o revisiones con los detalles ordenados.",
                },
                {
                  n: "2",
                  t: "Reserva según disponibilidad real",
                  d: "Propone horarios libres del especialista adecuado sin solapamientos.",
                },
                {
                  n: "3",
                  t: "Confirmación y recordatorio automático",
                  d: "Envía el mensaje de confirmación por WhatsApp y reduce ausencias.",
                },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-3.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-muted text-accent font-medium text-xs">
                    {item.n}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.t}</h3>
                    <p className="text-xs text-subtle mt-0.5 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[360px]">
              <div className="relative rounded-[44px] border border-border bg-[#0E0F12] soft-glow p-2.5">
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 h-5 w-24 bg-black rounded-full z-20" />
                <div className="relative rounded-[36px] bg-surface overflow-hidden pt-7 pb-4 px-3.5 flex flex-col space-y-3 border border-border/60">
                  <div className="flex items-center justify-between px-2 text-[11px] font-medium text-muted select-none">
                    <span>09:41</span>
                    <span className="text-[10px]">100%</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-border px-1">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-accent text-background flex items-center justify-center text-[10px] font-bold">
                        A
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground leading-none">Atento Recepción</p>
                        <p className="text-[10px] text-subtle mt-0.5">Clínica activa · 24/7 · IA</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-accent bg-accent-muted px-2 py-0.5 rounded-full border border-accent/25">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      En línea
                    </span>
                  </div>

                  <div className="rounded-xl bg-surface-raised p-3.5 border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-foreground">Resumen listo</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent-muted px-2 py-0.5 text-[10px] font-medium text-accent border border-accent/30">
                        Activo
                      </span>
                    </div>
                    <div className="space-y-1 text-[11px] text-muted">
                      <div className="flex justify-between gap-2">
                        <span>Paciente:</span>
                        <span className="font-medium text-foreground">Laura Mendoza</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span>Motivo:</span>
                        <span className="font-medium text-foreground">Limpieza y valoración</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span>Preferencia:</span>
                        <span className="font-medium text-foreground">Jueves por la tarde</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-surface-raised p-3.5 border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-foreground">Cita reservada</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent-muted px-2 py-0.5 text-[10px] font-medium text-accent border border-accent/30">
                        Agendado
                      </span>
                    </div>
                    <div className="rounded-lg bg-background/70 p-2.5 text-[11px] space-y-1 border border-border/70">
                      <p className="font-semibold text-foreground">Jueves 14 de Noviembre · 16:30</p>
                      <p className="text-subtle">Dra. Carmen Soto · Sillón 2</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-accent/25 bg-accent-muted p-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-foreground">Mensaje enviado</span>
                      <span className="text-[10px] font-medium text-accent">Confirmado</span>
                    </div>
                    <p className="text-[11px] text-muted rounded-lg bg-background/50 p-2.5 leading-relaxed border border-border/50">
                      «Hola Laura, tu cita para valoración quedó confirmada para este jueves 14 a las 16:30 con la Dra. Soto. ¡Te esperamos!»
                    </p>
                  </div>

                  <div className="pt-1 flex justify-center">
                    <div className="h-1 w-24 rounded-full bg-border" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-subtle tracking-wide">
                Concept · fictional data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
