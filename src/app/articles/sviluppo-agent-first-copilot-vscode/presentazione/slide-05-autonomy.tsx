"use client";

import { motion } from "motion/react";

const levels = [
  {
    id: "default",
    label: "Default Approvals",
    icon: "🔒",
    color: "var(--pres-success)",
    borderColor: "var(--pres-success)",
    control: "Controllo massimo",
    desc: "Ogni azione potenzialmente distruttiva richiede un clic umano",
    use: "Ideale per: ambienti di produzione, codebase critiche",
    autonomy: 25,
  },
  {
    id: "bypass",
    label: "Bypass Approvals",
    icon: "⚡",
    color: "var(--pres-warning)",
    borderColor: "var(--pres-warning)",
    control: "Controllo bilanciato",
    desc: "Auto-approva azioni standard, richiede conferma solo per quelle distruttive",
    use: "Ideale per: sviluppo quotidiano, refactoring",
    autonomy: 60,
  },
  {
    id: "autopilot",
    label: "Autopilot",
    icon: "🚀",
    color: "var(--pres-danger)",
    borderColor: "var(--pres-danger)",
    control: "Autonomia totale",
    desc: "L'agente ha carta bianca per iterare, testare e correggere",
    use: "Ideale per: prototipazione rapida, task ben delimitati",
    autonomy: 100,
  },
];

export function Slide05Autonomy() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Livelli di <span className="text-[var(--pres-accent)]">Autonomia</span>
      </motion.h2>

      <motion.p
        className="text-[var(--pres-muted)] text-sm mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Scegli quanto fidarti dell&apos;agente in base al contesto
      </motion.p>

      {/* Spectrum bar */}
      <motion.div
        className="w-full max-w-2xl h-2 rounded-full mb-8 overflow-hidden"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          background: "linear-gradient(to right, var(--pres-success), var(--pres-warning), var(--pres-danger))",
          transformOrigin: "left",
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        {levels.map((level, i) => (
          <motion.div
            key={level.id}
            className="flex flex-col rounded-xl border p-5 gap-3"
            style={{
              borderColor: `color-mix(in srgb, ${level.borderColor} 25%, transparent)`,
              background: `color-mix(in srgb, ${level.color} 5%, transparent)`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{level.icon}</span>
              <div>
                <p className="font-bold text-sm" style={{ color: level.color }}>
                  {level.label}
                </p>
                <p className="text-[var(--pres-muted)] text-xs">{level.control}</p>
              </div>
            </div>

            {/* Autonomy bar */}
            <div className="w-full h-1.5 bg-[var(--pres-bg-surface)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: level.color }}
                initial={{ width: 0 }}
                animate={{ width: `${level.autonomy}%` }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
              />
            </div>

            <p className="text-[var(--pres-muted)] text-xs leading-relaxed">{level.desc}</p>
            <p className="text-[var(--pres-muted)] text-xs font-mono">{level.use}</p>
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
