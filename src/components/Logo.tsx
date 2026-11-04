import React from "react";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
};

export function Logo({ className = "", variant = "default", size = "md" }: LogoProps) {
  const textColor = "text-foreground";
  const subColor = variant === "light" ? "text-accent/80" : "text-accent";
  const mark = size === "sm" ? "h-7 w-7" : size === "lg" ? "h-10 w-10" : "h-8 w-8";
  const title = size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";

  return (
    <div className={`inline-flex items-center gap-2.5 tracking-tight select-none ${className}`}>
      <span className={`relative flex ${mark} items-center justify-center rounded-full border border-accent/50 bg-accent-muted`}>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`${title} ${textColor} font-semibold tracking-tight font-serif`}>
          Atento
        </span>
        <span className={`text-[10px] font-medium tracking-wider uppercase ${subColor}`}>
          Agencia de IA
        </span>
      </span>
    </div>
  );
}
