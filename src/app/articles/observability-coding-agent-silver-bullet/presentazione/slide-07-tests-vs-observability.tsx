"use client";

import * as motion from "motion/react-client";
import { SlideFrame } from "./slide-shared";

export function Slide07TestsVsObservability() {
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
              "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--pres-warning) 12%, transparent), transparent 55%)",
          }}
        />

        <motion.div
          className="z-10 relative max-w-5xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="mb-4 font-mono text-(--pres-muted) text-sm uppercase tracking-[0.28em]">
            contro-obiezione
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.1] tracking-tight">
            I test dicono <span className="text-(--pres-warning)">cosa</span>.
            <br />
            L&apos;observability dice{" "}
            <span className="text-(--pres-accent)">perché</span>.
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mx-auto mt-8 max-w-3xl text-(--pres-text-sub) text-base sm:text-xl leading-relaxed"
          >
            Un agente che ripiega su{" "}
            <code className="font-mono text-(--pres-accent)">printf</code>{" "}
            ovunque non è pigro. È cieco. La stampa è il sintomo, non la
            soluzione.
          </motion.p>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
