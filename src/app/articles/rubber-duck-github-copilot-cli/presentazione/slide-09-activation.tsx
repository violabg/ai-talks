import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function ActivationSlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Attivazione in CLI
        </h2>
      </FadeIn>

      <div className="space-y-6 px-6 w-full max-w-3xl">
        {/* Automatic */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--pres-bg-card)] p-6 border border-[var(--pres-border)] rounded-lg"
        >
          <h3 className="mb-4 font-bold text-[var(--pres-text)] text-lg">
            🚀 Attivazione Automatica
          </h3>
          <div className="bg-[var(--pres-bg)] mb-4 p-4 border border-[var(--pres-border)] rounded font-mono text-sm">
            <p className="text-[var(--pres-muted)]">&gt; /experimental on</p>
          </div>
          <p className="text-[var(--pres-text-sub)]">
            La CLI si riavvia automaticamente per caricare l'agente. Nessuna
            altra configurazione necessaria.
          </p>
        </motion.div>

        {/* Manual Request */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[var(--pres-bg-card)] p-6 border border-[var(--pres-border)] rounded-lg"
        >
          <h3 className="mb-4 font-bold text-[var(--pres-text)] text-lg">
            🎯 Richiesta Esplicita
          </h3>
          <div className="bg-[var(--pres-bg)] mb-4 p-4 border border-[var(--pres-border)] rounded font-mono text-sm">
            <p className="text-[var(--pres-text-sub)]">
              &quot;Can I please get a<br />
              rubber duck review on this plan?&quot;
            </p>
          </div>
          <p className="text-[var(--pres-text-sub)]">
            Puoi richiedere una revisione esplicita durante una sessione
            interattiva.
          </p>
        </motion.div>
      </div>

      <FadeIn delay={0.7} className="max-w-3xl text-center">
        <div className="p-6 border border-[var(--pres-accent)] rounded-lg bg-[var(--pres-accent-dim)]">
          <p className="text-[var(--pres-text)]">
            Rubber Duck fa parte della{" "}
            <span className="font-semibold">modalità sperimentale</span> della
            Copilot CLI
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
