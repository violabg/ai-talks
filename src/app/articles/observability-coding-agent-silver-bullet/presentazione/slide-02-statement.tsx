"use client";

import * as motion from "motion/react-client";
import { SlideFrame } from "./slide-shared";

export function Slide02Statement() {
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
            il silver bullet
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-balance leading-[1.05] tracking-tight">
            Non serve il{" "}
            <span className="text-(--pres-muted)">prompt perfetto</span>.
            <br />
            Serve dare{" "}
            <span className="text-(--pres-accent)">occhi all&apos;agente</span>.
          </h2>
          <motion.p
            className="mx-auto mt-8 max-w-3xl text-(--pres-text-sub) text-base sm:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Rendere l&apos;agente capace di osservare lo stato reale di quello
            che sta facendo sposta l&apos;ago della bilancia più di qualunque
            trucco di prompt engineering.
          </motion.p>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
