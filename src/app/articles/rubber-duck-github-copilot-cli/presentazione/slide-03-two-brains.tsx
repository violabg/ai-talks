"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const outputs = [
  { label: "piano", x: 146, y: 278, color: "var(--pres-accent)" },
  { label: "codice", x: 320, y: 278, color: "var(--pres-accent)" },
  { label: "test", x: 494, y: 278, color: "var(--pres-accent)" },
  { label: "docs MCP", x: 668, y: 278, color: "var(--pres-blue)" },
];

export function Slide03TwoBrains() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="architettura"
        title="Una pipeline a due cervelli, con ruoli diversi"
        description="Il modello operativo genera e pianifica. Rubber Duck non lo sostituisce: legge, critica e rimette il processo in asse quando trova incoerenze."
        titleClassName="max-w-5xl lg:text-[4rem]"
        descriptionClassName="max-w-4xl"
      />
      <div className="flex flex-1 items-center">
        <GlowCard className="p-4 sm:p-5 w-full">
          <div className="mx-auto w-full max-w-5xl">
            <svg viewBox="0 0 820 330" className="w-full">
              <defs>
                <linearGradient id="duck-flow" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--pres-accent)" />
                  <stop offset="100%" stopColor="var(--pres-blue)" />
                </linearGradient>
              </defs>

              {[0, 1, 2].map((index) => (
                <motion.path
                  key={index}
                  d={
                    index === 0
                      ? "M220 92C270 92 286 115 310 115"
                      : index === 1
                        ? "M510 115C548 115 566 92 590 92"
                        : "M410 175C410 206 410 216 410 236"
                  }
                  fill="none"
                  stroke={index === 2 ? "var(--pres-border)" : "url(#duck-flow)"}
                  strokeWidth="4"
                  strokeDasharray="10 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 0.7, delay: 0.35 + index * 0.18 }}
                />
              ))}

              <motion.g
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                <rect
                  x="40"
                  y="44"
                  width="180"
                  height="96"
                  rx="24"
                  fill="color-mix(in srgb, var(--pres-accent) 12%, transparent)"
                  stroke="var(--pres-accent)"
                  strokeWidth="2"
                />
                <text
                  x="130"
                  y="79"
                  textAnchor="middle"
                  fill="var(--pres-accent)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  MODELLO OPERATIVO
                </text>
                <text
                  x="130"
                  y="111"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="26"
                  fontWeight="700"
                >
                  genera
                </text>
                <text
                  x="130"
                  y="129"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="11.5"
                >
                  piano + file + test
                </text>
              </motion.g>

              <motion.g
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.4 }}
                style={{ transformOrigin: "410px 165px" }}
              >
                <rect
                  x="310"
                  y="58"
                  width="200"
                  height="126"
                  rx="30"
                  fill="color-mix(in srgb, var(--pres-success) 10%, transparent)"
                  stroke="var(--pres-success)"
                  strokeWidth="2"
                />
                <text
                  x="410"
                  y="92"
                  textAnchor="middle"
                  fill="var(--pres-success)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  RUBBER DUCK
                </text>
                <text
                  x="410"
                  y="128"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="28"
                  fontWeight="700"
                >
                  critica
                </text>
                <text
                  x="410"
                  y="150"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="11.5"
                >
                  controlla coerenza, API, logica
                </text>
                <text
                  x="410"
                  y="168"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="11.5"
                >
                  prima che l&apos;errore si propaghi
                </text>
              </motion.g>

              <motion.g
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.62 }}
              >
                <rect
                  x="590"
                  y="44"
                  width="190"
                  height="96"
                  rx="24"
                  fill="color-mix(in srgb, var(--pres-blue) 12%, transparent)"
                  stroke="var(--pres-blue)"
                  strokeWidth="2"
                />
                <text
                  x="685"
                  y="79"
                  textAnchor="middle"
                  fill="var(--pres-blue)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  FAMIGLIA DIVERSA
                </text>
                <text
                  x="685"
                  y="112"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="24"
                  fontWeight="700"
                >
                  indipendenza
                </text>
                <text
                  x="685"
                  y="130"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="11.5"
                >
                  meno errori condivisi
                </text>
              </motion.g>

              {outputs.map((item, index) => (
                <motion.g
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.85 + index * 0.1 }}
                >
                  <rect
                    x={item.x - 54}
                    y={item.y - 20}
                    width="108"
                    height="40"
                    rx="16"
                    fill="var(--pres-bg-node)"
                    stroke={item.color}
                    strokeWidth="1.8"
                  />
                  <text
                    x={item.x}
                    y={item.y + 4}
                    textAnchor="middle"
                    fill={item.color}
                    fontSize="13"
                    fontFamily="monospace"
                  >
                    {item.label}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </GlowCard>
      </div>
    </SlideFrame>
  );
}
