"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

export function Slide07DynamicMemory() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="memoria dinamica"
        title="Il database viene interrogato anche senza invocarlo"
        description='Durante una sessione normale, frasi come "la settimana scorsa stavamo lavorando su questo" fanno partire una query automatica sul contesto archiviato.'
      />
      <div className="flex flex-1 items-center">
        <GlowCard className="p-4 sm:p-6 w-full">
          <div className="mx-auto w-full max-w-5xl">
            <svg viewBox="0 0 820 360" className="w-full">
              <defs>
                <linearGradient id="memory-flow" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--pres-blue)" />
                  <stop offset="100%" stopColor="var(--pres-accent)" />
                </linearGradient>
                <linearGradient id="memory-return" x1="1" x2="0">
                  <stop offset="0%" stopColor="var(--pres-success)" />
                  <stop offset="100%" stopColor="var(--pres-accent)" />
                </linearGradient>
              </defs>

              <motion.g
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                <rect
                  x="30"
                  y="60"
                  width="230"
                  height="100"
                  rx="20"
                  fill="color-mix(in srgb, var(--pres-blue) 10%, transparent)"
                  stroke="var(--pres-blue)"
                  strokeWidth="2"
                />
                <text
                  x="145"
                  y="92"
                  textAnchor="middle"
                  fill="var(--pres-blue)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  UTENTE
                </text>
                <text
                  x="145"
                  y="118"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="14"
                  fontStyle="italic"
                >
                  &ldquo;la settimana
                </text>
                <text
                  x="145"
                  y="138"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="14"
                  fontStyle="italic"
                >
                  scorsa stavamo...&rdquo;
                </text>
              </motion.g>

              <motion.path
                d="M260 110C330 110 370 180 470 180"
                fill="none"
                stroke="url(#memory-flow)"
                strokeWidth="3"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              />

              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                style={{ transformOrigin: "565px 180px" }}
              >
                <rect
                  x="470"
                  y="130"
                  width="190"
                  height="100"
                  rx="24"
                  fill="color-mix(in srgb, var(--pres-accent) 12%, transparent)"
                  stroke="var(--pres-accent)"
                  strokeWidth="2"
                />
                <text
                  x="565"
                  y="162"
                  textAnchor="middle"
                  fill="var(--pres-accent)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  AUTO-QUERY
                </text>
                <text
                  x="565"
                  y="196"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="22"
                  fontWeight="700"
                >
                  chronicle.db
                </text>
                <text
                  x="565"
                  y="216"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="12"
                >
                  cerca sessione precedente
                </text>
              </motion.g>

              <motion.path
                d="M660 180C720 180 740 260 790 260"
                fill="none"
                stroke="url(#memory-return)"
                strokeWidth="3"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 0.6, delay: 0.95 }}
              />

              <motion.g
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 1.15 }}
              >
                <rect
                  x="560"
                  y="250"
                  width="230"
                  height="80"
                  rx="18"
                  fill="color-mix(in srgb, var(--pres-success) 10%, transparent)"
                  stroke="var(--pres-success)"
                  strokeWidth="2"
                />
                <text
                  x="675"
                  y="280"
                  textAnchor="middle"
                  fill="var(--pres-success)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  CONTESTO RECUPERATO
                </text>
                <text
                  x="675"
                  y="308"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="16"
                  fontWeight="700"
                >
                  la sessione riparte
                </text>
              </motion.g>

              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                <rect
                  x="60"
                  y="250"
                  width="320"
                  height="60"
                  rx="14"
                  fill="var(--pres-bg-node)"
                  stroke="var(--pres-muted)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                <text
                  x="220"
                  y="278"
                  textAnchor="middle"
                  fill="var(--pres-muted)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  NESSUNA RICOSTRUZIONE MANUALE
                </text>
                <text
                  x="220"
                  y="298"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="13"
                >
                  non devi ricordare tu i dettagli
                </text>
              </motion.g>
            </svg>
          </div>
        </GlowCard>
      </div>
    </SlideFrame>
  );
}
