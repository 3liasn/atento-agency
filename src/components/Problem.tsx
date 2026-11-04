import React from "react";
import { SITE } from "@/content/site";

export function Problem() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-rose-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-rose-700 mb-4 border border-rose-200">
            La fuga invisible de ingresos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {SITE.problem.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {SITE.problem.subtitle}
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE.problem.points.map((pt, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all hover:border-teal-500/40 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700 font-bold mb-4">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">{pt.title}</h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>

        {/* Calculation / Impact callout */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Cálculo orientativo
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                Si recibes 10 consultas semanales fuera de horario y pierdes el 60%…
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Son 24 pacientes al mes. Con un ticket promedio de $150 USD por tratamiento o valoración, tu clínica deja sobre la mesa más de <strong>$3.600 USD mensuales</strong> en consultas desatendidas.
              </p>
            </div>
            <div className="shrink-0 text-center">
              <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-xs border border-white/15">
                <p className="text-xs text-teal-200 font-medium">ROI estimado de Atento</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">10x - 15x</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Se amortiza con 2 pacientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
