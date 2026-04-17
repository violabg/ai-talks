import * as motion from "motion/react-client";
import { GlassCard, SectionTitle, SlideFrame } from "./slide-shared";

const sides = [
  {
    title: "Sempre attivo",
    label: "global scope",
    color: "var(--pres-accent)",
    points: [
      "naming convention costanti",
      "divieti operativi trasversali",
      "standard di qualita sempre validi",
    ],
  },
  {
    title: "Contestuale",
    label: "local scope",
    color: "var(--pres-blue)",
    points: [
      "regole React solo per .tsx",
      "convenzioni MDX per content/articles",
      "policy backend diverse da frontend",
    ],
  },
];

export function Slide06Scope() {
  return (
    <SlideFrame>
      <div className="flex flex-col px-6 py-6 h-full">
        <SectionTitle
          eyebrow="campo di applicazione"
          title="La distinzione utile non e tra file diversi, ma tra regole globali e regole locali"
          description="Always-on instructions e file-based instructions sembrano simili finche non le guardi come livelli di ampiezza: una definisce il perimetro comune, l'altra porta conoscenza vicino al codice."
        />

        <div className="flex-1 items-stretch gap-5 grid grid-cols-1 lg:grid-cols-[1.1fr_0.8fr_1.1fr] mt-8">
          {sides.map((side, index) => (
            <motion.div
              key={side.title}
              initial={{ opacity: 0, x: index === 0 ? -24 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.1 }}
            >
              <GlassCard className="p-6 md:p-7 h-full">
                <div
                  className="font-mono text-sm uppercase tracking-[0.2em]"
                  style={{ color: side.color }}
                >
                  {side.label}
                </div>
                <h3 className="mt-4 text-3xl text-(--pres-text)">
                  {side.title}
                </h3>
                <div className="space-y-3 mt-8">
                  {side.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4 text-lg leading-snug"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.32 }}
          >
            <GlassCard className="p-6 w-full text-center">
              <div className="font-mono text-(--pres-muted) text-sm uppercase tracking-[0.2em]">
                effetto
              </div>
              <p className="mt-5 text-2xl sm:text-3xl text-balance leading-tight">
                Sposti la conoscenza dove serve,
                <span className="text-(--pres-accent)"> senza gonfiare</span> il
                contesto di base.
              </p>
              <p className="mt-4 text-(--pres-text-sub) text-base sm:text-lg leading-relaxed">
                Il valore non sta nell'avere piu istruzioni possibili, ma nel
                far arrivare la regola giusta quando l'agente tocca quel pezzo
                di codebase.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
