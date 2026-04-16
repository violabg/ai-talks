"use client";

import * as motion from "motion/react-client";
import { SlideFrame } from "./slide-shared";

const problems = [
  { label: "allucinazioni", x: 16, y: 22, delay: 0.2 },
  { label: "test compiacenti", x: 68, y: 18, delay: 0.35 },
  { label: "loop di errore", x: 44, y: 74, delay: 0.5 },
];

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
              "radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--pres-accent) 12%, transparent), transparent 42%), radial-gradient(circle at 24% 74%, color-mix(in srgb, var(--pres-blue) 9%, transparent), transparent 28%)",
          }}
        />
        <motion.div
          className="z-10 relative max-w-5xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="mb-4 font-mono text-(--pres-muted) text-sm uppercase tracking-[0.28em]">
            problema strutturale
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-balance leading-[1.02] tracking-tight">
            Un singolo modello tende a
            <span className="text-(--pres-danger)">
              {" "}
              ripetere i propri errori
            </span>
            .
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-(--pres-text-sub) text-base sm:text-xl leading-relaxed">
            Rubber Duck nasce per interrompere i punti ciechi sistematici, non
            per aggiungere un secondo autore al codice.
          </p>

          <div className="md:hidden flex flex-wrap justify-center gap-3 mt-8">
            {problems.map((problem) => (
              <motion.div
                key={`mobile-${problem.label}`}
                className="bg-(--pres-bg-node) px-4 py-2 border border-(--pres-border) rounded-full font-mono text-(--pres-muted) text-sm uppercase tracking-widest"
                initial={{ opacity: 0, scale: 0.9, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: problem.delay, duration: 0.45 }}
              >
                {problem.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {problems.map((problem) => (
          <motion.div
            key={problem.label}
            className="hidden md:block absolute bg-(--pres-bg-node) px-4 py-2 border border-(--pres-border) rounded-full font-mono text-(--pres-muted) text-sm uppercase tracking-widest"
            style={{ left: `${problem.x}%`, top: `${problem.y}%` }}
            initial={{ opacity: 0, scale: 0.9, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: problem.delay, duration: 0.45 }}
          >
            {problem.label}
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}
