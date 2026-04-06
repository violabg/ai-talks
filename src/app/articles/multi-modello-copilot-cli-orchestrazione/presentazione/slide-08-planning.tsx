import * as motion from "motion/react-client";
import { FadeIn, FadeInLeft, MODEL_COLORS } from "./slide-shared";

export function PlanningSlide() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 text-center text-2xl font-bold text-[#a78bfa] md:text-4xl">
          Il planning riduce le allucinazioni
        </h2>
      </FadeIn>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <FadeInLeft delay={0.2}>
          <div className="rounded-lg border border-[#334155] bg-[#1e293b]/80 p-5 font-mono text-sm">
            <p className="mb-3 text-xs uppercase tracking-wider text-[#94a3b8]">
              PLAN.md
            </p>
            {[
              { n: "1", text: "Analizzare schema DB", color: MODEL_COLORS.sonnet },
              { n: "2", text: "Creare endpoint REST", color: MODEL_COLORS.gpt4 },
              { n: "3", text: "Aggiungere validazione", color: MODEL_COLORS.gpt4 },
              { n: "4", text: "Scrivere test", color: MODEL_COLORS.opus },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="mb-2 flex items-center gap-2"
              >
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: `${step.color}20`,
                    color: step.color,
                  }}
                >
                  {step.n}
                </span>
                <span className="text-[#e2e8f0]">{step.text}</span>
              </motion.div>
            ))}
          </div>
        </FadeInLeft>

        <FadeIn delay={0.7}>
          <div className="flex flex-col items-center gap-4">
            <svg viewBox="0 0 200 180" className="w-full max-w-50">
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <path
                  d="M 20 20 L 180 20 L 140 90 L 60 90 Z"
                  fill="#f87171"
                  fillOpacity="0.08"
                  stroke="#f87171"
                  strokeWidth="1.5"
                />
                <text x="100" y="45" textAnchor="middle" fill="#f87171" fontSize="10">
                  Senza piano
                </text>
                <text
                  x="100"
                  y="60"
                  textAnchor="middle"
                  fill="#f87171"
                  fontSize="9"
                  opacity="0.7"
                >
                  spazio libero = allucinazioni
                </text>
              </motion.g>
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <path
                  d="M 60 95 L 140 95 L 120 160 L 80 160 Z"
                  fill="#34d399"
                  fillOpacity="0.08"
                  stroke="#34d399"
                  strokeWidth="1.5"
                />
                <text x="100" y="120" textAnchor="middle" fill="#34d399" fontSize="10">
                  Con piano
                </text>
                <text
                  x="100"
                  y="135"
                  textAnchor="middle"
                  fill="#34d399"
                  fontSize="9"
                  opacity="0.7"
                >
                  output vincolato
                </text>
              </motion.g>
            </svg>
            <p className="text-center text-xs text-[#94a3b8]">
              I token generati seguono il contesto strutturale del piano
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
