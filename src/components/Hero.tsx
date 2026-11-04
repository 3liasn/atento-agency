import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill de Oferta Fundadores */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
              <Link
                href="#fundadores"
                className="group inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50/90 px-3.5 py-1.5 text-xs font-semibold text-amber-900 transition-all hover:bg-amber-100 hover:border-amber-500/50 shadow-xs"
              >
                <span className="text-sm">🎁</span>
                <span>
                  <strong>Oferta fundadores:</strong> 3 cupos · setup gratis o 50% off + 14 días de prueba
                </span>
                <span className="text-amber-700 font-bold group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-50/80 px-3.5 py-1.5 text-xs font-semibold text-teal-800 mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Especializado en clínicas dentales y centros de estética
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Tu recepción con IA,{" "}
              <span className="font-bold text-teal-700">siempre atenta</span>{" "}
              y agendando citas.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Asistente con inteligencia artificial que responde por WhatsApp y web las 24 horas, califica tratamientos, reserva citas reales y hace seguimiento de pacientes sin cambiar tu agenda.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-teal-700 to-indigo-700 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:from-teal-800 hover:to-indigo-800 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <span>Probar demo interactiva</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition-all hover:bg-slate-50 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <svg className="w-5 h-5 text-emerald-600 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.525 1.761.809 2.796.809 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.796-5.769-5.796zm0 13.084c-1.109 0-2.193-.298-3.14-.863l-3.491.916.932-3.404c-.619-1.026-.946-2.197-.945-3.399.002-3.96 3.224-7.182 7.184-7.182 3.96 0 7.182 3.222 7.182 7.182 0 3.96-3.222 7.182-7.182 7.182z" />
                </svg>
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Visual: Hero Image */}
          <div className="lg:col-span-5 relative">
            <Image
              src="/hero.jpg"
              alt="Recepción de clínica dental moderna con personal atendiendo pacientes"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Benefits Row */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-200 pt-8 sm:pt-10">
          {SITE.stats.map((stat, i) => (
            <div key={i} className="rounded-xl bg-white p-4 border border-slate-100 shadow-xs text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-700 tracking-tight">{stat.value}</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
