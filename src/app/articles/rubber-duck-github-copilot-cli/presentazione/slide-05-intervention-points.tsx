"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const checkpoints = [
  {
    title: "Planning review",
    detail: "corregge file errati, API deprecate, ipotesi incoerenti",
    color: "var(--pres-accent)",
  },
  {
    title: "Test validation",
    detail: "cerca test che passano per compiacenza, non per correttezza",
    color: "var(--pres-warning)",
  },
  {
    title: "Self-healing",
    detail: "entra quando il modello operativo ricade nello stesso loop",
    color: "var(--pres-success)",
  },
];

export function Slide05InterventionPoints() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="workflow"
        title="Rubber Duck interviene in tre punti dove il processo si rompe di solito"
        description="Non blocca il flusso. Si inserisce nei checkpoint in cui un errore locale rischia di diventare rework, test fuorvianti o stallo."
        titleClassName="max-w-5xl lg:text-[3.85rem]"
        descriptionClassName="max-w-4xl"
      />
      <div className="flex flex-1 items-center">
        <GlowCard className="relative p-5 sm:p-6 w-full overflow-hidden">
          <div className="hidden lg:block top-[4.5rem] absolute inset-x-20 pointer-events-none">
            <svg viewBox="0 0 900 90" className="w-full">
              <motion.path
                d="M90 45H810"
                fill="none"
                stroke="var(--pres-border)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="10 10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.95 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              />
            </svg>
          </div>
          <div className="gap-4 lg:gap-5 grid lg:grid-cols-3">
            {checkpoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.22 + index * 0.14 }}
                className="relative"
              >
                <div className="lg:hidden flex items-center gap-3 mb-3">
                  <span
                    className="block rounded-full w-4 h-4 shrink-0"
                    style={{ backgroundColor: point.color }}
                  />
                  <span className="font-mono text-(--pres-muted) text-sm uppercase tracking-[0.24em]">
                    checkpoint {index + 1}
                  </span>
                </div>
                <div className="hidden lg:flex justify-center mb-4">
                  <span
                    className="flex justify-center items-center rounded-full ring-[color:color-mix(in_srgb,var(--pres-bg)_88%,transparent)] ring-8 w-7 h-7"
                    style={{ backgroundColor: point.color }}
                  />
                </div>
                <div
                  className="rounded-[2rem] border bg-(--pres-bg-node) p-5 min-h-[14rem]"
                  style={{ borderColor: point.color }}
                >
                  <div
                    className="mb-3 font-mono text-sm uppercase tracking-[0.22em]"
                    style={{ color: point.color }}
                  >
                    checkpoint {index + 1}
                  </div>
                  <h3 className="mb-3 font-display text-3xl leading-none text-(--pres-text)">
                    {point.title}
                  </h3>
                  <p className="text-(--pres-text-sub) text-base leading-relaxed">
                    {point.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlowCard>
      </div>
    </SlideFrame>
  );
}
