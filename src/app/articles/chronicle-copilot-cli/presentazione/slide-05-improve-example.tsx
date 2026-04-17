"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading, fadeIn } from "./slide-shared";

const logLines = [
  {
    prefix: "$",
    text: "/chronicle improve",
    tone: "var(--pres-muted)",
    delay: 0.15,
  },
  {
    prefix: "",
    text: "",
    tone: "",
    delay: 0.3,
  },
  {
    prefix: "›",
    text: "Osservazione: stai aggiornando il formato",
    tone: "var(--pres-warning)",
    delay: 0.4,
  },
  {
    prefix: " ",
    text: "delle PR in ogni sessione.",
    tone: "var(--pres-warning)",
    delay: 0.55,
  },
  {
    prefix: "",
    text: "",
    tone: "",
    delay: 0.7,
  },
  {
    prefix: "→",
    text: "Suggerimento: documenta il formato atteso",
    tone: "var(--pres-success)",
    delay: 0.85,
  },
  {
    prefix: " ",
    text: "in .github/copilot-instructions.md.",
    tone: "var(--pres-success)",
    delay: 1.0,
  },
  {
    prefix: " ",
    text: "Se includi il template, l'agente lo utilizzerà",
    tone: "var(--pres-text-sub)",
    delay: 1.15,
  },
  {
    prefix: " ",
    text: "direttamente senza che tu debba specificarlo.",
    tone: "var(--pres-text-sub)",
    delay: 1.3,
  },
];

export function Slide05ImproveExample() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="chronicle improve"
        title="Dal pattern ripetuto all'istruzione permanente"
        description="Quando lo stesso correttivo compare sessione dopo sessione, improve propone di spostarlo dove vive per sempre."
      />
      <div className="flex-1 gap-5 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        <motion.div {...fadeIn(0.12)}>
          <GlowCard className="bg-[color:color-mix(in_srgb,var(--pres-bg)_55%,black)] p-5 sm:p-6 h-full">
            <div className="flex gap-2 mb-5">
              <span className="bg-[var(--pres-danger)] rounded-full w-3 h-3" />
              <span className="bg-[var(--pres-warning)] rounded-full w-3 h-3" />
              <span className="bg-[var(--pres-success)] rounded-full w-3 h-3" />
            </div>
            <div className="space-y-2 font-mono text-sm sm:text-base leading-relaxed min-h-[280px]">
              {logLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: line.delay, duration: 0.3 }}
                  style={{ minHeight: "1.4em" }}
                >
                  {line.prefix ? (
                    <span className="mr-2" style={{ color: line.tone }}>
                      {line.prefix}
                    </span>
                  ) : null}
                  <span style={{ color: line.tone || "var(--pres-text)" }}>
                    {line.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </motion.div>

        <div className="gap-4 grid">
          <motion.div {...fadeIn(0.35)}>
            <GlowCard className="p-5 h-full">
              <div className="mb-2 font-mono text-(--pres-accent) text-sm uppercase tracking-[0.22em]">
                cosa cambia
              </div>
              <div className="font-display text-2xl text-(--pres-text) leading-tight">
                Aggiorni le istruzioni
                <span className="text-(--pres-accent)"> una volta sola</span>.
              </div>
            </GlowCard>
          </motion.div>
          <motion.div {...fadeIn(0.5)}>
            <GlowCard className="p-5 h-full text-(--pres-text-sub) text-base leading-relaxed">
              Il template del repo passa dalla tua memoria a quella del repo.
              Nessuna sessione futura dovrà ripeterti.
            </GlowCard>
          </motion.div>
          <motion.div {...fadeIn(0.65)}>
            <GlowCard className="p-5 h-full">
              <div className="flex flex-col justify-center h-full text-center">
                <div className="font-mono text-(--pres-success) text-sm uppercase tracking-[0.2em]">
                  condivisibile
                </div>
                <div className="mt-2 text-(--pres-text) text-lg">
                  utile a tutto il team
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
