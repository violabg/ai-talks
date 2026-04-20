"use client";

import * as motion from "motion/react-client";
import { ArrowTip } from "@/components/presentation/arrow-tip";
import { GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const nodes = [
  {
    cx: 150,
    cy: 170,
    r: 70,
    label: "lavoro",
    sub: "sessioni normali",
    color: "var(--pres-blue)",
    delay: 0.2,
  },
  {
    cx: 400,
    cy: 70,
    r: 70,
    label: "fine settimana",
    sub: "/chronicle tips",
    color: "var(--pres-accent)",
    delay: 0.45,
  },
  {
    cx: 650,
    cy: 170,
    r: 70,
    label: "incorpora",
    sub: "adatta il modo",
    color: "var(--pres-warning)",
    delay: 0.7,
  },
  {
    cx: 400,
    cy: 270,
    r: 70,
    label: "lavoro migliore",
    sub: "la settimana dopo",
    color: "var(--pres-success)",
    delay: 0.95,
  },
];

const arcs = [
  { d: "M220 170C290 170 320 100 330 85", delay: 0.35, tipX: 330, tipY: 85, angle: -56 },
  { d: "M470 85C490 100 520 170 580 170", delay: 0.6, tipX: 580, tipY: 170, angle: 0 },
  { d: "M625 235C600 260 520 270 470 270", delay: 0.85, tipX: 470, tipY: 270, angle: 180 },
  { d: "M330 270C280 270 200 260 175 240", delay: 1.1, tipX: 175, tipY: 240, angle: -141 },
];

export function Slide08WeeklyCycle() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="pattern consigliato"
        title="Un ciclo di miglioramento continuo, basato su dati reali"
        description="A fine giornata o a fine settimana, chronicle tips trasforma il comportamento osservato in cambi concreti per la settimana successiva."
      />
      <div className="flex flex-1 items-center">
        <GlowCard className="p-4 sm:p-6 w-full">
          <div className="mx-auto w-full max-w-5xl">
            <svg viewBox="0 0 820 360" className="w-full">
              {arcs.map((arc, i) => (
                <g key={i}>
                  <motion.path
                    d={arc.d}
                    fill="none"
                    stroke="var(--pres-muted)"
                    strokeWidth="2.5"
                    strokeDasharray="8 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 0.55, delay: arc.delay }}
                  />
                  <ArrowTip
                    x={arc.tipX}
                    y={arc.tipY}
                    angle={arc.angle}
                    color="var(--pres-muted)"
                    delay={arc.delay + 0.55}
                  />
                </g>
              ))}

              {nodes.map((n) => (
                <motion.g
                  key={n.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: n.delay }}
                  style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
                >
                  <circle
                    cx={n.cx}
                    cy={n.cy}
                    r={n.r}
                    fill={`color-mix(in srgb, ${n.color} 14%, transparent)`}
                    stroke={n.color}
                    strokeWidth="2.5"
                  />
                  <text
                    x={n.cx}
                    y={n.cy - 6}
                    textAnchor="middle"
                    fill="var(--pres-text)"
                    fontSize="17"
                    fontWeight="700"
                  >
                    {n.label}
                  </text>
                  <text
                    x={n.cx}
                    y={n.cy + 16}
                    textAnchor="middle"
                    fill={n.color}
                    fontSize="12"
                    fontFamily="monospace"
                  >
                    {n.sub}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </GlowCard>
      </div>
    </SlideFrame>
  );
}
