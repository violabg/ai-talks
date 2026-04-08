"use client";

import * as motion from "motion/react-client";

const risks = [
  {
    id: "ui",
    title: "UI Component Library",
    subtitle: "MUI, Chakra, Radix…",
    warning: "Rischio visuale",
    desc: "Il codice può migrare correttamente ma il layout risultante essere diverso da quello atteso. I test non catturano i cambiamenti visivi.",
    action: "Screenshot comparativi · Storybook · Review manuale sistematica",
    color: "var(--pres-warning)",
    level: 3,
  },
  {
    id: "semantic",
    title: "Breaking Changes Semantici Nascosti",
    subtitle: "Ordine di esecuzione, timing, gestione errori",
    warning: "Rischio invisibile",
    desc: "Non si rompono nei test unit ma emergono in contesti di integrazione. Note di rilascio con \"behavior change\" = zona ad alto rischio.",
    action: "Test di integrazione · Verifica manuale dei percorsi critici",
    color: "var(--pres-danger)",
    level: 4,
  },
  {
    id: "replacement",
    title: "Sostituzione di Libreria",
    subtitle: "Moment→date-fns · Axios→fetch · Redux→Zustand",
    warning: "Non è una migrazione",
    desc: "Queste sono riscritture parziali. Non delegare all'AI senza una specifica molto precisa e test di caratterizzazione sul comportamento esistente.",
    action: "Test di caratterizzazione PRIMA · Rollout graduale · Specifica precisa",
    color: "var(--pres-danger)",
    level: 5,
  },
];

function RiskDots({ level, color }: { level: number; color: string }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full"
          style={{
            background: i <= level
              ? color
              : `color-mix(in srgb, ${color} 20%, transparent)`,
          }}
        />
      ))}
    </div>
  );
}

export function Slide08Risks() {
  return (
    <div className="flex flex-col h-full py-6 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Quando{" "}
        <span className="text-[var(--pres-danger)]">Rallentare</span>
      </motion.h2>
      <motion.p
        className="text-[var(--pres-muted)] text-base text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Non tutte le migrazioni si prestano allo stesso approccio — riconosci le zone ad alto rischio
      </motion.p>

      <div className="flex flex-col gap-5 flex-1 min-h-0 w-full max-w-4xl mx-auto">
        {risks.map((risk, i) => (
          <motion.div
            key={risk.id}
            className="flex flex-col gap-3 rounded-xl border p-6 flex-1"
            style={{
              borderColor: `color-mix(in srgb, ${risk.color} 30%, transparent)`,
              background: `color-mix(in srgb, ${risk.color} 5%, transparent)`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-bold text-lg" style={{ color: risk.color }}>{risk.title}</p>
                <p className="text-[var(--pres-muted)] text-sm font-mono">{risk.subtitle}</p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{
                    color: risk.color,
                    background: `color-mix(in srgb, ${risk.color} 15%, transparent)`,
                  }}
                >
                  {risk.warning}
                </span>
                <RiskDots level={risk.level} color={risk.color} />
              </div>
            </div>
            <p className="text-[var(--pres-muted)] text-sm leading-relaxed">{risk.desc}</p>
            <div className="flex items-start gap-2 mt-auto">
              <span style={{ color: risk.color }} className="text-sm font-bold shrink-0">→</span>
              <p className="text-[var(--pres-text)] text-sm font-medium">{risk.action}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
