"use client";

import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading, fadeIn } from "./slide-shared";

const columns = [
  {
    title: "Stessa famiglia",
    tone: "var(--pres-danger)",
    lines: [
      "bias condivisi",
      "stesso modo di interpretare il bug",
      "piu' probabile conferma reciproca",
    ],
    pattern: [0.92, 0.9, 0.91],
  },
  {
    title: "Famiglie diverse",
    tone: "var(--pres-success)",
    lines: [
      "errori meno correlati",
      "letture diverse dello stesso piano",
      "maggiore probabilita' di intercettare incoerenze",
    ],
    pattern: [0.92, 0.42, 0.67],
  },
];

export function Slide04CrossFamily() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="principio"
        title="Non basta un secondo modello: serve una prospettiva strutturalmente diversa"
        description="Rubber Duck funziona perche' la review arriva da una famiglia con architettura e dati di addestramento differenti."
        titleClassName="max-w-5xl lg:text-[4rem]"
        descriptionClassName="max-w-4xl"
      />
      <div className="flex-1 gap-4 grid grid-cols-1 lg:grid-cols-2">
        {columns.map((column, columnIndex) => (
          <motion.div key={column.title} {...fadeIn(0.12 + columnIndex * 0.14)}>
            <GlowCard className="flex flex-col p-5 h-full">
              <div className="flex justify-between items-center gap-3 mb-4">
                <h3 className="font-display sm:text-[2.2rem] text-2xl leading-none">
                  {column.title}
                </h3>
                <span
                  className="px-3 py-1 rounded-full font-mono text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap"
                  style={{
                    color: column.tone,
                    background:
                      "color-mix(in srgb, var(--pres-bg) 60%, transparent)",
                    border: `1px solid ${column.tone}`,
                  }}
                >
                  {columnIndex === 0
                    ? "correlazione alta"
                    : "correlazione ridotta"}
                </span>
              </div>
              <div className="flex-1 gap-3 grid">
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-surface) p-3">
                  <svg viewBox="0 0 320 118" className="w-full">
                    {column.pattern.map((value, index) => {
                      const height = 72 * value;
                      return (
                        <motion.g
                          key={`${column.title}-${index}`}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.25 + columnIndex * 0.1 + index * 0.12,
                          }}
                        >
                          <rect
                            x={36 + index * 92}
                            y={92 - height}
                            width="54"
                            height={height}
                            rx="12"
                            fill={column.tone}
                            fillOpacity={
                              columnIndex === 0 ? 0.72 : 0.5 + index * 0.1
                            }
                          />
                          <text
                            x={63 + index * 92}
                            y="110"
                            textAnchor="middle"
                            fill="var(--pres-muted)"
                            fontSize="11"
                            fontFamily="monospace"
                          >
                            e{index + 1}
                          </text>
                        </motion.g>
                      );
                    })}
                  </svg>
                </div>
                <div className="space-y-3">
                  {column.lines.map((line, index) => (
                    <motion.div
                      key={line}
                      className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-node) px-4 py-2.5 text-(--pres-text-sub) text-[15px] leading-snug"
                      initial={{ opacity: 0, x: columnIndex === 0 ? -14 : 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.45 + columnIndex * 0.08 + index * 0.1,
                      }}
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}
