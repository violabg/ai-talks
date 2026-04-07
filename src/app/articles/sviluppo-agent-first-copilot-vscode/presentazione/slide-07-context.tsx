"use client";

import { motion } from "motion/react";

const segments = [
  {
    label: "System Prompts",
    pct: 30,
    color: "var(--pres-border)",
    desc: "Regole di comportamento nascoste dell'editor",
  },
  {
    label: "Tool Definitions",
    pct: 25,
    color: "var(--pres-muted)",
    desc: "Spiegazione al modello di come usare le skill",
  },
  {
    label: "User Context",
    pct: 45,
    color: "var(--pres-accent)",
    desc: "Il tuo codice, la chat e i file allegati",
  },
];

export function Slide07Context() {
  // Build donut arcs
  const R = 70;
  const cx = 100;
  const cy = 100;

  const arcs = segments.map((seg, index, arr) => {
    const startPct = arr.slice(0, index).reduce((acc, curr) => acc + curr.pct, 0);
    const endPct = startPct + seg.pct;
    const startAngle = (startPct / 100) * 360 - 90;
    const endAngle = (endPct / 100) * 360 - 90;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = cx + R * Math.cos(startRad);
    const y1 = cy + R * Math.sin(startRad);
    const x2 = cx + R * Math.cos(endRad);
    const y2 = cy + R * Math.sin(endRad);
    const largeArc = seg.pct > 50 ? 1 : 0;
    const d = `M ${x1} ${y1} A ${R} ${R} 0 ${largeArc} 1 ${x2} ${y2}`;
    return { ...seg, d, startPct };
  });

  return (
    <div className="flex flex-col justify-center items-center px-6 h-full">
      <motion.h2
        className="mb-2 font-bold text-2xl sm:text-3xl text-center"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        La <span className="text-[var(--pres-accent)]">Finestra dei Token</span>
      </motion.h2>
      <motion.p
        className="mb-8 max-w-lg text-[var(--pres-muted)] text-sm text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Quando il contesto si esaurisce, l&apos;agente &ldquo;dimentica&rdquo;
        le istruzioni iniziali
      </motion.p>

      <div className="flex sm:flex-row flex-col items-center gap-10 w-full max-w-5xl">
        {/* Donut chart */}
        <div className="flex-shrink-0 w-48 sm:w-64 lg:w-72">
          <svg viewBox="0 0 200 200" className="w-full">
            {arcs.map((arc, i) => (
              <motion.path
                key={arc.label}
                d={arc.d}
                fill="none"
                stroke={arc.color}
                strokeWidth="24"
                strokeLinecap="butt"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.25 }}
              />
            ))}
            {/* Center label */}
            <motion.text
              x={cx}
              y={cy - 6}
              textAnchor="middle"
              fill="var(--pres-text)"
              fontSize="11"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Token
            </motion.text>
            <motion.text
              x={cx}
              y={cy + 10}
              textAnchor="middle"
              fill="var(--pres-muted)"
              fontSize="9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              budget
            </motion.text>
          </svg>
        </div>

        {/* Legend + compact */}
        <div className="flex flex-col flex-1 gap-4">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
            >
              <div
                className="flex-shrink-0 rounded-sm w-3 h-3"
                style={{ background: seg.color }}
              />
              <div>
                <p
                  className="font-semibold text-base"
                  style={{
                    color:
                      seg.color === "var(--pres-accent)"
                        ? "var(--pres-accent)"
                        : "var(--pres-text)",
                  }}
                >
                  {seg.label}{" "}
                  <span className="font-normal text-[var(--pres-muted)] text-sm">
                    ({seg.pct}%)
                  </span>
                </p>
                <p className="text-[var(--pres-muted)] text-sm">{seg.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Compact box */}
          <motion.div
            className="bg-[var(--pres-accent)]/8 mt-4 px-4 py-3 border border-[var(--pres-accent)]/30 rounded-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p className="mb-1 font-mono font-bold text-[var(--pres-accent)] text-sm">
              /compact
            </p>
            <p className="text-[var(--pres-muted)] text-xs leading-relaxed">
              Resetta la memoria a breve termine — estrae i punti chiave e le
              decisioni architetturali, genera un riassunto condensato.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
