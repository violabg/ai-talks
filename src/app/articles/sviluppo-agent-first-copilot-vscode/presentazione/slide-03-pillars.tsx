"use client";

import { motion } from "motion/react";

const pillars = [
  {
    id: "harness",
    label: "Harness",
    sublabel: "VS Code + Copilot",
    role: "Il corpo",
    desc: "Interfaccia utente e API per leggere/scrivere il filesystem",
    color: "var(--pres-success)",
    angle: -90,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 21h8M12 17v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "model",
    label: "Model",
    sublabel: "LLM (Claude, GPT-4o)",
    role: "Il cervello",
    desc: "Thinking Effort: basso → medio → alto",
    color: "var(--pres-accent)",
    angle: -18,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "context",
    label: "Context",
    sublabel: "File, workspace, @",
    role: "La memoria",
    desc: "Grounding: le regole del tuo progetto specifico",
    color: "var(--pres-warning)",
    angle: 54,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path
          d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="9"
          y="3"
          width="6"
          height="4"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 12h6M9 16h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "tools",
    label: "Tools",
    sublabel: "read_file, run_command…",
    role: "Le mani",
    desc: "Azioni reali sul computer oltre la generazione di testo",
    color: "var(--pres-danger)",
    angle: 126,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "prompt",
    label: "Prompt",
    sublabel: "Linguaggio naturale",
    role: "La bussola",
    desc: "Obiettivo, vincoli tecnici, formato desiderato",
    color: "var(--pres-blue)",
    angle: 198,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 8v.01M12 11v5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const toRad = (deg: number) => (deg * Math.PI) / 180;

export function Slide03Pillars() {
  const cx = 150;
  const cy = 150;
  const r = 105;

  return (
    <div className="flex flex-col justify-center items-center px-4 h-full">
      <motion.h2
        className="mb-6 sm:mb-8 font-bold text-2xl sm:text-3xl text-center"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        I <span className="text-[var(--pres-accent)]">Cinque Pilastri</span>{" "}
        dell&apos;Architettura Agentica
      </motion.h2>

      <div className="flex lg:flex-row flex-col items-center gap-8 w-full max-w-6xl">
        {/* SVG diagram */}
        <div className="relative flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <svg viewBox="0 0 300 300" className="w-full overflow-visible">
            {/* Spoke lines */}
            {pillars.map((p, i) => {
              const rad = toRad(p.angle);
              const x2 = cx + r * Math.cos(rad);
              const y2 = cy + r * Math.sin(rad);
              return (
                <motion.line
                  key={p.id + "-line"}
                  x1={cx}
                  y1={cy}
                  x2={x2}
                  y2={y2}
                  stroke="var(--pres-border)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                />
              );
            })}

            {/* Center node */}
            <motion.circle
              cx={cx}
              cy={cy}
              r={28}
              fill="var(--pres-accent-dim)"
              stroke="var(--pres-accent)"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
            <motion.text
              x={cx}
              y={cy - 6}
              textAnchor="middle"
              fill="var(--pres-accent)"
              fontSize="10"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Agente
            </motion.text>
            <motion.text
              x={cx}
              y={cy + 8}
              textAnchor="middle"
              fill="var(--pres-accent)"
              fontSize="9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              AI
            </motion.text>

            {/* Pillar nodes */}
            {pillars.map((p, i) => {
              const rad = toRad(p.angle);
              const nx = cx + r * Math.cos(rad);
              const ny = cy + r * Math.sin(rad);
              return (
                <motion.g
                  key={p.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
                  style={{ transformOrigin: `${nx}px ${ny}px` }}
                >
                  <circle
                    cx={nx}
                    cy={ny}
                    r={22}
                    fill={`color-mix(in srgb, ${p.color} 12%, transparent)`}
                    stroke={p.color}
                    strokeWidth="1.5"
                  />
                  <text
                    x={nx}
                    y={ny + 4}
                    textAnchor="middle"
                    fill={p.color}
                    fontSize="8.5"
                    fontWeight="700"
                  >
                    {p.label}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3 w-full">
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              className="flex items-start gap-3 bg-[var(--pres-bg-card)]/5 px-4 py-3 border border-[var(--pres-border)] rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
            >
              <span style={{ color: p.color }} className="flex-shrink-0 mt-0.5">
                {p.icon}
              </span>
              <div>
                <p className="font-semibold text-sm" style={{ color: p.color }}>
                  {p.label}{" "}
                  <span className="font-normal text-[var(--pres-muted)]">— {p.role}</span>
                </p>
                <p className="mt-0.5 text-[var(--pres-muted)] text-xs">{p.desc}</p>
              </div>
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
