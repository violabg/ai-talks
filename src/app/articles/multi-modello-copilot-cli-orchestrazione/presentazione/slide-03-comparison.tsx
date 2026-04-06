import { FadeIn, FadeInLeft, MODEL_COLORS } from "./slide-shared";

export function ComparisonSlide() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-10 text-center text-2xl font-bold text-[#a78bfa] md:text-4xl">
          Agente singolo vs. Sistema distribuito
        </h2>
      </FadeIn>
      <div className="grid gap-8 md:grid-cols-2">
        <FadeInLeft delay={0.2}>
          <div className="rounded-xl border border-[#fbbf24]/30 bg-[#fbbf24]/5 p-6">
            <svg viewBox="0 0 300 220" className="mx-auto mb-4 w-full max-w-75">
              <rect
                x="75"
                y="30"
                width="150"
                height="160"
                rx="12"
                fill="#fbbf24"
                fillOpacity="0.15"
                stroke="#fbbf24"
                strokeWidth="2"
              />
              <text
                x="150"
                y="65"
                textAnchor="middle"
                fill="#fbbf24"
                fontSize="14"
                fontWeight="bold"
              >
                Un solo modello
              </text>
              {["Plan", "Code", "Review", "Explore"].map((label, i) => (
                <g key={label}>
                  <rect
                    x="95"
                    y={85 + i * 28}
                    width="110"
                    height="22"
                    rx="4"
                    fill="#fbbf24"
                    fillOpacity="0.1"
                    stroke="#fbbf24"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                  />
                  <text
                    x="150"
                    y={100 + i * 28}
                    textAnchor="middle"
                    fill="#fbbf24"
                    fontSize="11"
                  >
                    {label}
                  </text>
                </g>
              ))}
            </svg>
            <p className="text-center text-sm text-[#fbbf24]">
              Tutto accettabile, niente eccellente
            </p>
          </div>
        </FadeInLeft>

        <FadeInLeft delay={0.5}>
          <div className="rounded-xl border border-[#34d399]/30 bg-[#34d399]/5 p-6">
            <svg viewBox="0 0 300 220" className="mx-auto mb-4 w-full max-w-75">
              <circle
                cx="150"
                cy="50"
                r="28"
                fill="#a78bfa"
                fillOpacity="0.2"
                stroke="#a78bfa"
                strokeWidth="2"
              />
              <text
                x="150"
                y="54"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="10"
                fontWeight="bold"
              >
                Orchestratore
              </text>
              {[
                { cx: 60, label: "Plan", color: MODEL_COLORS.sonnet },
                { cx: 150, label: "Code", color: MODEL_COLORS.gpt4 },
                { cx: 240, label: "Review", color: MODEL_COLORS.opus },
              ].map((n) => (
                <g key={n.label}>
                  <line
                    x1="150"
                    y1="78"
                    x2={n.cx}
                    y2="130"
                    stroke={n.color}
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                  />
                  <rect
                    x={n.cx - 40}
                    y={130}
                    width="80"
                    height="36"
                    rx="8"
                    fill={n.color}
                    fillOpacity="0.15"
                    stroke={n.color}
                    strokeWidth="1.5"
                  />
                  <text
                    x={n.cx}
                    y={153}
                    textAnchor="middle"
                    fill={n.color}
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
              <line
                x1="80"
                y1="40"
                x2="30"
                y2="25"
                stroke={MODEL_COLORS.haiku}
                strokeWidth="1"
                strokeDasharray="3 2"
              />
              <rect
                x="2"
                y="10"
                width="56"
                height="28"
                rx="6"
                fill={MODEL_COLORS.haiku}
                fillOpacity="0.15"
                stroke={MODEL_COLORS.haiku}
                strokeWidth="1"
              />
              <text x="30" y="28" textAnchor="middle" fill={MODEL_COLORS.haiku} fontSize="10">
                Explore
              </text>
            </svg>
            <p className="text-center text-sm text-[#34d399]">
              Ogni agente eccelle nel suo dominio
            </p>
          </div>
        </FadeInLeft>
      </div>
    </div>
  );
}
