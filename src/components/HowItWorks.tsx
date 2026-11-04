import React from "react";
import { SITE } from "@/content/site";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 py-16 md:py-24 bg-white border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 border border-teal-200">
            Paso a paso simple
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            ¿Cómo funciona la implementación?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Sin dolores de cabeza técnicos para tu equipo. Nosotros nos encargamos de todo el montaje, entrenamiento y conexión.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {SITE.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-xs"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-teal-700 tracking-tight">{step.step}</span>
                <span className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 text-xs font-bold">
                  ✓
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Integration Callout */}
        <div className="mt-12 rounded-2xl border border-teal-200 bg-teal-50/50 p-6 text-center">
          <p className="text-sm font-semibold text-teal-900">
            Compatible con tu flujo habitual: WhatsApp Business API oficial, Google Calendar, calendarios médicos y notificaciones a tu personal.
          </p>
        </div>
      </div>
    </section>
  );
}
