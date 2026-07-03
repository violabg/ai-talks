"use client";

import * as motion from "motion/react-client";
import { fadeIn, SlideFrame, SlideHeading } from "./slide-shared";

const STEPS = [
  {
    n: "01",
    title: "Baseline misurabile",
    body: "Misura gli algoritmi esistenti — dal semplice sample-compare al più raffinato phase-correction. Questa è la soglia oltre cui il nuovo lavoro è progresso.",
    color: "var(--pres-blue)",
  },
  {
    n: "02",
    title: "Fallimenti ispezionabili",
    body: "Ogni pacchetto non decodificato deve essere scaricabile e analizzabile. Errore reale, o fase mal compensata che un altro algoritmo avrebbe recuperato?",
    color: "var(--pres-warning)",
  },
  {
    n: "03",
    title: "Solo ora, il nuovo",
    body: "Con baseline e casi diagnosticabili in mano, l'agente ha un metro. Ogni modifica alla rete neurale è valutata francamente contro la soglia.",
    color: "var(--pres-success)",
  },
];

export function Slide08Baseline() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 px-6 py-6">
        <SlideHeading
          eyebrow="caso 2 — decoder radio"
          title="Dai all'agente un metro"
          description="Se non ha un modo franco per valutare i propri progressi, non convergerà. La sequenza corretta è: metro prima, sperimentazione dopo."
        />
        <div className="relative gap-4 grid grid-cols-1 md:grid-cols-3 content-center mt-6 flex-1">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              {...fadeIn(0.25 + i * 0.18)}
              className="flex flex-col gap-3 bg-(--pres-bg-card) p-5 border rounded-2xl"
              style={{
                borderColor: `color-mix(in srgb, ${s.color} 45%, transparent)`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex justify-center items-center rounded-full w-10 h-10 font-mono text-sm"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${s.color} 18%, transparent)`,
                    color: s.color,
                  }}
                >
                  {s.n}
                </div>
                <div className="font-display text-(--pres-text) text-xl sm:text-2xl leading-snug">
                  {s.title}
                </div>
              </div>
              <p className="text-(--pres-text-sub) text-sm sm:text-base leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
