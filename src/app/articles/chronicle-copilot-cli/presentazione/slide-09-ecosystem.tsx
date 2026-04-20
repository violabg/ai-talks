"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading, fadeIn } from "./slide-shared";

const executors = [
  {
    label: "/tasks",
    sub: "stato degli agenti in background",
    delay: 0.2,
  },
  {
    label: "/fleet",
    sub: "sub-agenti in parallelo",
    delay: 0.35,
  },
  {
    label: "autopilot",
    sub: "loop autonomo senza supervisione",
    delay: 0.5,
  },
];

export function Slide09Ecosystem() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="ecosistema"
        title="Mentre gli altri eseguono, chronicle osserva e impara"
        description="/tasks, /fleet e autopilot sono strumenti di esecuzione. /chronicle è lo strato di apprendimento che li rende progressivamente migliori."
      />
      <div className="flex-1 gap-5 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
        <motion.div {...fadeIn(0.15)}>
          <GlowCard className="p-6 h-full">
            <div className="mb-4 font-mono text-(--pres-blue) text-sm uppercase tracking-[0.22em]">
              esecuzione
            </div>
            <div className="space-y-3">
              {executors.map((ex) => (
                <motion.div
                  key={ex.label}
                  className="rounded-2xl border border-(--pres-border) bg-[color:var(--pres-bg-node)] p-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: ex.delay }}
                >
                  <div className="font-mono text-(--pres-blue) text-lg">
                    {ex.label}
                  </div>
                  <div className="text-(--pres-text-sub) text-sm mt-1">
                    {ex.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </motion.div>

        <motion.div {...fadeIn(0.65)}>
          <GlowCard className="p-6 h-full bg-[color-mix(in_srgb,var(--pres-accent)_10%,transparent)] border-(--pres-accent)">
            <div className="mb-4 font-mono text-(--pres-accent) text-sm uppercase tracking-[0.22em]">
              apprendimento
            </div>
            <div className="font-display text-5xl font-bold text-(--pres-text) leading-none">
              /chronicle
            </div>
            <div className="mt-6 space-y-4 text-(--pres-text-sub) text-base leading-relaxed">
              <div className="flex gap-3 items-start">
                <span className="mt-2 rounded-full w-1.5 h-1.5 bg-(--pres-accent) shrink-0" />
                <span>Analizza come stai eseguendo.</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="mt-2 rounded-full w-1.5 h-1.5 bg-(--pres-accent) shrink-0" />
                <span>Propone come farlo meglio.</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="mt-2 rounded-full w-1.5 h-1.5 bg-(--pres-accent) shrink-0" />
                <span>Si integra con l&apos;ecosistema in modo trasparente.</span>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
