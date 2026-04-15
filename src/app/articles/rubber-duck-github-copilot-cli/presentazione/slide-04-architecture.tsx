import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function ArchitectureSlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Architettura a Due Livelli
        </h2>
      </FadeIn>

      <div className="px-6 w-full max-w-4xl">
        <div className="relative">
          {/* Modello Operativo Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--pres-accent)]/10 mb-8 p-8 border-[var(--pres-accent)] border-2 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">🧠</div>
              <div>
                <h3 className="mb-2 font-bold text-[var(--pres-text)] text-2xl">
                  Modello Operativo
                </h3>
                <p className="text-[var(--pres-text-sub)]">
                  Genera il codice e pianifica le attività
                  <br />
                  <span className="font-mono text-[var(--pres-muted)] text-sm">
                    es. Claude 4.6 Sonnet
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Arrow Down */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="text-[var(--pres-accent)] text-3xl">↓</div>
          </motion.div>

          {/* Modello Revisore Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[var(--pres-warning)]/10 mb-8 p-8 border-[var(--pres-warning)] border-2 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">🦆</div>
              <div>
                <h3 className="mb-2 font-bold text-[var(--pres-text)] text-2xl">
                  Modello Revisore (Rubber Duck)
                </h3>
                <p className="text-[var(--pres-text-sub)]">
                  Analizza le proposte usando famiglia diversa
                  <br />
                  <span className="font-mono text-[var(--pres-muted)] text-sm">
                    es. famiglia GPT-4
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Arrow Up - Feedback */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-4"
          >
            <div className="text-[var(--pres-success)] text-2xl">
              ↑ feedback critico
            </div>
          </motion.div>
        </div>
      </div>

      <FadeIn delay={0.8} className="max-w-3xl text-center">
        <p className="text-[var(--pres-muted)] text-lg">
          Famiglie diverse = errori sistematici diversi
          <br />
          <span className="font-semibold text-[var(--pres-text)]">
            Questo riduce allucinazioni in modo misurabile
          </span>
        </p>
      </FadeIn>
    </div>
  );
}
