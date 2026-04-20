import * as motion from "motion/react-client";
import { GlassCard, SlideFrame } from "./slide-shared";

const questions = [
  "Chi deve fare questo lavoro?",
  "Con quale processo voglio che lo faccia?",
  "Di quali sistemi esterni ha bisogno?",
];

export function Slide11Closing() {
  return (
    <SlideFrame>
      <div className="flex flex-col justify-center px-6 py-10 h-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="font-mono text-sm uppercase tracking-[0.24em] text-(--pres-muted)"
        >
          takeaway operativo
        </motion.div>

        <motion.h2
          className="mt-6 max-w-5xl font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.06] tracking-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
        >
          Prima definisci
          <span className="text-(--pres-accent)"> chi fa cosa</span>, poi
          chiarisci
          <span className="text-(--pres-blue)"> come</span>, infine estendi
          <span className="text-(--pres-success)"> con cosa</span>.
        </motion.h2>

        <div className="gap-5 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] mt-10">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.26 }}
          >
            <GlassCard className="p-6 md:p-8">
              <p className="text-2xl sm:text-3xl text-balance leading-tight">
                Il confronto serio non e tra tool brandizzati.
                <span className="block mt-3 text-(--pres-text-sub)">
                  Il confronto serio e tra tipi di lavoro, livelli di contesto e
                  livelli di personalizzazione.
                </span>
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.36 }}
          >
            <GlassCard className="p-6 md:p-8">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-(--pres-muted)">
                checklist mentale
              </div>
              <div className="space-y-3 mt-6">
                {questions.map((question, index) => (
                  <motion.div
                    key={question}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.5 + index * 0.09 }}
                    className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4 text-lg leading-snug"
                  >
                    {question}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
