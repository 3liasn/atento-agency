import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import { Logo } from "@/components/Logo";
import { ReservaForm } from "@/components/ReservaForm";

export const metadata: Metadata = {
  title: "Reservar llamada de diagnóstico (15 min) | Atento",
  description:
    "Coordina una llamada de 15 minutos con Atento para revisar la demo personalizada de tu clínica y los 3 cupos de la oferta fundadores.",
  robots: { index: false, follow: false },
};

export default function ReservarPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-200 border-b border-slate-800 py-2.5 px-4 text-xs">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span>
            <strong>Programa Fundadores Atento:</strong> 3 cupos disponibles (setup bonificado o al 50% + 14 días de prueba).
          </span>
          <Link
            href="/"
            className="text-teal-400 font-semibold hover:text-teal-300 underline underline-offset-2"
          >
            ← Volver a la página principal
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200/80 py-4 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/">
            <Logo size="sm" />
          </Link>
          <a
            href="https://wa.me/886979516713"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-teal-700 transition-colors"
          >
            <span>WhatsApp directo (+886 979 516 713)</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2 border border-teal-200">
              Diagnóstico sin compromiso · 15 minutos
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Reserva tu llamada de revisión con Atento
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Revisamos en vivo la demo personalizada de tu clínica, el informe público de anuncios de tu sector y cómo activar tus 14 días de prueba del programa Fundadores.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Direct Channels (Calendar placeholder + Official WhatsApp) */}
            <div className="space-y-6">
              {/* Calendar Placeholder Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                    Enlace de calendario (placeholder)
                  </span>
                  <span className="text-xs font-semibold text-slate-400">15 min · Online</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900">1. Agenda en calendario online</h2>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Enlace provisional de agenda (placeholder mientras se activa el calendario definitivo). Si aún no muestra horarios activos, utiliza el botón de WhatsApp oficial debajo.
                </p>
                <div className="mt-4">
                  <a
                    href={SITE.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-teal-600 bg-teal-50/60 px-4 py-2.5 text-xs font-bold text-teal-800 hover:bg-teal-100 transition-colors"
                  >
                    <span>Abrir calendario (https://cal.com/atento-placeholder)</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Official Card */}
              <div className="rounded-2xl border border-teal-200 bg-white p-6 shadow-xs">
                <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 mb-2">
                  Canal recomendado · Respuesta rápida
                </span>
                <h2 className="text-lg font-bold text-slate-900">
                  2. Coordinar por WhatsApp oficial
                </h2>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Escríbenos directamente a nuestro WhatsApp Business oficial (<strong>+886 979 516 713</strong>) indicando el nombre de tu clínica y qué día prefieres la llamada de 15 minutos.
                </p>
                <div className="mt-4">
                  <a
                    href="https://wa.me/886979516713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-teal-700 transition-colors shadow-xs"
                  >
                    <span>Escribir por WhatsApp (wa.me/886979516713)</span>
                  </a>
                </div>
              </div>

              {/* What we cover */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-600 space-y-2">
                <p className="font-bold text-slate-900">¿Qué veremos en los 15 minutos?</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Ajuste de tratamientos, precios orientativos y protocolo de tu clínica.</li>
                  <li>Informe de 1 página sobre anuncios públicos del sector (Meta Ads Library).</li>
                  <li>Condiciones de los 3 cupos Fundadores (14 días de prueba + setup 0% o 50%).</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Client-side Local Form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="mb-5">
                <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 mb-1.5">
                  Formulario local de demostración
                </span>
                <h2 className="text-lg font-bold text-slate-900">
                  3. Prepara los datos de tu clínica
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Completa tus datos aquí para previsualizar tu solicitud (se procesa solo en tu navegador, sin envío automático).
                </p>
              </div>

              <ReservaForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-slate-200 bg-white text-center text-xs text-slate-500 px-4">
        Atento · {SITE.tagline} · WhatsApp oficial:{" "}
        <a href="https://wa.me/886979516713" className="text-teal-700 font-semibold hover:underline">
          +886 979 516 713
        </a>
      </footer>
    </div>
  );
}
