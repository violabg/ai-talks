import * as motion from "motion/react-client";
import { FadeIn, MODEL_COLORS } from "./slide-shared";

export function OrchestrationFlowSlide() {
  const steps = [
    { label: "Plan", sub: "Produce un piano d'azione", color: MODEL_COLORS.sonnet, y: 20 },
    { label: "Parallelize", sub: "Identifica task indipendenti", color: "var(--pres-accent)", y: 90 },
    { label: "Delegate", sub: "Invia ai modelli specializzati", color: MODEL_COLORS.gpt4, y: 160 },
    { label: "Verify", sub: "Controlla coerenza finale", color: MODEL_COLORS.opus, y: 230 },
  ];

  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 font-bold text-[var(--pres-accent)] text-2xl md:text-4xl text-center">
          Il workflow di orchestrazione
        </h2>
      </FadeIn>
      <div className="flex justify-center">
        <svg viewBox="0 0 500 300" className="w-full max-w-4xl">
          {[0, 1, 2].map((i) => (
            <motion.line
              key={`arrow-${i}`}
              x1="250"
              y1={steps[i].y + 46}
              x2="250"
              y2={steps[i + 1].y + 4}
              stroke="var(--pres-muted)"
              strokeWidth="2"
              strokeDasharray="6 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.3 }}
            />
          ))}

          {steps.map((step, i) => (
            <motion.g
              key={step.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.3 }}
            >
              <rect x="130" y={step.y} width="240" height="50" rx="10" fill={step.color} fillOpacity="0.12" stroke={step.color} strokeWidth="1.5" />
              <text x="250" y={step.y + 22} textAnchor="middle" fill={step.color} fontSize="15" fontWeight="bold">{i + 1}. {step.label}</text>
              <text x="250" y={step.y + 40} textAnchor="middle" fill="var(--pres-muted)" fontSize="11">{step.sub}</text>
            </motion.g>
          ))}

          {[-1, 1].map((side) => (
            <motion.g key={`branch-${side}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.4 }}>
              <line x1={250 + side * 120} y1={steps[1].y + 25} x2={250 + side * 50} y2={steps[1].y + 25} stroke="var(--pres-accent)" strokeWidth="1" strokeDasharray="3 2" />
              <rect x={250 + side * 120 + (side > 0 ? 0 : -60)} y={steps[1].y + 8} width="60" height="34" rx="6" fill="var(--pres-accent)" fillOpacity="0.08" stroke="var(--pres-accent)" strokeWidth="1" />
              <text x={250 + side * 120 + (side > 0 ? 30 : -30)} y={steps[1].y + 30} textAnchor="middle" fill="var(--pres-accent)" fontSize="10">{side < 0 ? "Task A" : "Task B"}</text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}
