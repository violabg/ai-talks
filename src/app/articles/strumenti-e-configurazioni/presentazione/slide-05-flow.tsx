import * as motion from "motion/react-client";
import { SectionTitle, SlideFrame } from "./slide-shared";

const steps = [
  {
    title: "regole permanenti",
    note: "istruzioni globali o contestuali",
    x: 108,
    y: 20,
    color: "var(--pres-accent)",
  },
  {
    title: "task ripetibile",
    note: "prompt file per richiami coerenti",
    x: 108,
    y: 154,
    color: "var(--pres-warning)",
  },
  {
    title: "workflow strutturato",
    note: "skill multi-step con checkpoint",
    x: 404,
    y: 154,
    color: "var(--pres-success)",
  },
  {
    title: "ruolo dedicato",
    note: "planner, reviewer, implementatore",
    x: 108,
    y: 288,
    color: "var(--pres-accent)",
  },
  {
    title: "capacita esterne",
    note: "MCP per agire fuori dal repo",
    x: 404,
    y: 288,
    color: "var(--pres-blue)",
  },
];

const BOX_WIDTH = 248;
const BOX_HEIGHT = 86;

export function Slide05Flow() {
  return (
    <SlideFrame>
      <div className="flex flex-col px-6 py-5 h-full">
        <SectionTitle
          eyebrow="composizione"
          title="I livelli non si escludono: si concatenano"
          description="La configurazione più utile non è quella più lunga. È quella che aggiunge il prossimo livello di controllo necessario, nell'ordine giusto."
        />

        <div className="flex flex-1 justify-center items-center mt-4">
          <motion.div
            className="w-full max-w-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            <svg viewBox="0 0 760 394" className="w-full">
              <defs>
                <marker
                  id="arrow-accent-flow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-accent)" />
                </marker>
                <marker
                  id="arrow-blue-flow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-blue)" />
                </marker>
                <marker
                  id="arrow-warning-flow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-warning)" />
                </marker>
                <marker
                  id="arrow-success-flow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-success)" />
                </marker>
              </defs>

              {steps.map((step, index) => (
                <motion.g
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.14 + index * 0.12 }}
                >
                  <rect
                    x={step.x}
                    y={step.y}
                    width={String(BOX_WIDTH)}
                    height={String(BOX_HEIGHT)}
                    rx="24"
                    fill="color-mix(in srgb, var(--pres-bg-node) 90%, transparent)"
                    stroke={step.color}
                    strokeWidth="2"
                  />
                  <text
                    x={step.x + 24}
                    y={step.y + 27}
                    fill={step.color}
                    fontSize="13"
                    fontFamily="var(--font-mono)"
                  >
                    step {index + 1}
                  </text>
                  <text
                    x={step.x + 24}
                    y={step.y + 54}
                    fill="var(--pres-text)"
                    fontSize="15"
                    fontWeight="700"
                  >
                    {step.title}
                  </text>
                  <text
                    x={step.x + 24}
                    y={step.y + 74}
                    fill="var(--pres-text-sub)"
                    fontSize="9.5"
                  >
                    {step.note}
                  </text>
                </motion.g>
              ))}

              <motion.path
                d="M232 106 L232 148"
                stroke="var(--pres-accent)"
                strokeWidth="3"
                markerEnd="url(#arrow-accent-flow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.55 }}
              />
              <motion.path
                d="M360 197 L400 197"
                stroke="var(--pres-warning)"
                strokeWidth="3"
                markerEnd="url(#arrow-warning-flow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.72 }}
              />
              <motion.path
                d="M232 240 L232 282"
                stroke="var(--pres-warning)"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrow-warning-flow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.96 }}
              />
              <motion.path
                d="M528 240 L528 282"
                stroke="var(--pres-blue)"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrow-blue-flow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.45, delay: 1.1 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
