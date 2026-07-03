"use client";

import * as motion from "motion/react-client";
import { SlideFrame } from "./slide-shared";

export function Slide05BlindSculptor() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 justify-center items-center gap-8 px-6 py-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          <svg viewBox="0 0 640 260" className="w-full">
            {/* Marble block */}
            <motion.g
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <path
                d="M 60 210 L 60 110 L 90 80 L 200 70 L 240 100 L 240 210 Z"
                fill="color-mix(in srgb, var(--pres-muted) 20%, transparent)"
                stroke="var(--pres-muted)"
                strokeWidth="2"
              />
              <text
                x="150"
                y="230"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="12"
                fontFamily="monospace"
                letterSpacing="0.18em"
              >
                MARMO
              </text>
            </motion.g>

            {/* Sculptor silhouette */}
            <motion.g
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              {/* Head */}
              <circle
                cx="440"
                cy="100"
                r="30"
                fill="color-mix(in srgb, var(--pres-accent) 15%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              {/* Blindfold */}
              <rect
                x="405"
                y="93"
                width="70"
                height="14"
                rx="3"
                fill="var(--pres-danger)"
                opacity="0.85"
              />
              {/* Body */}
              <path
                d="M 440 130 L 420 200 L 460 200 Z"
                fill="color-mix(in srgb, var(--pres-accent) 10%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              {/* Arm holding chisel */}
              <line
                x1="428"
                y1="150"
                x2="360"
                y2="140"
                stroke="var(--pres-accent)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Chisel */}
              <line
                x1="360"
                y1="140"
                x2="330"
                y2="132"
                stroke="var(--pres-warning)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <text
                x="440"
                y="230"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="12"
                fontFamily="monospace"
                letterSpacing="0.18em"
              >
                AGENTE
              </text>
            </motion.g>

            {/* Chaotic marks */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              stroke="var(--pres-danger)"
              strokeWidth="1.5"
              opacity="0.7"
            >
              <line x1="100" y1="130" x2="118" y2="122" />
              <line x1="150" y1="150" x2="170" y2="145" />
              <line x1="180" y1="175" x2="205" y2="168" />
              <line x1="120" y1="180" x2="140" y2="172" />
            </motion.g>
          </svg>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.55 }}
          className="max-w-4xl font-display text-(--pres-text) text-2xl sm:text-3xl lg:text-4xl text-balance leading-tight"
        >
          Un lavoratore instancabile ma{" "}
          <span className="text-(--pres-danger)">cieco</span> spreca la propria
          persistenza.
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="max-w-2xl text-(--pres-text-sub) text-base sm:text-lg"
        >
          Correggere richiede osservare. Senza osservazione, ogni tentativo è
          casuale.
        </motion.p>
      </div>
    </SlideFrame>
  );
}
