import React from "react";

const ROWS = [
  { a: "Responde con tu protocolo, precios orientativos y tono", b: "Respuestas genéricas o de menú" },
  { a: "Nunca da diagnósticos: deriva a tu equipo", b: "Puede improvisar respuestas clínicas" },
  { a: "Propone horarios de tu agenda actual", b: "Te obliga a cambiar de software" },
  { a: "Una persona configura y revisa contigo", b: "Lo montas tú, solo" },
  { a: "Sin permanencia: te quedas si funciona", b: "Contratos anuales" },
];

export function Differentiation() {
  return (
    <section id="diferencia" className="scroll-mt-24 border-y border-border bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Diferencia</p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
            No es un chatbot genérico
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-2 bg-navy text-white">
            <p className="px-4 py-3.5 text-sm font-semibold sm:px-6">Atento</p>
            <p className="px-4 py-3.5 text-sm font-semibold text-white/75 sm:px-6">Chatbot genérico</p>
          </div>
          {ROWS.map((r) => (
            <div key={r.a} className="grid grid-cols-2 border-t border-border">
              <p className="flex gap-2 bg-background px-4 py-4 text-[14px] leading-snug text-foreground sm:px-6 sm:text-[15px]">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                {r.a}
              </p>
              <p className="px-4 py-4 text-[14px] leading-snug text-subtle sm:px-6 sm:text-[15px]">{r.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
