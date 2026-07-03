"use client";

import * as motion from "motion/react-client";
import { ArrowTip, SlideFrame, SlideHeading } from "./slide-shared";

const REPS = [
  {
    label: "screenshot Chrome",
    detail: "vista pixel-perfect",
    color: "var(--pres-blue)",
  },
  {
    label: "albero box",
    detail: "posizioni + dimensioni",
    color: "var(--pres-accent)",
  },
  {
    label: "stili computati",
    detail: "solo elementi chiave",
    color: "var(--pres-warning)",
  },
];

export function Slide09Frontend() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 px-6 py-6">
        <SlideHeading
          eyebrow="caso 3 — front-end"
          title="Dai all'agente rappresentazioni osservabili"
          description="Il layout non lo capisce dal sorgente. Serve una rappresentazione del risultato renderizzato — qualunque forma funzioni."
        />
        <div className="flex flex-1 justify-center items-center mt-4">
          <svg viewBox="0 0 820 360" className="w-full max-w-5xl">
            {/* Page */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <rect
                x="30"
                y="130"
                width="150"
                height="100"
                rx="12"
                fill="color-mix(in srgb, var(--pres-muted) 10%, transparent)"
                stroke="var(--pres-muted)"
                strokeWidth="1.6"
              />
              <rect
                x="46"
                y="146"
                width="118"
                height="8"
                rx="2"
                fill="var(--pres-muted)"
                opacity="0.55"
              />
              <rect
                x="46"
                y="162"
                width="82"
                height="6"
                rx="2"
                fill="var(--pres-muted)"
                opacity="0.35"
              />
              <rect
                x="46"
                y="174"
                width="100"
                height="6"
                rx="2"
                fill="var(--pres-muted)"
                opacity="0.35"
              />
              <rect
                x="46"
                y="192"
                width="54"
                height="16"
                rx="4"
                fill="color-mix(in srgb, var(--pres-accent) 20%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="1"
              />
              <text
                x="105"
                y="250"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="11"
                fontFamily="monospace"
                letterSpacing="0.14em"
              >
                PAGINA RESA
              </text>
            </motion.g>

            {/* Page -> left bus */}
            <motion.path
              d="M 184 180 L 220 180"
              stroke="var(--pres-text-sub)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.35 }}
            />
            <motion.path
              d="M 220 60 L 220 300"
              stroke="var(--pres-text-sub)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.75, duration: 0.55 }}
            />

            {REPS.map((rep, i) => {
              const y = 60 + i * 120;
              return (
                <g key={rep.label}>
                  <motion.path
                    d={`M 220 ${y} L 316 ${y}`}
                    stroke={rep.color}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.95 + i * 0.1, duration: 0.35 }}
                  />
                  <ArrowTip
                    x={320}
                    y={y}
                    color={rep.color}
                    delay={1.2 + i * 0.1}
                  />
                  <motion.g
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.05 + i * 0.1, duration: 0.4 }}
                  >
                    <rect
                      x="320"
                      y={y - 26}
                      width="220"
                      height="52"
                      rx="12"
                      fill={`color-mix(in srgb, ${rep.color} 12%, transparent)`}
                      stroke={rep.color}
                      strokeWidth="1.8"
                    />
                    <text
                      x="430"
                      y={y - 6}
                      textAnchor="middle"
                      fill="var(--pres-text)"
                      fontSize="14"
                      fontFamily="monospace"
                    >
                      {rep.label}
                    </text>
                    <text
                      x="430"
                      y={y + 12}
                      textAnchor="middle"
                      fill="var(--pres-text-sub)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      {rep.detail}
                    </text>
                  </motion.g>
                  <motion.path
                    d={`M 540 ${y} L 596 ${y}`}
                    stroke={rep.color}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.35 + i * 0.1, duration: 0.35 }}
                  />
                </g>
              );
            })}

            {/* Right bus */}
            <motion.path
              d="M 596 60 L 596 300"
              stroke="var(--pres-text-sub)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.8, duration: 0.55 }}
            />
            <motion.path
              d="M 596 180 L 692 180"
              stroke="var(--pres-success)"
              strokeWidth="2.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2.15, duration: 0.4 }}
            />
            <ArrowTip
              x={696}
              y={180}
              color="var(--pres-success)"
              delay={2.55}
            />

            {/* Agent with eye */}
            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
            >
              <rect
                x="700"
                y="130"
                width="90"
                height="100"
                rx="14"
                fill="color-mix(in srgb, var(--pres-success) 14%, transparent)"
                stroke="var(--pres-success)"
                strokeWidth="2"
              />
              <ellipse
                cx="745"
                cy="170"
                rx="26"
                ry="14"
                fill="none"
                stroke="var(--pres-success)"
                strokeWidth="1.8"
              />
              <circle cx="745" cy="170" r="7" fill="var(--pres-success)" />
              <text
                x="745"
                y="207"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="0.14em"
              >
                AGENTE
              </text>
              <text
                x="745"
                y="250"
                textAnchor="middle"
                fill="var(--pres-success)"
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="0.14em"
              >
                VEDE
              </text>
            </motion.g>
          </svg>
        </div>
      </div>
    </SlideFrame>
  );
}
