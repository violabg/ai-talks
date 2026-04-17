"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading, fadeIn } from "./slide-shared";

const columns = [
  {
    command: "/chronicle improve",
    focus: "repository",
    target: "istruzioni permanenti",
    color: "var(--pres-accent)",
    delay: 0.15,
    examples: [
      "istruzioni mancanti da aggiungere",
      "skill da costruire per sequenze ripetute",
      "formati PR/commit da standardizzare",
    ],
    outcome: "configurazione condivisa con il team",
  },
  {
    command: "/chronicle tips",
    focus: "utente",
    target: "comportamento individuale",
    color: "var(--pres-blue)",
    delay: 0.35,
    examples: [
      "comandi utili che non conosci",
      "funzionalità che risparmierebbero tempo",
      "pattern che potresti evitare",
    ],
    outcome: "privato per design, mai condiviso",
  },
];

export function Slide04ImproveVsTips() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="due scale diverse"
        title="Stesso database, due analisi: improve guarda il repo, tips guarda te"
        description="La stessa storia di sessioni alimenta due prospettive separate — una pubblica per il team, una privata per il tuo modo di lavorare."
      />
      <div className="flex-1 gap-5 grid grid-cols-1 lg:grid-cols-2">
        {columns.map((col) => (
          <motion.div key={col.command} {...fadeIn(col.delay)}>
            <GlowCard className="p-6 h-full">
              <div
                className="mb-1 font-mono text-sm uppercase tracking-[0.24em]"
                style={{ color: col.color }}
              >
                {col.focus}
              </div>
              <div
                className="mb-4 font-display text-3xl sm:text-4xl font-bold tracking-tight"
                style={{ color: "var(--pres-text)" }}
              >
                {col.command}
              </div>
              <div
                className="inline-block mb-5 px-3 py-1 rounded-full font-mono text-sm"
                style={{
                  backgroundColor: `color-mix(in srgb, ${col.color} 14%, transparent)`,
                  color: col.color,
                }}
              >
                → {col.target}
              </div>
              <ul className="space-y-3 mb-5">
                {col.examples.map((ex, i) => (
                  <motion.li
                    key={ex}
                    className="flex items-start gap-3 text-(--pres-text-sub) text-base leading-relaxed"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: col.delay + 0.2 + i * 0.1 }}
                  >
                    <span
                      className="mt-2 rounded-full w-1.5 h-1.5 shrink-0"
                      style={{ backgroundColor: col.color }}
                    />
                    {ex}
                  </motion.li>
                ))}
              </ul>
              <div
                className="rounded-2xl border px-4 py-3 text-(--pres-text) text-sm"
                style={{
                  borderColor: col.color,
                  backgroundColor: `color-mix(in srgb, ${col.color} 10%, transparent)`,
                }}
              >
                <span className="font-mono text-xs uppercase tracking-widest opacity-70">
                  risultato
                </span>
                <div className="mt-1 text-base">{col.outcome}</div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}
