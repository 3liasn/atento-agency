import React from "react";
import Link from "next/link";
import { SITE } from "@/content/site";
import { PrimaryCta } from "@/components/PrimaryCta";

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

        <div className="space-y-3 bg-[#FBF9F4] px-3.5 py-4">
          <div className="ml-8 rounded-2xl rounded-tr-md border border-border bg-surface-raised px-3.5 py-2.5">
            <p className="text-[13px] text-foreground/85 leading-relaxed">
              Hola, ¿tienen hueco esta semana para una limpieza y valoración?
            </p>
            <p className="mt-1 text-[10px] text-subtle text-right">Paciente · 21:14</p>
          </div>

          <div className="mr-6 rounded-2xl rounded-tl-md bg-navy px-3.5 py-2.5 text-white">
            <p className="text-[13px] text-white leading-relaxed">
              Claro. Puedo ofrecerte jueves 16:30 con la Dra. Soto, o viernes 10:00.
              ¿Cuál te viene mejor?
            </p>
            <p className="mt-1 text-[10px] text-white/70 text-right">Atento · 21:14</p>
          </div>

          <div className="rounded-xl border border-border bg-surface-raised p-3">
            <p className="text-[10px] uppercase tracking-[0.16em] text-subtle mb-1.5 border-l-2 border-champagne pl-2">Cita propuesta</p>
            <p className="text-sm font-medium text-foreground">Jueves · 16:30</p>
            <p className="text-xs text-subtle mt-0.5">Limpieza y valoración · Sillón 2</p>
          </div>
        </div>

        <div className="border-t border-border bg-surface px-4 py-3 flex items-center justify-between gap-3">
          <p className="text-[11px] text-subtle leading-snug">
            Con el protocolo de tu clínica · una persona cuando haga falta
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
    <section className="relative overflow-hidden bg-background pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="rise text-center lg:col-span-7 lg:text-left">
            <p className="eyebrow mb-5">{SITE.trust.audienceNote}</p>
            <h1 className="font-serif text-[2.4rem] font-medium leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]">
              Ningún paciente se queda{" "}
              <span className="italic">sin respuesta</span> en WhatsApp.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg lg:mx-0">
              Atento contesta a tus pacientes en segundos, de día y de noche, propone horarios
              de tu agenda y avisa a tu equipo cuando hace falta una persona.
            </p>
            <div className="rise rise-2 mt-9">
              <PrimaryCta align="start" />
            </div>
            <p className="rise rise-3 mt-5 text-sm text-subtle">
              ¿Prefieres verlo antes?{" "}
              <Link href="/demo" className="font-medium text-accent underline decoration-champagne decoration-2 underline-offset-4 hover:text-ink">
                Prueba la demo ahora
              </Link>
            </p>
          </div>

          <div className="rise rise-2 relative lg:col-span-5">
            <HeroProductPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
