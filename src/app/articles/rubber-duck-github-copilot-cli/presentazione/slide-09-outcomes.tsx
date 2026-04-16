"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading, fadeIn } from "./slide-shared";

const bars = [
  { label: "Sonnet", value: 46, tone: "var(--pres-accent)" },
  { label: "Sonnet + Duck", value: 83, tone: "var(--pres-success)" },
  { label: "Opus", value: 96, tone: "var(--pres-blue)" },
];

export function Slide09Outcomes() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="risultato"
        title="La lezione finale: conta l'orchestrazione, non solo la taglia del modello"
        description="Secondo i risultati citati nell'articolo, Sonnet affiancato da Rubber Duck colma il 74,7% del gap verso Opus."
      />
      <div className="flex-1 gap-5 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div {...fadeIn(0.14)}>
          <GlowCard className="p-6 h-full">
            <div className="mb-6 font-mono text-(--pres-muted) text-sm uppercase tracking-[0.24em]">
              sweep-bench intuition
            </div>
            <div className="space-y-5">
              {bars.map((bar, index) => (
                <div key={bar.label}>
                  <div className="flex justify-between mb-2 text-base">
                    <span className="font-medium">{bar.label}</span>
                    <span className="font-mono text-(--pres-muted)">
                      {bar.value}
                    </span>
                  </div>
                  <div className="h-5 rounded-full bg-(--pres-bg-surface) overflow-hidden">
                    <motion.div
                      className="rounded-full h-full"
                      style={{ background: bar.tone }}
                      initial={{ width: 0, opacity: 0.7 }}
                      animate={{ width: `${bar.value}%`, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.28 + index * 0.14 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <motion.div
              className="mt-7 rounded-2xl border border-(--pres-success) bg-[color-mix(in_srgb,var(--pres-success)_10%,transparent)] px-4 py-4 text-(--pres-text) text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82 }}
            >
              74,7% del gap colmato: piu' qualita' ottenuta con un processo
              migliore, non solo con un modello piu' grande.
            </motion.div>
          </GlowCard>
        </motion.div>

        <div className="gap-4 grid">
          {[
            "Separare generazione e review riduce errori sistematici.",
            "La ridondanza utile non rallenta: previene rework e debugging evitabile.",
            "Rubber Duck mostra che gli agenti migliori progettano controlli, non solo output.",
          ].map((item, index) => (
            <motion.div key={item} {...fadeIn(0.32 + index * 0.12)}>
              <GlowCard className="p-5 h-full text-(--pres-text-sub) text-base leading-relaxed">
                {item}
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
