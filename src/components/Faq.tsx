import React from "react";
import { SITE } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-28 bg-background border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="eyebrow mb-4">Dudas</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-base text-muted">
            Todo lo que necesitas saber antes de sumar Atento a tu recepción.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {SITE.faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-xl border border-border bg-surface-raised p-5 sm:p-6 transition-colors [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-foreground select-none">
                <span className="text-base sm:text-lg text-left">{faq.q}</span>
                <span className="shrink-0 transition-transform duration-200 group-open:rotate-180 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted pt-3 border-t border-border">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center space-y-2">
          <p className="text-sm text-subtle">{SITE.legalNote}</p>
          <p className="text-sm text-muted">
            ¿Otra pregunta sobre tu software o protocolo?{" "}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:text-accent-hover underline underline-offset-4"
            >
              Consúltanos por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
