"use client";

import { motion } from "motion/react";

const nodes = [
  {
    id: "prompt",
    label: "Prompt",
    sublabel: "URL shortener con FastAPI + SQLite",
    color: "#38bdf8",
    x: 160,
    y: 30,
  },
  {
    id: "plan",
    label: "Plan Mode",
    sublabel: "main.py · database.py · templates/ · requirements.txt",
    color: "#a78bfa",
    x: 160,
    y: 110,
  },
  {
    id: "act",
    label: "Act Mode",
    sublabel: "Crea i file, invoca pip install",
    color: "#a78bfa",
    x: 160,
    y: 190,
  },
  {
    id: "error",
    label: "Errore Terminale",
    sublabel: "ModuleNotFoundError: jinja2",
    color: "#f87171",
    x: 160,
    y: 270,
  },
  {
    id: "read",
    label: "Legge l'Output",
    sublabel: "L'agente analizza il traceback",
    color: "#fbbf24",
    x: 310,
    y: 270,
  },
  {
    id: "fix",
    label: "Auto-Fix",
    sublabel: "pip install jinja2 → riavvia uvicorn",
    color: "#34d399",
    x: 310,
    y: 190,
  },
  {
    id: "success",
    label: "Server Avviato",
    sublabel: "localhost:8000 ✓",
    color: "#34d399",
    x: 310,
    y: 110,
  },
];

const edges = [
  { from: "prompt", to: "plan" },
  { from: "plan", to: "act" },
  { from: "act", to: "error" },
  { from: "error", to: "read" },
  { from: "read", to: "fix" },
  { from: "fix", to: "success" },
];

export function Slide10SelfHeal() {
  // Build positions map
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
        L&apos;Agente che si <span className="text-[#34d399]">Auto-Ripara</span>
      </motion.h2>
      <motion.p
        className="text-[#94a3b8] text-sm mb-6 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Esercitazione: URL Shortener da zero — senza un secondo prompt dall&apos;utente
      </motion.p>

      <div className="w-full max-w-xl overflow-x-auto">
        <svg viewBox="0 0 480 330" className="w-full" style={{ minWidth: 340 }}>
          {/* Edge lines */}
          {edges.map((edge, i) => {
            const from = pos[edge.from];
            const to = pos[edge.to];
            if (!from || !to) return null;
            return (
              <motion.line
                key={`${edge.from}-${edge.to}`}
                x1={from.x} y1={from.y + 22}
                x2={to.x} y2={to.y - 22}
                stroke="#334155"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.18 }}
              />
            );
          })}

          {/* Arrowhead marker */}
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#334155" />
            </marker>
          </defs>

          {/* Self-heal loop annotation */}
          <motion.path
            d="M 182 310 Q 400 350 400 290 Q 400 230 332 230"
            fill="none"
            stroke="#34d399"
            strokeWidth="1.5"
            strokeDasharray="5 3"
            opacity={0.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          />
          <motion.text
            x={280} y={350}
            textAnchor="middle"
            fill="#34d399"
            fontSize="9"
            fontStyle="italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2.2 }}
          >
            loop di auto-riparazione
          </motion.text>

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.4 + i * 0.15 }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            >
              <rect
                x={node.x - 70}
                y={node.y - 22}
                width={140}
                height={44}
                rx={8}
                fill={`rgba(${hexToRgb(node.color)}, 0.1)`}
                stroke={node.color}
                strokeWidth="1.5"
              />
              <text
                x={node.x}
                y={node.y - 5}
                textAnchor="middle"
                fill={node.color}
                fontSize="11"
                fontWeight="700"
              >
                {node.label}
              </text>
              <text
                x={node.x}
                y={node.y + 11}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="8.5"
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
