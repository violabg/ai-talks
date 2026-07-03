"use client";

import * as motion from "motion/react-client";
import { ArrowTip, OBSERVABILITY_TAGS, SlideFrame } from "./slide-shared";

export function Slide01Title() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 justify-center items-center px-6 text-center">
        <motion.div
          className="mb-8 w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
        >
          <svg viewBox="0 0 820 260" className="w-full">
            {/* Left: code block */}
            <motion.g
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <rect
                x="30"
                y="105"
                width="180"
                height="60"
                rx="14"
                fill="color-mix(in srgb, var(--pres-blue) 12%, transparent)"
                stroke="var(--pres-blue)"
                strokeWidth="1.8"
              />
              <text
                x="120"
                y="132"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="14"
                fontFamily="monospace"
              >
                codice
              </text>
              <text
                x="120"
                y="150"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="12"
                fontFamily="monospace"
              >
                in modifica
              </text>
            </motion.g>

            {/* Center: eye */}
            <motion.g
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              style={{ transformOrigin: "410px 135px" }}
            >
              <ellipse
                cx="410"
                cy="135"
                rx="95"
                ry="55"
                fill="color-mix(in srgb, var(--pres-accent) 10%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              <circle cx="410" cy="135" r="26" fill="var(--pres-accent)" />
              <motion.circle
                cx="410"
                cy="135"
                r="10"
                fill="var(--pres-bg)"
                initial={{ scale: 0.6 }}
                animate={{ scale: [0.7, 1, 0.7] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "410px 135px" }}
              />
              <text
                x="410"
                y="212"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="12"
                fontFamily="monospace"
                letterSpacing="0.18em"
              >
                OBSERVE
              </text>
            </motion.g>

            {/* Right: output */}
            <motion.g
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <rect
                x="610"
                y="105"
                width="180"
                height="60"
                rx="14"
                fill="color-mix(in srgb, var(--pres-success) 12%, transparent)"
                stroke="var(--pres-success)"
                strokeWidth="1.8"
              />
              <text
                x="700"
                y="132"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="14"
                fontFamily="monospace"
              >
                risultato
              </text>
              <text
                x="700"
                y="150"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="12"
                fontFamily="monospace"
              >
                convergente
              </text>
            </motion.g>

            {/* Arrows */}
            <motion.path
              d="M 214 135 L 306 135"
              stroke="var(--pres-accent)"
              strokeWidth="2.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            />
            <ArrowTip x={310} y={135} color="var(--pres-accent)" delay={1.2} />
            <motion.path
              d="M 508 135 L 606 135"
              stroke="var(--pres-accent)"
              strokeWidth="2.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.05 }}
            />
            <ArrowTip x={610} y={135} color="var(--pres-accent)" delay={1.5} />
          </svg>
        </motion.div>

        <motion.h1
          className="max-w-5xl font-display text-4xl sm:text-5xl lg:text-6xl text-balance tracking-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          Observability per{" "}
          <span className="text-[var(--pres-accent)]">coding agent</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-3xl text-[var(--pres-text-sub)] text-base sm:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
        >
          Perché l&apos;observability sblocca la caparbietà degli agenti AI.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
        >
          {OBSERVABILITY_TAGS.map((tag) => (
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
