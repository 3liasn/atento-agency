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
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <div className="bg-surface text-muted border-b border-border py-2.5 px-4 text-xs">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent" />
            <span>
              <strong className="text-foreground">Entorno de demostración:</strong> Estás probando el asistente
              configurado para «Clínica Dental Aurora».
            </span>
          </div>
          <Link href="/" className="text-accent font-medium hover:text-accent-hover underline underline-offset-2">
            ← Volver a la landing principal
          </Link>
        </div>
      </div>

      <header className="bg-surface-raised border-b border-border py-4 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 bg-accent-muted text-accent font-semibold text-xs">
                CA
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground leading-tight">Clínica Dental Aurora</p>
                <p className="text-[11px] text-subtle leading-tight">Perfil piloto demo</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-2 text-xs font-semibold text-background hover:bg-accent-hover"
            >
              <span>Pedir para mi clínica</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center mb-8">
          <p className="eyebrow mb-3">Simulador privado</p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Prueba cómo atiende el asistente a tus futuros pacientes
          </h1>
          <p className="mt-2 text-sm text-muted max-w-xl mx-auto">
            Interactúa con el chat: consulta tratamientos (limpieza, ortodoncia, blanqueamiento, implantes), elige un
            horario o pide hablar con un recepcionista humano.
          </p>
        </div>

        <ChatDemo />

        <div className="mx-auto max-w-2xl mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-border bg-surface-raised p-4">
            <p className="text-xs font-semibold text-foreground">1. Consultas y precios</p>
            <p className="text-[11px] text-subtle mt-1">Escribe «¿Cuánto sale el blanqueamiento?»</p>
          </div>
          <div className="rounded-xl border border-border bg-surface-raised p-4">
            <p className="text-xs font-semibold text-foreground">2. Reserva guiada</p>
            <p className="text-[11px] text-subtle mt-1">Selecciona horario libre y confirma tus datos.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface-raised p-4">
            <p className="text-xs font-semibold text-foreground">3. Handoff a humano</p>
            <p className="text-[11px] text-subtle mt-1">Escribe «Quiero hablar con una persona».</p>
          </div>
        </div>
      </main>

      <footer className="py-4 border-t border-border bg-surface text-center text-xs text-subtle">
        Demostración interactiva de Atento · {SITE.tagline}
      </footer>
    </div>
  );
}
