"use client";

import * as motion from "motion/react-client";
import { SlideFrame, SlideHeading } from "./slide-shared";

const rings = [
  { r: 80, label: "prompt", color: "var(--pres-blue)", delay: 0.3 },
  { r: 115, label: "tool", color: "var(--pres-success)", delay: 0.45 },
  { r: 150, label: "contesto", color: "var(--pres-warning)", delay: 0.6 },
  {
    r: 185,
    label: "modelli custom",
    color: "var(--pres-accent)",
    delay: 0.75,
  },
];

export function Slide09Harness() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="definizione"
        title="Harness = tutto ciò che circonda il modello"
        description="Prompt, tool, contesto, modelli custom dietro le quinte. Stessa famiglia di modelli, harness diverso, comportamento diverso."
      />

      <div className="flex flex-1 items-center gap-8 px-4">
        <div className="flex-1 max-w-md">
          <svg viewBox="0 0 400 400" className="w-full">
            {rings.map((ring) => (
              <motion.circle
                key={ring.label}
                cx="200"
                cy="200"
                r={ring.r}
                fill="none"
                stroke={ring.color}
                strokeWidth="1.8"
                strokeDasharray="3 5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.5, delay: ring.delay }}
                style={{ transformOrigin: "200px 200px" }}
              />
            ))}

            <motion.circle
              cx="200"
              cy="200"
              r="50"
              fill="color-mix(in srgb, var(--pres-accent) 20%, transparent)"
              stroke="var(--pres-accent)"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ transformOrigin: "200px 200px" }}
            />
            <text
              x="200"
              y="196"
              textAnchor="middle"
              fill="var(--pres-accent)"
              fontSize="11"
              fontFamily="monospace"
            >
              CORE
            </text>
            <text
              x="200"
              y="216"
              textAnchor="middle"
              fill="var(--pres-text)"
              fontSize="16"
              fontWeight="700"
            >
              Model
            </text>

            {rings.map((ring, i) => {
              const angles = [-30, 40, -120, 125];
              const angle = (angles[i] * Math.PI) / 180;
              const x = 200 + Math.cos(angle) * ring.r;
              const y = 200 + Math.sin(angle) * ring.r;
              return (
                <motion.g
                  key={`label-${ring.label}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: ring.delay + 0.2 }}
                >
                  <rect
                    x={x - 52}
                    y={y - 14}
                    width="104"
                    height="28"
                    rx="14"
                    fill="var(--pres-bg-card)"
                    stroke={ring.color}
                    strokeWidth="1.5"
                  />
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    fill="var(--pres-text)"
                    fontSize="12"
                    fontFamily="monospace"
                  >
                    {ring.label}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>

        <motion.div
          className="flex flex-col flex-1 gap-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div>
            <div className="mb-2 font-mono text-(--pres-muted) text-sm uppercase tracking-widest">
              impatto misurato
            </div>
            <div className="text-(--pres-text-sub) text-sm sm:text-base leading-relaxed">
              Codice generato e poi committato dagli sviluppatori:
            </div>
          </div>

          <div className="flex items-end gap-6">
            <div>
              <div className="font-display text-(--pres-danger) text-5xl sm:text-6xl">
                52%
              </div>
              <div className="mt-1 font-mono text-(--pres-muted) text-xs uppercase">
                GPT-4.1 · un anno fa
              </div>
            </div>
            <div className="pb-3 text-(--pres-accent) text-2xl">→</div>
            <div>
              <div className="font-display text-(--pres-success) text-5xl sm:text-6xl">
                90%
              </div>
              <div className="mt-1 font-mono text-(--pres-muted) text-xs uppercase">
                Opus 4.6 · oggi
              </div>
            </div>
          </div>

          <div className="text-(--pres-text-sub) text-sm sm:text-base leading-relaxed">
            Stesso mondo di modelli, harness molto più raffinato.
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
