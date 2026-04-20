import * as motion from "motion/react-client";
import { GlassCard, SlideFrame } from "./slide-shared";

const lenses = [
  {
    word: "memoria",
    explanation: "regole che vuoi sempre presenti",
    color: "var(--pres-accent)",
    delay: 0.15,
  },
  {
    word: "specializzazione",
    explanation: "comportamento diverso per contesti o ruoli",
    color: "var(--pres-blue)",
    delay: 0.3,
  },
  {
    word: "estensibilita",
    explanation: "connessione a sistemi esterni reali",
    color: "var(--pres-success)",
    delay: 0.45,
  },
  {
    word: "automazione",
    explanation: "passi meccanici eseguiti in modo coerente",
    color: "var(--pres-warning)",
    delay: 0.6,
  },
];

export function Slide02Question() {
  return (
    <SlideFrame>
      <div className="flex flex-col justify-center items-center px-6 py-10 h-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-(--pres-muted) text-sm uppercase tracking-[0.25em]"
        >
          la domanda che orienta tutto
        </motion.div>

        <motion.h2
          className="mt-6 max-w-5xl font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          Non chiederti quale feature ha il prodotto.
          <span className="block mt-3 text-(--pres-accent)">
            Chiediti cosa deve fare questa configurazione.
          </span>
        </motion.h2>

        <motion.div
          className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-12 w-full max-w-6xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {lenses.map((lens) => (
            <motion.div
              key={lens.word}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, delay: lens.delay }}
            >
              <GlassCard className="p-6 md:p-7 h-full text-left">
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full font-mono text-sm uppercase tracking-wide"
                  style={{
                    background: `color-mix(in srgb, ${lens.color} 14%, transparent)`,
                    color: lens.color,
                  }}
                >
                  {lens.word}
                </div>
                <p className="mt-5 text-xl sm:text-2xl text-(--pres-text) text-balance leading-snug">
                  {lens.explanation}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideFrame>
  );
}
