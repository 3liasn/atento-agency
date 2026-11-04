import React from "react";
import { SITE } from "@/content/site";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Cómo funciona</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Cómo funciona, en 3 pasos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Sin dolores técnicos para tu equipo. Nosotros montamos, entrenamos y conectamos.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {SITE.steps.slice(0, 3).map((step, idx) => (
            <div key={idx} className="bg-surface-raised p-8">
              <span className="font-serif text-3xl font-medium text-accent tracking-tight">
                {step.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2.5 text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-subtle">Tú solo nos das tus servicios, horarios y preguntas frecuentes. El resto lo hacemos nosotros.</p>
        <div className="mt-6 rounded-xl border border-border bg-surface px-5 py-4 text-center">
          <p className="text-sm text-muted">
            Compatible con tu flujo habitual: WhatsApp Business API oficial, Google Calendar,
            calendarios médicos y notificaciones a tu personal.
          </p>
        </div>
      </div>
    </section>
  );
}
