"use client";

import { motion } from "motion/react";

// viewBox: 0 0 820 430
// Left column x=195, Right column x=625, node w=240 h=62
const nodes = [
  {
    id: "prompt",
    label: "Prompt",
    sublabel: "URL shortener con FastAPI + SQLite",
    color: "var(--pres-blue)",
    x: 195,
    y: 55,
  },
  {
    id: "plan",
    label: "Plan Mode",
    sublabel: "main.py · database.py · templates/ · req.txt",
    color: "var(--pres-accent)",
    x: 195,
    y: 165,
  },
  {
    id: "act",
    label: "Act Mode",
    sublabel: "Crea i file, invoca pip install",
    color: "var(--pres-accent)",
    x: 195,
    y: 275,
  },
  {
    id: "error",
    label: "Errore Terminale",
    sublabel: "ModuleNotFoundError: jinja2",
    color: "var(--pres-danger)",
    x: 195,
    y: 385,
  },
  {
    id: "read",
    label: "Legge l'Output",
    sublabel: "L'agente analizza il traceback",
    color: "var(--pres-warning)",
    x: 625,
    y: 385,
  },
  {
    id: "fix",
    label: "Auto-Fix",
    sublabel: "pip install jinja2 → riavvia uvicorn",
    color: "var(--pres-success)",
    x: 625,
    y: 275,
  },
  {
    id: "success",
    label: "Server Avviato",
    sublabel: "localhost:8000 ✓",
    color: "var(--pres-success)",
    x: 625,
    y: 165,
  },
];

// Straight edges — vertical for same column, horizontal for cross
const edges = [
  { from: "prompt", to: "plan", type: "v" },
  { from: "plan", to: "act", type: "v" },
  { from: "act", to: "error", type: "v" },
  { from: "error", to: "read", type: "h" },
  { from: "read", to: "fix", type: "v" },
  { from: "fix", to: "success", type: "v" },
];

const NODE_W = 240;
const NODE_H = 62;

export function Slide10SelfHeal() {
  const pos: Record<string, { x: number; y: number }> = {};
  nodes.forEach((n) => {
    pos[n.id] = { x: n.x, y: n.y };
  });

  return (
    <div className="flex flex-col justify-center items-center px-6 h-full">
      <motion.h2
        className="mb-2 font-bold text-2xl sm:text-3xl text-center"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        L&apos;Agente che si{" "}
        <span className="text-[var(--pres-success)]">Auto-Ripara</span>
      </motion.h2>
      <motion.p
        className="mb-4 max-w-xl text-[var(--pres-muted)] text-sm text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Esercitazione: URL Shortener da zero — senza un secondo prompt
        dall&apos;utente
      </motion.p>

      <div className="w-full max-w-4xl">
        <svg viewBox="0 0 820 430" className="w-full">
          <defs>
            <marker
              id="arrow10"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="var(--pres-muted)" />
            </marker>
            <marker
              id="arrow10green"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="var(--pres-success)" />
            </marker>
          </defs>

          {/* Column labels */}
          <motion.text
            x={195}
            y={15}
            textAnchor="middle"
            fill="var(--pres-muted)"
            fontSize="12"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            flusso normale →
          </motion.text>
          <motion.text
            x={625}
            y={42}
            textAnchor="middle"
            fill="var(--pres-success)"
            fontSize="12"
            fontFamily="monospace"
            opacity={0.7}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ← auto-riparazione
          </motion.text>

          {/* Edges */}
          {edges.map((edge, i) => {
            const from = pos[edge.from];
            const to = pos[edge.to];
            if (!from || !to) return null;

            const isGreen = edge.from === "read" || edge.from === "fix";
            const marker = isGreen ? "url(#arrow10green)" : "url(#arrow10)";
            const stroke = isGreen
              ? "var(--pres-success)"
              : "var(--pres-muted)";

            let x1, y1, x2, y2;
            if (edge.type === "v") {
              if (to.y > from.y) {
                // going down: exit bottom, enter top
                x1 = from.x;
                y1 = from.y + NODE_H / 2 + 2;
                x2 = to.x;
                y2 = to.y - NODE_H / 2 - 2;
              } else {
                // going up: exit top, enter bottom
                x1 = from.x;
                y1 = from.y - NODE_H / 2 - 2;
                x2 = to.x;
                y2 = to.y + NODE_H / 2 + 2;
              }
            } else {
              // horizontal: error → read
              x1 = from.x + NODE_W / 2 + 2;
              y1 = from.y;
              x2 = to.x - NODE_W / 2 - 2;
              y2 = to.y;
            }

            return (
              <motion.line
                key={`${edge.from}-${edge.to}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={stroke}
                strokeWidth="1.5"
                markerEnd={marker}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.18 }}
              />
            );
          })}

          {/* Self-heal arc: top-center of Server Avviato → right-middle of Prompt (single L-turn) */}
          <motion.path
            d={`M 625 ${165 - NODE_H / 2} L 625 55 L ${195 + NODE_W / 2} 55`}
            fill="none"
            stroke="var(--pres-success)"
            strokeWidth="1.5"
            strokeDasharray="6 3"
            strokeLinejoin="round"
            markerEnd="url(#arrow10green)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          />
          <motion.text
            x={643}
            y={115}
            textAnchor="start"
            fill="var(--pres-success)"
            fontSize="10"
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
                y={node.y - 8}
                textAnchor="middle"
                fill={node.color}
                fontSize="15"
                fontWeight="700"
              >
                {node.label}
              </text>
              <text
                x={node.x}
                y={node.y + 12}
                textAnchor="middle"
                fill="var(--pres-muted)"
                fontSize="11"
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
