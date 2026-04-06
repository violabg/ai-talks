import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

const nodes = [
  { title: "Contesto", x: 100, y: 80, color: "#60a5fa" },
  { title: "Obiettivo", x: 320, y: 80, color: "#34d399" },
  { title: "Vincoli", x: 100, y: 220, color: "#fbbf24" },
  { title: "Successo", x: 320, y: 220, color: "#f87171" },
];

export function Slide02Anatomy() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[#a78bfa] text-2xl md:text-4xl text-center">
          Anatomia di un prompt efficace
        </h2>
      </FadeIn>
      <FadeIn delay={0.12}>
        <p className="mb-8 text-[#94a3b8] text-sm md:text-base text-center">
          Quattro elementi convergono verso un output prevedibile.
        </p>
      </FadeIn>
      <div className="flex justify-center">
        <svg viewBox="0 0 420 300" className="w-full max-w-3xl">
          {nodes.map((node, i) => (
            <motion.g
              key={node.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.16 }}
            >
              <rect
                x={node.x - 70}
                y={node.y - 24}
                width="140"
                height="48"
                rx="12"
                fill={node.color}
                fillOpacity="0.12"
                stroke={node.color}
                strokeWidth="1.5"
              />
              <text
                x={node.x}
                y={node.y + 5}
                textAnchor="middle"
                fill={node.color}
                fontSize="13"
                fontWeight="bold"
              >
                {node.title}
              </text>
            </motion.g>
          ))}

          {nodes.map((node, i) => (
            <motion.line
              key={`line-${node.title}`}
              x1={node.x}
              y1={node.y + (node.y < 150 ? 24 : -24)}
              x2="210"
              y2="150"
              stroke={node.color}
              strokeWidth="1.5"
              strokeDasharray="5 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.65 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.12 }}
            />
          ))}

          <motion.g
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          >
            <rect
              x="135"
              y="128"
              width="150"
              height="44"
              rx="12"
              fill="#a78bfa"
              fillOpacity="0.2"
              stroke="#a78bfa"
              strokeWidth="1.5"
            />
            <text
              x="210"
              y="154"
              textAnchor="middle"
              fill="#a78bfa"
              fontSize="13"
              fontWeight="bold"
            >
              Output prevedibile
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
