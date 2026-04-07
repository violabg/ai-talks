"use client";

import { motion } from "motion/react";

const segments = [
  { label: "System Prompts", pct: 30, color: "#334155", desc: "Regole di comportamento nascoste dell'editor" },
  { label: "Tool Definitions", pct: 25, color: "#475569", desc: "Spiegazione al modello di come usare le skill" },
  { label: "User Context", pct: 45, color: "#a78bfa", desc: "Il tuo codice, la chat e i file allegati" },
];

export function Slide07Context() {
  // Build donut arcs
  const R = 70;
  const cx = 100;
  const cy = 100;
  const circumference = 2 * Math.PI * R;

  let accumulatedPct = 0;
  const arcs = segments.map((seg) => {
    const startPct = accumulatedPct;
    accumulatedPct += seg.pct;
    const startAngle = (startPct / 100) * 360 - 90;
    const endAngle = (accumulatedPct / 100) * 360 - 90;
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
    <div className="flex flex-col items-center justify-center h-full px-6">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        La <span className="text-[#a78bfa]">Finestra dei Token</span>
      </motion.h2>
      <motion.p
        className="text-[#94a3b8] text-sm mb-8 text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Quando il contesto si esaurisce, l&apos;agente &ldquo;dimentica&rdquo; le istruzioni iniziali
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-10 w-full max-w-5xl">
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
              x={cx} y={cy - 6}
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="11"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Token
            </motion.text>
            <motion.text
              x={cx} y={cy + 10}
              textAnchor="middle"
              fill="#94a3b8"
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
        <div className="flex flex-col gap-4 flex-1">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
            >
              <div
                className="flex-shrink-0 w-3 h-3 rounded-sm"
                style={{ background: seg.color }}
              />
              <div>
                <p className="text-sm font-semibold" style={{ color: seg.color === "#a78bfa" ? "#a78bfa" : "#e2e8f0" }}>
                  {seg.label}{" "}
                  <span className="text-[#94a3b8] font-normal text-xs">({seg.pct}%)</span>
                </p>
                <p className="text-[#94a3b8] text-xs">{seg.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Compact box */}
          <motion.div
            className="mt-4 rounded-xl border border-[#a78bfa]/30 bg-[rgba(167,139,250,0.08)] px-4 py-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p className="font-mono text-[#a78bfa] text-sm font-bold mb-1">/compact</p>
            <p className="text-[#94a3b8] text-xs leading-relaxed">
              Resetta la memoria a breve termine — estrae i punti chiave e le decisioni architetturali, genera un riassunto condensato.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
