"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading, fadeIn } from "./slide-shared";

const scenarios = [
  {
    title: "Senza Rubber Duck",
    tone: "var(--pres-danger)",
    steps: ["piano errato", "file sbagliato", "runtime failure", "rework"],
  },
  {
    title: "Con Rubber Duck",
    tone: "var(--pres-success)",
    steps: [
      "piano proposto",
      "critique",
      "piano corretto",
      "implementazione pulita",
    ],
  },
];

export function Slide08ErrorPrevention() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="caso concreto"
        title="Il vantaggio vero: l'errore viene eliminato prima che esista nel codice"
        description="L'esempio Next.js del rename da middleware a proxy rende visibile la differenza tra correzione preventiva e bug scoperto troppo tardi."
      />
      <div className="flex-1 gap-5 grid grid-cols-1 lg:grid-cols-2">
        {scenarios.map((scenario, scenarioIndex) => (
          <motion.div
            key={scenario.title}
            {...fadeIn(0.15 + scenarioIndex * 0.15)}
          >
            <GlowCard className="p-6 h-full">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-display text-2xl sm:text-3xl">
                  {scenario.title}
                </h3>
                <span
                  className="px-3 py-1 rounded-full font-mono text-sm uppercase tracking-wide"
                  style={{
                    border: `1px solid ${scenario.tone}`,
                    color: scenario.tone,
                  }}
                >
                  {scenarioIndex === 0 ? "costo crescente" : "costo contenuto"}
                </span>
              </div>
              <div className="space-y-4">
                {scenario.steps.map((step, index) => (
                  <motion.div
                    key={step}
                    className="flex items-center gap-4 bg-[var(--pres-bg-node)] px-4 py-4 border border-[var(--pres-border)] rounded-2xl"
                    initial={{ opacity: 0, x: scenarioIndex === 0 ? -12 : 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.28 + scenarioIndex * 0.12 + index * 0.11,
                    }}
                  >
                    <div
                      className="flex justify-center items-center rounded-full w-10 h-10 font-mono text-sm"
                      style={{
                        color: scenario.tone,
                        background: `color-mix(in srgb, ${scenario.tone} 14%, transparent)`,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="text-[var(--pres-text)] text-lg">
                      {step}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}
