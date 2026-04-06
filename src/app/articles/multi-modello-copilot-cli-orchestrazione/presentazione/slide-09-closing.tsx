import * as motion from "motion/react-client";
import { FadeIn, MODEL_COLORS } from "./slide-shared";

export function ClosingSlide() {
  return (
    <div className="text-center">
      <FadeIn delay={0.15}>
        <p className="mb-4 text-lg text-[#94a3b8]">Il cambio di prospettiva</p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-6 md:gap-10">
          <div className="flex flex-col items-center gap-3">
            <svg viewBox="0 0 80 80" className="size-16 md:size-20">
              <rect
                x="10"
                y="10"
                width="60"
                height="60"
                rx="12"
                fill="#94a3b8"
                fillOpacity="0.1"
                stroke="#94a3b8"
                strokeWidth="1.5"
              />
              <text x="40" y="46" textAnchor="middle" fill="#94a3b8" fontSize="24">
                ?
              </text>
            </svg>
            <span className="text-sm text-[#94a3b8]">Chatbot</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <svg viewBox="0 0 60 24" className="w-12 md:w-16">
              <path
                d="M 5 12 L 45 12 M 38 5 L 48 12 L 38 19"
                stroke="#a78bfa"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <svg viewBox="0 0 120 100" className="h-16 w-24 md:h-20 md:w-28">
              <circle
                cx="60"
                cy="25"
                r="14"
                fill="#a78bfa"
                fillOpacity="0.2"
                stroke="#a78bfa"
                strokeWidth="1.5"
              />
              <text
                x="60"
                y="29"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="8"
                fontWeight="bold"
              >
                CLI
              </text>
              {[
                { cx: 20, cy: 75, color: MODEL_COLORS.haiku },
                { cx: 60, cy: 75, color: MODEL_COLORS.sonnet },
                { cx: 100, cy: 75, color: MODEL_COLORS.gpt4 },
              ].map((agent) => (
                <g key={`${agent.cx}-${agent.cy}`}>
                  <line
                    x1="60"
                    y1="39"
                    x2={agent.cx}
                    y2={agent.cy - 12}
                    stroke={agent.color}
                    strokeWidth="1"
                    strokeDasharray="3 2"
                  />
                  <circle
                    cx={agent.cx}
                    cy={agent.cy}
                    r="12"
                    fill={agent.color}
                    fillOpacity="0.2"
                    stroke={agent.color}
                    strokeWidth="1.5"
                  />
                </g>
              ))}
            </svg>
            <span className="text-sm text-[#a78bfa]">Sistema distribuito</span>
          </motion.div>
        </div>
      </FadeIn>

      <FadeIn delay={1.2}>
        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-[#a78bfa]/20 bg-[#a78bfa]/5 p-6 md:p-8">
          <p className="text-lg leading-relaxed md:text-xl">
            Separare <span className="font-bold text-[#60a5fa]">planning</span>,{" "}
            <span className="font-bold text-[#fbbf24]">esecuzione</span> e{" "}
            <span className="font-bold text-[#a78bfa]">review</span> non e solo
            piu veloce.
          </p>
          <p className="mt-2 text-lg leading-relaxed text-[#94a3b8] md:text-xl">
            E strutturalmente piu affidabile.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
