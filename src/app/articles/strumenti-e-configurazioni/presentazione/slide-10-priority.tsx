import * as motion from "motion/react-client";
import { GlassCard, SectionTitle, SlideFrame } from "./slide-shared";

const podium = [
  {
    rank: "1",
    title: "Custom agents",
    note: "definiscono chi fa cosa",
    height: 220,
    x: 250,
    color: "var(--pres-accent)",
  },
  {
    rank: "2",
    title: "Agent skills",
    note: "rendono il metodo ripetibile",
    height: 170,
    x: 60,
    color: "var(--pres-success)",
  },
  {
    rank: "3",
    title: "MCP",
    note: "estendono la portata operativa",
    height: 130,
    x: 470,
    color: "var(--pres-blue)",
  },
];

export function Slide10Priority() {
  return (
    <SlideFrame>
      <div className="flex flex-col px-6 py-6 h-full">
        <SectionTitle
          eyebrow="priorita"
          title="Se parti da zero, l'ordine che rende di piu e questo"
          description="Prima separi i ruoli, poi codifichi il processo, poi allarghi la capacità operativa. Il resto ottimizza, ma non sostituisce queste fondamenta."
        />

        <div className="flex-1 items-end gap-5 grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] mt-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="w-full"
          >
            <GlassCard className="p-6 md:p-7">
              <svg viewBox="0 0 700 360" className="w-full">
                <rect
                  x="20"
                  y="290"
                  width="660"
                  height="34"
                  rx="16"
                  fill="var(--pres-border)"
                  opacity="0.35"
                />
                {podium.map((item, index) => (
                  <motion.g
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.22 + index * 0.12 }}
                  >
                    <rect
                      x={item.x}
                      y={290 - item.height}
                      width="170"
                      height={String(item.height)}
                      rx="28"
                      fill={`color-mix(in srgb, ${item.color} 16%, transparent)`}
                      stroke={item.color}
                      strokeWidth="2"
                    />
                    <text
                      x={item.x + 85}
                      y={290 - item.height + 54}
                      textAnchor="middle"
                      fill={item.color}
                      fontSize="46"
                      fontWeight="700"
                    >
                      {item.rank}
                    </text>
                    <text
                      x={item.x + 85}
                      y={290 - item.height + 98}
                      textAnchor="middle"
                      fill="var(--pres-text)"
                      fontSize="24"
                      fontWeight="700"
                    >
                      {item.title}
                    </text>
                    <text
                      x={item.x + 85}
                      y={290 - item.height + 126}
                      textAnchor="middle"
                      fill="var(--pres-text-sub)"
                      fontSize="16"
                    >
                      {item.note}
                    </text>
                  </motion.g>
                ))}
              </svg>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
          >
            <GlassCard className="p-6 md:p-7 h-full">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-(--pres-muted)">
                poi il resto
              </div>
              <div className="space-y-4 mt-8 text-lg">
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  instructions come fondamenta di base
                </div>
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  prompt file per task ricorrenti
                </div>
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  hook e plugin come ottimizzazioni finali
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
