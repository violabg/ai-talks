"use client";

import * as motion from "motion/react-client";
import { SlideFrame } from "./slide-shared";

const echoes = [
  { label: "stessa istruzione", x: 10, y: 24, delay: 0.3 },
  { label: "stesso reminder", x: 74, y: 18, delay: 0.45 },
  { label: "stesso workaround", x: 18, y: 74, delay: 0.6 },
  { label: "stesso formato PR", x: 70, y: 76, delay: 0.75 },
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
              "radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--pres-accent) 14%, transparent), transparent 44%), radial-gradient(circle at 80% 70%, color-mix(in srgb, var(--pres-blue) 8%, transparent), transparent 30%)",
          }}
        />

        <motion.div
          className="z-10 relative max-w-5xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="mb-4 font-mono text-(--pres-muted) text-sm uppercase tracking-[0.28em]">
            il vero problema
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-balance leading-[1.05] tracking-tight">
            Il problema non è conoscere tutte le funzionalità.
            <span className="text-(--pres-accent)">
              {" "}
              È usare bene quelle che già usi
            </span>
            .
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-(--pres-text-sub) text-base sm:text-xl leading-relaxed">
            Dove stai perdendo tempo, dove le istruzioni sono incomplete, dove
            stai chiedendo a mano ciò che potresti automatizzare.
          </p>

          <div className="md:hidden flex flex-wrap justify-center gap-3 mt-8">
            {echoes.map((e) => (
              <motion.div
                key={`mobile-${e.label}`}
                className="bg-(--pres-bg-node) px-4 py-2 border border-(--pres-border) rounded-full font-mono text-(--pres-muted) text-sm uppercase tracking-widest"
                initial={{ opacity: 0, scale: 0.9, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: e.delay, duration: 0.45 }}
              >
                {e.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {echoes.map((e) => (
          <motion.div
            key={e.label}
            className="hidden md:block absolute bg-(--pres-bg-node) px-4 py-2 border border-(--pres-border) rounded-full font-mono text-(--pres-muted) text-sm uppercase tracking-widest"
            style={{ left: `${e.x}%`, top: `${e.y}%` }}
            initial={{ opacity: 0, scale: 0.9, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: e.delay, duration: 0.45 }}
          >
            {e.label}
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}
