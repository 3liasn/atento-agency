import React from "react";
import { SITE } from "@/content/site";

export function Benefits() {
  return (
    <section id="oferta" className="scroll-mt-24 py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Propuesta</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Diseñado para el flujo de una clínica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            No es un chatbot genérico. Es un protocolo entrenado para informar con calidez
            y convertir consultas en pacientes en el sillón.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SITE.benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-border bg-surface-raised p-7 transition-colors hover:border-accent/35"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent-muted text-accent text-xs font-semibold mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
