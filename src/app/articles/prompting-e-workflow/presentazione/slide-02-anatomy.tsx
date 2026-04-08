import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

// Center box bounds
const BOX = { x: 135, y: 128, w: 150, h: 44 };
const BOX_CX = BOX.x + BOX.w / 2; // 210
const BOX_CY = BOX.y + BOX.h / 2; // 150

const nodes = [
  { title: "Contesto",  x: 100, y: 80,  color: "var(--pres-blue)" },
  { title: "Obiettivo", x: 320, y: 80,  color: "var(--pres-success)" },
  { title: "Vincoli",   x: 100, y: 220, color: "var(--pres-warning)" },
  { title: "Successo",  x: 320, y: 220, color: "var(--pres-danger)" },
];

// For each node compute the line start (edge of node rect) and end (edge of center box)
function lineEndpoints(node: typeof nodes[0]) {
  // Start: bottom or top edge of the node rect (height 48, half = 24)
  const startY = node.y < BOX_CY ? node.y + 24 : node.y - 24;
  const startX = node.x;

  // Direction toward box center
  const dx = BOX_CX - startX;
  const dy = BOX_CY - startY;

  // Find t where line hits top or bottom edge of center box
  const tTop    = (BOX.y - startY) / dy;
  const tBottom = (BOX.y + BOX.h - startY) / dy;
  const t = node.y < BOX_CY ? tTop : tBottom;

  const endX = startX + t * dx;
  const endY = startY + t * dy;

  return { x1: startX, y1: startY, x2: endX, y2: endY };
}

export function Slide02Anatomy() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[var(--pres-accent)] text-2xl md:text-4xl text-center">
          Anatomia di un prompt efficace
        </h2>
      </FadeIn>
      <FadeIn delay={0.12}>
        <p className="mb-8 text-[var(--pres-muted)] text-sm md:text-base text-center">
          Quattro elementi convergono verso un output prevedibile.
        </p>
      </FadeIn>
      <div className="flex justify-center">
        <svg viewBox="0 0 420 300" className="w-full max-w-5xl">
          {/* Lines first — behind everything */}
          {nodes.map((node, i) => {
            const { x1, y1, x2, y2 } = lineEndpoints(node);
            return (
              <motion.line
                key={`line-${node.title}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={node.color}
                strokeWidth="1.5"
                strokeDasharray="5 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.65 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.12 }}
              />
            );
          })}

          {/* Corner nodes */}
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

          {/* Center box — solid background first to mask any line overshoot */}
          <motion.g
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          >
            {/* Solid backing rect */}
            <rect
              x={BOX.x}
              y={BOX.y}
              width={BOX.w}
              height={BOX.h}
              rx="12"
              fill="var(--pres-bg)"
            />
            {/* Styled overlay */}
            <rect
              x={BOX.x}
              y={BOX.y}
              width={BOX.w}
              height={BOX.h}
              rx="12"
              fill="var(--pres-accent)"
              fillOpacity="0.2"
              stroke="var(--pres-accent)"
              strokeWidth="1.5"
            />
            <text
              x={BOX_CX}
              y={BOX_CY + 5}
              textAnchor="middle"
              fill="var(--pres-accent)"
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
