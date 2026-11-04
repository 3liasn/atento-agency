import React from "react";
import { SITE } from "@/content/site";

export function Benefits() {
  return (
    <section id="oferta" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-teal-100/70 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 border border-teal-200">
            Nuestra propuesta de valor
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Diseñado exclusivamente para el flujo de una clínica médica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No es un chatbot genérico con respuestas torpes. Es un protocolo clínico entrenado para informar con calidez y convertir consultas en pacientes reales en el sillón.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE.benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl ring-1 ring-black/5 bg-white p-7 shadow-sm transition-all hover:border-teal-500/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl mb-5 border border-teal-100">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
