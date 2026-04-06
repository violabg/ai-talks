import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function Slide07Checkpoint() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[#a78bfa] text-2xl md:text-4xl text-center">
          Checkpoint umano strategico
        </h2>
      </FadeIn>
      <FadeIn delay={0.16}>
        <p className="mb-8 text-[#94a3b8] text-sm text-center">
          Dopo il planning, una decisione umana evita rework costoso.
        </p>
      </FadeIn>

      <div className="items-center gap-5 grid md:grid-cols-[1fr_auto_1fr] mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.35 }}
          className="bg-[#34d399]/15 p-5 border border-[#34d399]/50 rounded-xl"
        >
          <p className="font-semibold text-[#34d399]">PROCEED</p>
          <p className="mt-1 text-[#cbd5e1] text-sm">
            Piano approvato, avvia implementazione.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.35 }}
          className="bg-[#a78bfa]/15 px-6 py-8 border border-[#a78bfa]/50 rounded-xl text-center"
        >
          <p className="font-mono text-[#a78bfa] text-xs uppercase tracking-wider">
            Human checkpoint
          </p>
          <p className="mt-2 font-semibold text-lg">Leggi PLAN.md</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.35 }}
          className="bg-[#fbbf24]/15 p-5 border border-[#fbbf24]/50 rounded-xl"
        >
          <p className="font-semibold text-[#fbbf24]">CORREGGI</p>
          <p className="mt-1 text-[#cbd5e1] text-sm">
            Aggiorna il piano e rilancia lo step di planning.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
