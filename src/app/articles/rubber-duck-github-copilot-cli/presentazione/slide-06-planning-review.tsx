import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function PlanningReviewSlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Revisione della Pianificazione
        </h2>
      </FadeIn>

      <div className="space-y-6 px-6 w-full max-w-4xl">
        {/* Problem detected */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--pres-danger-dim)] p-6 border-[var(--pres-danger)] border-l-4 rounded-lg"
        >
          <p className="mb-2 font-mono text-[var(--pres-danger-fg)] text-sm">
            [Modello Operativo]
          </p>
          <p className="mb-2 text-[var(--pres-text)]">
            Piano: Usare API{" "}
            <code className="bg-[var(--pres-bg)] px-2 py-1 rounded font-mono">
              useMiddleware()
            </code>{" "}
            per autenticazione
          </p>
        </motion.div>

        {/* Check mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="text-3xl">🦆</div>
        </motion.div>

        {/* Critique */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[var(--pres-warning)]/10 p-6 border-[var(--pres-warning)] border-l-4 rounded-lg"
        >
          <p className="mb-2 font-mono text-[var(--pres-muted)] text-sm">
            [Rubber Duck - Critique]
          </p>
          <p className="mb-3 font-semibold text-[var(--pres-text)]">
            ⚠️ Attenzione: nella versione corrente di Next.js,{" "}
            <code className="bg-[var(--pres-bg)] px-2 py-1 rounded font-mono">
              &apos;middleware&apos;
            </code>{" "}
            è stato rinominato in{" "}
            <code className="bg-[var(--pres-bg)] px-2 py-1 rounded font-mono">
              &apos;proxy&apos;
            </code>
            .
          </p>
          <p className="text-[var(--pres-text-sub)]">
            Consulto la documentazione via MCP: confermato in versione 15.2.
          </p>
        </motion.div>

        {/* Update */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-[var(--pres-success-dim)] p-6 border-[var(--pres-success)] border-l-4 rounded-lg"
        >
          <p className="mb-2 font-mono text-[var(--pres-text-sub)] text-sm">
            [Modello Operativo - Adotta il suggerimento]
          </p>
          <p className="font-semibold text-[var(--pres-text)]">
            ✓ Piano aggiornato. Implementazione del proxy in corso...
          </p>
        </motion.div>
      </div>

      <FadeIn delay={0.9} className="max-w-3xl text-center">
        <p className="text-[var(--pres-text-sub)] text-base">
          Senza Rubber Duck, l'errore sarebbe stato scoperto solo al runtime.
        </p>
      </FadeIn>
    </div>
  );
}
