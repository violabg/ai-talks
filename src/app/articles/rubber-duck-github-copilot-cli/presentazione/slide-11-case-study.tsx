import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function CaseStudySlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Caso Studio: Autenticazione
        </h2>
      </FadeIn>

      <div className="px-6 w-full max-w-4xl">
        <div className="space-y-4 font-mono text-sm">
          {/* Request */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[var(--pres-bg-card)] p-4 border border-[var(--pres-border)] rounded-lg"
          >
            <p className="mb-2 font-semibold text-[var(--pres-accent)]">
              &gt; Utente
            </p>
            <p className="text-[var(--pres-text)]">
              &quot;Aggiungi un middleware di autenticazione al progetto.&quot;
            </p>
          </motion.div>

          {/* Thinking */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex justify-center"
          >
            <div className="text-[var(--pres-muted)] text-2xl">...</div>
          </motion.div>

          {/* Copilot thinking */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-[var(--pres-bg-card)] p-4 border border-[var(--pres-border)] rounded-lg"
          >
            <p className="mb-2 font-semibold text-[var(--pres-blue)]">
              [Copilot CLI]
            </p>
            <p className="text-[var(--pres-text-sub)]">
              [Thinking] Inizializzazione piano...
            </p>
          </motion.div>

          {/* Rubber Duck critique */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[var(--pres-warning)]/10 p-4 border-[var(--pres-warning)] border-l-4 rounded-lg"
          >
            <p className="mb-2 font-semibold text-[var(--pres-warning)]">
              [Rubber Duck]
            </p>
            <p className="text-[var(--pres-text)]">
              Attenzione: nella versione corrente di Next.js,
            </p>
            <p className="text-[var(--pres-text)]">
              &apos;middleware&apos; è stato rinominato in &apos;proxy&apos;.
            </p>
          </motion.div>

          {/* Update */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="bg-[var(--pres-success-dim)] p-4 border-[var(--pres-success)] border-l-4 rounded-lg"
          >
            <p className="mb-2 font-semibold text-[var(--pres-success)]">
              [Copilot CLI]
            </p>
            <p className="text-[var(--pres-text)]">
              [Update] Piano aggiornato.
            </p>
            <p className="text-[var(--pres-text)]">
              Implementazione del proxy in corso...
            </p>
          </motion.div>
        </div>
      </div>

      <FadeIn delay={0.95} className="px-6 max-w-3xl">
        <div className="bg-[var(--pres-danger-dim)] p-6 border-[var(--pres-danger)] border-l-4 rounded-lg">
          <p className="mb-1 font-semibold text-[var(--pres-danger-fg)]">
            Senza Rubber Duck
          </p>
          <p className="text-[var(--pres-text-sub)] text-sm">
            Il file sarebbe scritto con il nome sbagliato, errore discoverto
            solo al runtime.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
