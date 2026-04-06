import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

const checks = [
  { label: "Test", color: "#34d399" },
  { label: "Typecheck", color: "#60a5fa" },
  { label: "Lint", color: "#fbbf24" },
];

export function Slide09FeedbackLoop() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[#a78bfa] text-2xl md:text-4xl text-center">
          Feedback loop deterministico
        </h2>
      </FadeIn>
      <FadeIn delay={0.14}>
        <p className="mb-8 text-[#94a3b8] text-sm text-center">
          Modifica -&gt; verifica -&gt; correggi: finche il segnale e verde.
        </p>
      </FadeIn>

      <div className="bg-[#1e293b]/60 mx-auto p-6 border border-[#334155] rounded-2xl max-w-5xl">
        <div className="gap-4 grid md:grid-cols-[1.1fr_1fr]">
          <div className="bg-[#a78bfa]/12 p-4 border border-[#a78bfa]/40 rounded-xl">
            <p className="font-semibold text-[#a78bfa]">Ciclo operativo</p>
            <div className="flex flex-wrap items-center gap-2 mt-3 font-mono text-[#cbd5e1] text-xs">
              <span className="bg-[#0f172a]/70 px-2 py-1 rounded">
                Modifica
              </span>
              <span>-&gt;</span>
              <span className="bg-[#0f172a]/70 px-2 py-1 rounded">
                Esegui check
              </span>
              <span>-&gt;</span>
              <span className="bg-[#0f172a]/70 px-2 py-1 rounded">
                Correggi
              </span>
              <span>-&gt;</span>
              <span className="bg-[#0f172a]/70 px-2 py-1 rounded">Ripeti</span>
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
                  borderColor: `${check.color}55`,
                  backgroundColor: `${check.color}12`,
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
