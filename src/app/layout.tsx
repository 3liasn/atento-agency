import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE } from "@/content/site";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

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
    <html lang="es" className={`scroll-smooth ${playfair.variable}`}>
      <body className="min-h-screen bg-surface text-slate-900 antialiased font-sans selection:bg-rose-100 selection:text-rose-900">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
