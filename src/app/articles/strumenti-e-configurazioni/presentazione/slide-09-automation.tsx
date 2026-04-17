import * as motion from "motion/react-client";
import { GlassCard, SectionTitle, SlideFrame } from "./slide-shared";

const phases = [
  { label: "workflow ancora instabile", x: 80, color: "var(--pres-danger)" },
  { label: "workflow stabile", x: 300, color: "var(--pres-success)" },
  { label: "adozione accelerata", x: 520, color: "var(--pres-blue)" },
];

export function Slide09Automation() {
  return (
    <SlideFrame>
      <div className="flex flex-col px-6 py-6 h-full">
        <SectionTitle
          eyebrow="automazione"
          title="Hook e plugin valgono quando il processo e gia chiaro"
          description="Gli hook riducono attrito su passaggi piccoli e ripetitivi. I plugin accelerano l'adozione di un setup gia compreso. Usati troppo presto, aggiungono opacita e rumore."
        />

        <div className="flex-1 gap-5 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] mt-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <GlassCard className="p-6 md:p-7 h-full">
              <svg viewBox="0 0 700 240" className="w-full">
                <line
                  x1="80"
                  y1="124"
                  x2="620"
                  y2="124"
                  stroke="var(--pres-border)"
                  strokeWidth="4"
                />
                {phases.map((phase, index) => (
                  <motion.g
                    key={phase.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.2 + index * 0.12 }}
                  >
                    <circle cx={phase.x} cy="124" r="18" fill={phase.color} />
                    <text
                      x={phase.x}
                      y="76"
                      textAnchor="middle"
                      fill={phase.color}
                      fontSize="15"
                      fontFamily="var(--font-mono)"
                    >
                      step {index + 1}
                    </text>
                    <text
                      x={phase.x}
                      y="168"
                      textAnchor="middle"
                      fill="var(--pres-text)"
                      fontSize="18"
                    >
                      {phase.label}
                    </text>
                  </motion.g>
                ))}
              </svg>
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-6">
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  <div className="font-mono text-sm uppercase tracking-wide text-(--pres-warning)">
                    hook
                  </div>
                  <p className="mt-2 text-lg leading-snug">
                    Automazione tattica su eventi del ciclo di vita.
                  </p>
                </div>
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  <div className="font-mono text-sm uppercase tracking-wide text-(--pres-blue)">
                    plugin
                  </div>
                  <p className="mt-2 text-lg leading-snug">
                    Pacchetto pronto che conviene solo se sai gia cosa sta
                    imponendo.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
          >
            <GlassCard className="p-6 md:p-7 h-full">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-(--pres-muted)">
                tradeoff
              </div>
              <div className="space-y-4 mt-8 text-lg">
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  buon hook = elimina un passaggio noioso senza cambiare il
                  senso del workflow
                </div>
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  cattivo hook = aggiunge latenza, sorprese e rumore operativo
                </div>
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  buon plugin = velocizza un setup maturo, non sostituisce la
                  comprensione
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
