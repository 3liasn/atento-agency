import React from "react";
import Link from "next/link";
import { SITE } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-muted max-w-md leading-relaxed">
              {SITE.tagline} Automatización inteligente de recepción para clínicas dentales y de medicina estética.
              Citas 24/7 y seguimiento automático en español.
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Proyecto piloto / demo técnica. Marca y derechos reservados.
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-medium uppercase tracking-wider text-subtle">Navegación</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="#fundadores" className="text-accent hover:text-accent-hover transition-colors">
                  Oferta fundadores (3 cupos)
                </Link>
              </li>
              <li>
                <Link href="#oferta" className="hover:text-foreground transition-colors">
                  Qué ofrecemos
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-foreground transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#precios" className="hover:text-foreground transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-foreground transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="#confianza" className="hover:text-foreground transition-colors">
                  Transparencia
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-accent hover:text-accent-hover transition-colors">
                  Demo interactiva →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-medium uppercase tracking-wider text-subtle">Contacto y legal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                WhatsApp:{" "}
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  +{SITE.whatsappNumber}
                </a>
              </li>
              <li>Cobertura: España, US Hispano y LatAm</li>
              <li>Atención comercial: Lun a Vie 9:00 - 19:00 CET</li>
              <li className="pt-2 text-xs text-subtle">{SITE.legalNote}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-subtle gap-4">
          <p>© {new Date().getFullYear()} Atento. Todos los derechos reservados.</p>
          <p className="max-w-xs text-center sm:text-right">
            Hecho para clínicas que valoran el tiempo de su equipo y de sus pacientes.
          </p>
        </div>
      </div>
    </footer>
  );
}
