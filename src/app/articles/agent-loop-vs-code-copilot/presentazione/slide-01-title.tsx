"use client";

import * as motion from "motion/react-client";
import { AGENT_LOOP_TAGS, ArrowTip, SlideFrame } from "./slide-shared";

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
            {/* Input prompt */}
            <motion.g
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <rect
                x="30"
                y="110"
                width="180"
                height="50"
                rx="14"
                fill="color-mix(in srgb, var(--pres-blue) 12%, transparent)"
                stroke="var(--pres-blue)"
                strokeWidth="1.8"
              />
              <text
                x="120"
                y="142"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="16"
                fontFamily="monospace"
              >
                prompt
              </text>
            </motion.g>

            {/* Loop circle */}
            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              style={{ transformOrigin: "410px 135px" }}
            >
              <circle
                cx="410"
                cy="135"
                r="90"
                fill="color-mix(in srgb, var(--pres-accent) 10%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              <text
                x="410"
                y="130"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="13"
                fontFamily="monospace"
              >
                WHILE
              </text>
              <text
                x="410"
                y="158"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="26"
                fontWeight="700"
              >
                loop
              </text>
            </motion.g>

            {/* Orbiting dot */}
            <motion.circle
              cx="410"
              cy="45"
              r="6"
              fill="var(--pres-accent)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              style={{ transformOrigin: "410px 135px" }}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 410 135"
                to="360 410 135"
                dur="3s"
                repeatCount="indefinite"
              />
            </motion.circle>

            {/* Output */}
            <motion.g
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <rect
                x="610"
                y="110"
                width="180"
                height="50"
                rx="14"
                fill="color-mix(in srgb, var(--pres-success) 12%, transparent)"
                stroke="var(--pres-success)"
                strokeWidth="1.8"
              />
              <text
                x="700"
                y="142"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="16"
                fontFamily="monospace"
              >
                response
              </text>
            </motion.g>

            {/* Arrows */}
            <motion.path
              d="M 212 135 L 316 135"
              stroke="var(--pres-accent)"
              strokeWidth="2.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            />
            <ArrowTip x={316} y={135} color="var(--pres-accent)" delay={1.25} />
            <motion.path
              d="M 504 135 L 606 135"
              stroke="var(--pres-accent)"
              strokeWidth="2.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.05 }}
            />
            <ArrowTip x={606} y={135} color="var(--pres-accent)" delay={1.55} />
          </svg>
        </motion.div>

        <motion.h1
          className="max-w-5xl font-display text-4xl sm:text-5xl lg:text-6xl text-balance tracking-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          Dentro l&apos;
          <span className="text-[var(--pres-accent)]">agent loop</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-3xl text-[var(--pres-text-sub)] text-base sm:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
        >
          Cosa succede davvero quando premi invio in VS Code Copilot.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
        >
          {AGENT_LOOP_TAGS.map((tag) => (
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
