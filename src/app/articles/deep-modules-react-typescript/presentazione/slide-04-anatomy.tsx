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
        className="bg-[#0b1222] mx-auto p-5 sm:p-8 border border-[#334155] rounded-2xl w-full max-w-6xl"
      >
        <div className="mx-auto w-full max-w-5xl">
          <svg viewBox="0 0 760 430" className="w-full">
            <motion.rect
              x="34"
              y="42"
              width="692"
              height="348"
              rx="18"
              fill="rgba(30,41,59,0.45)"
              stroke="#334155"
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
              fill="rgba(167,139,250,0.2)"
              stroke="#a78bfa"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            />
            <text x="106" y="145" fill="#e2e8f0" fontSize="20" fontWeight="700">
              index.ts
            </text>
            <text x="106" y="168" fill="#94a3b8" fontSize="13">
              interfaccia pubblica stabile
            </text>

            <motion.rect
              x="430"
              y="92"
              width="250"
              height="262"
              rx="14"
              fill="rgba(52,211,153,0.12)"
              stroke="#34d399"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.38 }}
            />
            <text x="455" y="126" fill="#34d399" fontSize="20" fontWeight="700">
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
                  x="448"
                  y={146 + i * 38}
                  width="214"
                  height="28"
                  rx="8"
                  fill="rgba(15,23,42,0.8)"
                  stroke="rgba(148,163,184,0.35)"
                />
                <text x="462" y={165 + i * 38} fill="#cbd5e1" fontSize="13">
                  {item}
                </text>
              </motion.g>
            ))}

            <motion.line
              x1="326"
              y1="146"
              x2="430"
              y2="146"
              stroke="#a78bfa"
              strokeWidth="4"
              strokeDasharray="9 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.64, duration: 0.5 }}
            />
            <motion.text
              x="378"
              y="136"
              textAnchor="middle"
              fill="#a78bfa"
              fontSize="13"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              unico punto di contatto
            </motion.text>

            <motion.text
              x="90"
              y="84"
              fill="#94a3b8"
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
