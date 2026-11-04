import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/content/site";
import { ChatDemo } from "@/components/ChatDemo";
import { Logo } from "@/components/Logo";
import { loadProspectos, getProspectoBySlug } from "@/lib/prospectos";
import { prospectoToConfig } from "@/lib/chatBot";

export const dynamicParams = false;

export async function generateStaticParams() {
  const prospectos = loadProspectos();
  return prospectos.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prospecto = getProspectoBySlug(slug);

  if (!prospecto) {
    return {
      title: "Demo no encontrada | Atento",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `Demo personalizada (IA) — ${prospecto.nombre} | Atento`,
    description: `Entorno de demostración de recepcionista con IA configurado para ${prospecto.nombre} (${prospecto.ciudad}).`,
    robots: { index: false, follow: false },
  };
}

export default async function PersonalizedDemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prospecto = getProspectoBySlug(slug);

  if (!prospecto) {
    notFound();
  }

  const botConfig = prospectoToConfig({
    nombre: prospecto.nombre,
    ciudad: prospecto.ciudad,
    servicios: prospecto.servicios,
    ficticio: prospecto.ficticio,
  });

  const whatsappHref = `${SITE.whatsappBase}?text=${encodeURIComponent(
    `Hola Atento, vi la demo personalizada para ${prospecto.nombre} (${prospecto.ciudad}) y quiero información.`
  )}`;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between">
      {/* Top Demo & AI Disclosure Bar */}
      <div className="bg-slate-900 text-slate-200 border-b border-slate-800 py-2.5 px-4 text-xs">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>
              <strong>AVISO DE DEMO E IA:</strong> Este recepcionista es una{" "}
              <strong>Inteligencia Artificial (IA)</strong> en entorno de demostración para{" "}
              <strong>{prospecto.nombre}</strong> ({prospecto.ciudad}).
            </span>
            {prospecto.ficticio && (
              <span className="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[11px] font-bold text-amber-300 border border-amber-400/40">
                datos ficticios
              </span>
            )}
          </div>
          <Link
            href="/"
            className="text-teal-400 font-semibold hover:text-teal-300 underline underline-offset-2 shrink-0"
          >
            ← Volver a Atento
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-slate-200/80 py-4 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <div className="hidden sm:block h-6 w-px bg-slate-200" />
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-600 text-white font-bold text-xs">
                IA
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-bold text-slate-900 leading-tight">{prospecto.nombre}</p>
                  {prospecto.ficticio && (
                    <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-800">
                      datos ficticios
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {prospecto.ciudad} · {prospecto.nicho} · Demo IA
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/reservar"
              className="inline-flex items-center gap-1.5 rounded-xl border border-teal-600 bg-white px-3.5 py-2 text-xs font-semibold text-teal-700 shadow-2xs hover:bg-teal-50 transition-colors"
            >
              <span>Reservar llamada (15 min)</span>
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-teal-700 transition-colors"
            >
              <span>WhatsApp (+886 979 516 713)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center mb-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 border border-teal-200">
              DEMO PERSONALIZADA · ASISTENTE IA
            </span>
            {prospecto.ficticio && (
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 border border-amber-300">
                Datos ficticios de ejemplo
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Recepcionista IA para {prospecto.nombre} ({prospecto.ciudad})
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            Prueba cómo responde la IA de Atento con el nombre, ciudad y servicios configurados para{" "}
            <strong>{prospecto.nombre}</strong>. Es una demostración interactiva; los precios figuran a confirmar por la clínica.
          </p>

          {/* Services Badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Servicios configurados:</span>
            {prospecto.servicios.map((srv) => (
              <span
                key={srv}
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200 shadow-2xs"
              >
                {srv}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Chat Widget */}
        <ChatDemo config={botConfig} ficticio={prospecto.ficticio} />

        {/* Bottom CTA Card */}
        <div className="mx-auto max-w-2xl mt-8 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="inline-block rounded-full bg-teal-100 px-2.5 py-0.5 text-[11px] font-bold text-teal-800 mb-1">
                Oferta Fundadores · 3 cupos
              </span>
              <h2 className="text-base font-bold text-slate-900">
                ¿Quieres activar este recepcionista IA en {prospecto.nombre}?
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Instalación gratis o al 50% + 14 días de prueba a cambio de un testimonio al finalizar el piloto.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
              <Link
                href="/reservar"
                className="w-full sm:w-auto text-center rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-teal-700 transition-colors shadow-xs"
              >
                Reservar llamada
              </Link>
              <a
                href="https://wa.me/886979516713"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-slate-200 bg-white text-center text-xs text-slate-500 px-4">
        DEMO de asistente con Inteligencia Artificial (IA) · {prospecto.nombre} ({prospecto.ciudad})
        {prospecto.ficticio ? " · Datos ficticios" : ""} · WhatsApp oficial Atento:{" "}
        <a href="https://wa.me/886979516713" className="text-teal-700 font-semibold hover:underline">
          +886 979 516 713
        </a>
      </footer>
    </div>
  );
}
