import React from "react";
import Link from "next/link";
import { SITE } from "@/content/site";

export function FoundersOffer() {
  const { founders, pricingTiers } = SITE;
  const spotsLeft = Math.max(0, founders.totalSpots - founders.spotsTaken);
  const baseSetup = pricingTiers[0]?.setupUsd ?? 490;
  const halfSetup = Math.round(baseSetup / 2);

  return (
    <section
      id="fundadores"
      className="scroll-mt-24 relative overflow-hidden py-16 md:py-24 bg-surface-raised border-y border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(200,169,106,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-muted px-4 py-1.5 text-xs font-medium tracking-wide text-accent mb-5">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{founders.badge}</span>
            <span className="text-accent/50">·</span>
            <span>Quedan {spotsLeft} de {founders.totalSpots} cupos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight">
            {founders.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            {founders.subtitle}
          </p>

          <div
            className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-xl bg-background/60 border border-border px-5 py-3"
            role="status"
            aria-label={`Disponibilidad: ${spotsLeft} de ${founders.totalSpots} cupos disponibles`}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-subtle">Cupos:</span>
            <div className="flex flex-wrap items-center gap-3">
              {Array.from({ length: founders.totalSpots }).map((_, idx) => {
                const isTaken = idx < founders.spotsTaken;
                return (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                      isTaken ? "text-subtle" : "text-accent"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isTaken ? "bg-subtle" : "bg-accent"
                      }`}
                    />
                    Cupo {idx + 1} {isTaken ? "(Reservado)" : "(Libre)"}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto items-stretch">
          {founders.options.map((opt, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-xl bg-background border border-border p-7 sm:p-8"
            >
              <div className="absolute -top-3 right-6 rounded-full bg-accent px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-background">
                {opt.trialText}
              </div>

              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-accent">{opt.tag}</span>
                <h3 className="font-serif text-2xl font-medium text-foreground mt-1">{opt.title}</h3>

                <div className="mt-4 rounded-xl bg-accent-muted border border-accent/25 p-4">
                  <p className="text-sm font-semibold text-accent">{opt.setupDiscountText}</p>
                  <p className="text-xs text-muted mt-1">
                    Setup Plan Esencial: de ${baseSetup} USD →{" "}
                    <strong className="text-foreground font-semibold">
                      {idx === 0 ? "$0 USD" : `$${halfSetup} USD`}
                    </strong>{" "}
                    (o equivalente en Crecimiento y Premium).
                  </p>
                </div>

                <p className="mt-4 text-sm text-muted leading-relaxed">{opt.description}</p>
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-subtle">
                  Incluye soporte inicial prioritario y calibración clínica
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-4xl mx-auto rounded-xl bg-background border border-border p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-5">
            <div>
              <h4 className="text-lg font-semibold text-foreground">¿Qué solicitamos a cambio?</h4>
              <p className="text-xs text-subtle mt-0.5">
                Relaciones transparentes basadas en resultados palpables.
              </p>
            </div>
            <span className="rounded-lg border border-accent/30 bg-accent-muted px-3 py-1 text-xs font-medium text-accent">
              Transparencia
            </span>
          </div>

          <ul className="mt-6 space-y-3.5 text-sm text-muted">
            {founders.inExchange.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs text-subtle">{founders.afterNote}</p>
          </div>
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={founders.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover"
          >
            <span>{founders.cta}</span>
          </a>
          <Link
            href="#precios"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-muted transition-colors hover:text-foreground hover:border-accent/40"
          >
            Ver planes regulares ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
