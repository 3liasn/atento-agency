"use client";

import React, { useState } from "react";

export function ReservaForm() {
  const [nombre, setNombre] = useState("");
  const [clinica, setClinica] = useState("");
  const [contacto, setContacto] = useState("");
  const [horarioPreferido, setHorarioPreferido] = useState("");
  const [consentimiento, setConsentimiento] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nombre.trim() || !clinica.trim() || !contacto.trim()) {
      setError("Por favor completa tu nombre, clínica y medio de contacto.");
      return;
    }
    if (!consentimiento) {
      setError("Debes aceptar el aviso de privacidad para continuar.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-teal-200 bg-teal-50/80 p-6 text-slate-800 shadow-xs"
      >
        <div className="flex items-center gap-2 text-teal-800 font-bold text-base mb-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs">
            ✓
          </span>
          <span>Solicitud registrada localmente en esta pantalla</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Recibido en este navegador para <strong>{clinica}</strong> ({nombre}).{" "}
          <strong>Aviso importante:</strong> este formulario es de demostración y no transmite ni almacena datos en servidores externos.
        </p>
        <p className="text-sm text-slate-700 mt-2">
          Para confirmar tu llamada de 15 minutos ahora mismo, escríbenos directamente por nuestro WhatsApp oficial:
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/886979516713"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-teal-700 transition-colors shadow-xs"
          >
            <span>Confirmar por WhatsApp (+886 979 516 713)</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setNombre("");
              setClinica("");
              setContacto("");
              setHorarioPreferido("");
              setConsentimiento(false);
            }}
            className="rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Editar datos
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="reserva-nombre" className="block text-xs font-bold text-slate-700 mb-1">
          Tu nombre y cargo *
        </label>
        <input
          id="reserva-nombre"
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej. Dra. Laura Gómez"
          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
        />
      </div>

      <div>
        <label htmlFor="reserva-clinica" className="block text-xs font-bold text-slate-700 mb-1">
          Nombre de la clínica y ciudad *
        </label>
        <input
          id="reserva-clinica"
          type="text"
          required
          value={clinica}
          onChange={(e) => setClinica(e.target.value)}
          placeholder="Ej. Clínica Estética Luna (Madrid)"
          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
        />
      </div>

      <div>
        <label htmlFor="reserva-contacto" className="block text-xs font-bold text-slate-700 mb-1">
          WhatsApp o email profesional *
        </label>
        <input
          id="reserva-contacto"
          type="text"
          required
          value={contacto}
          onChange={(e) => setContacto(e.target.value)}
          placeholder="Ej. +34 600 00 00 00 o direccion@clinica.es"
          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
        />
      </div>

      <div>
        <label htmlFor="reserva-horario" className="block text-xs font-bold text-slate-700 mb-1">
          Franja horaria preferida (opcional)
        </label>
        <input
          id="reserva-horario"
          type="text"
          value={horarioPreferido}
          onChange={(e) => setHorarioPreferido(e.target.value)}
          placeholder="Ej. Martes o jueves de 13:00 a 15:00 (hora España)"
          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
        />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="reserva-consentimiento"
          type="checkbox"
          checked={consentimiento}
          onChange={(e) => setConsentimiento(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-600"
        />
        <label htmlFor="reserva-consentimiento" className="text-xs text-slate-600 leading-relaxed">
          Entiendo que este formulario es una vista previa local en mi navegador (no envía datos a ningún servidor) y que puedo contactar por WhatsApp para coordinar la sesión.
        </label>
      </div>

      {error && (
        <p role="alert" className="text-xs font-semibold text-rose-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-xl bg-teal-600 px-4 py-3 text-sm font-bold text-white hover:bg-teal-700 transition-colors shadow-xs"
      >
        Preparar solicitud de llamada (15 min)
      </button>
    </form>
  );
}
