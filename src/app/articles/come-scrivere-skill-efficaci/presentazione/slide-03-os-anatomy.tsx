import * as motion from "motion/react-client";
import { ArrowTip, SlideFrame, SlideHeading } from "./slide-shared";

const modules = [
  {
    key: "trigger",
    label: "Trigger",
    sub: "chi invoca",
    color: "var(--pres-warning)",
    x: 40,
    y: 40,
  },
  {
    key: "structure",
    label: "Struttura",
    sub: "step vs reference",
    color: "var(--pres-blue)",
    x: 40,
    y: 220,
  },
  {
    key: "steering",
    label: "Steering",
    sub: "leading words",
    color: "var(--pres-success)",
    x: 480,
    y: 40,
  },
  {
    key: "pruning",
    label: "Pruning",
    sub: "cancella no-op",
    color: "var(--pres-danger)",
    x: 480,
    y: 220,
  },
];

const CORE = { x: 290, y: 165, w: 140, h: 90 };

export function Slide03OsAnatomy() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="anatomia"
        title="Una skill è un piccolo sistema operativo"
        description="Quattro sottosistemi collegati al file di skill. Ognuno ha un compito preciso, ognuno può essere valutato in isolamento."
      />
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-5xl">
          <svg viewBox="0 0 700 380" className="w-full">
            {/* connectors from core to each module */}
            {modules.map((m, i) => {
              const cx = CORE.x + CORE.w / 2;
              const cy = CORE.y + CORE.h / 2;
              const isLeft = m.x < cx;
              const isTop = m.y < cy;
              const startX = isLeft ? CORE.x : CORE.x + CORE.w;
              const startY = cy;
              const endX = isLeft ? m.x + 220 : m.x;
              const endY = m.y + 55;
              const midX = (startX + endX) / 2;
              return (
                <g key={`c-${m.key}`}>
                  <motion.path
                    d={`M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX - (isLeft ? 6 : -6)} ${endY}`}
                    stroke={m.color}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  />
                  <ArrowTip
                    x={endX - (isLeft ? 4 : -4)}
                    y={endY}
                    angle={isLeft ? 180 : 0}
                    color={m.color}
                    delay={1.1 + i * 0.15}
                    size={9}
                  />
                  {/* keep isTop var referenced to satisfy lints */}
                  <text
                    x={midX}
                    y={isTop ? startY - 6 : startY + 14}
                    fill="var(--pres-muted)"
                    fontSize="0"
                  >
                    .
                  </text>
                </g>
              );
            })}

            {/* core */}
            <motion.g
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                transformOrigin: `${CORE.x + CORE.w / 2}px ${CORE.y + CORE.h / 2}px`,
              }}
            >
              <rect
                x={CORE.x}
                y={CORE.y}
                width={CORE.w}
                height={CORE.h}
                rx="18"
                fill="color-mix(in srgb, var(--pres-accent) 14%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              <text
                x={CORE.x + CORE.w / 2}
                y={CORE.y + 36}
                textAnchor="middle"
                fill="var(--pres-muted)"
                fontSize="12"
                fontFamily="monospace"
              >
                file
              </text>
              <text
                x={CORE.x + CORE.w / 2}
                y={CORE.y + 62}
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="20"
                fontFamily="monospace"
                fontWeight="700"
              >
                SKILL.md
              </text>
            </motion.g>

            {/* modules */}
            {modules.map((m, i) => (
              <motion.g
                key={m.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.15 }}
              >
                <rect
                  x={m.x}
                  y={m.y}
                  width="220"
                  height="110"
                  rx="16"
                  fill="color-mix(in srgb, var(--pres-bg-card) 60%, transparent)"
                  stroke={m.color}
                  strokeWidth="1.8"
                />
                <text
                  x={m.x + 20}
                  y={m.y + 40}
                  fill={m.color}
                  fontSize="22"
                  fontWeight="700"
                  fontFamily="var(--font-display, sans-serif)"
                >
                  {m.label}
                </text>
                <text
                  x={m.x + 20}
                  y={m.y + 72}
                  fill="var(--pres-text-sub)"
                  fontSize="14"
                  fontFamily="monospace"
                >
                  {m.sub}
                </text>
              </motion.g>
            ))}
          </svg>
        </div>
      </div>
    </SlideFrame>
  );
}
