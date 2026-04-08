"use client";

import * as motion from "motion/react-client";

const deterministicItems = [
  { label: "Rinominare API", sub: "jscodeshift / ast-grep" },
  { label: "Aggiornare import", sub: "codemod ufficiale" },
  { label: "Firme con pattern uniformi", sub: "trasformazione AST" },
];

const aiItems = [
  { label: "Edge case con logica variabile", sub: "prompt mirato + contesto" },
  { label: "Comportamenti semanticamente cambiati", sub: "AI + revisione umana" },
  { label: "Sostituzione di libreria", sub: "AI + test di caratterizzazione" },
];

export function Slide03Hybrid() {
  return (
    <div className="flex flex-col h-full py-6 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        L&apos;Approccio{" "}
        <span className="text-[var(--pres-accent)]">Ibrido</span>
      </motion.h2>
      <motion.p
        className="text-[var(--pres-muted)] text-base text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        La strategia più affidabile non è affidarsi solo all&apos;AI — è combinarla con strumenti deterministici
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6 flex-1 min-h-0 w-full max-w-5xl mx-auto">
        {/* Deterministic side */}
        <motion.div
          className="flex flex-col rounded-2xl border p-6 gap-4"
          style={{
            borderColor: "color-mix(in srgb, var(--pres-success) 30%, transparent)",
            background: "color-mix(in srgb, var(--pres-success) 5%, transparent)",
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
              <rect x="4" y="4" width="24" height="24" rx="4" stroke="var(--pres-success)" strokeWidth="1.5" />
              <path d="M10 16l4 4 8-8" stroke="var(--pres-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className="font-bold text-lg text-[var(--pres-success)]">Strumenti Deterministici</p>
              <p className="text-[var(--pres-muted)] text-sm">Codemods · AST · Analisi statica</p>
            </div>
          </div>
          <p className="text-[var(--pres-muted)] text-sm leading-relaxed">
            Gestiscono le trasformazioni <strong className="text-[var(--pres-text)]">meccaniche</strong>.
            Producono diff verificabili e prevedibili.
          </p>
          <div className="flex flex-col gap-3 flex-1">
            {deterministicItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col gap-0.5 bg-[var(--pres-success)]/10 px-4 py-3 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <p className="text-[var(--pres-success)] font-semibold text-sm">{item.label}</p>
                <p className="text-[var(--pres-muted)] text-xs font-mono">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI side */}
        <motion.div
          className="flex flex-col rounded-2xl border p-6 gap-4"
          style={{
            borderColor: "color-mix(in srgb, var(--pres-accent) 30%, transparent)",
            background: "color-mix(in srgb, var(--pres-accent) 5%, transparent)",
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
              <circle cx="16" cy="16" r="12" stroke="var(--pres-accent)" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="4" fill="var(--pres-accent)" fillOpacity="0.3" stroke="var(--pres-accent)" strokeWidth="1.5" />
              <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="var(--pres-accent)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div>
              <p className="font-bold text-lg text-[var(--pres-accent)]">Agente AI</p>
              <p className="text-[var(--pres-muted)] text-sm">Giudizio semantico · Prompt guidato</p>
            </div>
          </div>
          <p className="text-[var(--pres-muted)] text-sm leading-relaxed">
            Gestisce le trasformazioni <strong className="text-[var(--pres-text)]">semanticamente complesse</strong>.
            Riduce superficie di allucinazione.
          </p>
          <div className="flex flex-col gap-3 flex-1">
            {aiItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col gap-0.5 bg-[var(--pres-accent)]/10 px-4 py-3 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <p className="text-[var(--pres-accent)] font-semibold text-sm">{item.label}</p>
                <p className="text-[var(--pres-muted)] text-xs font-mono">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
