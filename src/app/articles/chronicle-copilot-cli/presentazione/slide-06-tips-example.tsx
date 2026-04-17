"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading, fadeIn } from "./slide-shared";

const logLines = [
  {
    prefix: "$",
    text: "/chronicle tips",
    tone: "var(--pres-muted)",
    delay: 0.15,
  },
  { prefix: "", text: "", tone: "", delay: 0.3 },
  {
    prefix: "›",
    text: "Osservazione: stai spesso incollando",
    tone: "var(--pres-warning)",
    delay: 0.4,
  },
  {
    prefix: " ",
    text: "issue URL e PR link chiedendo analisi.",
    tone: "var(--pres-warning)",
    delay: 0.55,
  },
  { prefix: "", text: "", tone: "", delay: 0.7 },
  {
    prefix: "→",
    text: "Suggerimento: esiste il comando /research.",
    tone: "var(--pres-blue)",
    delay: 0.85,
  },
  {
    prefix: " ",
    text: "Esegue ricerche approfondite su web,",
    tone: "var(--pres-text-sub)",
    delay: 1.0,
  },
  {
    prefix: " ",
    text: "GitHub e repository open source,",
    tone: "var(--pres-text-sub)",
    delay: 1.15,
  },
  {
    prefix: " ",
    text: "in modo automatico.",
    tone: "var(--pres-text-sub)",
    delay: 1.3,
  },
];

export function Slide06TipsExample() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="chronicle tips"
        title="Scopre i comandi che stai facendo a mano senza saperlo"
        description="Non ti insegna tutto lo strumento: ti segnala la funzionalità giusta per il pattern che hai appena ripetuto."
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
              <div className="mb-2 font-mono text-(--pres-blue) text-sm uppercase tracking-[0.22em]">
                prima
              </div>
              <div className="text-(--pres-text-sub) text-base leading-relaxed">
                Incolli link di issue e chiedi all&apos;agente di analizzarli uno
                alla volta, manualmente.
              </div>
            </GlowCard>
          </motion.div>
          <motion.div {...fadeIn(0.5)}>
            <GlowCard className="p-5 h-full border-(--pres-success)">
              <div className="mb-2 font-mono text-(--pres-success) text-sm uppercase tracking-[0.22em]">
                dopo
              </div>
              <div className="font-display text-2xl text-(--pres-text) leading-tight">
                <span className="font-mono text-(--pres-success)">
                  /research
                </span>{" "}
                fa tutto da solo.
              </div>
              <div className="mt-2 text-(--pres-text-sub) text-sm leading-relaxed">
                Ricerca semantica su web, GitHub e repo open source.
              </div>
            </GlowCard>
          </motion.div>
          <motion.div {...fadeIn(0.65)}>
            <GlowCard className="p-5 h-full">
              <div className="flex flex-col justify-center h-full text-center">
                <div className="font-mono text-(--pres-muted) text-sm uppercase tracking-[0.2em]">
                  privato
                </div>
                <div className="mt-1 text-(--pres-text-sub) text-sm">
                  tips resta tra te e il tuo disco
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
