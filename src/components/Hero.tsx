import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-32 bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 20%, rgba(200,169,107,0.06), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="eyebrow mb-5">{SITE.trust.trialBadge}</p>
            <h1 className="font-serif text-[2.5rem] sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.08]">
              Tu recepción, atendida por una{" "}
              <span className="italic text-accent font-semibold">IA</span>{" "}
              siempre atenta.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Asistente con inteligencia artificial que responde por WhatsApp y
              web las 24 horas, califica tratamientos, reserva citas reales y
              hace seguimiento sin cambiar tu agenda.
            </p>

            <p className="mt-4 text-sm text-subtle max-w-xl mx-auto lg:mx-0 leading-relaxed border-l border-accent/40 pl-3">
              {SITE.trust.aiNotice}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-7 py-3.5 text-sm font-semibold text-accent border border-accent/70 transition-colors hover:border-accent hover:bg-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <svg className="w-4 h-4 text-whatsapp fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.525 1.761.809 2.796.809 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.796-5.769-5.796zm3.392 8.203c-.147.413-.865.79-1.216.84-.312.047-.711.067-1.148-.072-.266-.084-.607-.197-.986-.386-1.733-.87-2.863-2.893-2.95-3.027-.084-.133-.69-.918-.69-1.752s.436-1.242.591-1.412c.147-.163.32-.204.426-.204.107 0 .213 0 .306.006.098.004.23-.037.36.275.147.35.5 1.22.544 1.306.044.087.073.188.015.3-.06.118-.09.192-.177.295-.087.103-.184.23-.263.308-.087.087-.178.181-.076.355.098.17.436.718.936 1.162.642.57 1.183.747 1.352.832.163.08.258.067.353-.04.098-.11.413-.482.523-.647.11-.163.22-.137.37-.082.147.054.94.443 1.1.524.163.08.27.118.31.184.044.066.044.38-.103.793z" />
                </svg>
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="overflow-hidden rounded-xl border border-border soft-glow relative">
              <Image
                src="/hero.jpg"
                alt="Recepción de clínica dental moderna"
                width={800}
                height={600}
                className="w-full h-auto object-cover brightness-[0.72] contrast-[1.05] saturate-[0.85]"
                priority
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,12,14,0.15) 0%, rgba(11,12,14,0.55) 100%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 border-t border-border pt-10">
          {SITE.stats.map((stat, i) => (
            <div key={i} className="rounded-xl border border-border bg-surface-raised/60 p-5 text-center sm:text-left">
              <p className="text-lg sm:text-xl font-medium text-foreground tracking-tight font-serif">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-subtle mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
