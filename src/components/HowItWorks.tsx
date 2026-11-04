import React from "react";
import { SITE } from "@/content/site";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Paso a paso</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            ¿Cómo funciona la implementación?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Sin dolores técnicos para tu equipo. Nosotros montamos, entrenamos y conectamos.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {SITE.steps.map((step, idx) => (
            <div key={idx} className="bg-surface-raised p-8">
              <span className="font-serif text-3xl font-medium text-accent tracking-tight">
                {step.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2.5 text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-4 text-center">
          <p className="text-sm text-muted">
            Compatible con tu flujo habitual: WhatsApp Business API oficial, Google Calendar,
            calendarios médicos y notificaciones a tu personal.
          </p>
        </div>
      </div>
    </section>
  );
}
