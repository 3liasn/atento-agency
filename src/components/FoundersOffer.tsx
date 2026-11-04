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
      className="scroll-mt-24 relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white border-y border-teal-800/40"
    >
      {/* Glow decorations */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 -z-0 h-96 w-[45rem] rounded-full bg-teal-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 -z-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold tracking-wide text-amber-300 mb-5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>{founders.badge}</span>
            <span className="text-amber-200/60">•</span>
            <span>Quedan {spotsLeft} de {founders.totalSpots} cupos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {founders.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {founders.subtitle}
          </p>

          {/* Visual Spots Tracker */}
          <div
            className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-5 py-3 backdrop-blur-xs"
            role="status"
            aria-label={`Disponibilidad: ${spotsLeft} de ${founders.totalSpots} cupos disponibles`}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
              Disponibilidad en vivo:
            </span>
            <div className="flex items-center gap-2">
              {Array.from({ length: founders.totalSpots }).map((_, idx) => {
                const isTaken = idx < founders.spotsTaken;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5"
                    title={isTaken ? `Cupo ${idx + 1}: Asignado` : `Cupo ${idx + 1}: Disponible`}
                  >
                    <span
                      className={`h-4 w-4 rounded-full transition-all flex items-center justify-center text-[9px] font-bold ${
                        isTaken
                          ? "bg-slate-700 text-slate-400 border border-slate-600"
                          : "bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/50 ring-2 ring-emerald-400/30"
                      }`}
                    >
                      {isTaken ? "✕" : "✓"}
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      {isTaken ? `Cupo ${idx + 1} (Reservado)` : `Cupo ${idx + 1} (Libre)`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Two Offer Options Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {founders.options.map((opt, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl bg-slate-900/90 border-2 border-teal-500/40 p-7 sm:p-8 shadow-2xl shadow-teal-950/50 backdrop-blur-sm transition-all hover:border-teal-400/70"
            >
              <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-teal-700 to-indigo-700 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                {opt.trialText}
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  {opt.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{opt.title}</h3>

                <div className="mt-4 rounded-xl bg-teal-950/60 border border-teal-800/50 p-4">
                  <p className="text-sm font-semibold text-emerald-300 flex items-center gap-2">
                    <span className="text-lg">🎁</span>
                    <span>{opt.setupDiscountText}</span>
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Setup Plan Esencial: de ${baseSetup} USD →{" "}
                    <strong className="text-white font-bold">
                      {idx === 0 ? "$0 USD" : `$${halfSetup} USD`}
                    </strong>{" "}
                    (o equivalente en Crecimiento y Premium).
                  </p>
                </div>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {opt.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-teal-300">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Incluye soporte inicial prioritario y calibración clínica
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Conditions & In Exchange Box */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span>🤝</span>
                <span>¿Qué solicitamos a cambio?</span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Construimos relaciones transparentes basadas en resultados palpables.
              </p>
            </div>
            <span className="rounded-lg bg-teal-900/40 border border-teal-700/50 px-3 py-1 text-xs font-semibold text-teal-300">
              100% de transparencia
            </span>
          </div>

          <ul className="mt-6 space-y-3.5 text-sm text-slate-300">
            {founders.inExchange.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-slate-800/80">
            <p className="text-xs text-amber-300/90 font-medium">
              ⚖️ {founders.afterNote}
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={founders.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-teal-700 to-indigo-700 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-teal-600/20 transition-all hover:from-teal-800 hover:to-indigo-800 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.525 1.761.809 2.796.809 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.796-5.769-5.796zm0 13.084c-1.109 0-2.193-.298-3.14-.863l-3.491.916.932-3.404c-.619-1.026-.946-2.197-.945-3.399.002-3.96 3.224-7.182 7.184-7.182 3.96 0 7.182 3.222 7.182 7.182 0 3.96-3.222 7.182-7.182 7.182z" />
            </svg>
            <span>{founders.cta}</span>
          </a>

          <Link
            href="#precios"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-4 text-base font-semibold text-slate-200 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            Ver planes regulares y precios ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
