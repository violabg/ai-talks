"use client";

import * as motion from "motion/react-client";
import { ArrowTip, SlideFrame, SlideHeading } from "./slide-shared";

export function Slide10Trajectory() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="valutazione"
        title="La traiettoria, non solo il risultato"
        description="Il team non misura solo risolto sì/no. Guarda quali passi ha fatto l'agente, in che ordine, con quante iterazioni. L'obiettivo: stessa qualità in meno passi."
      />

      <div className="flex flex-1 justify-center items-center px-4">
        <div className="w-full max-w-5xl">
          <svg viewBox="0 0 760 340" className="w-full">
            {/* Start */}
            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <circle
                cx="60"
                cy="170"
                r="34"
                fill="color-mix(in srgb, var(--pres-blue) 14%, transparent)"
                stroke="var(--pres-blue)"
                strokeWidth="2"
              />
              <text
                x="60"
                y="175"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="13"
                fontFamily="monospace"
              >
                start
              </text>
            </motion.g>

            {/* End */}
            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <circle
                cx="700"
                cy="170"
                r="34"
                fill="color-mix(in srgb, var(--pres-success) 14%, transparent)"
                stroke="var(--pres-success)"
                strokeWidth="2"
              />
              <text
                x="700"
                y="175"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="13"
                fontFamily="monospace"
              >
                done
              </text>
            </motion.g>

            {/* Bad trajectory - zigzag */}
            <motion.path
              d="M 94 170 C 140 60, 200 260, 260 100 C 320 240, 380 90, 440 240 C 500 80, 560 250, 666 170"
              stroke="var(--pres-danger)"
              strokeWidth="2.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, delay: 0.5 }}
            />
            <ArrowTip
              x={666}
              y={170}
              angle={-37}
              color="var(--pres-danger)"
              delay={1.8}
            />
            {[140, 210, 280, 350, 420, 490, 560].map((x, i) => (
              <motion.circle
                key={`bad-${i}`}
                cx={x}
                cy={i % 2 === 0 ? 120 : 220}
                r="5"
                fill="var(--pres-danger)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              />
            ))}

            {/* Good trajectory */}
            <motion.path
              d="M 94 170 L 666 170"
              stroke="var(--pres-success)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="8 6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              transition={{ duration: 0.6, delay: 2 }}
            />
            <ArrowTip
              x={666}
              y={170}
              color="var(--pres-success)"
              delay={2.6}
            />
            {[230, 380, 530].map((x, i) => (
              <motion.circle
                key={`good-${i}`}
                cx={x}
                cy="170"
                r="6"
                fill="var(--pres-success)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 + i * 0.1 }}
              />
            ))}

            {/* Labels */}
            <motion.text
              x="380"
              y="30"
              textAnchor="middle"
              fill="var(--pres-danger)"
              fontSize="14"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              tanti passi, risultato incerto
            </motion.text>
            <motion.text
              x="380"
              y="330"
              textAnchor="middle"
              fill="var(--pres-success)"
              fontSize="14"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
            >
              pochi passi, stessa qualità
            </motion.text>
          </svg>
        </div>
      </div>
    </SlideFrame>
  );
}
