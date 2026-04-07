"use client";

import { motion } from "motion/react";

// viewBox: 0 0 700 400
// Left column x=200, Right column x=500, node h=52
const nodes = [
  { id: "prompt",  label: "Prompt",          sublabel: "URL shortener con FastAPI + SQLite",           color: "var(--pres-blue)", x: 200, y: 50  },
  { id: "plan",    label: "Plan Mode",        sublabel: "main.py · database.py · templates/ · req.txt", color: "var(--pres-accent)", x: 200, y: 150 },
  { id: "act",     label: "Act Mode",         sublabel: "Crea i file, invoca pip install",              color: "var(--pres-accent)", x: 200, y: 250 },
  { id: "error",   label: "Errore Terminale", sublabel: "ModuleNotFoundError: jinja2",                  color: "var(--pres-danger)", x: 200, y: 350 },
  { id: "read",    label: "Legge l'Output",   sublabel: "L'agente analizza il traceback",               color: "var(--pres-warning)", x: 500, y: 350 },
  { id: "fix",     label: "Auto-Fix",         sublabel: "pip install jinja2 → riavvia uvicorn",         color: "var(--pres-success)", x: 500, y: 250 },
  { id: "success", label: "Server Avviato",   sublabel: "localhost:8000 ✓",                             color: "var(--pres-success)", x: 500, y: 150 },
];

// Straight edges — vertical for same column, horizontal for cross
const edges = [
  { from: "prompt", to: "plan",    type: "v" },
  { from: "plan",   to: "act",     type: "v" },
  { from: "act",    to: "error",   type: "v" },
  { from: "error",  to: "read",    type: "h" },
  { from: "read",   to: "fix",     type: "v" },
  { from: "fix",    to: "success", type: "v" },
];

const NODE_W = 180;
const NODE_H = 52;

export function Slide10SelfHeal() {
  const pos: Record<string, { x: number; y: number }> = {};
  nodes.forEach((n) => { pos[n.id] = { x: n.x, y: n.y }; });

  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        L&apos;Agente che si <span className="text-[var(--pres-success)]">Auto-Ripara</span>
      </motion.h2>
      <motion.p
        className="text-[var(--pres-muted)] text-sm mb-4 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Esercitazione: URL Shortener da zero — senza un secondo prompt dall&apos;utente
      </motion.p>

      <div className="w-full max-w-4xl">
        <svg viewBox="0 0 700 420" className="w-full">
          <defs>
            <marker id="arrow10" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="var(--pres-muted)" />
            </marker>
            <marker id="arrow10green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="var(--pres-success)" />
            </marker>
          </defs>

          {/* Column labels */}
          <motion.text x={200} y={16} textAnchor="middle" fill="var(--pres-muted)" fontSize="11" fontFamily="monospace"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            flus normal →
          </motion.text>
          <motion.text x={500} y={16} textAnchor="middle" fill="var(--pres-success)" fontSize="11" fontFamily="monospace" opacity={0.7}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            ← auto-riparazione
          </motion.text>

          {/* Edges */}
          {edges.map((edge, i) => {
            const from = pos[edge.from];
            const to = pos[edge.to];
            if (!from || !to) return null;

            const isGreen = edge.from === "read" || edge.from === "fix";
            const marker = isGreen ? "url(#arrow10green)" : "url(#arrow10)";
            const stroke = isGreen ? "var(--pres-success)" : "var(--pres-muted)";

            let x1, y1, x2, y2;
            if (edge.type === "v") {
              x1 = from.x; y1 = from.y + NODE_H / 2 + 2;
              x2 = to.x;   y2 = to.y - NODE_H / 2 - 2;
            } else {
              // horizontal: error → read
              x1 = from.x + NODE_W / 2 + 2; y1 = from.y;
              x2 = to.x - NODE_W / 2 - 2;   y2 = to.y;
            }

            return (
              <motion.line
                key={`${edge.from}-${edge.to}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={stroke}
                strokeWidth="1.5"
                markerEnd={marker}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.18 }}
              />
            );
          })}

          {/* Self-heal arc annotation */}
          <motion.path
            d="M 590 150 Q 640 100 640 50 Q 640 30 590 30 Q 200 30 200 30"
            fill="none"
            stroke="var(--pres-success)"
            strokeWidth="1.5"
            strokeDasharray="6 3"
            opacity={0}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          />
          <motion.text
            x={620} y={95}
            textAnchor="middle"
            fill="var(--pres-success)"
            fontSize="9"
            fontStyle="italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2.7 }}
          >
            loop
          </motion.text>

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.4 + i * 0.15 }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            >
              <rect
                x={node.x - NODE_W / 2}
                y={node.y - NODE_H / 2}
                width={NODE_W}
                height={NODE_H}
                rx={10}
                fill={`color-mix(in srgb, ${node.color} 10%, transparent)`}
                stroke={node.color}
                strokeWidth="1.5"
              />
              <text
                x={node.x}
                y={node.y - 7}
                textAnchor="middle"
                fill={node.color}
                fontSize="13"
                fontWeight="700"
              >
                {node.label}
              </text>
              <text
                x={node.x}
                y={node.y + 10}
                textAnchor="middle"
                fill="var(--pres-muted)"
                fontSize="9.5"
              >
                {node.sublabel}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "255,255,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
