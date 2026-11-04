import React from "react";
import { SITE } from "@/content/site";
import { PrimaryCta } from "@/components/PrimaryCta";

export function FinalCta() {
  return (
    <section id="contacto" className="scroll-mt-24 border-t border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <p className="eyebrow mb-5">Siguiente paso</p>
        <h2 className="font-serif text-[2.1rem] font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
          Mira cómo respondería Atento a los pacientes de tu clínica
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Me escribes por WhatsApp, preparo la demo con tus tratamientos y la pruebas en 15 minutos.
        </p>
        <div className="mt-9">
          <PrimaryCta />
        </div>
        <p className="mt-6 text-sm text-subtle">
          Quedan {SITE.founders.totalSpots - SITE.founders.spotsTaken} de {SITE.founders.totalSpots} plazas fundadoras · {SITE.trust.trialBadge}
        </p>
      </div>
    </section>
  );
}
