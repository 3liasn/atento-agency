import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/content/site";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0C0E",
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
    <html lang="es" className={`scroll-smooth ${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans selection:bg-accent/30 selection:text-foreground">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
