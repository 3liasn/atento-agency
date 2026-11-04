import React from "react";
import Link from "next/link";
import { SITE } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {SITE.tagline} Automatización inteligente de recepción para clínicas dentales y de medicina estética. Citas 24/7 y seguimiento automático en español.
            </p>
            {/* Obligatory Pilot/Demo Disclaimer */}
            <div className="inline-flex items-center gap-2 rounded-lg bg-slate-800/80 px-3 py-1.5 text-xs text-amber-300 border border-amber-500/20">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Proyecto piloto / demo técnica. Marca y derechos reservados.
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#fundadores" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>🎁</span> Oferta fundadores (3 cupos)
                </Link>
              </li>
              <li>
                <Link href="#oferta" className="hover:text-white transition-colors">
                  Qué ofrecemos y Beneficios
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-white transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#precios" className="hover:text-white transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
                  Demo interactiva →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contacto y Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                WhatsApp:{" "}
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline"
                >
                  +{SITE.whatsappNumber}
                </a>
              </li>
              <li>Cobertura: España, US Hispano y LatAm</li>
              <li>Atención comercial: Lun a Vie 9:00 - 19:00 CET</li>
              <li className="pt-2 text-xs text-slate-400">
                Cumplimiento y privacidad en IA sanitaria
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Atento. Todos los derechos reservados.</p>
          <p>Hecho para clínicas que valoran el tiempo de su equipo y de sus pacientes.</p>
        </div>
      </div>
    </footer>
  );
}
