import * as motion from "motion/react-client";
import { FadeIn, SlideTitle } from "./slide-shared";

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
        <div className="bg-[#0b1222] mx-auto p-4 sm:p-7 border border-[#334155] rounded-2xl w-full max-w-6xl">
          <div className="mx-auto w-full max-w-5xl">
            <svg viewBox="0 0 700 380" className="w-full">
              <motion.text
                x="350"
                y="34"
                fill="#94a3b8"
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
                    x={node.x - 64}
                    y={node.y - 20}
                    width="128"
                    height="40"
                    rx="10"
                    fill="rgba(248,113,113,0.14)"
                    stroke="#f87171"
                  />
                  <text
                    x={node.x}
                    y={node.y + 5}
                    fill="#fca5a5"
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
                return (
                  <motion.line
                    key={`${a.label}-${b.label}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="#f87171"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.65 }}
                    transition={{ delay: 0.42 + i * 0.06, duration: 0.45 }}
                  />
                );
              })}

              <motion.rect
                x="250"
                y="145"
                width="200"
                height="92"
                rx="16"
                fill="rgba(15,23,42,0.95)"
                stroke="#a78bfa"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.88, duration: 0.4 }}
              />
              <motion.text
                x="350"
                y="182"
                fill="#e2e8f0"
                textAnchor="middle"
                fontSize="19"
                fontWeight="700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.98 }}
              >
                "Dove inizio?"
              </motion.text>
              <motion.text
                x="350"
                y="209"
                fill="#94a3b8"
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
        </div>
      </FadeIn>
    </div>
  );
}
