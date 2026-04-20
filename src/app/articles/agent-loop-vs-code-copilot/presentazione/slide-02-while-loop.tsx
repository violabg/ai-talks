"use client";

import * as motion from "motion/react-client";
import { SlideFrame } from "./slide-shared";

export function Slide02WhileLoop() {
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
              "radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--pres-accent) 14%, transparent), transparent 44%)",
          }}
        />

        <motion.div
          className="z-10 relative max-w-5xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="mb-4 font-mono text-(--pres-muted) text-sm uppercase tracking-[0.28em]">
            il mental model
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-balance leading-[1.05] tracking-tight">
            Un grande
            <span className="text-(--pres-accent)"> while loop</span>
            <span className="inline-block ml-2 animate-pulse">_</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-(--pres-text-sub) text-base sm:text-xl leading-relaxed">
            Parte quando premi invio. A ogni iterazione, una chiamata al modello.
            Si ferma solo quando il modello dice «ho finito».
          </p>

          <motion.div
            className="flex justify-center gap-4 mt-10 font-mono text-(--pres-text-sub) text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-(--pres-accent)">while</span>
            <span>(</span>
            <span className="text-(--pres-blue)">!done</span>
            <span>)</span>
            <span>&#123;</span>
            <span className="text-(--pres-text-sub)">...</span>
            <span>&#125;</span>
          </motion.div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
