"use client";

import * as motion from "motion/react-client";

const steps = [
  { id: "apply",    label: "Applica",         sub: "codemod o AI su batch limitato", color: "var(--pres-accent)",  angle: -90 },
  { id: "type",     label: "Typecheck",       sub: "pnpm tsc --noEmit",              color: "var(--pres-blue)",    angle: -18 },
  { id: "test",     label: "Test",            sub: "pnpm test",                      color: "var(--pres-success)", angle: 54  },
  { id: "diff",     label: "Rivedi il Diff",  sub: "coerente e comprensibile?",      color: "var(--pres-warning)", angle: 126 },
  { id: "commit",   label: "Commit",          sub: "punto di ancoraggio",            color: "var(--pres-success)", angle: 198 },
];

const toRad = (deg: number) => (deg * Math.PI) / 180;

export function Slide07Loop() {
  const cx = 210;
  const cy = 210;
  const r = 130;
  const nodeR = 52;

  return (
    <div className="flex flex-col h-full py-6 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Il{" "}
        <span className="text-[var(--pres-accent)]">Loop di Validazione</span>
      </motion.h2>
      <motion.p
        className="text-[var(--pres-muted)] text-base text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Ogni iterazione deve chiudersi con una verifica prima di aprire la successiva
      </motion.p>

      <div className="flex-1 min-h-0 flex flex-col lg:flex-row items-center gap-6">
        {/* Cycle diagram */}
        <div className="flex-1 flex items-center justify-center min-h-0">
          <svg viewBox="0 0 420 420" className="w-full max-w-md h-full">
            {/* Arc arrows between nodes */}
            {steps.map((step, i) => {
              const next = steps[(i + 1) % steps.length];
              const a1 = toRad(step.angle);
              const a2 = toRad(next.angle);
              // midpoint arc for arrow
              const midAngle = (step.angle + next.angle) / 2;
              const midRad = toRad(midAngle);
              const arrowX = cx + (r) * Math.cos(midRad);
              const arrowY = cy + (r) * Math.sin(midRad);
              // arc path
              const x1 = cx + r * Math.cos(a1);
              const y1 = cy + r * Math.sin(a1);
              const x2 = cx + r * Math.cos(a2);
              const y2 = cy + r * Math.sin(a2);
              const largeArc = 0;
              return (
                <motion.path
                  key={`arc-${step.id}`}
                  d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
                  fill="none"
                  stroke={step.color}
                  strokeWidth="2"
                  opacity={0.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
                />
              );
            })}

            {/* Center label */}
            <motion.circle cx={cx} cy={cy} r={52}
              fill="color-mix(in srgb, var(--pres-accent) 8%, transparent)"
              stroke="var(--pres-accent)" strokeWidth="1.5" strokeDasharray="4 4"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ transformOrigin: `${cx}px ${cy}px` }} />
            <motion.text x={cx} y={cy - 8} textAnchor="middle"
              fill="var(--pres-accent)" fontSize="13" fontWeight="700"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              batch
            </motion.text>
            <motion.text x={cx} y={cy + 8} textAnchor="middle"
              fill="var(--pres-accent)" fontSize="13" fontWeight="700"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              limitato
            </motion.text>
            <motion.text x={cx} y={cy + 22} textAnchor="middle"
              fill="var(--pres-muted)" fontSize="10"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              3–5 file
            </motion.text>

            {/* Nodes */}
            {steps.map((step, i) => {
              const rad = toRad(step.angle);
              const nx = cx + r * Math.cos(rad);
              const ny = cy + r * Math.sin(rad);
              return (
                <motion.g key={step.id}
                  initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                  style={{ transformOrigin: `${nx}px ${ny}px` }}>
                  <circle cx={nx} cy={ny} r={nodeR}
                    fill={`color-mix(in srgb, ${step.color} 12%, transparent)`}
                    stroke={step.color} strokeWidth="1.5" />
                  <text x={nx} y={ny - 5} textAnchor="middle"
                    fill={step.color} fontSize="12" fontWeight="700">{step.label}</text>
                  <text x={nx} y={ny + 10} textAnchor="middle"
                    fill="var(--pres-muted)" fontSize="9">{step.sub.split(" ")[0]}</text>
                </motion.g>
              );
            })}
          </svg>
        </div>

        {/* Escape branch */}
        <motion.div
          className="flex flex-col gap-4 max-w-xs w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="bg-[var(--pres-danger)]/5 border border-[var(--pres-danger)]/30 rounded-xl p-5">
            <p className="font-bold text-[var(--pres-danger)] text-base mb-2">
              ⚠ Se qualcosa si rompe
            </p>
            <p className="text-[var(--pres-muted)] text-sm leading-relaxed">
              <strong className="text-[var(--pres-text)]">Diagnostica prima</strong> di andare avanti. Non accumulare modifiche sperando che il quadro si chiarisca.
            </p>
          </div>
          <div className="bg-[var(--pres-success)]/5 border border-[var(--pres-success)]/30 rounded-xl p-5">
            <p className="font-bold text-[var(--pres-success)] text-base mb-2">
              ✓ Errori TypeScript = feedback ideale
            </p>
            <p className="text-[var(--pres-muted)] text-sm font-mono leading-relaxed text-xs">
              &quot;Correggi solo questo errore,<br />
              senza introdurre altre modifiche.&quot;
            </p>
          </div>
          <div className="bg-[var(--pres-accent)]/5 border border-[var(--pres-accent)]/30 rounded-xl p-5">
            <p className="font-bold text-[var(--pres-accent)] text-base mb-1">Il commit è un oracolo</p>
            <p className="text-[var(--pres-muted)] text-sm leading-relaxed">
              Ogni commit è il punto da cui tornare se il passo successivo si rompe.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
