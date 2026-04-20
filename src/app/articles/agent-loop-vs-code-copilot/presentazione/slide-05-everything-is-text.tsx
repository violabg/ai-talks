"use client";

import * as motion from "motion/react-client";
import { ArrowTip, SlideFrame, SlideHeading } from "./slide-shared";

const sources = [
  { label: "istruzione globale", delay: 0.2 },
  { label: "skill", delay: 0.3 },
  { label: "prompt file", delay: 0.4 },
  { label: "server MCP", delay: 0.5 },
];

export function Slide05EverythingIsText() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="demistificazione"
        title="Tutto è testo appeso al contesto"
        description="Istruzioni, skill, prompt file, MCP: nomi diversi, stesso meccanismo. Appendono testo al prompt oppure aggiungono tool alla lista."
      />

      <div className="flex flex-1 justify-center items-center px-4">
        <div className="w-full max-w-5xl">
          <svg viewBox="0 0 760 340" className="w-full">
            {sources.map((s, i) => {
              const y = 30 + i * 70;
              return (
                <motion.g
                  key={s.label}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: s.delay }}
                >
                  <rect
                    x="30"
                    y={y}
                    width="220"
                    height="50"
                    rx="12"
                    fill="var(--pres-bg-node)"
                    stroke="var(--pres-muted)"
                    strokeWidth="1.5"
                  />
                  <text
                    x="140"
                    y={y + 30}
                    textAnchor="middle"
                    fill="var(--pres-text)"
                    fontSize="15"
                    fontFamily="monospace"
                  >
                    {s.label}
                  </text>
                  <motion.path
                    d={`M 254 ${y + 25} L 456 ${y + 25}`}
                    stroke="var(--pres-accent)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: s.delay + 0.25 }}
                  />
                  <ArrowTip
                    x={456}
                    y={y + 25}
                    color="var(--pres-accent)"
                    delay={s.delay + 0.75}
                  />
                </motion.g>
              );
            })}

            <motion.g
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.9 }}
              style={{ transformOrigin: "590px 170px" }}
            >
              <rect
                x="460"
                y="50"
                width="270"
                height="240"
                rx="22"
                fill="color-mix(in srgb, var(--pres-accent) 10%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              <text
                x="595"
                y="90"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="12"
                fontFamily="monospace"
              >
                SAME TARGET
              </text>
              <text
                x="595"
                y="148"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="24"
                fontWeight="700"
              >
                contesto
              </text>
              <text
                x="595"
                y="184"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="18"
                fontFamily="monospace"
              >
                +
              </text>
              <text
                x="595"
                y="220"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="24"
                fontWeight="700"
              >
                tool list
              </text>
              <text
                x="595"
                y="260"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="13"
              >
                → passati al modello
              </text>
            </motion.g>
          </svg>
        </div>
      </div>
    </SlideFrame>
  );
}
