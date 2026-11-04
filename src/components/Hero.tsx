import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.12]">
              Tu recepción, atendida por una{" "}
              <span className="italic text-accent font-semibold">IA</span>{" "}
              siempre atenta.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Asistente con inteligencia artificial que responde por WhatsApp y web las 24 horas, califica tratamientos, reserva citas reales y hace seguimiento de pacientes sin cambiar tu agenda.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-7 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-accent-hover active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-semibold text-slate-800 ring-1 ring-black/10 transition-all hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 bg-white">
              <Image
                src="/hero.jpg"
                alt="Recepción de clínica dental moderna con personal atendiendo pacientes"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-black/5 pt-10 sm:pt-12">
          {SITE.stats.map((stat, i) => (
            <div key={i} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-xs text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
