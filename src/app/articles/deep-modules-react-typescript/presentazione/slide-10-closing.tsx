import * as motion from "motion/react-client";

const principles = [
  "Un solo entrypoint pubblico per modulo",
  "API orientata al comportamento, non ai setter",
  "Implementazione nascosta in _internal",
  "Test del contratto come rete di sicurezza",
  "Lint per bloccare import illegali",
];

export function Slide10Closing() {
  return (
    <div className="space-y-8 mx-auto w-full max-w-6xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="font-mono text-[var(--pres-accent)] text-sm uppercase tracking-[0.28em]"
      >
        Closing
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
      >
        Deep Modules rendono l'AI autonoma
        <br className="hidden sm:block" />
        senza perdere controllo architetturale.
      </motion.h2>

      <div className="gap-3 grid sm:grid-cols-2 lg:grid-cols-5 mx-auto w-full max-w-6xl">
        {principles.map((principle, i) => (
          <motion.div
            key={principle}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 + i * 0.09 }}
            className="bg-[var(--pres-accent-dim)] px-3 py-4 border border-[var(--pres-border)] rounded-lg text-left"
          >
            <p className="font-mono text-[var(--pres-accent)] text-xs">0{i + 1}</p>
            <p className="mt-2 text-[var(--pres-text)] text-sm leading-snug">
              {principle}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-[var(--pres-muted)] text-sm"
      >
        Regola pratica: se un consumer deve conoscere dettagli interni, il
        modulo non e ancora profondo.
      </motion.p>
    </div>
  );
}
