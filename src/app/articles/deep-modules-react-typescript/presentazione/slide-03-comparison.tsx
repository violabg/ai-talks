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
          className="bg-[#f87171]/10 p-6 border border-[#f87171]/45 rounded-2xl"
        >
          <h3 className="font-semibold text-[#f87171] text-xl">Shallow</h3>
          <div className="space-y-3 mt-4">
            {leftItems.map((item, i) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.09 }}
                className="bg-[#0f172a]/70 px-3 py-2 border border-[#f87171]/25 rounded-lg text-[#fecaca] text-sm"
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
          className="bg-[#34d399]/10 p-6 border border-[#34d399]/45 rounded-2xl"
        >
          <h3 className="font-semibold text-[#34d399] text-xl">Deep Module</h3>
          <div className="space-y-3 mt-4">
            {rightItems.map((item, i) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22 + i * 0.09 }}
                className="bg-[#0f172a]/70 px-3 py-2 border border-[#34d399]/25 rounded-lg text-[#bbf7d0] text-sm"
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
        className="mx-auto max-w-4xl text-[#94a3b8] text-sm sm:text-base text-center"
      >
        Deep Modules = meno conoscenza distribuita nel consumer, piu intenzione
        concentrata nell'interfaccia.
      </motion.p>
    </div>
  );
}
