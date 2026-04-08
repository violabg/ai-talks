"use client";

import * as motion from "motion/react-client";

const tools = [
  {
    id: "renovate",
    name: "Renovate / Dependabot",
    role: "Monitoraggio continuo",
    desc: "Aprono PR automatiche quando escono nuove versioni. Rendono visibile il debito invece di lasciarlo accumulare.",
    color: "var(--pres-blue)",
    phase: "sempre attivo",
    icon: (
      <svg viewBox="0 0 28 28" width="28" height="28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8v6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 20l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "jscodeshift",
    name: "jscodeshift",
    role: "Trasformazioni AST",
    desc: "Toolkit di trasformazione AST. Permette codemods come funzioni JS. Molte librerie pubblicano codemods ufficiali.",
    color: "var(--pres-warning)",
    phase: "fase 1",
    icon: (
      <svg viewBox="0 0 28 28" width="28" height="28" fill="none">
        <path d="M6 8h16M6 14h10M6 20h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 17l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "astgrep",
    name: "ast-grep",
    role: "Pattern matching strutturale",
    desc: "Cerca e sostituisce pattern di codice con sintassi simile al codice stesso. Codemods leggeri senza imperatività.",
    color: "var(--pres-success)",
    phase: "fase 1",
    icon: (
      <svg viewBox="0 0 28 28" width="28" height="28" fill="none">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 17l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "openrewrite",
    name: "OpenRewrite",
    role: "Java / Kotlin enterprise",
    desc: "Usa Lossless Semantic Trees. Ricette pre-costruite per Spring Boot, Java, framework enterprise.",
    color: "var(--pres-danger)",
    phase: "Java / Kotlin",
    icon: (
      <svg viewBox="0 0 28 28" width="28" height="28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 11h10M9 15h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="4" fill="color-mix(in srgb, currentColor 15%, transparent)" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 20h2M20 19v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "codemod",
    name: "Codemod.com",
    role: "Pipeline deterministico + AI",
    desc: "Piattaforma che combina codemods e AI. Libreria di trasformazioni per React, Next.js, TypeScript.",
    color: "var(--pres-accent)",
    phase: "full pipeline",
    icon: (
      <svg viewBox="0 0 28 28" width="28" height="28" fill="none">
        <rect x="4" y="4" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="4" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="16" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12v2c0 1.1.9 2 2 2M20 12v2a2 2 0 01-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Slide04Tools() {
  return (
    <div className="flex flex-col h-full py-6 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        L&apos;Ecosistema degli{" "}
        <span className="text-[var(--pres-accent)]">Strumenti</span>
      </motion.h2>
      <motion.p
        className="text-[var(--pres-muted)] text-base text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Prima di coinvolgere l&apos;AI, conosci gli strumenti che automatizzano la parte meccanica
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 min-h-0 w-full max-w-6xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.id}
            className="flex flex-col rounded-xl border p-5 gap-3"
            style={{
              borderColor: `color-mix(in srgb, ${tool.color} 25%, transparent)`,
              background: `color-mix(in srgb, ${tool.color} 5%, transparent)`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <span style={{ color: tool.color }} className="shrink-0">{tool.icon}</span>
              <div className="min-w-0">
                <p className="font-bold text-sm" style={{ color: tool.color }}>{tool.name}</p>
                <span
                  className="text-xs font-mono px-1.5 py-0.5 rounded"
                  style={{
                    color: tool.color,
                    background: `color-mix(in srgb, ${tool.color} 15%, transparent)`,
                  }}
                >
                  {tool.phase}
                </span>
              </div>
            </div>
            <p className="text-[var(--pres-muted)] text-sm font-semibold">{tool.role}</p>
            <p className="text-[var(--pres-muted)] text-xs leading-relaxed">{tool.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
