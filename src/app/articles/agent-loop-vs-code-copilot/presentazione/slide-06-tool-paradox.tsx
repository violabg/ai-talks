"use client";

import * as motion from "motion/react-client";
import { SlideFrame, SlideHeading } from "./slide-shared";

export function Slide06ToolParadox() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="il paradosso delle troppe scelte"
        title="Più tool non significa meglio"
        description="Come per le persone, anche i modelli peggiorano nella scelta quando le opzioni crescono. Il team VS Code usa modelli custom per restringere la tool list rilevante."
      />

      <div className="flex flex-1 items-stretch gap-6 px-4">
        <motion.div
          className="flex flex-col flex-1 justify-between bg-[color:var(--pres-bg-card)] p-8 border border-(--pres-border) rounded-3xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <div className="mb-3 font-mono text-(--pres-success) text-sm uppercase tracking-widest">
              pochi tool
            </div>
            <div className="mb-4 font-display font-bold text-5xl sm:text-6xl">
              10
            </div>
            <p className="text-(--pres-text-sub) text-base leading-relaxed">
              Scelta semplice. Il modello identifica il tool giusto al primo
              tentativo. Turni brevi, output coerente.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-end gap-1.5 h-20">
              {[80, 88, 90, 92, 90, 88, 86].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-(--pres-success) rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                />
              ))}
            </div>
            <div className="mt-2 font-mono text-(--pres-muted) text-sm">
              qualità scelta →
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col flex-1 justify-between bg-[color:var(--pres-bg-card)] p-8 border border-(--pres-border) rounded-3xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <div className="mb-3 font-mono text-(--pres-danger) text-sm uppercase tracking-widest">
              tanti tool
            </div>
            <div className="mb-4 font-display font-bold text-5xl sm:text-6xl">
              1000
            </div>
            <p className="text-(--pres-text-sub) text-base leading-relaxed">
              Troppe opzioni. Il modello esita, sbaglia tool, itera di più. Il
              contesto si riempie, la qualità crolla.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-end gap-1.5 h-20">
              {[82, 72, 60, 48, 38, 32, 28].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-(--pres-danger) rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                />
              ))}
            </div>
            <div className="mt-2 font-mono text-(--pres-muted) text-sm">
              qualità scelta →
            </div>
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
