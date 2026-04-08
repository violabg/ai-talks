"use client";

import * as motion from "motion/react-client";

const NODE_W = 200;
const NODE_H = 52;

const nodes = [
  { id: "dryrun",    x: 100, y: 60,  label: "Dry-run",          sub: "npx codemod --dry",    color: "var(--pres-blue)" },
  { id: "diff",      x: 100, y: 160, label: "Ispeziona il diff", sub: "git diff su un campione", color: "var(--pres-blue)" },
  { id: "ok",        x: 100, y: 260, label: "Pattern corretto?", sub: "verifica le anomalie",  color: "var(--pres-warning)", diamond: true },
  { id: "apply",     x: 100, y: 380, label: "Applica",           sub: "npx codemod --apply",  color: "var(--pres-success)" },
  { id: "typecheck", x: 100, y: 480, label: "Typecheck + Test",  sub: "pnpm tsc && pnpm test", color: "var(--pres-success)" },
  { id: "pass",      x: 100, y: 580, label: "Tutto passa?",      sub: "errori = segnali preziosi", color: "var(--pres-warning)", diamond: true },
  { id: "commit",    x: 100, y: 700, label: "Commit",            sub: "punto di ancoraggio",  color: "var(--pres-accent)" },
];

const edges = [
  { from: "dryrun", to: "diff" },
  { from: "diff", to: "ok" },
  { from: "ok", to: "apply", label: "sì" },
  { from: "apply", to: "typecheck" },
  { from: "typecheck", to: "pass" },
  { from: "pass", to: "commit", label: "sì" },
];

export function Slide05Codemods() {
  return (
    <div className="flex flex-col h-full py-6 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Fase 1:{" "}
        <span className="text-[var(--pres-success)]">Trasformazioni Meccaniche</span>
      </motion.h2>
      <motion.p
        className="text-[var(--pres-muted)] text-base text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Applica tutto ciò che può essere automatizzato in modo deterministico — sempre in dry-run prima
      </motion.p>

      <div className="flex-1 min-h-0 flex items-center justify-center">
        <svg viewBox="0 0 520 780" className="w-full max-w-2xl h-full">
          <defs>
            <marker id="arrow-codemod" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="var(--pres-muted)" />
            </marker>
            <marker id="arrow-codemod-red" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="var(--pres-danger)" />
            </marker>
          </defs>

          {/* Edges */}
          {edges.map((edge, i) => {
            const from = nodes.find(n => n.id === edge.from)!;
            const to = nodes.find(n => n.id === edge.to)!;
            const x = from.x + NODE_W / 2;
            const y1 = from.y + NODE_H / 2;
            const y2 = to.y - NODE_H / 2;
            return (
              <motion.g key={`${edge.from}-${edge.to}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.15 }}>
                <line x1={x} y1={y1} x2={x} y2={y2 - 4}
                  stroke="var(--pres-muted)" strokeWidth="1.5" markerEnd="url(#arrow-codemod)" />
                {edge.label && (
                  <text x={x + 6} y={(y1 + y2) / 2} fill="var(--pres-success)"
                    fontSize="11" fontWeight="600">{edge.label}</text>
                )}
              </motion.g>
            );
          })}

          {/* "No" branch from "ok" diamond */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            <path d="M 300 260 L 400 260 L 400 60 L 300 60"
              stroke="var(--pres-danger)" strokeWidth="1.5" fill="none"
              strokeDasharray="5 3" markerEnd="url(#arrow-codemod-red)" />
            <text x="410" y="170" fill="var(--pres-danger)" fontSize="11" fontWeight="600">no → rianalizza</text>
          </motion.g>

          {/* "No" branch from "pass" diamond */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <path d="M 300 580 L 440 580 L 440 160 L 300 160"
              stroke="var(--pres-danger)" strokeWidth="1.5" fill="none"
              strokeDasharray="5 3" markerEnd="url(#arrow-codemod-red)" />
            <text x="450" y="390" fill="var(--pres-danger)" fontSize="11" fontWeight="600">no → diagnostica</text>
            <text x="450" y="404" fill="var(--pres-danger)" fontSize="11" fontWeight="600">prima</text>
          </motion.g>

          {/* Nodes */}
          {nodes.map((node, i) => {
            const cx = node.x + NODE_W / 2;
            return (
              <motion.g key={node.id}
                initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.4 + i * 0.12 }}
                style={{ transformOrigin: `${cx}px ${node.y}px` }}>
                {node.diamond ? (
                  <polygon
                    points={`${cx},${node.y - NODE_H / 2} ${cx + NODE_W / 2},${node.y} ${cx},${node.y + NODE_H / 2} ${cx - NODE_W / 2},${node.y}`}
                    fill={`color-mix(in srgb, ${node.color} 10%, transparent)`}
                    stroke={node.color} strokeWidth="1.5"
                  />
                ) : (
                  <rect x={node.x} y={node.y - NODE_H / 2} width={NODE_W} height={NODE_H}
                    rx="10"
                    fill={`color-mix(in srgb, ${node.color} 10%, transparent)`}
                    stroke={node.color} strokeWidth="1.5" />
                )}
                <text x={cx} y={node.y - 6} textAnchor="middle"
                  fill={node.color} fontSize="14" fontWeight="700">{node.label}</text>
                <text x={cx} y={node.y + 11} textAnchor="middle"
                  fill="var(--pres-muted)" fontSize="10">{node.sub}</text>
              </motion.g>
            );
          })}

          {/* "next batch" arrow from commit */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <path d="M 200 726 L 200 755 L 480 755 L 480 60 L 300 60"
              stroke="var(--pres-accent)" strokeWidth="1.5" strokeDasharray="6 3"
              fill="none" markerEnd="url(#arrow-codemod)" />
            <text x="430" y="748" fill="var(--pres-accent)" fontSize="11" fontStyle="italic">batch successivo</text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
