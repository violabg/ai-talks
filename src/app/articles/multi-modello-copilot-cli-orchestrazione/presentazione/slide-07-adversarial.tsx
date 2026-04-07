import * as motion from "motion/react-client";
import { FadeIn, MODEL_COLORS } from "./slide-shared";

export function AdversarialSlide() {
  const reviewers = [
    {
      model: "Sonnet",
      finding: "Tipo di ritorno non sicuro",
      color: MODEL_COLORS.sonnet,
      x: 80,
    },
    {
      model: "Opus",
      finding: "Race condition nel lock",
      color: MODEL_COLORS.opus,
      x: 250,
    },
    {
      model: "GPT-4",
      finding: "SQL injection nel filtro",
      color: MODEL_COLORS.gpt4,
      x: 420,
    },
  ];

  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[#a78bfa] text-2xl md:text-4xl text-center">
          Adversarial Review
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mb-6 text-[#94a3b8] text-sm text-center">
          Modelli diversi trovano errori diversi: i punti ciechi non si
          propagano.
        </p>
      </FadeIn>
      <div className="flex justify-center">
        <svg viewBox="0 0 500 300" className="w-full max-w-4xl">
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <rect
              x="175"
              y="10"
              width="150"
              height="50"
              rx="8"
              fill="#1e293b"
              fillOpacity="0.8"
              stroke="#334155"
              strokeWidth="1.5"
            />
            <text
              x="250"
              y="30"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="10"
            >
              {"{ codice prodotto }"}
            </text>
            <text
              x="250"
              y="48"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="12"
              fontWeight="bold"
            >
              Output da revisionare
            </text>
          </motion.g>

          {reviewers.map((reviewer, i) => (
            <motion.line
              key={`line-${reviewer.model}`}
              x1="250"
              y1="60"
              x2={reviewer.x}
              y2="100"
              stroke={reviewer.color}
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.15 }}
            />
          ))}

          {reviewers.map((reviewer, i) => (
            <motion.g
              key={reviewer.model}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
            >
              <circle
                cx={reviewer.x}
                cy="120"
                r="22"
                fill={reviewer.color}
                fillOpacity="0.15"
                stroke={reviewer.color}
                strokeWidth="1.5"
              />
              <text
                x={reviewer.x}
                y="124"
                textAnchor="middle"
                fill={reviewer.color}
                fontSize="11"
                fontWeight="bold"
              >
                {reviewer.model}
              </text>
              <rect
                x={reviewer.x - 60}
                y="155"
                width="120"
                height="30"
                rx="6"
                fill={reviewer.color}
                fillOpacity="0.08"
                stroke={reviewer.color}
                strokeWidth="1"
              />
              <text
                x={reviewer.x}
                y="174"
                textAnchor="middle"
                fill={reviewer.color}
                fontSize="9"
              >
                {reviewer.finding}
              </text>
            </motion.g>
          ))}

          {reviewers.map((reviewer, i) => (
            <motion.line
              key={`converge-${reviewer.model}`}
              x1={reviewer.x}
              y1="185"
              x2="250"
              y2="220"
              stroke={reviewer.color}
              strokeWidth="1"
              strokeDasharray="4 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
            />
          ))}

          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <rect
              x="130"
              y="220"
              width="240"
              height="60"
              rx="10"
              fill="#34d399"
              fillOpacity="0.08"
              stroke="#34d399"
              strokeWidth="1.5"
            />
            <text
              x="250"
              y="242"
              textAnchor="middle"
              fill="#34d399"
              fontSize="12"
              fontWeight="bold"
            >
              Lista consolidata
            </text>
            <text
              x="250"
              y="262"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="10"
            >
              3 issue trovate da 3 prospettive diverse
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
