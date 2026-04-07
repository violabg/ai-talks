import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

const checks = [
  { label: "Test", color: "var(--pres-success)" },
  { label: "Typecheck", color: "var(--pres-blue)" },
  { label: "Lint", color: "var(--pres-warning)" },
];

export function Slide09FeedbackLoop() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[var(--pres-accent)] text-2xl md:text-4xl text-center">
          Feedback loop deterministico
        </h2>
      </FadeIn>
      <FadeIn delay={0.14}>
        <p className="mb-8 text-[var(--pres-muted)] text-sm text-center">
          Modifica -&gt; verifica -&gt; correggi: finche il segnale e verde.
        </p>
      </FadeIn>

      <div className="bg-[var(--pres-bg-surface)]/60 mx-auto p-6 border border-[var(--pres-border)] rounded-2xl max-w-5xl">
        <div className="gap-4 grid md:grid-cols-[1.1fr_1fr]">
          <div className="bg-[var(--pres-accent)]/12 p-4 border border-[var(--pres-accent)]/40 rounded-xl">
            <p className="font-semibold text-[var(--pres-accent)]">Ciclo operativo</p>
            <div className="flex flex-wrap items-center gap-2 mt-3 font-mono text-[var(--pres-text-sub)] text-xs">
              <span className="bg-[var(--pres-bg)]/70 px-2 py-1 rounded">
                Modifica
              </span>
              <span>-&gt;</span>
              <span className="bg-[var(--pres-bg)]/70 px-2 py-1 rounded">
                Esegui check
              </span>
              <span>-&gt;</span>
              <span className="bg-[var(--pres-bg)]/70 px-2 py-1 rounded">
                Correggi
              </span>
              <span>-&gt;</span>
              <span className="bg-[var(--pres-bg)]/70 px-2 py-1 rounded">Ripeti</span>
            </div>
          </div>

          <div className="space-y-2">
            {checks.map((check, i) => (
              <motion.div
                key={check.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.18, duration: 0.35 }}
                className="px-3 py-2 border rounded-lg"
                style={{
                  borderColor: `color-mix(in srgb, ${check.color} 33%, transparent)`,
                  backgroundColor: `color-mix(in srgb, ${check.color} 7%, transparent)`,
                }}
              >
                <span
                  className="font-semibold text-sm"
                  style={{ color: check.color }}
                >
                  {check.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
