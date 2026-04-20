"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

export function Slide07McpGuardrail() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="MCP"
        title="La review non e' solo statistica: puo' interrogare documentazione aggiornata"
        description="Quando un modello operativo usa conoscenza obsoleta, Rubber Duck puo' verificare contro fonti vive via MCP e intercettare rename o deprecazioni."
        titleClassName="max-w-5xl lg:text-[3.9rem]"
        descriptionClassName="max-w-4xl"
      />
      <div className="flex flex-1 items-center">
        <GlowCard className="relative p-5 sm:p-6 w-full overflow-hidden">
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 960 340" className="w-full h-full">
              <defs>
                <linearGradient id="mcp-line" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--pres-blue)" />
                  <stop offset="100%" stopColor="var(--pres-success)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M270 170C365 170 374 102 486 102"
                fill="none"
                stroke="url(#mcp-line)"
                strokeWidth="4"
                strokeDasharray="10 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.72, delay: 0.36 }}
              />
              <motion.path
                d="M270 180C360 180 388 260 486 260"
                fill="none"
                stroke="var(--pres-border)"
                strokeWidth="3"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 0.72, delay: 0.52 }}
              />
            </svg>
          </div>

          <div className="relative gap-4 grid lg:grid-cols-[0.95fr_1.25fr] lg:grid-rows-2">
            <motion.div
              className="lg:row-span-2"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42, delay: 0.14 }}
            >
              <div className="flex justify-center items-center rounded-[2rem] border border-(--pres-blue) bg-[color-mix(in_srgb,var(--pres-blue)_10%,transparent)] p-6 min-h-62 h-full text-center">
                <div>
                  <div className="mb-3 font-mono text-(--pres-blue) text-sm uppercase tracking-[0.22em]">
                    RUBBER DUCK
                  </div>
                  <h3 className="mb-2 font-display text-4xl text-(--pres-text)">
                    consulta
                  </h3>
                  <p className="text-(--pres-text-sub) text-lg leading-relaxed">
                    modello + server MCP
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.3 }}
            >
              <div className="rounded-[2rem] border border-(--pres-success) bg-(--pres-bg-node) p-5 min-h-28">
                <div className="mb-2 font-mono text-(--pres-success) text-sm uppercase tracking-[0.22em]">
                  DOCS LIVE
                </div>
                <h3 className="mb-1 font-display text-3xl leading-none text-(--pres-text)">
                  Next.js corrente
                </h3>
                <p className="text-(--pres-text-sub) text-base leading-relaxed">
                  verifica API, rename, convenzioni supportate
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.46 }}
            >
              <div className="rounded-[2rem] border border-(--pres-danger) bg-[color-mix(in_srgb,var(--pres-danger)_8%,transparent)] p-5 min-h-28">
                <div className="mb-2 font-mono text-(--pres-danger) text-sm uppercase tracking-[0.22em]">
                  ERRORE EVITATO
                </div>
                <h3 className="mb-1 font-display text-3xl leading-none text-(--pres-text)">
                  middleware -&gt; proxy
                </h3>
                <p className="text-(--pres-text-sub) text-base leading-relaxed">
                  la correzione arriva prima del runtime e prima del rework
                </p>
              </div>
            </motion.div>
          </div>
        </GlowCard>
      </div>
    </SlideFrame>
  );
}
