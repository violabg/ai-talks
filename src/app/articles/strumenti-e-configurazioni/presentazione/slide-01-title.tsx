import * as motion from "motion/react-client";
import { CONFIG_TAGS, SlideFrame } from "./slide-shared";

const rings = [
  { radius: 84, color: "var(--pres-accent)", delay: 0.15 },
  { radius: 126, color: "var(--pres-blue)", delay: 0.28 },
  { radius: 168, color: "var(--pres-success)", delay: 0.4 },
  { radius: 210, color: "var(--pres-warning)", delay: 0.52 },
];

const satellites = [
  {
    x: 548,
    y: 166,
    label: "skills",
    color: "var(--pres-success)",
    delay: 0.75,
  },
  { x: 636, y: 252, label: "MCP", color: "var(--pres-blue)", delay: 0.88 },
  { x: 546, y: 340, label: "hook", color: "var(--pres-warning)", delay: 1.01 },
  {
    x: 256,
    y: 340,
    label: "plugin",
    color: "var(--pres-success)",
    delay: 1.14,
  },
  { x: 166, y: 252, label: "agent", color: "var(--pres-accent)", delay: 1.27 },
  { x: 254, y: 166, label: "prompt", color: "var(--pres-warning)", delay: 1.4 },
];

export function Slide01Title() {
  return (
    <SlideFrame>
      <div className="flex flex-col justify-center items-center px-6 py-8 h-full text-center">
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <svg viewBox="0 0 800 500" className="w-full">
            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{ transformOrigin: "400px 250px" }}
            >
              {rings.map((ring) => (
                <motion.circle
                  key={ring.radius}
                  cx="400"
                  cy="250"
                  r={ring.radius}
                  fill="none"
                  stroke={ring.color}
                  strokeWidth="1.5"
                  strokeDasharray="10 12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.42 }}
                  transition={{ delay: ring.delay, duration: 0.45 }}
                />
              ))}
            </motion.g>

            {satellites.map((sat) => (
              <motion.g
                key={sat.label}
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: sat.delay }}
                style={{ transformOrigin: `${sat.x}px ${sat.y}px` }}
              >
                <circle
                  cx={sat.x}
                  cy={sat.y}
                  r="34"
                  fill={sat.color}
                  opacity="0.14"
                />
                <circle
                  cx={sat.x}
                  cy={sat.y}
                  r="18"
                  fill={sat.color}
                  opacity="0.9"
                />
                <text
                  x={sat.x}
                  y={sat.y + 58}
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="18"
                  fontFamily="var(--font-mono)"
                >
                  {sat.label}
                </text>
              </motion.g>
            ))}

            <motion.g
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.6 }}
              style={{ transformOrigin: "400px 250px" }}
            >
              <rect
                x="274"
                y="164"
                width="252"
                height="172"
                rx="36"
                fill="color-mix(in srgb, var(--pres-bg-node) 92%, transparent)"
                stroke="var(--pres-border)"
                strokeWidth="2"
              />
              <text
                x="400"
                y="216"
                textAnchor="middle"
                fill="var(--pres-muted)"
                fontSize="16"
                fontFamily="var(--font-mono)"
              >
                livelli di controllo
              </text>
              <text
                x="400"
                y="262"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="40"
                fontWeight="700"
              >
                configurare
              </text>
              <text
                x="400"
                y="300"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="24"
              >
                un agente AI
              </text>
            </motion.g>
          </svg>
        </motion.div>

        <motion.h1
          className="mt-4 max-w-5xl font-display text-4xl sm:text-5xl lg:text-6xl text-balance tracking-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          Strumenti e configurazioni:
          <span className="text-(--pres-accent)">
            {" "}
            livelli di personalizzazione
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-3xl text-base sm:text-xl text-(--pres-text-sub) leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
        >
          Una lettura visuale per separare memoria, metodo, capacità esterne e
          automazione senza mescolare funzioni diverse nello stesso strato.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {CONFIG_TAGS.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full border border-(--pres-border) bg-(--pres-bg-surface) font-mono text-(--pres-muted) text-sm uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </SlideFrame>
  );
}
