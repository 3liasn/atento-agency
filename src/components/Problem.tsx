import React from "react";
import { SITE } from "@/content/site";

export function Problem() {
  return (
    <section className="py-16 md:py-24 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-tight">
            {SITE.problem.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            {SITE.problem.subtitle}
          </p>
        </div>

        <div className="mt-12 sm:mt-14 max-w-4xl mx-auto divide-y divide-border border-y border-border">
          {SITE.problem.points.map((pt, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6 py-6 sm:py-7">
              <span className="font-serif text-2xl text-accent/90 leading-none pt-0.5">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground leading-snug">{pt.title}</h3>
                <p className="mt-2 text-sm sm:text-[15px] text-muted leading-relaxed max-w-2xl">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
