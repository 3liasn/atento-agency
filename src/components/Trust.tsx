import React from "react";
import { SITE } from "@/content/site";

export function Trust() {
  const founder = SITE.trust.founder;

  return (
    <section id="confianza" className="scroll-mt-24 py-20 md:py-28 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Transparencia</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Confianza sin adornos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Señales honestas: qué es la IA, qué pasa con tus datos y cómo puedes probar el servicio.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-surface-raised p-6 md:p-7">
            <p className="text-xs font-medium tracking-wider uppercase text-accent mb-3">Asistente de IA</p>
            <p className="text-sm text-muted leading-relaxed">{SITE.trust.aiNotice}</p>
            <p className="mt-4 inline-flex items-center rounded-full border border-accent/30 bg-accent-muted px-3 py-1 text-xs font-medium text-accent">
              {SITE.trust.trialBadge}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface-raised p-6 md:p-7">
            <p className="text-xs font-medium tracking-wider uppercase text-accent mb-3">
              {SITE.trust.privacyLabel}
            </p>
            <p className="text-sm text-muted leading-relaxed">{SITE.trust.privacyNote}</p>
            <p className="mt-3 text-xs text-subtle">{SITE.legalNote}</p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-background p-6 md:p-8">
          <h3 className="font-serif text-2xl text-foreground mb-6">{SITE.trust.dataTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SITE.trust.dataPoints.map((pt) => (
              <div key={pt.title} className="border-t border-border pt-4">
                <h4 className="text-sm font-semibold text-foreground">{pt.title}</h4>
                <p className="mt-2 text-sm text-muted leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {founder ? (
          <div className="mt-4 rounded-xl border border-border bg-surface-raised p-6 md:p-7">
            <p className="text-xs font-medium tracking-wider uppercase text-accent mb-3">Fundador</p>
            <p className="font-serif text-xl text-foreground">{founder.name}</p>
            <p className="text-sm text-subtle mt-1">{founder.role}</p>
            <p className="mt-3 text-sm text-muted leading-relaxed">{founder.note}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
