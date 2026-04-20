"use client";

import * as motion from "motion/react-client";
import { ArrowTip, SlideFrame, SlideHeading } from "./slide-shared";

export function Slide04TurnFlow() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="il turno, passo per passo"
        title="Modello, decisione, tool, ripeti"
        description="A ogni iterazione il modello sceglie: rispondo con testo o invoco un tool? L'output del tool rientra nel contesto e alimenta il turno successivo."
      />

      <div className="flex flex-1 justify-center items-center px-4">
        <div className="w-full max-w-5xl">
          <svg viewBox="0 0 760 380" className="w-full">
            {/* Prompt */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <rect
                x="30"
                y="150"
                width="130"
                height="60"
                rx="12"
                fill="color-mix(in srgb, var(--pres-blue) 12%, transparent)"
                stroke="var(--pres-blue)"
                strokeWidth="1.8"
              />
              <text
                x="95"
                y="186"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="15"
                fontFamily="monospace"
              >
                prompt
              </text>
            </motion.g>

            {/* Model */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <rect
                x="220"
                y="140"
                width="140"
                height="80"
                rx="14"
                fill="color-mix(in srgb, var(--pres-accent) 12%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              <text
                x="290"
                y="170"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="11"
                fontFamily="monospace"
              >
                MODEL
              </text>
              <text
                x="290"
                y="198"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="16"
                fontWeight="700"
              >
                decide
              </text>
            </motion.g>

            {/* Decision: text or tool */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <rect
                x="430"
                y="50"
                width="150"
                height="60"
                rx="12"
                fill="color-mix(in srgb, var(--pres-success) 12%, transparent)"
                stroke="var(--pres-success)"
                strokeWidth="1.8"
              />
              <text
                x="505"
                y="80"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="14"
                fontFamily="monospace"
              >
                testo → fine
              </text>
              <text
                x="505"
                y="98"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="11"
              >
                stop message
              </text>
            </motion.g>

            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
            >
              <rect
                x="430"
                y="250"
                width="150"
                height="60"
                rx="12"
                fill="color-mix(in srgb, var(--pres-warning) 12%, transparent)"
                stroke="var(--pres-warning)"
                strokeWidth="1.8"
              />
              <text
                x="505"
                y="280"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="14"
                fontFamily="monospace"
              >
                tool call
              </text>
              <text
                x="505"
                y="298"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="11"
              >
                search / edit / read
              </text>
            </motion.g>

            {/* Exec */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.3 }}
            >
              <rect
                x="630"
                y="250"
                width="110"
                height="60"
                rx="12"
                fill="var(--pres-bg-node)"
                stroke="var(--pres-muted)"
                strokeWidth="1.5"
              />
              <text
                x="685"
                y="286"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="14"
                fontFamily="monospace"
              >
                exec
              </text>
            </motion.g>

            {/* Arrows */}
            <motion.path
              d="M 162 180 L 216 180"
              stroke="var(--pres-accent)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
            <ArrowTip x={216} y={180} color="var(--pres-accent)" delay={0.7} />
            <motion.path
              d="M 362 165 C 400 130, 400 90, 426 80"
              stroke="var(--pres-accent)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            />
            <ArrowTip
              x={426}
              y={80}
              angle={-21}
              color="var(--pres-accent)"
              delay={1.25}
            />
            <motion.path
              d="M 362 195 C 400 230, 400 270, 426 280"
              stroke="var(--pres-accent)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.95 }}
            />
            <ArrowTip
              x={426}
              y={280}
              angle={21}
              color="var(--pres-accent)"
              delay={1.45}
            />
            <motion.path
              d="M 582 280 L 626 280"
              stroke="var(--pres-accent)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            />
            <ArrowTip x={626} y={280} color="var(--pres-accent)" delay={1.6} />

            {/* Loop back: output → prompt context */}
            <motion.path
              d="M 685 250 C 685 120, 290 80, 290 136"
              stroke="var(--pres-accent)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            />
            <ArrowTip
              x={290}
              y={136}
              angle={90}
              color="var(--pres-accent)"
              delay={2.1}
            />
            <motion.text
              x="500"
              y="50"
              textAnchor="middle"
              fill="var(--pres-text-sub)"
              fontSize="12"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
            >
              append output → next turn
            </motion.text>
          </svg>
        </div>
      </div>
    </SlideFrame>
  );
}
