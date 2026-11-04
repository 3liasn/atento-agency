import React from "react";
import { SITE } from "@/content/site";

export function Problem() {
  return (
    <section className="py-20 md:py-28 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-tight">
            {SITE.problem.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            {SITE.problem.subtitle}
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {SITE.problem.points.map((pt, i) => (
            <div key={i} className="rounded-xl border border-border bg-surface-raised p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/30 bg-accent-muted text-accent text-xs font-semibold mb-4">
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold text-foreground leading-snug">{pt.title}</h3>
              <p className="mt-2.5 text-sm text-muted leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
