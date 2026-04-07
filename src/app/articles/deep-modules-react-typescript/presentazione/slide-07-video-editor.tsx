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

      <div className="bg-[var(--pres-bg-card)] mx-auto p-5 sm:p-8 border border-[var(--pres-border)] rounded-2xl w-full max-w-6xl">
        <div className="mx-auto w-full max-w-5xl">
          <svg viewBox="0 0 760 380" className="w-full">
            <defs>
              <marker
                id="arrow-purple"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-accent)" />
              </marker>
            </defs>
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
                  fill="var(--pres-blue-dim)"
                  stroke="var(--pres-blue)"
                />
                <text
                  x="138"
                  y={92 + i * 72}
                  fill="var(--pres-blue-fg)"
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
              fill="var(--pres-accent-dim)"
              stroke="var(--pres-accent)"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.56 }}
            />
            <text
              x="388"
              y="165"
              fill="var(--pres-text)"
              textAnchor="middle"
              fontSize="17"
              fontWeight="700"
            >
              VideoEditorProvider
            </text>
            <text
              x="388"
              y="190"
              fill="var(--pres-muted)"
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
                stroke="var(--pres-accent)"
                strokeWidth="3"
                markerEnd="url(#arrow-purple)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.68 + i * 0.1, duration: 0.4 }}
              />
            ))}

            {/* Dashed arrows from provider to consumer components */}
            <motion.line
              x1="490"
              y1="160"
              x2="546"
              y2="123"
              stroke="var(--pres-success)"
              strokeWidth="2"
              strokeDasharray="6 4"
              markerEnd="url(#arrow-purple)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.96, duration: 0.35 }}
            />
            <motion.line
              x1="490"
              y1="210"
              x2="546"
              y2="213"
              stroke="var(--pres-success)"
              strokeWidth="2"
              strokeDasharray="6 4"
              markerEnd="url(#arrow-purple)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.35 }}
            />

            <motion.rect
              x="548"
              y="96"
              width="166"
              height="54"
              rx="10"
              fill="var(--pres-success-dim)"
              stroke="var(--pres-success)"
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
              fill="var(--pres-success-dim)"
              stroke="var(--pres-success)"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.16 }}
            />
            <text
              x="631"
              y="128"
              fill="var(--pres-success-fg)"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
            >
              Timeline Component
            </text>
            <text
              x="631"
              y="218"
              fill="var(--pres-success-fg)"
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
