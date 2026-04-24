"use client";

import * as motion from "motion/react-client";
import { SlideFrame } from "./slide-shared";

export function Slide12Closing() {
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
              "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--pres-accent) 16%, transparent), transparent 50%)",
          }}
        />

        <motion.div
          className="z-10 relative max-w-5xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="mb-4 font-mono text-(--pres-muted) text-sm uppercase tracking-[0.28em]">
            takeaway
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-balance leading-[1.05] tracking-tight">
            Quattro ingredienti.
            <br />
            <span className="text-(--pres-accent)">Molti cicli.</span>
            <br />
            Nessuna magia.
          </h2>

          <motion.div
            className="flex flex-col gap-3 mx-auto mt-10 max-w-xl text-left"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="mb-1 font-mono text-(--pres-muted) text-sm uppercase tracking-widest">
              ispeziona da te
            </div>
            <div className="bg-(--pres-bg-card) px-4 py-3 border border-(--pres-border) rounded-xl font-mono text-(--pres-text) text-sm">
              Developer: Show Chat Debug Log
            </div>
            <div className="bg-(--pres-bg-card) px-4 py-3 border border-(--pres-border) rounded-xl font-mono text-(--pres-text) text-sm">
              Developer: Show Agent Debug Log
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
