import React from "react";
import { SITE } from "@/content/site";

/** Único CTA principal: relleno azul marino, texto marfil (contraste AA). */
export function PrimaryCta({
  label = SITE.primaryCta.label,
  href = SITE.primaryCta.href,
  reassurance = SITE.primaryCta.reassurance,
  align = "center",
}: {
  label?: string;
  href?: string;
  reassurance?: string | null;
  align?: "center" | "start";
}) {
  return (
    <div className={`flex flex-col gap-2.5 ${align === "start" ? "items-center lg:items-start" : "items-center"}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_-12px_rgba(17,39,53,0.55)] transition-[background-color,transform] duration-200 hover:bg-ink hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span>{label}</span>
        <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
      {reassurance ? <p className="text-[13px] text-subtle text-center">{reassurance}</p> : null}
    </div>
  );
}
