"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const inputs = [
  {
    label: "prompt",
    sub: "ogni domanda posta",
    y: 60,
    color: "var(--pres-blue)",
    delay: 0.2,
  },
  {
    label: "debug paths",
    sub: "anche quelli falliti",
    y: 150,
    color: "var(--pres-warning)",
    delay: 0.35,
  },
  {
    label: "pattern ricorrenti",
    sub: "argomenti e tono",
    y: 240,
    color: "var(--pres-success)",
    delay: 0.5,
  },
];

export function Slide03WhatRecords() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="cosa registra"
        title="Ogni sessione, ogni prompt, ogni percorso — anche quelli sbagliati"
        description="chronicle non è telemetria. È un archivio indicizzato dei log che già vivono sul tuo disco, nella directory ~/copilot."
      />
      <div className="flex flex-1 items-center">
        <GlowCard className="p-4 sm:p-6 w-full">
          <div className="mx-auto w-full max-w-5xl">
            <svg viewBox="0 0 820 360" className="w-full">
              <defs>
                <linearGradient id="record-flow" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--pres-blue)" />
                  <stop offset="100%" stopColor="var(--pres-accent)" />
                </linearGradient>
              </defs>

              {inputs.map((input) => (
                <motion.g
                  key={input.label}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: input.delay }}
                >
                  <rect
                    x="30"
                    y={input.y}
                    width="250"
                    height="62"
                    rx="18"
                    fill="var(--pres-bg-node)"
                    stroke={input.color}
                    strokeWidth="2"
                  />
                  <text
                    x="155"
                    y={input.y + 28}
                    textAnchor="middle"
                    fill={input.color}
                    fontSize="13"
                    fontFamily="monospace"
                  >
                    INPUT
                  </text>
                  <text
                    x="155"
                    y={input.y + 50}
                    textAnchor="middle"
                    fill="var(--pres-text)"
                    fontSize="22"
                    fontWeight="700"
                  >
                    {input.label}
                  </text>
                </motion.g>
              ))}

              {inputs.map((input) => (
                <motion.path
                  key={`path-${input.label}`}
                  d={`M280 ${input.y + 31}C360 ${input.y + 31} 400 180 490 180`}
                  fill="none"
                  stroke="url(#record-flow)"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.7, delay: input.delay + 0.25 }}
                />
              ))}

              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.95 }}
                style={{ transformOrigin: "620px 180px" }}
              >
                <rect
                  x="490"
                  y="100"
                  width="300"
                  height="160"
                  rx="28"
                  fill="color-mix(in srgb, var(--pres-accent) 12%, transparent)"
                  stroke="var(--pres-accent)"
                  strokeWidth="2"
                />
                <text
                  x="640"
                  y="134"
                  textAnchor="middle"
                  fill="var(--pres-accent)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  DATABASE SQLITE
                </text>
                <text
                  x="640"
                  y="178"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="30"
                  fontWeight="700"
                >
                  chronicle.db
                </text>
                <text
                  x="640"
                  y="208"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="14"
                  fontFamily="monospace"
                >
                  ~/copilot
                </text>
                <motion.g
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.15 }}
                >
                  <rect
                    x="540"
                    y="225"
                    width="200"
                    height="26"
                    rx="13"
                    fill="var(--pres-bg-node)"
                    stroke="var(--pres-success)"
                    strokeWidth="1.5"
                  />
                  <text
                    x="640"
                    y="243"
                    textAnchor="middle"
                    fill="var(--pres-success)"
                    fontSize="12"
                    fontFamily="monospace"
                  >
                    LOCALE · MAI INVIATO
                  </text>
                </motion.g>
              </motion.g>
            </svg>
          </div>
        </GlowCard>
      </div>
    </SlideFrame>
  );
}
