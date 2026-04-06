import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

const patterns = [
  {
    title: "Step-by-step obbligato",
    desc: "Costringe la pianificazione prima del codice",
    color: "#60a5fa",
  },
  {
    title: "Riferimento al codice",
    desc: "Replica pattern esistenti, riduce divergenze",
    color: "#34d399",
  },
  {
    title: "Output format vincolato",
    desc: "Rende l'automazione prevedibile",
    color: "#fbbf24",
  },
  {
    title: "Fail-fast esplicito",
    desc: "Blocca assunzioni errate in anticipo",
    color: "#f87171",
  },
];

export function Slide04Patterns() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 font-bold text-[#a78bfa] text-2xl md:text-4xl text-center">
          Pattern di prompting per l'ingegneria
        </h2>
      </FadeIn>
      <FadeIn delay={0.16}>
        <p className="mb-8 text-[#94a3b8] text-sm text-center">
          Una timeline operativa da scegliere in base al task.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        <div className="relative flex flex-col gap-4">
          <div className="top-0 left-4 md:left-1/2 absolute bg-[#334155] w-px h-full" />
          {patterns.map((pattern, i) => (
            <motion.div
              key={pattern.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.15 }}
              className="relative md:gap-8 md:grid md:grid-cols-2"
            >
              <div
                className={i % 2 === 0 ? "md:pr-6" : "md:col-start-2 md:pl-6"}
              >
                <div
                  className="p-4 border rounded-xl"
                  style={{
                    borderColor: `${pattern.color}50`,
                    backgroundColor: `${pattern.color}12`,
                  }}
                >
                  <p className="font-semibold" style={{ color: pattern.color }}>
                    {i + 1}. {pattern.title}
                  </p>
                  <p className="mt-1 text-[#cbd5e1] text-sm">{pattern.desc}</p>
                </div>
              </div>
              <span
                className="block top-5 left-4 md:left-1/2 absolute border-2 rounded-full w-2.5 h-2.5 -translate-x-1/2"
                style={{
                  borderColor: pattern.color,
                  backgroundColor: "#0f172a",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
