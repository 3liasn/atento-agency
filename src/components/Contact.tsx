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
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <section id="contacto" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Paso siguiente</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-foreground leading-tight">
              Prueba Atento en tu clínica con una demo real
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Agenda una demo con el protocolo de tu clínica dental o de estética. 14 días de prueba, sin permanencia obligatoria.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised text-accent text-xs font-medium">
                  01
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Demostración en vivo personalizada</h3>
                  <p className="text-xs text-subtle mt-0.5">
                    Te mostramos cómo contestaría tu propio WhatsApp a un paciente potencial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised text-accent text-xs font-medium">
                  02
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Respuesta rápida</h3>
                  <p className="text-xs text-subtle mt-0.5">
                    Nuestro equipo se pondrá en contacto contigo en menos de 2 horas hábiles.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl border border-border bg-surface-raised">
              <h3 className="text-sm font-semibold text-foreground">¿Prefieres escribirnos directamente?</h3>
              <p className="text-xs text-muted mt-1 mb-4">
                Inicia un chat ahora mismo con nuestro equipo de atención comercial.
              </p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-[#0B0C0E] transition-opacity hover:opacity-90"
              >
                <span>Chatear al +886 979 516 713</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border bg-surface-raised p-8 sm:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-accent-muted text-accent text-xl mb-4">
                    ✓
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground">Mensaje recibido</h3>
                  <p className="mt-2 text-base text-muted max-w-md mx-auto">
                    Pronto te contactamos al WhatsApp indicado para coordinar la demo de Atento.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", clinic: "", city: "", whatsapp: "" });
                    }}
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-medium text-muted hover:text-foreground hover:border-accent/40"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    Solicitar diagnóstico y propuesta
                  </h3>
                  <p className="text-xs text-subtle">
                    Déjanos los datos de tu centro y te presentaremos un flujo de WhatsApp personalizado sin compromiso.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-muted mb-1.5">
                        Tu nombre completo *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dra. Mariana López"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-clinic" className="block text-xs font-medium text-muted mb-1.5">
                        Nombre de la clínica *
                      </label>
                      <input
                        id="contact-clinic"
                        type="text"
                        required
                        value={formData.clinic}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        placeholder="Clínica Dental Sonrisas"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-city" className="block text-xs font-medium text-muted mb-1.5">
                        Ciudad / País *
                      </label>
                      <input
                        id="contact-city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Madrid, España / Miami, USA"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-whatsapp" className="block text-xs font-medium text-muted mb-1.5">
                        WhatsApp de contacto *
                      </label>
                      <input
                        id="contact-whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+34 600 000 000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <p className="text-[11px] text-subtle leading-normal">
                    Tratamos tus datos bajo estricta confidencialidad exclusivamente para responder a tu solicitud. Cero spam.
                  </p>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-accent py-3.5 px-4 text-center text-sm font-semibold text-background transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover"
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
