import * as motion from "motion/react-client";
import { ArrowTip, SlideFrame, SlideHeading } from "./slide-shared";

export function Slide05Structure() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="02 · struttura"
        title="Step guidano. Reference supporta."
        description="Se un'informazione serve solo in una branch, spostala fuori dal file principale. La skill resta piccola e leggibile."
      />
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-5xl">
          <svg viewBox="0 0 720 380" className="w-full">
            {/* SKILL.md root */}
            <motion.g
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <rect
                x="280"
                y="10"
                width="160"
                height="60"
                rx="14"
                fill="color-mix(in srgb, var(--pres-accent) 14%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              <text
                x="360"
                y="46"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="18"
                fontFamily="monospace"
                fontWeight="700"
              >
                SKILL.md
              </text>
            </motion.g>

            {/* Split lines */}
            <motion.path
              d="M 360 74 L 360 110 L 180 110 L 180 140"
              stroke="var(--pres-muted)"
              strokeWidth="1.8"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            />
            <motion.path
              d="M 360 74 L 360 110 L 540 110 L 540 140"
              stroke="var(--pres-muted)"
              strokeWidth="1.8"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            />

            {/* Steps box */}
            <motion.g
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55 }}
            >
              <rect
                x="60"
                y="145"
                width="240"
                height="110"
                rx="14"
                fill="color-mix(in srgb, var(--pres-blue) 10%, transparent)"
                stroke="var(--pres-blue)"
                strokeWidth="1.8"
              />
              <text
                x="80"
                y="178"
                fill="var(--pres-blue)"
                fontSize="18"
                fontWeight="700"
                fontFamily="monospace"
              >
                Steps
              </text>
              <text x="80" y="205" fill="var(--pres-text-sub)" fontSize="13">
                ordine · checkpoint
              </text>
              <text x="80" y="228" fill="var(--pres-text-sub)" fontSize="13">
                output atteso
              </text>
              <text
                x="80"
                y="248"
                fill="var(--pres-muted)"
                fontSize="12"
                fontFamily="monospace"
              >
                sempre caricato
              </text>
            </motion.g>

            {/* Reference box */}
            <motion.g
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7 }}
            >
              <rect
                x="420"
                y="145"
                width="240"
                height="110"
                rx="14"
                fill="color-mix(in srgb, var(--pres-accent) 10%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="1.8"
              />
              <text
                x="440"
                y="178"
                fill="var(--pres-accent)"
                fontSize="18"
                fontWeight="700"
                fontFamily="monospace"
              >
                Reference
              </text>
              <text x="440" y="205" fill="var(--pres-text-sub)" fontSize="13">
                template · definizioni
              </text>
              <text x="440" y="228" fill="var(--pres-text-sub)" fontSize="13">
                vincoli · esempi
              </text>
              <text
                x="440"
                y="248"
                fill="var(--pres-muted)"
                fontSize="12"
                fontFamily="monospace"
              >
                condizionale
              </text>
            </motion.g>

            {/* Reference forks */}
            <motion.path
              d="M 540 259 L 540 290 L 430 290 L 430 315"
              stroke="var(--pres-muted)"
              strokeWidth="1.6"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            />
            <motion.path
              d="M 540 259 L 540 290 L 640 290 L 640 315"
              stroke="var(--pres-muted)"
              strokeWidth="1.6"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            />

            {/* Fork A: inline */}
            <motion.g
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              <rect
                x="330"
                y="318"
                width="200"
                height="48"
                rx="10"
                fill="color-mix(in srgb, var(--pres-success) 10%, transparent)"
                stroke="var(--pres-success)"
                strokeWidth="1.4"
              />
              <text
                x="350"
                y="340"
                fill="var(--pres-success)"
                fontSize="13"
                fontFamily="monospace"
                fontWeight="700"
              >
                sempre → inline
              </text>
              <text x="350" y="358" fill="var(--pres-text-sub)" fontSize="11">
                sta nel file principale
              </text>
            </motion.g>

            {/* Fork B: external pointer */}
            <motion.g
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.35 }}
            >
              <rect
                x="540"
                y="318"
                width="170"
                height="48"
                rx="10"
                fill="color-mix(in srgb, var(--pres-warning) 10%, transparent)"
                stroke="var(--pres-warning)"
                strokeWidth="1.4"
              />
              <text
                x="558"
                y="340"
                fill="var(--pres-warning)"
                fontSize="13"
                fontFamily="monospace"
                fontWeight="700"
              >
                1 branch → link
              </text>
              <text x="558" y="358" fill="var(--pres-text-sub)" fontSize="11">
                reference esterna
              </text>
            </motion.g>

            <ArrowTip
              x={180}
              y={140}
              angle={90}
              color="var(--pres-blue)"
              delay={1.1}
              size={8}
            />
            <ArrowTip
              x={540}
              y={140}
              angle={90}
              color="var(--pres-accent)"
              delay={1.1}
              size={8}
            />
          </svg>
        </div>
      </div>
    </SlideFrame>
  );
}
