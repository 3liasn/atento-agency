"use client";

import React, { useState } from "react";
import { SITE } from "@/content/site";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    city: "",
    whatsapp: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Previene default sin enviar a ningún backend externo
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="scroll-mt-24 py-16 md:py-24 bg-[#F7F8FB] border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <span className="inline-block rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 border border-teal-200">
              Paso siguiente
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Lleva la recepción de tu clínica al siguiente nivel
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Prueba un prototipo adaptado a los servicios de tu clínica dental o centro estético en menos de 48 horas.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <svg className="w-5 h-5" fill="none" viewBox="0  24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Demostración en vivo personalizada</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Te mostramos cómo contestaría tu propio WhatsApp a un paciente potencial.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Respuesta rápida garantizada</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Nuestro equipo se pondrá en contacto contigo en menos de 2 horas hábiles.</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mt-8 p-6 rounded-2xl bg-teal-50/70 border border-teal-200">
              <h3 className="text-sm font-bold text-teal-950">¿Prefieres escribirnos directamente?</h3>
              <p className="text-xs text-teal-800 mt-1 mb-4">
                Inicia un chat ahora mismo con nuestro equipo de atención comercial.
              </p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-700 to-indigo-700 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:from-teal-800 hover:to-indigo-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.525 1.761.809 2.796.809 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.796-5.769-5.796zm0 13.084c-1.109 0-2.193-.298-3.14-.863l-3.491.916.932-3.404c-.619-1.026-.946-2.197-.945-3.399.002-3.96 3.224-7.182 7.184-7.182 3.96 0 7.182 3.222 7.182 7.182 0 3.96-3.222 7.182-7.182 7.182z" />
                </svg>
                <span>Chatear al +886 979 516 713</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-3xl mb-4">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">¡Mensaje recibido!</h3>
                  <p className="mt-2 text-base text-slate-600 max-w-md mx-auto">
                    Pronto te contactamos al WhatsApp indicado para coordinar la demo de Atento.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", clinic: "", city: "", whatsapp: "" });
                    }}
                    className="mt-6 inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900">Solicitar diagnóstico y propuesta</h3>
                  <p className="text-xs text-slate-500">
                    Déjanos los datos de tu centro y te presentaremos un flujo de WhatsApp personalizado sin compromiso.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Tu nombre completo *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dra. Mariana López"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-clinic" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nombre de la clínica *
                      </label>
                      <input
                        id="contact-clinic"
                        type="text"
                        required
                        value={formData.clinic}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        placeholder="Clínica Dental Sonrisas"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-city" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Ciudad / País *
                      </label>
                      <input
                        id="contact-city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Madrid, España / Miami, USA"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-whatsapp" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        WhatsApp de contacto *
                      </label>
                      <input
                        id="contact-whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                      />
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-normal">
                    Tratamos tus datos bajo estricta confidencialidad exclusivamente para responder a tu solicitud. Cero spam.
                  </p>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-teal-700 to-indigo-700 py-3.5 px-4 text-center text-sm font-bold text-slate-950 shadow-md transition-all hover:from-teal-800 hover:to-indigo-800 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    Solicitar demo y propuesta personalizada
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
