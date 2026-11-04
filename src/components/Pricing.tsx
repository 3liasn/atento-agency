import React from "react";
import Link from "next/link";
import { SITE } from "@/content/site";

export function Pricing() {
  return (
    <section id="precios" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Planes</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Inversión clara, orientada al retorno
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Tarifas de setup único más suscripción mensual. Precios en USD netos
            (facturación disponible en EUR aproximado).
          </p>

          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-accent/30 bg-accent-muted px-4 py-2 text-xs sm:text-sm text-accent">
            <span>¿Eres de las primeras 3 clínicas?</span>
            <Link href="#fundadores" className="font-semibold underline underline-offset-2 hover:text-accent-hover">
              Oferta fundadores con setup bonificado y 14 días de prueba →
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          {SITE.pricingTiers.map((tier) => {
            const isFeatured = tier.recommended;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-xl p-8 transition-colors ${
                  isFeatured
                    ? "bg-surface-raised border border-accent/50 soft-glow"
                    : "bg-surface-raised border border-border hover:border-accent/30"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-background uppercase tracking-wider">
                    {tier.badge || "Más elegido"}
                  </div>
                )}

                <div>
                  <h3 className="font-serif text-2xl font-medium text-foreground">{tier.name}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed min-h-[40px]">{tier.description}</p>

                  <div className="mt-6 border-y border-border py-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl font-medium tracking-tight text-foreground">
                        ${tier.monthlyUsd}
                      </span>
                      <span className="text-sm text-subtle">USD / mes</span>
                    </div>
                    <p className="text-xs text-subtle mt-1">
                      Setup inicial único:{" "}
                      <strong className="text-muted font-medium">${tier.setupUsd} USD</strong>
                    </p>
                    <p className="text-[11px] text-accent mt-0.5">
                      (Aprox. €{tier.monthlyEurApprox}/mes en facturación EUR)
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-medium uppercase tracking-wider text-subtle">Incluye</p>
                    <ul className="space-y-2.5 text-sm text-muted">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <svg className="h-4 w-4 shrink-0 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <a
                    href={`https://wa.me/${SITE.whatsappNumber}?text=Hola%20Atento%2C%20me%20interesa%20el%20plan%20${encodeURIComponent(tier.name)}%20para%20mi%20cl%C3%ADnica`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center rounded-full py-3.5 px-4 text-center text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover ${
                      isFeatured
                        ? "bg-accent text-background hover:bg-accent-hover"
                        : "border border-accent/50 text-accent hover:bg-accent-muted"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-subtle max-w-xl mx-auto space-y-1.5">
          <p>{SITE.legalNote}</p>
          <p>Los precios anteriores corresponden a las tarifas estándar desde la clínica n.º 4 en adelante.</p>
        </div>
      </div>
    </section>
  );
}
