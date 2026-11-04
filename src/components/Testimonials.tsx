import React from "react";
import { SITE } from "@/content/site";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 border border-teal-200">
            Casos de uso y experiencia clínica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Lo que clínicas innovadoras logran con Atento
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Feedback de directores y especialistas que automatizaron su primer contacto sin perder el trato humano.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/40 p-7 shadow-xs hover:border-teal-400/40 transition-colors"
            >
              <div>
                {/* Disclaimer pill */}
                <div className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 border border-amber-200 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {t.tag}
                </div>

                {/* Stars */}
                <div className="flex gap-1 text-amber-400 mb-4" aria-label="Calificación 5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-slate-700 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
                <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
