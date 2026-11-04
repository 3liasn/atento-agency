"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        <Link href="/" className="flex items-center" aria-label="Ir al inicio de Atento">
          <Logo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-700">
          {SITE.navLinks.map((link) => {
            const isFounders = link.href === "#fundadores";
            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  isFounders
                    ? "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-rose-500/15 border border-amber-500/40 px-3 py-1 text-xs font-bold text-amber-900 hover:bg-amber-100 hover:border-amber-600/60 shadow-xs transition-all"
                    : "transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1 py-1"
                }
              >
                {isFounders && <span className="text-xs">🎁</span>}
                <span>{link.label}</span>
                {isFounders && (
                  <span className="rounded-full bg-amber-500/20 px-1.5 py-0.2 text-[10px] font-extrabold text-amber-800">
                    3 cupos
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-xl border border-rose-600/30 bg-rose-50/70 px-4 py-2.5 text-sm font-semibold text-rose-800 transition-all hover:bg-rose-50 hover:border-rose-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Ver demo en vivo
          </Link>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-rose-600/20 transition-all hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.525 1.761.809 2.796.809 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.796-5.769-5.796zm0 13.084c-1.109 0-2.193-.298-3.14-.863l-3.491.916.932-3.404c-.619-1.026-.946-2.197-.945-3.399.002-3.96 3.224-7.182 7.184-7.182 3.96 0 7.182 3.222 7.182 7.182 0 3.96-3.222 7.182-7.182 7.182z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-accent hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menú de navegación"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          {SITE.navLinks.map((link) => {
            const isFounders = link.href === "#fundadores";
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  isFounders
                    ? "flex items-center justify-between rounded-lg bg-amber-50/90 border border-amber-300/70 px-3 py-2 text-base font-bold text-amber-900 hover:bg-amber-100"
                    : "block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-800"
                }
              >
                <span className="flex items-center gap-2">
                  {isFounders && <span>🎁</span>}
                  <span>{link.label}</span>
                </span>
                {isFounders && (
                  <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-bold text-amber-800">
                    3 cupos
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-xl border border-rose-600/30 bg-rose-50/70 px-4 py-2.5 text-sm font-semibold text-rose-800"
            >
              Ver demo en vivo
            </Link>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-rose-600/20"
            >
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
