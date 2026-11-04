import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/content/site";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  keywords: [
    "IA para clínicas dentales",
    "recepción con IA",
    "chatbot WhatsApp clínicas",
    "agenda citas dental",
    "software clínica estética",
    "asistente virtual citas",
  ],
  authors: [{ name: "Atento" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased font-sans selection:bg-teal-100 selection:text-teal-900">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
