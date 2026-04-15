import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function LoopRecoverySlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Recupero dai Loop
        </h2>
        <p className="text-[var(--pres-text-sub)]">Self-Healing automatico</p>
      </FadeIn>

      <div className="space-y-6 px-6 w-full max-w-4xl">
        {/* State 1: Blocked */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--pres-danger-dim)] p-6 border-[var(--pres-danger)] border-l-4 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔴</span>
            <span className="font-mono font-semibold text-[var(--pres-danger)] text-sm">
              BLOCCO
            </span>
          </div>
          <p className="text-[var(--pres-text)]">
            L'agente è in loop di errore: ogni tentativo di correzione ricade
            nello stesso errore.
          </p>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="text-[var(--pres-muted)] text-3xl">↓</div>
        </motion.div>

        {/* State 2: Rubber Duck Invoked */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[var(--pres-warning)]/10 p-6 border-[var(--pres-warning)] border-l-4 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🦆</span>
            <span className="font-mono font-semibold text-[var(--pres-warning)] text-sm">
              RUBBER DUCK INVOCATO
            </span>
          </div>
          <p className="text-[var(--pres-text)]">
            Rubber Duck fornisce una{" "}
            <span className="font-semibold">prospettiva esterna</span>{" "}
            completamente diversa da quella del modello operativo.
          </p>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center"
        >
          <div className="text-[var(--pres-muted)] text-3xl">↓</div>
        </motion.div>

        {/* State 3: Unlocked */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-[var(--pres-success-dim)] p-6 border-[var(--pres-success)] border-l-4 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✓</span>
            <span className="font-mono font-semibold text-[var(--pres-success)] text-sm">
              SBLOCCO
            </span>
          </div>
          <p className="text-[var(--pres-text)]">
            Nuove direzioni esplorabili. Il generatore può continuare con una
            strategia differente.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
