"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading, fadeIn } from "./slide-shared";

const logLines = [
  {
    speaker: "Copilot CLI",
    text: "[Thinking] Inizializzazione piano...",
    tone: "var(--pres-muted)",
  },
  {
    speaker: "Rubber Duck",
    text: "[Critique] API sospetta: controlla rinomina framework.",
    tone: "var(--pres-blue)",
  },
  {
    speaker: "Copilot CLI",
    text: "[Update] Piano corretto. Adeguo i file prima di scrivere.",
    tone: "var(--pres-success)",
  },
  {
    speaker: "Rubber Duck",
    text: "[Check] I test coprono davvero il comportamento?",
    tone: "var(--pres-warning)",
  },
];

export function Slide06ReviewLoop() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="sessione CLI"
        title="La review appare dentro il loop di lavoro, non come audit finale"
        description="Il valore di Rubber Duck e' temporale: segnala il problema quando il piano e' ancora economico da correggere."
      />
      <div className="flex-1 gap-5 grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr]">
        <motion.div {...fadeIn(0.12)}>
          <GlowCard className="bg-[color:color-mix(in_srgb,var(--pres-bg)_55%,black)] p-5 sm:p-6 h-full">
            <div className="flex gap-2 mb-5">
              <span className="bg-[var(--pres-danger)] rounded-full w-3 h-3" />
              <span className="bg-[var(--pres-warning)] rounded-full w-3 h-3" />
              <span className="bg-[var(--pres-success)] rounded-full w-3 h-3" />
            </div>
            <div className="space-y-4 font-mono text-sm sm:text-base leading-relaxed">
              {logLines.map((line, index) => (
                <motion.div
                  key={line.text}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.15, duration: 0.35 }}
                >
                  <span style={{ color: line.tone }}>{line.speaker}</span>
                  <span className="text-[var(--pres-text)]">: {line.text}</span>
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
        <div className="gap-4 grid">
          {[
            "La critica arriva prima della scrittura dei file.",
            "Il revisore non ha bisogno di vincere: basta che renda visibile un rischio reale.",
            "Il piano si corregge nel momento in cui e' ancora reversibile.",
          ].map((item, index) => (
            <motion.div key={item} {...fadeIn(0.3 + index * 0.1)}>
              <GlowCard className="p-5 h-full text-[var(--pres-text-sub)] text-base leading-relaxed">
                {item}
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
