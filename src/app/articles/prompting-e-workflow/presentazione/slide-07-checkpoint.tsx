import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function Slide07Checkpoint() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[var(--pres-accent)] text-2xl md:text-4xl text-center">
          Checkpoint umano strategico
        </h2>
      </FadeIn>
      <FadeIn delay={0.16}>
        <p className="mb-8 text-[var(--pres-muted)] text-sm text-center">
          Dopo il planning, una decisione umana evita rework costoso.
        </p>
      </FadeIn>

      <div className="items-center gap-5 grid md:grid-cols-[1fr_auto_1fr] mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.35 }}
          className="bg-[var(--pres-success)]/15 p-5 border border-[var(--pres-success)]/50 rounded-xl"
        >
          <p className="font-semibold text-[var(--pres-success)]">PROCEED</p>
          <p className="mt-1 text-[var(--pres-text-sub)] text-sm">
            Piano approvato, avvia implementazione.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.35 }}
          className="bg-[var(--pres-accent)]/15 px-6 py-8 border border-[var(--pres-accent)]/50 rounded-xl text-center"
        >
          <p className="font-mono text-[var(--pres-accent)] text-xs uppercase tracking-wider">
            Human checkpoint
          </p>
          <p className="mt-2 font-semibold text-lg">Leggi PLAN.md</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.35 }}
          className="bg-[var(--pres-warning)]/15 p-5 border border-[var(--pres-warning)]/50 rounded-xl"
        >
          <p className="font-semibold text-[var(--pres-warning)]">CORREGGI</p>
          <p className="mt-1 text-[var(--pres-text-sub)] text-sm">
            Aggiorna il piano e rilancia lo step di planning.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
