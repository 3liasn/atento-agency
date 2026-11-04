"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Atento inicio">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {SITE.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white hover:bg-ink transition-colors"
          >
            Ver la demo con mi clínica
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border text-foreground"
          aria-expanded={open}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {SITE.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Ver la demo con mi clínica
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
