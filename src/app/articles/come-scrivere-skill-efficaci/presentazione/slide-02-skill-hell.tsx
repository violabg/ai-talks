import * as motion from "motion/react-client";
import { SlideFrame, SlideHeading } from "./slide-shared";

const chaosLabels = [
  { text: "review-code", rot: -8, x: 12, y: 18 },
  { text: "make-plan", rot: 6, x: 42, y: 8 },
  { text: "refactor", rot: -3, x: 22, y: 46 },
  { text: "ship-pr", rot: 10, x: 55, y: 40 },
  { text: "adr-writer", rot: -12, x: 5, y: 72 },
  { text: "spec-out", rot: 4, x: 46, y: 68 },
  { text: "quick-fix", rot: -2, x: 30, y: 30 },
  { text: "eval-run", rot: 8, x: 62, y: 22 },
];

const orderedLabels = ["trigger", "struttura", "steering", "pruning"];

export function Slide02SkillHell() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="il problema"
        title="Skill hell"
        description="Decine di skill, descrizioni simili, workflow sovrapposti. Nessun criterio per capire cosa aiuta e cosa peggiora il comportamento dell'agente."
      />
      <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
        {/* Chaos */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--pres-danger)]/40 bg-[color-mix(in_srgb,var(--pres-danger)_6%,transparent)] p-6"
        >
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--pres-danger)]">
            senza criterio
          </p>
          <div className="relative mt-4 h-64 w-full sm:h-80">
            {chaosLabels.map((label, i) => (
              <motion.div
                key={label.text}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
                className="absolute rounded-lg border border-[var(--pres-danger)]/50 bg-[var(--pres-bg-card)] px-3 py-1.5 font-mono text-sm text-[var(--pres-text-sub)] shadow-lg"
                style={{
                  left: `${label.x}%`,
                  top: `${label.y}%`,
                  transform: `rotate(${label.rot}deg)`,
                }}
              >
                {label.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ordered */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl border border-[var(--pres-success)]/40 bg-[color-mix(in_srgb,var(--pres-success)_6%,transparent)] p-6"
        >
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--pres-success)]">
            con rubric
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {orderedLabels.map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-5 py-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--pres-success)_18%,transparent)] font-mono text-sm text-[var(--pres-success)]">
                  {i + 1}
                </div>
                <p className="font-mono text-base uppercase tracking-[0.14em] text-[var(--pres-text)]">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
