"use client";

import * as motion from "motion/react-client";
import { ArrowTip, SlideFrame, SlideHeading } from "./slide-shared";

export function Slide07SubAgent() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="sub-agent"
        title="Un tool che apre un nuovo loop"
        description="Il modello principale invoca run sub-agent come un qualunque tool. Parte un loop isolato, con contesto fresco. Al termine, ritorna un risultato come una funzione."
      />

      <div className="flex flex-1 justify-center items-center px-4">
        <div className="w-full max-w-5xl">
          <svg viewBox="0 0 760 360" className="w-full">
            {/* Main loop box */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <rect
                x="30"
                y="30"
                width="320"
                height="300"
                rx="22"
                fill="color-mix(in srgb, var(--pres-accent) 8%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <text
                x="190"
                y="60"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="12"
                fontFamily="monospace"
              >
                MAIN LOOP
              </text>
              <text
                x="190"
                y="88"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="18"
                fontWeight="700"
              >
                agente principale
              </text>
              <text
                x="190"
                y="112"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="12"
              >
                modello: Opus · contesto completo
              </text>

              {/* tool: run sub-agent */}
              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ transformOrigin: "190px 200px" }}
              >
                <rect
                  x="70"
                  y="168"
                  width="240"
                  height="60"
                  rx="12"
                  fill="var(--pres-bg-node)"
                  stroke="var(--pres-warning)"
                  strokeWidth="1.8"
                />
                <text
                  x="190"
                  y="194"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="15"
                  fontFamily="monospace"
                >
                  tool: run_sub_agent
                </text>
                <text
                  x="190"
                  y="214"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="12"
                >
                  goal = &quot;raccogli contesto&quot;
                </text>
              </motion.g>

              <text
                x="190"
                y="280"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="13"
                fontStyle="italic"
              >
                risultato appeso al contesto
              </text>
            </motion.g>

            {/* Sub loop */}
            <motion.g
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.9 }}
            >
              <rect
                x="430"
                y="60"
                width="300"
                height="240"
                rx="22"
                fill="color-mix(in srgb, var(--pres-blue) 10%, transparent)"
                stroke="var(--pres-blue)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <text
                x="580"
                y="90"
                textAnchor="middle"
                fill="var(--pres-blue)"
                fontSize="12"
                fontFamily="monospace"
              >
                SUB LOOP
              </text>
              <text
                x="580"
                y="118"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="18"
                fontWeight="700"
              >
                contesto fresco
              </text>

              <rect
                x="470"
                y="150"
                width="220"
                height="40"
                rx="10"
                fill="var(--pres-bg-node)"
                stroke="var(--pres-muted)"
                strokeWidth="1.4"
              />
              <text
                x="580"
                y="175"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="13"
                fontFamily="monospace"
              >
                grep · read · search
              </text>

              <rect
                x="470"
                y="210"
                width="220"
                height="40"
                rx="10"
                fill="var(--pres-bg-node)"
                stroke="var(--pres-muted)"
                strokeWidth="1.4"
              />
              <text
                x="580"
                y="235"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="13"
                fontFamily="monospace"
              >
                sintetizza → return
              </text>
            </motion.g>

            {/* Arrow main -> sub */}
            <motion.path
              d="M 356 198 L 426 180"
              stroke="var(--pres-accent)"
              strokeWidth="2.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <ArrowTip
              x={426}
              y={180}
              angle={-14}
              color="var(--pres-accent)"
              delay={1.7}
            />
            {/* Arrow sub -> main (result) */}
            <motion.path
              d="M 426 240 L 356 240"
              stroke="var(--pres-success)"
              strokeWidth="2.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.45 }}
            />
            <ArrowTip
              x={356}
              y={240}
              angle={180}
              color="var(--pres-success)"
              delay={1.95}
            />
          </svg>
        </div>
      </div>
    </SlideFrame>
  );
}
