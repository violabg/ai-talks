"use client";

import * as motion from "motion/react-client";
import { RUBBER_DUCK_TAGS, SlideFrame } from "./slide-shared";

export function Slide01Title() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 justify-center items-center px-6 text-center">
        <motion.div
          className="mb-8 w-full max-w-5xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
        >
          <svg viewBox="0 0 840 250" className="w-full">
            <motion.path
              d="M150 125C235 125 250 72 330 72C420 72 430 178 520 178C595 178 627 125 690 125"
              fill="none"
              stroke="var(--pres-border)"
              strokeWidth="3"
              strokeDasharray="10 10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            />
            <motion.g
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
            >
              <rect
                x="60"
                y="70"
                width="180"
                height="108"
                rx="24"
                fill="color-mix(in srgb, var(--pres-accent) 12%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              <text
                x="150"
                y="110"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="15"
                fontFamily="monospace"
              >
                MODELLO OPERATIVO
              </text>
              <text
                x="150"
                y="145"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="31"
                fontWeight="700"
              >
                Sonnet
              </text>
            </motion.g>
            <motion.g
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.65 }}
              style={{ transformOrigin: "420px 124px" }}
            >
              <circle
                cx="420"
                cy="124"
                r="56"
                fill="color-mix(in srgb, var(--pres-success) 12%, transparent)"
                stroke="var(--pres-success)"
                strokeWidth="2"
              />
              <text
                x="420"
                y="118"
                textAnchor="middle"
                fill="var(--pres-success)"
                fontSize="14"
                fontFamily="monospace"
              >
                CRITIQUE
              </text>
              <text
                x="420"
                y="138"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="16"
                fontWeight="700"
              >
                cross-check
              </text>
            </motion.g>
            <motion.g
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.45 }}
            >
              <rect
                x="600"
                y="70"
                width="180"
                height="108"
                rx="24"
                fill="color-mix(in srgb, var(--pres-blue) 12%, transparent)"
                stroke="var(--pres-blue)"
                strokeWidth="2"
              />
              <text
                x="690"
                y="110"
                textAnchor="middle"
                fill="var(--pres-blue)"
                fontSize="15"
                fontFamily="monospace"
              >
                RUBBER DUCK
              </text>
              <text
                x="690"
                y="145"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="31"
                fontWeight="700"
              >
                GPT-4
              </text>
            </motion.g>
          </svg>
        </motion.div>

        <motion.h1
          className="max-w-5xl font-display text-4xl sm:text-5xl lg:text-6xl text-balance tracking-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          Rubber Duck: il revisore che non scrive codice,
          <span className="text-[var(--pres-accent)]">
            {" "}
            corregge il processo
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-3xl text-[var(--pres-text-sub)] text-base sm:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          Critica incrociata tra famiglie di modelli, validazione dei test e
          recupero dai loop prima che l&apos;errore finisca nei file.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {RUBBER_DUCK_TAGS.map((tag) => (
            <span
              key={tag}
              className="bg-[var(--pres-bg-surface)] px-3 py-1.5 border border-[var(--pres-border)] rounded-full font-mono text-[var(--pres-muted)] text-sm uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </SlideFrame>
  );
}
