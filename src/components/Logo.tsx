import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  const iconSize = size === "sm" ? 24 : size === "lg" ? 36 : 28;
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  const textColor = variant === "light" ? "text-white" : "text-slate-900";
  const subColor = variant === "light" ? "text-rose-200" : "text-accent";

  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      <div
        className="relative flex items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm shadow-rose-500/20"
        style={{ width: iconSize + 8, height: iconSize + 8 }}
      >
        <svg
          width={iconSize - 4}
          height={iconSize - 4}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          {/* Chat bubble combined with medical cross spark */}
          <path
            d="M12 3C6.477 3 2 6.806 2 11.5c0 2.215 1.002 4.24 2.68 5.768L4 21l4.475-1.492C9.565 19.82 10.757 20 12 20c5.523 0 10-3.806 10-8.5S17.523 3 12 3z"
            fill="currentColor"
            fillOpacity="0.25"
          />
          <path
            d="M12 2C6.48 2 2 6.03 2 11c0 2.3 0.96 4.41 2.58 6L3.5 21.5l4.87-1.55C9.64 20.6 10.79 21 12 21c5.52 0 10-4.03 10-10S17.52 2 12 2z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7v8M8 11h8"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${textSize} ${textColor} font-extrabold tracking-tight`}>
          Atento<span className={subColor}>.</span>
        </span>
        <span className="text-[10px] font-medium tracking-wider uppercase text-slate-400">
          Recepción IA
        </span>
      </div>
    </div>
  );
}
