"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, fadeIn } from "./slide-shared";

const principles = [
  {
    label: "locale",
    desc: "tutto resta in ~/copilot",
    color: "var(--pres-success)",
    delay: 0.8,
  },
  {
    label: "incrementale",
    desc: "migliori il processo, non la skill",
    color: "var(--pres-accent)",
    delay: 0.95,
  },
  {
    label: "basato sui dati",
    desc: "le tue sessioni, non intuizioni",
    color: "var(--pres-blue)",
    delay: 1.1,
  },
];

export function Slide10Closing() {
  return (
    <SlideFrame>
      <div className="relative flex flex-1 justify-center items-center px-6 overflow-hidden text-center">
        <motion.div
          className="absolute inset-0 rounded-[3rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--pres-accent) 16%, transparent), transparent 48%)",
          }}
        />

        <div className="z-10 relative flex flex-col items-center max-w-5xl w-full">
          <motion.div
            className="mb-5 font-mono text-(--pres-muted) text-sm uppercase tracking-[0.28em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            la lezione
          </motion.div>

          <motion.h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.08] tracking-tight"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            Non ti dice come usare lo strumento.
            <span className="text-(--pres-accent)">
              {" "}
              Ti dice dove stai usando male quello che già sai
            </span>
            .
          </motion.h2>

          <motion.p
            className="mt-6 max-w-3xl text-(--pres-text-sub) text-base sm:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            La differenza non è marginale: è l&apos;unico modo per affinare un
            processo senza dover indovinare cosa cambiare.
          </motion.p>

          <div className="mt-10 gap-4 grid grid-cols-1 sm:grid-cols-3 w-full">
            {principles.map((p) => (
              <motion.div key={p.label} {...fadeIn(p.delay)}>
                <GlowCard className="p-5 h-full text-left">
                  <div
                    className="mb-2 font-mono text-sm uppercase tracking-[0.22em]"
                    style={{ color: p.color }}
                  >
                    {p.label}
                  </div>
                  <div className="text-(--pres-text) text-base leading-relaxed">
                    {p.desc}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
