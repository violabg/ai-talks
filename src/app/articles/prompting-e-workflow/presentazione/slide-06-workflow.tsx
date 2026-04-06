import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

const pipeline = [
  { name: "Research", artifact: "RESEARCH.md", color: "#60a5fa" },
  { name: "Planning", artifact: "PLAN.md", color: "#34d399" },
  { name: "Implementation", artifact: "Codice", color: "#fbbf24" },
  { name: "Review", artifact: "Report", color: "#a78bfa" },
];

export function Slide06Workflow() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[#a78bfa] text-2xl md:text-4xl text-center">
          Workflow multi-agente
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mb-8 text-[#94a3b8] text-sm text-center">
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
              borderColor: `${item.color}55`,
              backgroundColor: `${item.color}15`,
            }}
          >
            <p className="font-semibold text-sm" style={{ color: item.color }}>
              {item.name}
            </p>
            <p className="bg-[#0f172a]/70 mt-2 px-2 py-1 rounded font-mono text-[#cbd5e1] text-xs">
              {item.artifact}
            </p>
            {i < pipeline.length - 1 && (
              <span className="hidden md:block top-1/2 -right-2 absolute text-[#94a3b8] -translate-y-1/2">
                -&gt;
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
