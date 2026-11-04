import React from "react";
import { SITE } from "@/content/site";

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-24 py-16 md:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Beneficios</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Lo que cambia en tu recepción
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            No es un chatbot genérico. Es un protocolo entrenado para informar con calidez
            y convertir consultas en pacientes en el sillón.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {SITE.benefits.map((benefit, i) => (
            <div key={i} className="flex flex-col bg-surface-raised p-7 sm:p-8">
              <span className="font-serif text-accent text-sm tracking-wide mb-4">{benefit.icon}</span>
              <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
