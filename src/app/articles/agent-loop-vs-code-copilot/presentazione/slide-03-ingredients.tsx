"use client";

import * as motion from "motion/react-client";
import { ArrowTip, SlideFrame, SlideHeading } from "./slide-shared";

const layers = [
  {
    label: "system prompt",
    desc: "dinamico, tarato per modello",
    color: "var(--pres-accent)",
    delay: 0.2,
  },
  {
    label: "contesto",
    desc: "file aperti, terminali, data, env",
    color: "var(--pres-blue)",
    delay: 0.35,
  },
  {
    label: "tool",
    desc: "search, edit, read, MCP, sub-agent",
    color: "var(--pres-success)",
    delay: 0.5,
  },
  {
    label: "user prompt",
    desc: "il testo che scrivi tu",
    color: "var(--pres-warning)",
    delay: 0.65,
  },
];

export function Slide03Ingredients() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="anatomia di una richiesta"
        title="Quattro ingredienti, ogni volta"
        description="Ogni chiamata al modello impila questi blocchi e li passa come input. Capire i quattro strati significa capire tutto il resto."
      />

      <div className="flex flex-1 justify-center items-center px-4">
        <div className="w-full max-w-4xl">
          <svg viewBox="0 0 700 360" className="w-full">
            {layers.map((l, i) => {
              const y = 20 + i * 62;
              return (
                <motion.g
                  key={l.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: l.delay }}
                >
                  <rect
                    x="30"
                    y={y}
                    width="440"
                    height="48"
                    rx="12"
                    fill={`color-mix(in srgb, ${l.color} 12%, transparent)`}
                    stroke={l.color}
                    strokeWidth="1.8"
                  />
                  <text
                    x="50"
                    y={y + 22}
                    fill="var(--pres-text)"
                    fontSize="16"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    {l.label}
                  </text>
                  <text
                    x="50"
                    y={y + 40}
                    fill="var(--pres-text-sub)"
                    fontSize="12"
                  >
                    {l.desc}
                  </text>
                </motion.g>
              );
            })}

            {/* Arrow to model */}
            <motion.path
              d="M 476 178 L 556 178"
              stroke="var(--pres-accent)"
              strokeWidth="2.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />
            <ArrowTip x={556} y={178} color="var(--pres-accent)" delay={1.4} />

            {/* Model box */}
            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{ transformOrigin: "615px 178px" }}
            >
              <rect
                x="560"
                y="130"
                width="120"
                height="96"
                rx="18"
                fill="color-mix(in srgb, var(--pres-accent) 14%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              <text
                x="620"
                y="168"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="12"
                fontFamily="monospace"
              >
                MODEL
              </text>
              <text
                x="620"
                y="196"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="18"
                fontWeight="700"
              >
                API
              </text>
            </motion.g>
          </svg>
        </div>
      </div>
    </SlideFrame>
  );
}
