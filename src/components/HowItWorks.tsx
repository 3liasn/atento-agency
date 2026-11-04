import React from "react";
import { SITE } from "@/content/site";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 py-20 md:py-28 bg-background border-t border-border">
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {SITE.steps.map((step, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-surface-raised p-8">
              <span className="font-serif text-3xl font-medium text-accent tracking-tight">
                {step.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2.5 text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
