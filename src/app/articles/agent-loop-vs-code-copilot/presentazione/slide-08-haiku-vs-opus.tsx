"use client";

import * as motion from "motion/react-client";
import { SlideFrame, SlideHeading } from "./slide-shared";

export function Slide08HaikuVsOpus() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="il caso Explore"
        title="Perché Haiku dove ti aspetteresti Opus"
        description="La raccolta contesto è grep e letture file: operazioni rapide, niente ragionamento. Spostarle su Haiku accorcia il turno del 30-40% senza intaccare la qualità finale."
      />

      <div className="flex flex-1 items-stretch gap-6 px-4">
        {/* Option A: Opus only */}
        <motion.div
          className="flex flex-col flex-1 bg-[color:var(--pres-bg-card)] p-6 border border-(--pres-border) rounded-3xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-3 font-mono text-(--pres-muted) text-sm uppercase tracking-widest">
            opzione A · solo Opus
          </div>
          <div className="mb-4 font-display font-bold text-3xl sm:text-4xl">
            Opus fa tutto
          </div>

          <div className="flex flex-col flex-1 justify-center gap-3">
            <div className="flex items-center gap-3">
              <span className="w-20 font-mono text-(--pres-text-sub) text-xs uppercase">
                raccolta
              </span>
              <motion.div
                className="relative bg-(--pres-danger)/20 rounded h-6 overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-(--pres-danger)/70 rounded" />
              </motion.div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-20 font-mono text-(--pres-text-sub) text-xs uppercase">
                ragiona
              </span>
              <motion.div
                className="bg-(--pres-accent)/70 rounded h-6"
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
            </div>

            <div className="mt-4 font-mono text-(--pres-danger) text-sm">
              turno totale: lento
            </div>
          </div>
        </motion.div>

        {/* Option B: Opus + Haiku */}
        <motion.div
          className="flex flex-col flex-1 bg-[color:var(--pres-bg-card)] p-6 border border-(--pres-success) rounded-3xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mb-3 font-mono text-(--pres-success) text-sm uppercase tracking-widest">
            opzione B · Opus + sub-agent Haiku
          </div>
          <div className="mb-4 font-display font-bold text-3xl sm:text-4xl">
            ognuno fa il suo
          </div>

          <div className="flex flex-col flex-1 justify-center gap-3">
            <div className="flex items-center gap-3">
              <span className="w-20 font-mono text-(--pres-text-sub) text-xs uppercase">
                raccolta
              </span>
              <motion.div
                className="bg-(--pres-blue)/70 rounded h-6"
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
              <span className="font-mono text-(--pres-blue) text-xs">
                Haiku
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-20 font-mono text-(--pres-text-sub) text-xs uppercase">
                ragiona
              </span>
              <motion.div
                className="bg-(--pres-accent)/70 rounded h-6"
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 0.5, delay: 1 }}
              />
              <span className="font-mono text-(--pres-accent) text-xs">
                Opus
              </span>
            </div>

            <div className="mt-4 font-mono text-(--pres-success) text-sm">
              -30/40% tempo · stessa resolution rate
            </div>
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
