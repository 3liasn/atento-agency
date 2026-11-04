import React from "react";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  const mark = size === "sm" ? "h-7 w-7 text-[11px]" : size === "lg" ? "h-10 w-10 text-sm" : "h-8 w-8 text-xs";
  const title = size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-[15px]";

  return (
    <div className={`inline-flex items-center gap-2.5 tracking-tight select-none ${className}`}>
      <span
        className={`relative flex ${mark} items-center justify-center rounded-full border border-accent/55 text-accent font-serif font-semibold`}
        aria-hidden
      >
        A
      </span>
      <span className="flex flex-col leading-none gap-0.5">
        <span className={`${title} text-foreground font-semibold tracking-tight font-serif`}>
          Atento
        </span>
        <span className="text-[9px] font-medium tracking-[0.18em] uppercase text-accent/85">
          Agencia de IA
        </span>
      </span>
    </div>
  );
}
