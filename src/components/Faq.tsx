import React from "react";
import { SITE } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24 bg-white border-t border-slate-200/70">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-teal-100/70 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 border border-teal-200">
            Dudas resueltas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Preguntas frecuentes de clínicas
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Todo lo que necesitas saber antes de sumar Atento a tu recepción.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {SITE.faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-slate-900 select-none">
                <span className="text-base sm:text-lg">{faq.q}</span>
                <span className="shrink-0 transition-transform duration-200 group-open:rotate-180 text-teal-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 pt-3 border-t border-slate-100">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            Cumplimiento normativo (RGPD/HIPAA) sin verificar; no afirmamos certificaciones.
          </p>
          <p className="text-sm text-slate-600 mt-2">
            ¿Tienes otra pregunta sobre tu software de clínica o protocolo?{" "}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-teal-700 hover:text-teal-900 underline underline-offset-4"
            >
              Consúltanos directo por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
