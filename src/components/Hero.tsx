import React from "react";
import Link from "next/link";
import { SITE } from "@/content/site";

/** Product preview in hero — no stock photography (guía premium). */
function HeroProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="card-surface soft-glow overflow-hidden">
        <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">Atento · Recepción</p>
            <p className="text-[11px] text-subtle mt-0.5">WhatsApp · Clínica demo · 24/7</p>
          </div>
          <span className="shrink-0 rounded-full border border-accent/35 bg-accent-muted px-2 py-0.5 text-[10px] font-medium text-accent">
            En línea
          </span>
        </div>

        <div className="space-y-3 bg-background px-3.5 py-4">
          <div className="ml-8 rounded-2xl rounded-tr-md border border-border bg-surface-raised px-3.5 py-2.5">
            <p className="text-[13px] text-foreground/85 leading-relaxed">
              Hola, ¿tienen hueco esta semana para una limpieza y valoración?
            </p>
            <p className="mt-1 text-[10px] text-subtle text-right">Paciente · 21:14</p>
          </div>

          <div className="mr-6 rounded-2xl rounded-tl-md border border-accent/25 bg-accent-muted px-3.5 py-2.5">
            <p className="text-[13px] text-foreground leading-relaxed">
              Claro. Puedo ofrecerte jueves 16:30 con la Dra. Soto, o viernes 10:00.
              ¿Cuál te viene mejor?
            </p>
            <p className="mt-1 text-[10px] text-accent/80 text-right">Atento · 21:14</p>
          </div>

          <div className="rounded-xl border border-border bg-surface-raised p-3">
            <p className="text-[10px] uppercase tracking-[0.16em] text-accent mb-1.5">Cita propuesta</p>
            <p className="text-sm font-medium text-foreground">Jueves · 16:30</p>
            <p className="text-xs text-subtle mt-0.5">Limpieza y valoración · Sillón 2</p>
          </div>
        </div>

        <div className="border-t border-border bg-surface px-4 py-3 flex items-center justify-between gap-3">
          <p className="text-[11px] text-subtle leading-snug">
            IA con protocolo de tu clínica · humano cuando haga falta
          </p>
          <Link
            href="/demo"
            className="shrink-0 text-[11px] font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Probar →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-28 bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 75% 12%, rgba(200,169,107,0.055), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="eyebrow mb-3">{SITE.trust.trialBadge}</p>
            <p className="text-xs sm:text-sm text-subtle mb-5 tracking-wide">
              {SITE.trust.audienceNote}
            </p>
            <h1 className="font-serif text-[2.2rem] sm:text-5xl lg:text-[3.75rem] font-medium tracking-tight text-foreground leading-[1.1]">
              Recepcionista{" "}
              <span className="italic text-accent font-semibold">IA</span>{" "}
              en WhatsApp para clínicas premium.
            </h1>

            <p className="mt-6 text-[17px] sm:text-lg text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Responde en segundos, califica tratamientos, reserva citas reales y hace
              seguimiento — sin cambiar la agenda de tu clínica dental o de estética.
            </p>

            <p className="mt-5 text-sm text-subtle max-w-xl mx-auto lg:mx-0 leading-relaxed border-l border-accent/35 pl-3.5 text-left">
              {SITE.trust.aiNotice}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 min-h-12 text-sm font-semibold text-background transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>Probar demo interactiva</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-7 py-3.5 min-h-12 text-sm font-semibold text-accent border border-accent/55 transition-colors duration-200 hover:border-accent hover:bg-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <svg className="w-4 h-4 text-whatsapp fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.525 1.761.809 2.796.809 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.796-5.769-5.796zm3.392 8.203c-.147.413-.865.79-1.216.84-.312.047-.711.067-1.148-.072-.266-.084-.607-.197-.986-.386-1.733-.87-2.863-2.893-2.95-3.027-.084-.133-.69-.918-.69-1.752s.436-1.242.591-1.412c.147-.163.32-.204.426-.204.107 0 .213 0 .306.006.098.004.23-.037.36.275.147.35.5 1.22.544 1.306.044.087.073.188.015.3-.06.118-.09.192-.177.295-.087.103-.184.23-.263.308-.087.087-.178.181-.076.355.098.17.436.718.936 1.162.642.57 1.183.747 1.352.832.163.08.258.067.353-.04.098-.11.413-.482.523-.647.11-.163.22-.137.37-.082.147.054.94.443 1.1.524.163.08.27.118.31.184.044.066.044.38-.103.793z" />
                </svg>
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <HeroProductPreview />
          </div>
        </div>

        <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-border">
          {SITE.stats.map((stat, i) => (
            <div
              key={i}
              className={`py-6 px-1 sm:px-4 ${i % 2 === 1 ? "border-l border-border" : ""} lg:border-l lg:first:border-l-0 border-border`}
            >
              <p className="text-lg sm:text-xl font-medium text-foreground tracking-tight font-serif">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-subtle mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
