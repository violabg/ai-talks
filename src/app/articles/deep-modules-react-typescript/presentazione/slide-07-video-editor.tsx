import * as motion from "motion/react-client";
import { SlideTitle } from "./slide-shared";

export function Slide07VideoEditor() {
  return (
    <div className="space-y-8">
      <SlideTitle
        eyebrow="Caso Video Editor"
        title="Provider interno come orchestratore di timeline, preview e cache"
        subtitle="Il componente esterno monta il modulo, non orchestra i dettagli di sincronizzazione."
      />

      <div className="bg-[#0b1222] mx-auto p-5 sm:p-8 border border-[#334155] rounded-2xl w-full max-w-6xl">
        <div className="mx-auto w-full max-w-5xl">
          <svg viewBox="0 0 760 380" className="w-full">
            {["Timeline", "Thumbnails", "Playback", "Cache"].map((node, i) => (
              <motion.g
                key={node}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.16 + i * 0.1 }}
              >
                <rect
                  x="48"
                  y={62 + i * 72}
                  width="180"
                  height="48"
                  rx="10"
                  fill="rgba(96,165,250,0.16)"
                  stroke="#60a5fa"
                />
                <text
                  x="138"
                  y={92 + i * 72}
                  fill="#bfdbfe"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                >
                  {node}
                </text>
              </motion.g>
            ))}

            <motion.rect
              x="286"
              y="114"
              width="204"
              height="142"
              rx="14"
              fill="rgba(167,139,250,0.2)"
              stroke="#a78bfa"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.56 }}
            />
            <text
              x="388"
              y="165"
              fill="#e2e8f0"
              textAnchor="middle"
              fontSize="17"
              fontWeight="700"
            >
              VideoEditorProvider
            </text>
            <text
              x="388"
              y="190"
              fill="#94a3b8"
              textAnchor="middle"
              fontSize="13"
            >
              orchestration hidden
            </text>

            {[
              [230, 86, 286, 144],
              [230, 158, 286, 176],
              [230, 230, 286, 206],
              [230, 302, 286, 236],
            ].map(([x1, y1, x2, y2], i) => (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#a78bfa"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.68 + i * 0.1, duration: 0.4 }}
              />
            ))}

            <motion.rect
              x="548"
              y="96"
              width="166"
              height="54"
              rx="10"
              fill="rgba(52,211,153,0.16)"
              stroke="#34d399"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.02 }}
            />
            <motion.rect
              x="548"
              y="186"
              width="166"
              height="54"
              rx="10"
              fill="rgba(52,211,153,0.16)"
              stroke="#34d399"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.16 }}
            />
            <text
              x="631"
              y="128"
              fill="#bbf7d0"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
            >
              Timeline Component
            </text>
            <text
              x="631"
              y="218"
              fill="#bbf7d0"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
            >
              Preview Component
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
