import * as motion from "motion/react-client";
import { SlideTitle } from "./slide-shared";

export function Slide04Anatomy() {
  return (
    <div className="space-y-8">
      <SlideTitle
        eyebrow="Anatomia"
        title="Un modulo profondo ha una porta d'ingresso e interni sostituibili"
        subtitle="L'entrypoint e index.ts. Tutto il resto puo evolvere senza rompere i consumer."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="bg-[var(--pres-bg-card)] mx-auto p-5 sm:p-8 border border-[var(--pres-border)] rounded-2xl w-full max-w-6xl"
      >
        <div className="mx-auto w-full max-w-5xl">
          <svg viewBox="0 0 760 430" className="w-full">
            <defs>
              <marker
                id="arrow-purple"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-accent)" />
              </marker>
            </defs>
            <motion.rect
              x="34"
              y="42"
              width="692"
              height="348"
              rx="18"
              fill="var(--pres-bg-surface)"
              stroke="var(--pres-border)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />

            <motion.rect
              x="86"
              y="112"
              width="240"
              height="68"
              rx="10"
              fill="var(--pres-accent-dim)"
              stroke="var(--pres-accent)"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            />
            <text x="106" y="145" fill="var(--pres-text)" fontSize="20" fontWeight="700">
              index.ts
            </text>
            <text x="106" y="168" fill="var(--pres-muted)" fontSize="13">
              interfaccia pubblica stabile
            </text>

            <motion.rect
              x="480"
              y="92"
              width="250"
              height="262"
              rx="14"
              fill="var(--pres-success-dim)"
              stroke="var(--pres-success)"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.38 }}
            />
            <text x="505" y="126" fill="var(--pres-success)" fontSize="20" fontWeight="700">
              _internal/
            </text>

            {[
              "hooks.ts",
              "AuthProvider.tsx",
              "token.ts",
              "permissions.ts",
              "__tests__/auth.test.ts",
            ].map((item, i) => (
              <motion.g
                key={item}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 + i * 0.08 }}
              >
                <rect
                  x="498"
                  y={146 + i * 38}
                  width="214"
                  height="28"
                  rx="8"
                  fill="var(--pres-bg-node)"
                  stroke="var(--pres-border)"
                />
                <text x="512" y={165 + i * 38} fill="var(--pres-text-sub)" fontSize="13">
                  {item}
                </text>
              </motion.g>
            ))}

            <motion.line
              x1="326"
              y1="146"
              x2="480"
              y2="146"
              stroke="var(--pres-accent)"
              strokeWidth="4"
              strokeDasharray="9 8"
              markerEnd="url(#arrow-purple)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.64, duration: 0.5 }}
            />
            <motion.text
              x="403"
              y="126"
              textAnchor="middle"
              fill="var(--pres-accent)"
              fontSize="12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <tspan x="403" dy="0">unico punto</tspan>
              <tspan x="403" dy="1.2em">di contatto</tspan>
            </motion.text>

            <motion.text
              x="90"
              y="84"
              fill="var(--pres-muted)"
              fontSize="14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.14 }}
            >
              src/modules/auth/
            </motion.text>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
