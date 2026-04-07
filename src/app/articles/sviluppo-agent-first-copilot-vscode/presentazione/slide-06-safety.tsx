"use client";

import { motion } from "motion/react";

const layers = [
  {
    id: "diff",
    label: "Diff Review",
    sublabel: "Prima del salvataggio",
    desc: "Visualizzazione comparativa multi-file — rosso/verde per ogni modifica. Accetti o scarti granularmente.",
    color: "#fbbf24",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 8v8M9 11l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "checkpoint",
    label: "Checkpoints",
    sublabel: "Dopo ogni Act",
    desc: "Istantanea invisibile dello stato dei file. Rollback istantaneo senza toccare Git.",
    color: "#a78bfa",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "fork",
    label: "Fork della Sessione",
    sublabel: "Esplorazione parallela",
    desc: "Clona la conversazione in una nuova finestra. Esplora strade alternative senza inquinare la sessione originale.",
    color: "#34d399",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8v8M6 8c0 0 4 4 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Slide06Safety() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        La Rete di <span className="text-[#34d399]">Sicurezza</span>
      </motion.h2>
      <motion.p
        className="text-[#94a3b8] text-sm mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Tre livelli di protezione per lavorare senza ansia con modifiche multi-file
      </motion.p>

      <div className="relative w-full max-w-3xl">
        {/* SVG shield layers behind cards */}
        <svg
          viewBox="0 0 640 220"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          {[
            { cx: 320, cy: 110, rx: 310, ry: 100, color: "#34d399" },
            { cx: 320, cy: 110, rx: 220, ry: 75, color: "#a78bfa" },
            { cx: 320, cy: 110, rx: 130, ry: 50, color: "#fbbf24" },
          ].map((ellipse, i) => (
            <motion.ellipse
              key={i}
              cx={ellipse.cx}
              cy={ellipse.cy}
              rx={ellipse.rx}
              ry={ellipse.ry}
              fill="none"
              stroke={ellipse.color}
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity={0.2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
              style={{ transformOrigin: "320px 110px" }}
            />
          ))}
        </svg>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.id}
              className="flex flex-col items-center text-center rounded-xl border p-5 gap-3"
              style={{
                borderColor: `${layer.color}40`,
                background: `rgba(${hexToRgb(layer.color)}, 0.05)`,
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
            >
              <div style={{ color: layer.color }}>{layer.icon}</div>
              <div>
                <p className="font-bold text-sm" style={{ color: layer.color }}>
                  {layer.label}
                </p>
                <p className="text-[#64748b] text-xs font-mono">{layer.sublabel}</p>
              </div>
              <p className="text-[#94a3b8] text-xs leading-relaxed">{layer.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "255,255,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
