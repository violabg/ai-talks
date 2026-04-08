"use client";

import * as motion from "motion/react-client";

const difficulties = [
  {
    id: "breaking",
    label: "Breaking changes non documentati",
    sublabel: "Comportamenti impliciti che cambiano senza essere dichiarati",
    color: "var(--pres-danger)",
    icon: (
      <svg viewBox="0 0 28 28" width="28" height="28" fill="none">
        <path d="M14 3L25 22H3L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 10v5M14 18v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "surface",
    label: "La superficie del problema",
    sublabel: "Una libreria in 50 file, con pattern leggermente diversi in ognuno",
    color: "var(--pres-warning)",
    icon: (
      <svg viewBox="0 0 28 28" width="28" height="28" fill="none">
        <rect x="3" y="5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="17" y="5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="17" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="17" y="17" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 9h6M14 11v6M11 21h6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "coherence",
    label: "La coerenza dell'insieme",
    sublabel: "Il sistema sembra funzionare, ma una combinazione di casi reali si rompe",
    color: "var(--pres-accent)",
    icon: (
      <svg viewBox="0 0 28 28" width="28" height="28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8v6l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 22l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

export function Slide02Difficulties() {
  return (
    <div className="flex flex-col h-full py-6 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Perché le Migrazioni{" "}
        <span className="text-[var(--pres-danger)]">Falliscono</span>
      </motion.h2>
      <motion.p
        className="text-[var(--pres-muted)] text-base text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Aggiornare una dipendenza non è mai solo cambiare un numero in{" "}
        <code className="font-mono text-[var(--pres-accent)]">package.json</code>
      </motion.p>

      <div className="flex flex-col gap-5 flex-1 w-full max-w-4xl mx-auto">
        {difficulties.map((d, i) => (
          <motion.div
            key={d.id}
            className="flex items-start gap-5 rounded-2xl border p-6 flex-1"
            style={{
              borderColor: `color-mix(in srgb, ${d.color} 30%, transparent)`,
              background: `color-mix(in srgb, ${d.color} 5%, transparent)`,
            }}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.4 + i * 0.15 }}
          >
            <span style={{ color: d.color }} className="mt-0.5 shrink-0 scale-125">
              {d.icon}
            </span>
            <div>
              <p className="font-bold text-lg" style={{ color: d.color }}>
                {d.label}
              </p>
              <p className="mt-1 text-[var(--pres-muted)] text-base leading-relaxed">
                {d.sublabel}
              </p>
            </div>
            <div
              className="ml-auto shrink-0 self-center text-3xl font-black opacity-20"
              style={{ color: d.color }}
            >
              0{i + 1}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        className="mt-5 text-center text-[var(--pres-muted)] text-sm italic max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        Il vero costo di una migrazione disordinata non emerge subito.
        Emerge in produzione, settimane dopo.
      </motion.blockquote>
    </div>
  );
}
