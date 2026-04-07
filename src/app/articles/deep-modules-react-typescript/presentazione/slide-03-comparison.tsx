import * as motion from "motion/react-client";
import { SlideTitle } from "./slide-shared";

const leftItems = [
  "12+ punti di ingresso",
  "import trasversali difficili da tracciare",
  "API basata su dettagli interni",
  "refactor ad alto rischio regressione",
];

const rightItems = [
  "1 entrypoint pubblico",
  "confine netto con _internal",
  "API semantica orientata alle azioni",
  "refactor interno compatibile col contratto",
];

export function Slide03Comparison() {
  return (
    <div className="space-y-8">
      <SlideTitle
        eyebrow="Prima / Dopo"
        title="La differenza non e la dimensione dei file: e la superficie pubblica"
      />

      <div className="gap-5 grid lg:grid-cols-2 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-[var(--pres-danger-dim)] p-6 border border-[var(--pres-danger)]/45 rounded-2xl"
        >
          <h3 className="font-semibold text-[var(--pres-danger)] text-xl">Shallow</h3>
          <div className="space-y-3 mt-4">
            {leftItems.map((item, i) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.09 }}
                className="bg-[var(--pres-bg)]/70 px-3 py-2 border border-[var(--pres-danger)]/25 rounded-lg text-[var(--pres-danger-fg)] text-sm"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="bg-[var(--pres-success-dim)] p-6 border border-[var(--pres-success)]/45 rounded-2xl"
        >
          <h3 className="font-semibold text-[var(--pres-success)] text-xl">Deep Module</h3>
          <div className="space-y-3 mt-4">
            {rightItems.map((item, i) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22 + i * 0.09 }}
                className="bg-[var(--pres-bg)]/70 px-3 py-2 border border-[var(--pres-success)]/25 rounded-lg text-[var(--pres-success-fg)] text-sm"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.72 }}
        className="mx-auto max-w-4xl text-[var(--pres-muted)] text-sm sm:text-base text-center"
      >
        Deep Modules = meno conoscenza distribuita nel consumer, piu intenzione
        concentrata nell'interfaccia.
      </motion.p>
    </div>
  );
}
