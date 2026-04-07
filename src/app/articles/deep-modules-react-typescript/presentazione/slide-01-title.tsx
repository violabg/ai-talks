import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

const tags = ["React", "TypeScript", "Deep Modules", "Agenti AI"];

export function Slide01Title() {
  return (
    <div className="lg:items-center gap-8 grid lg:grid-cols-[1.2fr_1fr] mx-auto w-full max-w-6xl">
      <div>
        <FadeIn>
          <p className="font-mono text-[#a78bfa] text-xs uppercase tracking-[0.28em]">
            AI TALKS PRESENTAZIONE
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="mt-4 font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight">
            Deep Modules in React/TypeScript
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mt-5 max-w-2xl text-[#94a3b8] text-base sm:text-lg leading-relaxed">
            Riduci la superficie di accoppiamento, lascia invisibile la
            complessita interna e rendi la codebase leggibile da persone e
            agenti AI.
          </p>
        </FadeIn>
        <FadeIn delay={0.24} className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#a78bfa]/15 px-3 py-1 border border-[#334155] rounded-full text-[#e2e8f0] text-xs"
            >
              {tag}
            </span>
          ))}
        </FadeIn>
      </div>

      <FadeIn delay={0.2} className="w-full">
        <div className="bg-[#0b1222] mx-auto p-5 sm:p-7 border border-[#334155] rounded-2xl w-full max-w-4xl">
          <motion.svg
            viewBox="0 0 680 360"
            className="w-full"
            initial="hidden"
            animate="visible"
          >
            <motion.rect
              x="20"
              y="36"
              width="220"
              height="288"
              rx="16"
              fill="rgba(248,113,113,0.12)"
              stroke="#f87171"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 0.4 }}
            />
            <motion.rect
              x="440"
              y="36"
              width="220"
              height="288"
              rx="16"
              fill="rgba(52,211,153,0.12)"
              stroke="#34d399"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            <motion.text
              x="130"
              y="75"
              fill="#f87171"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ delay: 0.1 }}
            >
              SHALLOW
            </motion.text>
            <motion.text
              x="550"
              y="75"
              fill="#34d399"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ delay: 0.3 }}
            >
              DEEP
            </motion.text>
            <motion.circle
              cx="130"
              cy="180"
              r="78"
              fill="rgba(248,113,113,0.18)"
              stroke="#f87171"
              variants={{
                hidden: { scale: 0.7, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              transition={{ delay: 0.18, duration: 0.45 }}
            />
            <motion.rect
              x="494"
              y="136"
              width="112"
              height="88"
              rx="12"
              fill="rgba(167,139,250,0.2)"
              stroke="#a78bfa"
              variants={{
                hidden: { y: 14, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ delay: 0.38, duration: 0.45 }}
            />
            <motion.line
              x1="250"
              y1="180"
              x2="430"
              y2="180"
              stroke="#a78bfa"
              strokeWidth="4"
              strokeDasharray="10 8"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1 },
              }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />
            <motion.text
              x="340"
              y="165"
              fill="#e2e8f0"
              textAnchor="middle"
              fontSize="15"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ delay: 0.7 }}
            >
              confine intenzionale
            </motion.text>
          </motion.svg>
        </div>
      </FadeIn>
    </div>
  );
}
