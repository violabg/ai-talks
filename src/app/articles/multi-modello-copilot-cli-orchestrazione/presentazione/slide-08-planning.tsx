import * as motion from "motion/react-client";
import { FadeIn, FadeInLeft, MODEL_COLORS } from "./slide-shared";

export function PlanningSlide() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 font-bold text-[var(--pres-accent)] text-2xl md:text-4xl text-center">
          Il planning riduce le allucinazioni
        </h2>
      </FadeIn>
      <div className="items-center gap-8 grid md:grid-cols-2">
        <FadeInLeft delay={0.2}>
          <div className="bg-[var(--pres-bg-surface)] p-5 border border-[var(--pres-border)] rounded-lg font-mono text-sm">
            <p className="mb-3 text-[var(--pres-muted)] text-xs uppercase tracking-wider">
              PLAN.md
            </p>
            {[
              { n: "1", text: "Analizzare schema DB", color: MODEL_COLORS.sonnet },
              { n: "2", text: "Creare endpoint REST", color: MODEL_COLORS.gpt4 },
              { n: "3", text: "Aggiungere validazione", color: MODEL_COLORS.gpt4 },
              { n: "4", text: "Scrivere test", color: MODEL_COLORS.opus },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="flex items-center gap-2 mb-2"
              >
                <span
                  className="flex justify-center items-center rounded-full size-5 font-bold text-xs shrink-0"
                  style={{ backgroundColor: `color-mix(in srgb, ${step.color} 13%, transparent)`, color: step.color }}
                >
                  {step.n}
                </span>
                <span className="text-[var(--pres-text)]">{step.text}</span>
              </motion.div>
            ))}
          </div>
        </FadeInLeft>

        <FadeIn delay={0.7}>
          <div className="flex flex-col items-center gap-4">
            <svg viewBox="0 0 200 180" className="w-full max-w-50">
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <path d="M 20 20 L 180 20 L 140 90 L 60 90 Z" fill="var(--pres-danger)" fillOpacity="0.08" stroke="var(--pres-danger)" strokeWidth="1.5" />
                <text x="100" y="45" textAnchor="middle" fill="var(--pres-danger)" fontSize="10">Senza piano</text>
                <text x="100" y="60" textAnchor="middle" fill="var(--pres-danger)" fontSize="9" opacity="0.7">spazio libero = allucinazioni</text>
              </motion.g>
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                <path d="M 60 95 L 140 95 L 120 160 L 80 160 Z" fill="var(--pres-success)" fillOpacity="0.08" stroke="var(--pres-success)" strokeWidth="1.5" />
                <text x="100" y="120" textAnchor="middle" fill="var(--pres-success)" fontSize="10">Con piano</text>
                <text x="100" y="135" textAnchor="middle" fill="var(--pres-success)" fontSize="9" opacity="0.7">output vincolato</text>
              </motion.g>
            </svg>
            <p className="text-[var(--pres-muted)] text-xs text-center">
              I token generati seguono il contesto strutturale del piano
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
