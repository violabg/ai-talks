import * as motion from "motion/react-client";
import { FadeIn, MODEL_COLORS } from "./slide-shared";

export function FleetSlide() {
  const lanes = [
    { label: "UI Component", color: MODEL_COLORS.gpt4, x: 80 },
    { label: "API Route", color: MODEL_COLORS.sonnet, x: 250 },
    { label: "Database", color: MODEL_COLORS.opus, x: 420 },
  ];

  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[var(--pres-accent)] text-2xl md:text-4xl text-center">
          Fleet: parallelizzazione nativa
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mb-8 text-[var(--pres-muted)] text-sm text-center">
          <code className="bg-[var(--pres-bg-surface)] px-2 py-0.5 rounded font-mono text-[var(--pres-accent)]">
            /fleet
          </code>{" "}
          analizza la richiesta, la decompone e distribuisce i task in parallelo
        </p>
      </FadeIn>
      <div className="flex justify-center">
        <svg viewBox="0 0 500 280" className="w-full max-w-4xl">
          <motion.g initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
            <rect x="150" y="10" width="200" height="36" rx="18" fill="var(--pres-accent)" fillOpacity="0.2" stroke="var(--pres-accent)" strokeWidth="1.5" />
            <text x="250" y="33" textAnchor="middle" fill="var(--pres-accent)" fontSize="13" fontWeight="bold">Richiesta utente</text>
          </motion.g>

          {lanes.map((lane, i) => (
            <motion.line key={`split-${lane.label}`} x1="250" y1="46" x2={lane.x} y2="80" stroke={lane.color} strokeWidth="1.5" strokeDasharray="5 3" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }} transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }} />
          ))}

          {lanes.map((lane, i) => (
            <motion.g key={lane.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}>
              <rect x={lane.x - 55} y="80" width="110" height="120" rx="8" fill={lane.color} fillOpacity="0.06" stroke={lane.color} strokeWidth="1" strokeDasharray="4 2" />
              <circle cx={lane.x} cy="110" r="16" fill={lane.color} fillOpacity="0.2" stroke={lane.color} strokeWidth="1.5" />
              <text x={lane.x} y="114" textAnchor="middle" fill={lane.color} fontSize="10" fontWeight="bold">AI</text>
              <text x={lane.x} y="150" textAnchor="middle" fill={lane.color} fontSize="11" fontWeight="bold">{lane.label}</text>
              {[0, 1, 2].map((dot) => (
                <motion.circle key={dot} cx={lane.x - 10 + dot * 10} cy="170" r="3" fill={lane.color} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.2, delay: 1.0 + i * 0.15 + dot * 0.2, repeat: Infinity }} />
              ))}
            </motion.g>
          ))}

          {lanes.map((lane, i) => (
            <motion.line key={`converge-${lane.label}`} x1={lane.x} y1="200" x2="250" y2="235" stroke={lane.color} strokeWidth="1.5" strokeDasharray="5 3" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }} transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }} />
          ))}

          <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.7 }}>
            <rect x="175" y="235" width="150" height="36" rx="18" fill="var(--pres-success)" fillOpacity="0.2" stroke="var(--pres-success)" strokeWidth="1.5" />
            <text x="250" y="258" textAnchor="middle" fill="var(--pres-success)" fontSize="13" fontWeight="bold">Output unificato</text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
