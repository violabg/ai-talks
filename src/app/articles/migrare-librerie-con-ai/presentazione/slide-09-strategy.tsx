"use client";

import * as motion from "motion/react-client";

const steps = [
  {
    n: "01",
    title: "Leggi il changelog completo",
    desc: "Identifica i breaking changes che impattano la tua codebase — non in diagonale",
    tool: "manuale",
    color: "var(--pres-blue)",
  },
  {
    n: "02",
    title: "Inventario con l'AI",
    desc: "Mappa tutti gli usi della libreria senza modificare nulla — restituisce solo l'inventario",
    tool: "AI — analisi",
    color: "var(--pres-accent)",
  },
  {
    n: "03",
    title: "Codemods ufficiali",
    desc: "Dry-run, verifica il diff, applica, committa. Meccanico e deterministico",
    tool: "jscodeshift / ast-grep",
    color: "var(--pres-success)",
  },
  {
    n: "04",
    title: "AI per ogni breaking change",
    desc: "Prompt mirato: contesto + prima/dopo + vincoli. Batch di 3–5 file, verifica, commit",
    tool: "AI — semantica",
    color: "var(--pres-accent)",
  },
  {
    n: "05",
    title: "Typecheck + test dopo ogni batch",
    desc: "Se si rompe, torna indietro e diagnostica. Non procedere oltre con modifiche non verificate",
    tool: "pnpm tsc && pnpm test",
    color: "var(--pres-success)",
  },
  {
    n: "06",
    title: "Errori TypeScript come feedback",
    desc: "Un errore preciso con file e riga è il miglior input possibile per correggere l'AI",
    tool: "AI — correzione",
    color: "var(--pres-warning)",
  },
  {
    n: "07",
    title: "Review del diff completo",
    desc: "Prima del merge: coerente, comprensibile, privo di cambiamenti non dichiarati",
    tool: "revisione umana",
    color: "var(--pres-blue)",
  },
];

export function Slide09Strategy() {
  return (
    <div className="flex flex-col h-full py-6 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[var(--pres-accent)]">7 Passi</span> per Iniziare Domani
      </motion.h2>
      <motion.p
        className="text-[var(--pres-muted)] text-base text-center mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Una sequenza concreta che funziona su qualsiasi migrazione
      </motion.p>

      <div className="flex-1 min-h-0 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 h-full">
          {/* Steps 1-4 in first 4 columns, steps 5-7 spanning */}
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              className="flex flex-col gap-2 rounded-xl border p-4"
              style={{
                borderColor: `color-mix(in srgb, ${step.color} 25%, transparent)`,
                background: `color-mix(in srgb, ${step.color} 5%, transparent)`,
                gridColumn: i >= 4 ? "span 1" : undefined,
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.4 + i * 0.09 }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-black text-2xl opacity-30"
                  style={{ color: step.color }}
                >
                  {step.n}
                </span>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{
                    color: step.color,
                    background: `color-mix(in srgb, ${step.color} 15%, transparent)`,
                  }}
                >
                  {step.tool}
                </span>
              </div>
              <p className="font-semibold text-sm" style={{ color: step.color }}>
                {step.title}
              </p>
              <p className="text-[var(--pres-muted)] text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
