import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

const steps = [
  "Elenca file da modificare",
  "Descrivi approccio",
  "Identifica edge case",
  "Procedi con implementazione",
];

export function Slide05StepByStep() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 font-bold text-[#a78bfa] text-2xl md:text-4xl text-center">
          Step-by-step obbligato
        </h2>
      </FadeIn>
      <div className="flex flex-col gap-4 mx-auto max-w-2xl">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25 + i * 0.2 }}
            className="relative bg-[#1e293b]/70 px-5 py-4 border border-[#334155] rounded-xl"
          >
            <div className="flex items-center gap-3">
              <span className="flex justify-center items-center bg-[#a78bfa]/20 rounded-full w-7 h-7 font-mono text-[#a78bfa] text-xs">
                {i + 1}
              </span>
              <p className="text-sm md:text-base">{step}</p>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 + i * 0.2 }}
                className="-bottom-3 left-1/2 absolute bg-[#a78bfa]/50 w-px h-3"
              />
            )}
          </motion.div>
        ))}
      </div>
      <FadeIn delay={1.1}>
        <p className="mt-8 text-[#94a3b8] text-sm text-center">
          Pianificare ad alta voce riduce errori sui task complessi.
        </p>
      </FadeIn>
    </div>
  );
}
