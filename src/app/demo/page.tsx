import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import { ChatDemo } from "@/components/ChatDemo";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Demo interactiva — Clínica Dental Aurora | Atento",
  description:
    "Prueba en vivo la experiencia de un paciente interactuando con el asistente de IA Atento configurado para una clínica dental.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between">
      {/* Top Demo Bar */}
      <div className="bg-slate-900 text-slate-200 border-b border-slate-800 py-2.5 px-4 text-xs">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>
              <strong>Entorno de demostración:</strong> Estás probando el asistente configurado para «Clínica Dental Aurora».
            </span>
          </div>
          <Link
            href="/"
            className="text-teal-400 font-semibold hover:text-teal-300 underline underline-offset-2"
          >
            ← Volver a la landing principal
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-slate-200/80 py-4 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <div className="hidden sm:block h-6 w-px bg-slate-200" />
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-600 text-white font-bold text-xs">
                CA
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Clínica Dental Aurora</p>
                <p className="text-[11px] text-slate-500 leading-tight">Perfil piloto demo</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-teal-700"
            >
              <span>Pedir para mi clínica</span>
            </a>
          </div>
        </div>
      </header>

      {/* Chat Sandbox Body */}
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center mb-8">
          <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2 border border-teal-200">
            Simulador client-side 100% privado
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Prueba cómo atiende el asistente a tus futuros pacientes
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
            Interactúa con el chat: consulta tratamientos (limpieza, ortodoncia, blanqueamiento, implantes), elige un horario o pide hablar con un recepcionista humano.
          </p>
        </div>

        {/* Embedded Interactive Widget */}
        <ChatDemo />

        {/* Instructions / Key Features */}
        <div className="mx-auto max-w-2xl mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <p className="text-xs font-bold text-slate-900">1. Consultas y precios</p>
            <p className="text-[11px] text-slate-500 mt-1">Escribe &ldquo;¿Cuánto sale el blanqueamiento?&rdquo;</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <p className="text-xs font-bold text-slate-900">2. Reserva guiada</p>
            <p className="text-[11px] text-slate-500 mt-1">Selecciona horario libre y confirma tus datos.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <p className="text-xs font-bold text-slate-900">3. Handoff a humano</p>
            <p className="text-[11px] text-slate-500 mt-1">Escribe &ldquo;Quiero hablar con una persona&rdquo;.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
        Demostración interactiva de Atento · {SITE.tagline}
      </footer>
    </div>
  );
}
