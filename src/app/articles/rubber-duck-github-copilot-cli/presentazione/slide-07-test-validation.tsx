import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function TestValidationSlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="mb-2 font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Validazione dei Test
        </h2>
        <p className="text-[var(--pres-text-sub)]">
          Il problema dei test compiacenti
        </p>
      </FadeIn>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 px-6 w-full max-w-5xl">
        {/* Compliant Test - Wrong */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--pres-danger-dim)] p-6 border-[var(--pres-danger)] border-2 rounded-lg"
        >
          <h3 className="mb-4 font-bold text-[var(--pres-text)] text-lg">
            ❌ Test Compiacente
          </h3>
          <div className="bg-[var(--pres-bg)] mb-4 p-4 rounded overflow-auto font-mono text-sm">
            <pre className="text-[var(--pres-text-sub)]">{`test('sum', () => {
  const result = sum(2, 3);
  // Scritto per il
  // codice sbagliato
  expect(result).toBe(6); 
});`}</pre>
          </div>
          <p className="text-[var(--pres-text-sub)] text-sm">
            Passa perché adattato al codice errato, non perché corretto.
          </p>
        </motion.div>

        {/* Robust Test - Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--pres-success-dim)] p-6 border-[var(--pres-success)] border-2 rounded-lg"
        >
          <h3 className="mb-4 font-bold text-[var(--pres-text)] text-lg">
            ✓ Test Robusto
          </h3>
          <div className="bg-[var(--pres-bg)] mb-4 p-4 rounded overflow-auto font-mono text-sm">
            <pre className="text-[var(--pres-text-sub)]">{`test('sum', () => {
  const result = sum(2, 3);
  // Indipendente
  // dall'implementazione
  expect(result).toBe(5);
});`}</pre>
          </div>
          <p className="text-[var(--pres-text-sub)] text-sm">
            Verifica la logica matematica corretta.
          </p>
        </motion.div>
      </div>

      <FadeIn delay={0.5} className="px-6 max-w-4xl">
        <div className="p-6 border-[var(--pres-accent)] border-l-4 rounded-lg bg-[var(--pres-accent-dim)]">
          <p className="mb-2 font-semibold text-[var(--pres-text)]">
            🦆 Rubber Duck interviene PRIMA dell'esecuzione
          </p>
          <p className="text-[var(--pres-text-sub)]">
            Verifica l'integrità logica indipendentemente dal risultato
            dell'esecuzione, intercettando test compiacenti prima che passino.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
