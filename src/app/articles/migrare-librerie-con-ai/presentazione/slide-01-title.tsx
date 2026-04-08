"use client";

import * as motion from "motion/react-client";

const tags = ["refactoring", "agenti AI", "workflow", "migrazione", "TypeScript"];

export function Slide01Title() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-8 text-center px-6">
      {/* Animated dependency graph */}
      <motion.div
        className="mb-8 w-full max-w-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <svg viewBox="0 0 520 110" className="w-full">
          {/* Old version nodes — faded/red */}
          {[
            { x: 50,  y: 30, label: "react@16", color: "var(--pres-danger)" },
            { x: 165, y: 55, label: "router@5",  color: "var(--pres-danger)" },
            { x: 280, y: 25, label: "lodash@3",  color: "var(--pres-warning)" },
            { x: 390, y: 55, label: "axios@0.x", color: "var(--pres-danger)" },
          ].map((n, i) => (
            <motion.g
              key={n.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            >
              <rect x={n.x - 48} y={n.y - 16} width="96" height="32" rx="8"
                fill="none" stroke={n.color} strokeWidth="1.5" strokeDasharray="4 3" />
              <text x={n.x} y={n.y + 5} textAnchor="middle"
                fill={n.color} fontSize="11" fontFamily="monospace">{n.label}</text>
            </motion.g>
          ))}
          {/* Connecting lines */}
          {[[98, 38, 117, 48], [213, 48, 232, 40], [328, 38, 342, 48], [438, 48, 470, 38]].map(([x1, y1, x2, y2], i) => (
            <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="var(--pres-border)" strokeWidth="1" strokeDasharray="3 3"
              initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5 + i * 0.1 }} />
          ))}
          {/* Arrow → new */}
          <motion.text x="480" y="40" fill="var(--pres-success)" fontSize="22"
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}>→</motion.text>
          <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }} style={{ transformOrigin: "505px 55px" }}>
            <rect x="458" y="50" width="62" height="26" rx="8"
              fill="color-mix(in srgb, var(--pres-success) 12%, transparent)"
              stroke="var(--pres-success)" strokeWidth="1.5" />
            <text x="489" y="68" textAnchor="middle" fill="var(--pres-success)" fontSize="11" fontFamily="monospace">latest</text>
          </motion.g>
        </svg>
      </motion.div>

      <motion.h1
        className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Migrare Librerie{" "}
        <span className="text-[var(--pres-accent)]">Obsolete</span>{" "}
        con l&apos;AI
      </motion.h1>

      <motion.p
        className="text-[var(--pres-muted)] text-lg sm:text-xl max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Codemods deterministici + agenti AI + loop di validazione.
        La formula per aggiornamenti sicuri e verificabili.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-2 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-mono border border-[var(--pres-border)] text-[var(--pres-muted)]"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
