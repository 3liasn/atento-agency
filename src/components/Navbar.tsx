"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-accent/60 px-4 py-2 text-sm font-medium text-accent hover:bg-accent-muted transition-colors"
          >
            WhatsApp
          </a>
          <Link
            href="/demo"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-accent-hover transition-colors"
          >
            Probar demo
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
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
            <Link
              href="/demo"
              className="mt-2 inline-flex justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-background"
              onClick={() => setOpen(false)}
            >
              Probar demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
