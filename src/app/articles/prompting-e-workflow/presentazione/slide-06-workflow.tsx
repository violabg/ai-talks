import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

const pipeline = [
  { name: "Research", artifact: "RESEARCH.md", color: "var(--pres-blue)" },
  { name: "Planning", artifact: "PLAN.md", color: "var(--pres-success)" },
  { name: "Implementation", artifact: "Codice", color: "var(--pres-warning)" },
  { name: "Review", artifact: "Report", color: "var(--pres-accent)" },
];

export function Slide06Workflow() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[var(--pres-accent)] text-2xl md:text-4xl text-center">
          Workflow multi-agente
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mb-8 text-[var(--pres-muted)] text-sm text-center">
          Ogni step ha una responsabilita unica e produce un artefatto
          verificabile.
        </p>
      </FadeIn>

      <div className="gap-4 grid md:grid-cols-4">
        {pipeline.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 + i * 0.16 }}
            className="relative p-4 border rounded-xl"
            style={{
              borderColor: `color-mix(in srgb, ${item.color} 33%, transparent)`,
              backgroundColor: `color-mix(in srgb, ${item.color} 8%, transparent)`,
            }}
          >
            <p className="font-semibold text-sm" style={{ color: item.color }}>
              {item.name}
            </p>
            <p className="bg-[var(--pres-bg)]/70 mt-2 px-2 py-1 rounded font-mono text-[var(--pres-text-sub)] text-xs">
              {item.artifact}
            </p>
            {i < pipeline.length - 1 && (
              <span className="hidden md:block top-1/2 -right-2 absolute text-[var(--pres-muted)] -translate-y-1/2">
                -&gt;
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
