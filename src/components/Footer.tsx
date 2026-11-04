import React from "react";
import Link from "next/link";
import { SITE } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              {SITE.tagline} Automatización inteligente de recepción para clínicas dentales y de medicina estética. Citas 24/7 y seguimiento automático en español.
            </p>
            {/* Obligatory Pilot/Demo Disclaimer */}
            <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100/80 px-3 py-1.5 text-xs text-amber-700 border border-amber-200/50">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Proyecto piloto / demo técnica. Marca y derechos reservados.
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#fundadores" className="text-amber-600 font-semibold hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  <span>🎁</span> Oferta fundadores (3 cupos)
                </Link>
              </li>
              <li>
                <Link href="#oferta" className="hover:text-teal-700 transition-colors">
                  Qué ofrecemos y Beneficios
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-teal-700 transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#precios" className="hover:text-teal-700 transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-teal-700 transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-teal-600 font-semibold hover:text-teal-500 transition-colors">
                  Demo interactiva →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Contacto y Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                WhatsApp:{" "}
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  +{SITE.whatsappNumber}
                </a>
              </li>
              <li>Cobertura: España, US Hispano y LatAm</li>
              <li>Atención comercial: Lun a Vie 9:00 - 19:00 CET</li>
              <li className="pt-2 text-xs text-slate-500">
                Cumplimiento normativo (RGPD/HIPAA) sin verificar
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Atento. Todos los derechos reservados.</p>
          <p className="max-w-xs text-center sm:text-right">
            Hecho para clínicas que valoran el tiempo de su equipo y de sus pacientes.
          </p>
        </div>
      </div>
    </footer>
  );
}
