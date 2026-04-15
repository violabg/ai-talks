import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function PerformanceSlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Risultati Prestazionali
        </h2>
        <p className="text-[var(--pres-text-sub)]">Test su SWE-bench Pro</p>
      </FadeIn>

      <div className="px-6 w-full max-w-4xl">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--pres-bg-card)] mb-8 p-8 border border-[var(--pres-border)] rounded-lg"
        >
          <div className="space-y-6">
            {/* Sonnet alone */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-[var(--pres-text)]">
                  Claude 4.6 Sonnet
                </p>
                <p className="font-mono text-[var(--pres-text-sub)]">~45%</p>
              </div>
              <div className="bg-[var(--pres-border)] rounded-full w-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "45%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="bg-[var(--pres-accent)] h-full"
                />
              </div>
            </div>

            {/* Sonnet + Rubber Duck */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-[var(--pres-text)]">
                  Claude 4.6 Sonnet + Rubber Duck (GPT-4)
                </p>
                <p className="font-mono font-bold text-[var(--pres-success)]">
                  ~78%
                </p>
              </div>
              <div className="bg-[var(--pres-border)] rounded-full w-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-[var(--pres-success)] h-full"
                />
              </div>
            </div>

            {/* Claude 3 Opus (reference) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-[var(--pres-text-sub)]">
                  Claude 3 Opus (reference)
                </p>
                <p className="font-mono text-[var(--pres-muted)]">~94%</p>
              </div>
              <div className="bg-[var(--pres-border)] rounded-full w-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "94%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="bg-[var(--pres-muted)] h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Finding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="bg-gradient-to-r from-[var(--pres-accent)]/10 to-[var(--pres-success)]/10 p-6 border-[var(--pres-accent)] border-l-4 rounded-lg"
        >
          <p className="mb-2 font-bold text-[var(--pres-text)] text-2xl">
            ✓ Gap closure:{" "}
            <span className="text-[var(--pres-success)]">74,7%</span>
          </p>
          <p className="text-[var(--pres-text-sub)]">
            Modelli più veloci + revisore multi-modello raggiungono tassi di
            risoluzione
            <span className="font-semibold text-[var(--pres-text)]">
              {" "}
              vicini ai modelli top-tier
            </span>
            , a una frazione del costo per token.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
