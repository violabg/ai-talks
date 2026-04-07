"use client";

import { motion } from "motion/react";

const steps = [
  {
    id: 1,
    label: "Prompt Iniziale",
    desc: "L'obiettivo in linguaggio naturale",
    color: "var(--pres-blue)",
    isHuman: false,
  },
  {
    id: 2,
    label: "Plan Mode",
    desc: "Analizza file, propone architettura, chiede chiarimenti",
    color: "var(--pres-accent)",
    isHuman: false,
  },
  {
    id: 3,
    label: "Revisione Umana",
    desc: "Steering: modifichi il piano o dai l'ok",
    color: "var(--pres-warning)",
    isHuman: true,
  },
  {
    id: 4,
    label: "Act Mode",
    desc: "Crea file · modifica · esegue comandi",
    color: "var(--pres-accent)",
    isHuman: false,
  },
  {
    id: 5,
    label: "Diff Review",
    desc: "Valuti le differenze in tempo reale",
    color: "var(--pres-warning)",
    isHuman: true,
  },
  {
    id: 6,
    label: "Checkpoint",
    desc: "Accetti le modifiche · stato di ripristino salvato",
    color: "var(--pres-success)",
    isHuman: false,
  },
];

export function Slide04Cycle() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dal <span className="text-[var(--pres-accent)]">Pensiero</span>{" "}
        all&apos;<span className="text-[var(--pres-success)]">Azione</span>
      </motion.h2>

      <div className="flex flex-col items-center w-full max-w-2xl gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}
          >
            {/* Node */}
            <div
              className="flex items-center gap-4 w-full rounded-xl px-4 py-3 border"
              style={{
                borderColor: `color-mix(in srgb, ${step.color} 30%, transparent)`,
                background: `color-mix(in srgb, ${step.color} 6%, transparent)`,
              }}
            >
              {/* Step number */}
              <div
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: `color-mix(in srgb, ${step.color} 15%, transparent)`, color: step.color, border: `1.5px solid ${step.color}` }}
              >
                {step.id}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm" style={{ color: step.color }}>
                  {step.label}
                  {step.isHuman && (
                    <span className="ml-2 text-[10px] font-mono text-[var(--pres-warning)] bg-[var(--pres-warning)]/10 px-1.5 py-0.5 rounded">
                      👤 umano
                    </span>
                  )}
                </p>
                <p className="text-[var(--pres-muted)] text-xs mt-0.5">{step.desc}</p>
              </div>
            </div>

            {/* Connector arrow */}
            {i < steps.length - 1 && (
              <motion.div
                className="flex items-center justify-center py-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                <svg viewBox="0 0 16 20" width="16" height="20">
                  <line x1="8" y1="0" x2="8" y2="12" stroke="var(--pres-border)" strokeWidth="1.5" />
                  <polygon points="3,10 8,18 13,10" fill="var(--pres-border)" />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
