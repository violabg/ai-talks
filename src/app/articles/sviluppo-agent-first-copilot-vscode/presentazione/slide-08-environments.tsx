"use client";

import { motion } from "motion/react";

const environments = [
  {
    id: "local",
    icon: (
      <svg viewBox="0 0 48 48" width="52" height="52" fill="none">
        <rect x="4" y="8" width="40" height="28" rx="3" stroke="#38bdf8" strokeWidth="2" />
        <path d="M16 36v4M32 36v4M10 40h28" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="14" width="28" height="16" rx="1" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" strokeWidth="1" />
        <path d="M14 19l4 3-4 3M20 25h8" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Esecuzione Locale",
    subtitle: "VS Code · API locali",
    color: "#38bdf8",
    pros: [
      "Accesso diretto al filesystem",
      "Variabili d'ambiente locali",
      "Porte specifiche e server locali",
      "Refactoring e scrittura di codice",
    ],
    cons: ["Occupa il tuo editor", "Limitato alla sessione attiva"],
    badge: "Sincrono",
  },
  {
    id: "cloud",
    icon: (
      <svg viewBox="0 0 48 48" width="52" height="52" fill="none">
        <path d="M36 28H12a8 8 0 1 1 .5-16A12 12 0 1 1 36 28z" stroke="#a78bfa" strokeWidth="2" fill="rgba(167,139,250,0.1)" />
        <path d="M24 32v8M20 36l4 4 4-4" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="10" r="6" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" strokeWidth="1.5" />
        <path d="M36 10h4M38 8v4" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "GitHub Platform Agent",
    subtitle: "Cloud · Asincrono",
    color: "#a78bfa",
    pros: [
      "Non blocca il tuo editor",
      "Analisi di Pull Request",
      "Scrittura automatica di documentazione",
      "Commit autonomi su GitHub",
    ],
    cons: ["Non accede all'ambiente locale", "Richiede task ben delimitati"],
    badge: "Asincrono",
  },
];

export function Slide08Environments() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Locale vs <span className="text-[#a78bfa]">Cloud</span>
      </motion.h2>
      <motion.p
        className="text-[#94a3b8] text-sm mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Scegli dove far girare l&apos;agente in base al tipo di task
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {environments.map((env, i) => (
          <motion.div
            key={env.id}
            className="flex flex-col rounded-xl border p-6 gap-4"
            style={{
              borderColor: `${env.color}40`,
              background: `rgba(${hexToRgb(env.color)}, 0.04)`,
            }}
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
          >
            <div className="flex items-center gap-4">
              {env.icon}
              <div>
                <p className="font-bold text-base" style={{ color: env.color }}>
                  {env.label}
                </p>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{
                    color: env.color,
                    background: `rgba(${hexToRgb(env.color)}, 0.12)`,
                  }}
                >
                  {env.badge}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              {env.pros.map((pro) => (
                <div key={pro} className="flex items-start gap-2">
                  <span className="text-[#34d399] text-xs mt-0.5">✓</span>
                  <span className="text-[#e2e8f0] text-xs">{pro}</span>
                </div>
              ))}
              {env.cons.map((con) => (
                <div key={con} className="flex items-start gap-2">
                  <span className="text-[#94a3b8] text-xs mt-0.5">–</span>
                  <span className="text-[#64748b] text-xs">{con}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "255,255,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
