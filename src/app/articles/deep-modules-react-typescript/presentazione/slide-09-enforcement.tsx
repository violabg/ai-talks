import * as motion from "motion/react-client";
import { SlideTitle } from "./slide-shared";

export function Slide09Enforcement() {
  return (
    <div className="space-y-8">
      <SlideTitle
        eyebrow="Governance"
        title="Se il confine non e enforced, prima o poi verra violato"
        subtitle="ESLint trasforma la convenzione dei Deep Modules in regola automatica, valida anche per codice generato."
      />

      <div className="gap-5 grid lg:grid-cols-[1.1fr_1fr] mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-[var(--pres-bg-surface)] p-4 border border-[var(--pres-border)] rounded-xl"
        >
          <p className="mb-2 font-mono text-[var(--pres-accent)] text-sm uppercase">
            eslint rule
          </p>
          <pre className="bg-[var(--pres-bg-card)] p-3 rounded overflow-x-auto text-[var(--pres-text-sub)] text-[12px] leading-relaxed">
            {`{
  "rules": {
    "no-restricted-imports": ["error", {
      "patterns": ["*/modules/*/_internal/*"]
    }]
  }
}`}
          </pre>
        </motion.div>

        <div className="bg-[var(--pres-bg-card)] p-4 border border-[var(--pres-border)] rounded-xl">
          <svg viewBox="0 0 520 310" className="w-full">
            <defs>
              <marker
                id="arrow-green"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-success)" />
              </marker>
              <marker
                id="arrow-red"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-danger)" />
              </marker>
            </defs>
            <motion.rect
              x="30"
              y="38"
              width="200"
              height="62"
              rx="10"
              fill="var(--pres-success-dim)"
              stroke="var(--pres-success)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.14 }}
            />
            <text
              x="130"
              y="74"
              textAnchor="middle"
              fill="var(--pres-success-fg)"
              fontSize="13"
              fontWeight="700"
            >
              import from modules/auth
            </text>

            <motion.rect
              x="292"
              y="206"
              width="200"
              height="62"
              rx="10"
              fill="var(--pres-danger-dim)"
              stroke="var(--pres-danger)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
            />
            <text
              x="392"
              y="242"
              textAnchor="middle"
              fill="var(--pres-danger-fg)"
              fontSize="13"
              fontWeight="700"
            >
              import _internal/token
            </text>

            <motion.line
              x1="232"
              y1="68"
              x2="360"
              y2="122"
              stroke="var(--pres-success)"
              strokeWidth="4"
              markerEnd="url(#arrow-green)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.35 }}
            />
            <motion.text
              x="371"
              y="130"
              fill="var(--pres-success)"
              fontSize="12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              OK
            </motion.text>

            <motion.line
              x1="286"
              y1="206"
              x2="170"
              y2="110"
              stroke="var(--pres-danger)"
              strokeWidth="4"
              markerEnd="url(#arrow-red)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.52, duration: 0.35 }}
            />
            <motion.text
              x="200"
              y="195"
              fill="var(--pres-danger)"
              fontSize="12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.72 }}
            >
              lint error
            </motion.text>
          </svg>
        </div>
      </div>
    </div>
  );
}
