"use client";

import * as motion from "motion/react-client";

const sections = [
  {
    id: "context",
    label: "01 Contesto",
    color: "var(--pres-blue)",
    lines: ["Libreria: React Router", "Da: v5 → A: v6"],
    note: "Libreria, versione source, versione target",
  },
  {
    id: "breaking",
    label: "02 Breaking Change",
    color: "var(--pres-warning)",
    lines: ["<Switch> → <Routes>", "<Route component={}> → element={}"],
    note: "Il cambiamento specifico — non generico",
  },
  {
    id: "pattern",
    label: "03 Prima / Dopo",
    color: "var(--pres-success)",
    lines: ["Pattern vecchio: [allega esempio]", "Pattern nuovo: [allega esempio]"],
    note: "Un esempio concreto vale più di mille parole",
  },
  {
    id: "constraints",
    label: "04 Vincoli",
    color: "var(--pres-danger)",
    lines: ["Non cambiare firme pubbliche", "Non toccare gestione errori", "Segnala i casi ambigui"],
    note: "Cosa NON fare — riduce allucinazioni",
  },
];

export function Slide06Prompt() {
  return (
    <div className="flex flex-col h-full py-6 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Anatomia di un{" "}
        <span className="text-[var(--pres-accent)]">Prompt Efficace</span>
      </motion.h2>
      <motion.p
        className="text-[var(--pres-muted)] text-base text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        La qualità dei risultati dipende quasi interamente dalla qualità del prompt
      </motion.p>

      <div className="flex flex-col gap-4 flex-1 min-h-0 w-full max-w-4xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            className="flex items-stretch gap-0 rounded-xl overflow-hidden border flex-1"
            style={{ borderColor: `color-mix(in srgb, ${section.color} 25%, transparent)` }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
          >
            {/* Label bar */}
            <div
              className="flex items-center justify-center px-4 shrink-0 min-w-[130px]"
              style={{ background: `color-mix(in srgb, ${section.color} 15%, transparent)` }}
            >
              <p className="font-bold text-sm font-mono" style={{ color: section.color }}>
                {section.label}
              </p>
            </div>

            {/* Code area */}
            <div
              className="flex-1 px-5 py-3 font-mono text-sm flex flex-col justify-center gap-1"
              style={{ background: `color-mix(in srgb, ${section.color} 5%, transparent)` }}
            >
              {section.lines.map((line) => (
                <p key={line} className="text-[var(--pres-text-sub)]">{line}</p>
              ))}
            </div>

            {/* Annotation */}
            <div className="flex items-center px-4 shrink-0 max-w-[220px]"
              style={{ borderLeft: `1px solid color-mix(in srgb, ${section.color} 20%, transparent)` }}>
              <p className="text-xs text-[var(--pres-muted)] italic leading-snug">{section.note}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-4 flex items-center gap-3 bg-[var(--pres-accent)]/5 border border-[var(--pres-accent)]/20 rounded-xl px-5 py-3 max-w-4xl mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <svg viewBox="0 0 20 20" width="20" height="20" fill="none" className="shrink-0">
          <circle cx="10" cy="10" r="8" stroke="var(--pres-accent)" strokeWidth="1.5" />
          <path d="M10 7v.01M10 10v4" stroke="var(--pres-accent)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p className="text-[var(--pres-muted)] text-sm">
          <strong className="text-[var(--pres-text)]">Regola critica:</strong> non mischiare trasformazioni diverse nello stesso prompt. Un obiettivo per prompt, un diff verificabile.
        </p>
      </motion.div>
    </div>
  );
}
