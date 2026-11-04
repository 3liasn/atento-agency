import React from "react";
import Image from "next/image";
import { SITE } from "@/content/site";

export function Trust() {
  const founder = SITE.trust.founder;

  return (
    <section id="confianza" className="scroll-mt-24 py-16 md:py-24 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Transparencia</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Confianza sin adornos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Señales honestas: qué es la IA, qué pasa con tus datos y cómo puedes probar el servicio.
            Sin testimonios inventados ni cifras de clientes falsas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card-surface soft-glow p-6 md:p-7">
            <p className="text-xs font-medium tracking-wider uppercase text-accent mb-3">Asistente de IA</p>
            <p className="text-sm text-muted leading-relaxed">{SITE.trust.aiNotice}</p>
            <p className="mt-4 inline-flex items-center rounded-full border border-accent/30 bg-accent-muted px-3 py-1 text-xs font-medium text-accent">
              {SITE.trust.trialBadge}
            </p>
          </div>

          <div className="card-surface soft-glow p-6 md:p-7">
            <p className="text-xs font-medium tracking-wider uppercase text-accent mb-3">
              {SITE.trust.privacyLabel}
            </p>
            <p className="text-sm text-muted leading-relaxed">{SITE.trust.privacyNote}</p>
            <p className="mt-3 text-xs text-subtle">{SITE.legalNote}</p>
          </div>
        </div>

        <div className="mt-4 card-surface p-6 md:p-8 bg-background">
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
          <div className="mt-4 card-surface soft-glow p-6 md:p-7">
            <p className="text-xs font-medium tracking-wider uppercase text-accent mb-5">Fundador</p>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
              <div className="shrink-0">
                {founder.photoSrc ? (
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl border border-border">
                    <Image
                      src={founder.photoSrc}
                      alt={`Foto de ${founder.name}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-background text-center px-2"
                    aria-label="Espacio reservado para foto real del fundador"
                  >
                    <span className="font-serif text-2xl text-accent/80">S</span>
                    <span className="mt-1 text-[9px] leading-tight text-subtle">
                      Foto real pendiente
                    </span>
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="font-serif text-xl text-foreground">{founder.name}</p>
                <p className="text-sm text-subtle mt-1">{founder.role}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{founder.note}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
