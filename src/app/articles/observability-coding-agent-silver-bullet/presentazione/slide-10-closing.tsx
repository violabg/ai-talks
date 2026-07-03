"use client";

import * as motion from "motion/react-client";
import { fadeIn, SlideFrame } from "./slide-shared";

const PRINCIPLES = [
  { n: "01", text: "Investi in observability prima del task, non dopo." },
  {
    n: "02",
    text: "La caparbietà è una risorsa solo se ha su cosa esercitarsi.",
  },
  {
    n: "03",
    text: "I test sono un pezzo dell'observability, non l'observability.",
  },
  { n: "04", text: "Vale a prescindere da linguaggio, dominio e modello." },
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
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight">
            Dai loro gli <span className="text-(--pres-accent)">occhi</span>{" "}
            prima di dare loro il compito.
          </h2>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mx-auto mt-10 max-w-3xl text-left">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.n}
                {...fadeIn(0.6 + i * 0.12)}
                className="flex items-start gap-3 bg-(--pres-bg-card) p-4 border border-(--pres-border) rounded-xl"
              >
                <div className="font-mono text-(--pres-accent) text-sm tracking-wider">
                  {p.n}
                </div>
                <div className="text-(--pres-text) text-sm sm:text-base leading-relaxed">
                  {p.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
