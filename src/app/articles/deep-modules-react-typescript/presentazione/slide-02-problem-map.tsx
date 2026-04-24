import * as motion from "motion/react-client";
import { ArrowTip, FadeIn, SlideTitle } from "./slide-shared";

const nodes = [
  { label: "useAuthToken", x: 140, y: 105 },
  { label: "useAuthUser", x: 300, y: 72 },
  { label: "useAuthRefresh", x: 500, y: 102 },
  { label: "AuthContext", x: 560, y: 250 },
  { label: "token utils", x: 340, y: 305 },
  { label: "AuthProvider", x: 145, y: 252 },
];

export function Slide02ProblemMap() {
  return (
    <div className="space-y-8">
      <SlideTitle
        eyebrow="Problema"
        title="Quando i moduli sono shallow, la comprensione e una caccia al tesoro"
        subtitle="Per capire autenticazione devi seguire molte dipendenze sparse. L'agente AI ricostruisce una mappa mentale fragile, non un contratto stabile."
      />

      <FadeIn delay={0.14}>
        <div className="bg-[var(--pres-bg-card)] mx-auto p-4 sm:p-7 border border-[var(--pres-border)] rounded-2xl w-full max-w-6xl">
          <svg viewBox="0 0 700 380" className="w-full">
            <motion.text
              x="350"
              y="34"
              fill="var(--pres-muted)"
              textAnchor="middle"
              fontSize="16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
            >
              grafo import: 1 feature, troppi punti di ingresso
            </motion.text>

            {nodes.map((node, i) => (
              <motion.g
                key={node.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.12 + i * 0.08, duration: 0.35 }}
              >
                <rect
                  x={node.x - 70}
                  y={node.y - 20}
                  width="140"
                  height="40"
                  rx="10"
                  fill="var(--pres-danger-dim)"
                  stroke="var(--pres-danger)"
                />
                <text
                  x={node.x}
                  y={node.y + 5}
                  fill="var(--pres-danger)"
                  textAnchor="middle"
                  fontSize="13"
                >
                  {node.label}
                </text>
              </motion.g>
            ))}

            {[0, 1, 2, 3, 4, 5].map((i) => {
              const a = nodes[i];
              const b = nodes[(i + 2) % nodes.length];
              const dx = b.x - a.x;
              const dy = b.y - a.y;
              const padX = 70;
              const padY = 20;
              const t = Math.min(Math.abs(padX / dx), Math.abs(padY / dy));
              const x1 = a.x + dx * t;
              const y1 = a.y + dy * t;
              const x2 = b.x - dx * t;
              const y2 = b.y - dy * t;

              const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
              const tipDelay = 0.42 + i * 0.06 + 0.45;
              return (
                <g key={`${a.label}-${b.label}`}>
                  <motion.line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--pres-danger)"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.65 }}
                    transition={{ delay: 0.42 + i * 0.06, duration: 0.45 }}
                  />
                  <ArrowTip
                    x={x2}
                    y={y2}
                    angle={angle}
                    color="var(--pres-danger)"
                    delay={tipDelay}
                  />
                </g>
              );
            })}

            <motion.rect
              x="220"
              y="145"
              width="260"
              height="92"
              rx="16"
              fill="var(--pres-bg-node)"
              stroke="var(--pres-accent)"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.88, duration: 0.4 }}
            />
            <motion.text
              x="350"
              y="182"
              fill="var(--pres-text)"
              textAnchor="middle"
              fontSize="19"
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.98 }}
            >
              &quot;Dove inizio?&quot;
            </motion.text>
            <motion.text
              x="350"
              y="209"
              fill="var(--pres-muted)"
              textAnchor="middle"
              fontSize="14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.04 }}
            >
              high coupling, low navigabilita
            </motion.text>
          </svg>
        </div>
      </FadeIn>
    </div>
  );
}
