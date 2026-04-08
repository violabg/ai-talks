import { FadeIn, FadeInLeft, MODEL_COLORS } from "./slide-shared";

export function ComparisonSlide() {
  return (
    <div className="flex flex-col h-full py-6">
      <FadeIn>
        <h2 className="mb-6 font-bold text-[var(--pres-accent)] text-3xl md:text-4xl text-center">
          Agente singolo vs. Sistema distribuito
        </h2>
      </FadeIn>
      <div className="gap-8 grid md:grid-cols-2 flex-1 min-h-0">
        <FadeInLeft delay={0.2} className="h-full">
          <div className="flex flex-col bg-[var(--pres-warning)]/5 p-6 border border-[var(--pres-warning)]/30 rounded-xl h-full">
            <div className="flex-1 min-h-0">
            <svg viewBox="0 0 380 420" className="w-full h-full">
              <rect
                x="60"
                y="20"
                width="260"
                height="380"
                rx="14"
                fill="var(--pres-warning)"
                fillOpacity="0.15"
                stroke="var(--pres-warning)"
                strokeWidth="2"
              />
              <text
                x="190"
                y="72"
                textAnchor="middle"
                fill="var(--pres-warning)"
                fontSize="22"
                fontWeight="bold"
              >
                Un solo modello
              </text>
              {["Plan", "Code", "Review", "Explore"].map((label, i) => (
                <g key={label}>
                  <rect
                    x="100"
                    y={110 + i * 66}
                    width="180"
                    height="48"
                    rx="8"
                    fill="var(--pres-warning)"
                    fillOpacity="0.1"
                    stroke="var(--pres-warning)"
                    strokeWidth="1.5"
                    strokeDasharray="5 3"
                  />
                  <text
                    x="190"
                    y={140 + i * 66}
                    textAnchor="middle"
                    fill="var(--pres-warning)"
                    fontSize="17"
                    fontWeight="600"
                  >
                    {label}
                  </text>
                </g>
              ))}
            </svg>
            </div>
            <p className="mt-4 text-[var(--pres-warning)] text-base text-center font-medium">
              Tutto accettabile, niente eccellente
            </p>
          </div>
        </FadeInLeft>

        <FadeInLeft delay={0.5} className="h-full">
          <div className="flex flex-col bg-[var(--pres-success)]/5 p-6 border border-[var(--pres-success)]/30 rounded-xl h-full">
            <div className="flex-1 min-h-0">
            <svg viewBox="0 0 420 420" className="w-full h-full">
              {/* Orchestrator center */}
              <circle
                cx="210"
                cy="80"
                r="58"
                fill="var(--pres-accent)"
                fillOpacity="0.2"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              <text
                x="210"
                y="74"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="16"
                fontWeight="bold"
              >
                Orche-
              </text>
              <text
                x="210"
                y="95"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="16"
                fontWeight="bold"
              >
                stratore
              </text>

              {/* Agent nodes: Explore, Plan, Code, Review */}
              {[
                { cx: 52,  label: "Explore", color: MODEL_COLORS.haiku },
                { cx: 158, label: "Plan",    color: MODEL_COLORS.sonnet },
                { cx: 262, label: "Code",    color: MODEL_COLORS.gpt4 },
                { cx: 368, label: "Review",  color: MODEL_COLORS.opus },
              ].map((n) => {
                const nodeY = 300;
                const dx = n.cx - 210;
                const dy = nodeY - 80;
                const len = Math.sqrt(dx * dx + dy * dy);
                const x1 = 210 + (dx / len) * 58;
                const y1 = 80 + (dy / len) * 58;
                return (
                  <g key={n.label}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={n.cx}
                      y2={nodeY - 24}
                      stroke={n.color}
                      strokeWidth="1.5"
                      strokeDasharray="5 3"
                    />
                    <rect
                      x={n.cx - 44}
                      y={nodeY - 24}
                      width="88"
                      height="48"
                      rx="10"
                      fill={n.color}
                      fillOpacity="0.15"
                      stroke={n.color}
                      strokeWidth="1.5"
                    />
                    <text
                      x={n.cx}
                      y={nodeY + 5}
                      textAnchor="middle"
                      fill={n.color}
                      fontSize="17"
                      fontWeight="bold"
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </svg>
            </div>
            <p className="mt-4 text-[var(--pres-success)] text-base text-center font-medium">
              Ogni agente eccelle nel suo dominio
            </p>
          </div>
        </FadeInLeft>
      </div>
    </div>
  );
}
