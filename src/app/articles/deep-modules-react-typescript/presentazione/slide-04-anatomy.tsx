import { motion } from "motion/react";
import { ArrowTip, SlideTitle } from "./slide-shared";

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
        <svg viewBox="0 0 760 430" className="w-full">
          <motion.rect
            x="0"
            y="30"
            width="760"
            height="370"
            rx="18"
            fill="var(--pres-bg-surface)"
            stroke="var(--pres-border)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          <motion.text
            x="50"
            y="72"
            fill="var(--pres-muted)"
            fontSize="14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.14 }}
          >
            src/modules/auth/
          </motion.text>

          <motion.rect
            x="40"
            y="100"
            width="280"
            height="68"
            rx="10"
            fill="var(--pres-accent-dim)"
            stroke="var(--pres-accent)"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          />
          <text
            x="60"
            y="133"
            fill="var(--pres-text)"
            fontSize="20"
            fontWeight="700"
          >
            index.ts
          </text>
          <text x="60" y="156" fill="var(--pres-muted)" fontSize="13">
            interfaccia pubblica stabile
          </text>

          <motion.rect
            x="460"
            y="68"
            width="280"
            height="310"
            rx="14"
            fill="var(--pres-success-dim)"
            stroke="var(--pres-success)"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.38 }}
          />
          <text
            x="485"
            y="104"
            fill="var(--pres-success)"
            fontSize="20"
            fontWeight="700"
          >
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
                x="478"
                y={124 + i * 44}
                width="246"
                height="32"
                rx="8"
                fill="var(--pres-bg-node)"
                stroke="var(--pres-border)"
              />
              <text
                x="492"
                y={145 + i * 44}
                fill="var(--pres-text-sub)"
                fontSize="13"
              >
                {item}
              </text>
            </motion.g>
          ))}

          <motion.line
            x1="320"
            y1="134"
            x2="460"
            y2="134"
            stroke="var(--pres-accent)"
            strokeWidth="4"
            strokeDasharray="9 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.64, duration: 0.5 }}
          />
          <ArrowTip x={460} y={134} color="var(--pres-accent)" delay={1.14} />
          <motion.text
            x="390"
            y="114"
            textAnchor="middle"
            fill="var(--pres-accent)"
            fontSize="12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <tspan x="390" dy="0">
              unico punto
            </tspan>
            <tspan x="390" dy="1.2em">
              di contatto
            </tspan>
          </motion.text>
        </svg>
      </motion.div>
    </div>
  );
}
