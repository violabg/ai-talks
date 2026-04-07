import * as motion from "motion/react-client";
import { SlideTitle } from "./slide-shared";

const steps = [
  { label: "Login", color: "#60a5fa" },
  { label: "Refresh Token", color: "#fbbf24" },
  { label: "Permessi", color: "#34d399" },
  { label: "API useAuth()", color: "#a78bfa" },
];

export function Slide06AuthFlow() {
  return (
    <div className="space-y-8">
      <SlideTitle
        eyebrow="Caso Auth"
        title="La complessita vive dentro il modulo, non nel componente"
      />

      <div className="bg-[#0b1222] mx-auto p-5 sm:p-8 border border-[#334155] rounded-2xl w-full max-w-6xl">
        <div className="mx-auto w-full max-w-5xl">
          <svg viewBox="0 0 760 360" className="w-full">
            <defs>
              <marker
                id="arrow-slate"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
              </marker>
            </defs>
            {steps.map((step, i) => {
              const x = 74 + i * 168;
              const y = 94 + (i % 2) * 86;
              return (
                <motion.g
                  key={step.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.16, duration: 0.38 }}
                >
                  <rect
                    x={x}
                    y={y}
                    width="138"
                    height="56"
                    rx="10"
                    fill="rgba(15,23,42,0.9)"
                    stroke={step.color}
                  />
                  <text
                    x={x + 69}
                    y={y + 34}
                    textAnchor="middle"
                    fill={step.color}
                    fontSize="14"
                    fontWeight="700"
                  >
                    {step.label}
                  </text>
                </motion.g>
              );
            })}

            {[0, 1, 2].map((i) => {
              const x = 214 + i * 168;
              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 + i * 0.16 }}
                >
                  <path
                    d={`M ${x} ${122 + (i % 2) * 86} L ${x + 15} ${122 + (i % 2) * 86} L ${x + 15} ${122 + ((i + 1) % 2) * 86} L ${x + 30} ${122 + ((i + 1) % 2) * 86}`}
                    stroke="#94a3b8"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrow-slate)"
                  />
                </motion.g>
              );
            })}

            <motion.rect
              x="180"
              y="260"
              width="400"
              height="64"
              rx="12"
              fill="rgba(167,139,250,0.2)"
              stroke="#a78bfa"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            />
            <motion.text
              x="381"
              y="290"
              fill="#e2e8f0"
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
            >
              Consumer: const {`{ user, can, logout }`} = useAuth()
            </motion.text>
          </svg>
        </div>
      </div>
    </div>
  );
}
