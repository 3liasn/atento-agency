"use client";

import React from "react";
import { SITE } from "@/content/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          className="fill-current"
          d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.525 1.761.809 2.796.809 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.796-5.769-5.796zm0 13.084c-1.109 0-2.193-.298-3.14-.863l-3.491.916.932-3.404c-.619-1.026-.946-2.197-.945-3.399.002-3.96 3.224-7.182 7.184-7.182 3.96 0 7.182 3.222 7.182 7.182 0 3.96-3.222 7.182-7.182 7.182z"
        />
      </svg>
    </a>
  );
}