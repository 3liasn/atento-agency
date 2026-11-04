import React from "react";
import { SITE } from "@/content/site";

/** Sin clientes todavía: la prueba es lo que puedes comprobar tú, no testimonios. */
export function Proof() {
  const days = SITE.founders.durationTrialDays;
  const items = [
    {
      k: "Piloto fundador",
      t: `${days} días para comprobarlo con pacientes reales`,
      d: "Eres de las 3 primeras clínicas: setup bonificado o al 50 %, sin permanencia. Si no encaja, lo paras y no sigues pagando.",
    },
    {
      k: "Demo con tu clínica",
      t: "Lo ves con tus tratamientos, no con un ejemplo",
      d: "Preparo la demo con tus servicios, horarios y tono. Le escribes como si fueras un paciente y juzgas tú.",
    },
    {
      k: "Seguridad concreta",
      t: "Sabes qué se guarda y quién lo ve",
      d: SITE.trust.dataPoints.map((p) => p.desc.split(".")[0]).join(". ") + ".",
    },
  ];
  return (
    <section id="prueba" className="scroll-mt-24 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Prueba</p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Todavía no tenemos clientes que enseñarte. Por eso lo compruebas tú.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Sin testimonios inventados ni cifras de adorno: una prueba real en tu clínica y reglas claras.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.k} className="card-surface soft-glow p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{it.k}</p>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground">{it.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
