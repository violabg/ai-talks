"use client";

import * as motion from "motion/react-client";
import { ArrowTip } from "@/components/presentation/arrow-tip";
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

              <motion.g
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                <rect
                  x="40"
                  y="50"
                  width="260"
                  height="120"
                  rx="20"
                  fill="color-mix(in srgb, var(--pres-blue) 10%, transparent)"
                  stroke="var(--pres-blue)"
                  strokeWidth="2"
                />
                <text
                  x="170"
                  y="82"
                  textAnchor="middle"
                  fill="var(--pres-blue)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  UTENTE
                </text>
                <text
                  x="170"
                  y="116"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="14"
                  fontStyle="italic"
                >
                  &ldquo;la settimana
                </text>
                <text
                  x="170"
                  y="140"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="14"
                  fontStyle="italic"
                >
                  scorsa stavamo...&rdquo;
                </text>
              </motion.g>

              <motion.path
                d="M302 110 L 496 110"
                fill="none"
                stroke="var(--pres-accent)"
                strokeWidth="3"
                strokeDasharray="8 8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <ArrowTip x={496} y={110} color="var(--pres-accent)" delay={1.0} />

              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                style={{ transformOrigin: "640px 110px" }}
              >
                <rect
                  x="500"
                  y="50"
                  width="280"
                  height="120"
                  rx="24"
                  fill="color-mix(in srgb, var(--pres-accent) 12%, transparent)"
                  stroke="var(--pres-accent)"
                  strokeWidth="2"
                />
                <text
                  x="640"
                  y="82"
                  textAnchor="middle"
                  fill="var(--pres-accent)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  AUTO-QUERY
                </text>
                <text
                  x="640"
                  y="120"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="24"
                  fontWeight="700"
                >
                  chronicle.db
                </text>
                <text
                  x="640"
                  y="148"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="12"
                >
                  cerca sessione precedente
                </text>
              </motion.g>

              <motion.path
                d="M640 172 L 640 218"
                fill="none"
                stroke="var(--pres-success)"
                strokeWidth="3"
                strokeDasharray="8 8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              />
              <ArrowTip
                x={640}
                y={218}
                angle={90}
                color="var(--pres-success)"
                delay={1.5}
              />

              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                <rect
                  x="40"
                  y="220"
                  width="260"
                  height="100"
                  rx="14"
                  fill="var(--pres-bg-node)"
                  stroke="var(--pres-muted)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                <text
                  x="170"
                  y="254"
                  textAnchor="middle"
                  fill="var(--pres-muted)"
                  fontSize="12"
                  fontFamily="monospace"
                >
                  NESSUNA RICOSTRUZIONE
                </text>
                <text
                  x="170"
                  y="284"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="13"
                >
                  non devi ricordare
                </text>
                <text
                  x="170"
                  y="302"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="13"
                >
                  tu i dettagli
                </text>
              </motion.g>

              <motion.g
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 1.15 }}
              >
                <rect
                  x="500"
                  y="220"
                  width="280"
                  height="100"
                  rx="18"
                  fill="color-mix(in srgb, var(--pres-success) 10%, transparent)"
                  stroke="var(--pres-success)"
                  strokeWidth="2"
                />
                <text
                  x="640"
                  y="254"
                  textAnchor="middle"
                  fill="var(--pres-success)"
                  fontSize="13"
                  fontFamily="monospace"
                >
                  CONTESTO RECUPERATO
                </text>
                <text
                  x="640"
                  y="290"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="18"
                  fontWeight="700"
                >
                  la sessione riparte
                </text>
              </motion.g>
            </svg>
          </div>
        </GlowCard>
      </div>
    </SlideFrame>
  );
}
