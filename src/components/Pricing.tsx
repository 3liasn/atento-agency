import React from "react";
import Link from "next/link";
import { SITE } from "@/content/site";

export function Pricing() {
  return (
    <section id="precios" className="scroll-mt-24 py-16 md:py-24 bg-white border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-rose-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-800 mb-3 border border-rose-200">
            Planes transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Inversión clara, orientada al retorno de tu clínica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tarifas de setup único más suscripción mensual. Precios en USD netos (facturación disponible en EUR aproximado).
          </p>

          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-amber-50 border border-amber-300/80 px-4 py-2 text-xs sm:text-sm font-semibold text-amber-900 shadow-xs">
            <span>🎁 ¿Eres de las primeras 3 clínicas?</span>
            <Link
              href="#fundadores"
              className="font-bold text-rose-800 underline underline-offset-2 hover:text-rose-950"
            >
              Mira la oferta fundadores con setup bonificado y 14 días gratis →
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SITE.pricingTiers.map((tier) => {
            const isFeatured = tier.recommended;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all ${
                  isFeatured
                    ? "bg-white border-2 border-accent shadow-xl"
                    : "bg-white border border-slate-200 shadow-sm hover:border-slate-300"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white shadow-md uppercase tracking-wider">
                    {tier.badge || "Más elegido"}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed min-h-[40px]">
                    {tier.description}
                  </p>

                  {/* Pricing Numbers */}
                  <div className="mt-6 border-y border-slate-100 py-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                        ${tier.monthlyUsd}
                      </span>
                      <span className="text-sm font-semibold text-slate-500">USD / mes</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      Setup inicial único: <strong className="text-slate-800">${tier.setupUsd} USD</strong>
                    </p>
                    <p className="text-[11px] text-accent mt-0.5 font-medium">
                      (Aprox. €{tier.monthlyEurApprox}/mes en facturación EUR)
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Incluye:
                    </p>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <svg
                            className="h-5 w-5 shrink-0 text-accent mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <a
                    href={`https://wa.me/${SITE.whatsappNumber}?text=Hola%20Atento%2C%20me%20interesa%20el%20plan%20${encodeURIComponent(
                      tier.name
                    )}%20para%20mi%20cl%C3%ADnica`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center rounded-xl py-3.5 px-4 text-center text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isFeatured
                        ? "bg-accent text-white shadow-md hover:bg-accent-hover active:scale-[0.99]"
                        : "bg-slate-100 text-slate-900 hover:bg-rose-50 hover:text-rose-900"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto space-y-1.5">
          <p>
            Cumplimiento normativo (RGPD/HIPAA) sin verificar; no afirmamos certificaciones.
          </p>
          <p>
            Los precios anteriores corresponden a las tarifas estándar vigentes desde la clínica n.º 4 en adelante.
          </p>
          <p>
            ¿Tienes múltiples sedes o requerimientos especiales? Escríbenos para armar un plan a la medida de tu red clínica.
          </p>
        </div>
      </div>
    </section>
  );
}
