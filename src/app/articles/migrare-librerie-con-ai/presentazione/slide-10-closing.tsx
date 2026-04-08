"use client";

import React from "react";
import * as motion from "motion/react-client";

const pillars = [
  {
    id: "tools",
    label: "Strumenti Deterministici",
    sub: "Il lavoro meccanico — verificabile e prevedibile",
    color: "var(--pres-success)",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "AI Semantica",
    sub: "Il giudizio — guidato da prompt precisi e contesto",
    color: "var(--pres-accent)",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="4" fill="currentColor" fillOpacity="0.3" />
        <path d="M16 5v3M16 24v3M5 16h3M24 16h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "loop",
    label: "Loop di Validazione",
    sub: "La sicurezza — ogni passo ancorato e reversibile",
    color: "var(--pres-warning)",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
        <path d="M28 16A12 12 0 1 1 16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 4l4-4M16 4l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function Slide10Closing() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 py-6 text-center">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in srgb, var(--pres-accent) 8%, transparent) 0%, transparent 70%)",
        }}
      />

      <motion.p
        className="font-mono text-[var(--pres-muted)] text-sm uppercase tracking-[0.2em] mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        La Formula
      </motion.p>

      {/* Three pillars */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full max-w-4xl">
        {pillars.map((pillar, i) => (
          <React.Fragment key={pillar.id}>
            <motion.div
              className="flex flex-col items-center gap-3 flex-1 rounded-2xl border p-6"
              style={{
                borderColor: `color-mix(in srgb, ${pillar.color} 30%, transparent)`,
                background: `color-mix(in srgb, ${pillar.color} 6%, transparent)`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            >
              <span style={{ color: pillar.color }}>{pillar.icon}</span>
              <p className="font-bold text-base" style={{ color: pillar.color }}>{pillar.label}</p>
              <p className="text-[var(--pres-muted)] text-xs leading-snug">{pillar.sub}</p>
            </motion.div>
            {i < pillars.length - 1 && (
              <motion.div
                className="text-2xl font-black text-[var(--pres-muted)] opacity-40 hidden sm:block shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.8 + i * 0.15 }}
              >
                +
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Result */}
      <motion.div
        className="flex items-center gap-3 mb-8"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <div className="h-px flex-1 max-w-16 bg-[var(--pres-border)]" />
        <span className="text-[var(--pres-muted)] text-sm">=</span>
        <div className="px-6 py-2 rounded-full border border-[var(--pres-success)]/40 bg-[var(--pres-success)]/8">
          <p className="font-bold text-lg text-[var(--pres-success)]">Migrazione Sicura</p>
        </div>
        <div className="h-px flex-1 max-w-16 bg-[var(--pres-border)]" />
      </motion.div>

      <motion.blockquote
        className="text-lg sm:text-xl font-semibold max-w-3xl leading-snug mb-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        L&apos;AI accelera le migrazioni.{" "}
        <span className="text-[var(--pres-accent)]">La disciplina le rende sicure.</span>
      </motion.blockquote>

      <motion.p
        className="text-[var(--pres-muted)] text-base max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
      >
        Senza struttura, quello che guadagni in velocità lo perdi in regressioni nascoste.
      </motion.p>
    </div>
  );
}
