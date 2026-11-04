import React from "react";
import { SITE } from "@/content/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-lg shadow-black/40 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-hidden>
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.525 1.761.809 2.796.809 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.796-5.769-5.796zm3.392 8.203c-.147.413-.865.79-1.216.84-.312.047-.711.067-1.148-.072-.266-.084-.607-.197-.986-.386-1.733-.87-2.863-2.893-2.95-3.027-.084-.133-.69-.918-.69-1.752s.436-1.242.591-1.412c.147-.163.32-.204.426-.204.107 0 .213 0 .306.006.098.004.23-.037.36.275.147.35.5 1.22.544 1.306.044.087.073.188.015.3-.06.118-.09.192-.177.295-.087.103-.184.23-.263.308-.087.087-.178.181-.076.355.098.17.436.718.936 1.162.642.57 1.183.747 1.352.832.163.08.258.067.353-.04.098-.11.413-.482.523-.647.11-.163.22-.137.37-.082.147.054.94.443 1.1.524.163.08.27.118.31.184.044.066.044.38-.103.793z" />
      </svg>
    </a>
  );
}
