import React from "react";
import Image from "next/image";
import { SITE } from "@/content/site";

const PILLARS = [
  {
    t: "Pensado para el RGPD",
    d: "Solo guardamos lo necesario para atender y agendar. Sin certificaciones afirmadas hasta la revisión legal.",
  },
  {
    t: "Madrid y EE. UU.",
    d: "Trabajamos con clínicas dentales y de estética en español, en ambos mercados.",
  },
  {
    t: "Una persona siempre detrás",
    d: "Tu equipo ve cada conversación y puede intervenir con un clic. Los casos clínicos pasan a una persona.",
  },
];

export function Trust() {
  const founder = SITE.trust.founder;
  return (
    <section id="confianza" aria-label="Confianza" className="scroll-mt-24 border-y border-border bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {PILLARS.map((p) => (
            <div key={p.t} className="border-t-2 border-champagne pt-4">
              <h2 className="font-serif text-2xl font-medium text-foreground">{p.t}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.d}</p>
            </div>
          ))}
        </div>

        {founder ? (
          <div className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-border bg-background p-5 text-center sm:flex-row sm:p-6 sm:text-left">
            {founder.photoSrc ? (
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border">
                <Image src={founder.photoSrc} alt={`Foto de ${founder.name}`} fill sizes="80px" className="object-cover" />
              </div>
            ) : (
              <div
                className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full border border-dashed border-[#B9AE97] bg-surface text-center"
                role="img"
                aria-label="Espacio reservado para la foto real del fundador"
              >
                <span className="font-serif text-2xl text-accent">S</span>
                <span className="text-[9px] leading-tight text-subtle">foto real</span>
              </div>
            )}
            <div className="min-w-0">
              <p className="font-serif text-xl text-foreground">
                {founder.name} · <span className="text-subtle">{founder.role}</span>
              </p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                Hablas conmigo desde la primera demo hasta que tu recepción funciona. Si algo no encaja, me lo dices y lo ajusto.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
