import React from "react";
import { SITE } from "@/content/site";

export function Problem() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F8FB] border-y border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {SITE.problem.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {SITE.problem.subtitle}
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE.problem.points.map((pt, i) => (
            <div
              key={i}
              className="rounded-2xl ring-1 ring-black/5 bg-white shadow-sm p-6 transition-all hover:border-teal-500/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700 font-bold mb-4">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">{pt.title}</h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
