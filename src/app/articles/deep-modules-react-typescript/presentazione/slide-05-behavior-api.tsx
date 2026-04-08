import * as motion from "motion/react-client";
import { SlideTitle } from "./slide-shared";

export function Slide05BehaviorApi() {
  return (
    <div className="space-y-8">
      <SlideTitle
        eyebrow="API Design"
        title="Esporre azioni, non setter"
        subtitle="Quando l'interfaccia parla il linguaggio del dominio, l'agente AI capisce cosa puo fare senza scavare dentro il modulo."
      />

      <div className="gap-4 grid lg:grid-cols-2 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-[var(--pres-bg-surface)] p-4 border border-[var(--pres-danger)]/40 rounded-xl"
        >
          <p className="mb-2 font-mono text-[var(--pres-danger)] text-sm uppercase">
            anti-pattern
          </p>
          <pre className="bg-[var(--pres-bg-card)] p-3 rounded overflow-x-auto text-[var(--pres-danger-fg)] text-[12px] leading-relaxed">
            {`const {
  items,
  setItems,
  selectedId,
  setSelectedId,
  isLoading,
  setIsLoading
} = useProductList();`}
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="bg-[var(--pres-bg-surface)] p-4 border border-[var(--pres-success)]/40 rounded-xl"
        >
          <p className="mb-2 font-mono text-[var(--pres-success)] text-sm uppercase">
            deep module API
          </p>
          <pre className="bg-[var(--pres-bg-card)] p-3 rounded overflow-x-auto text-[var(--pres-success-fg)] text-[12px] leading-relaxed">
            {`const {
  items,
  selectedItem,
  isLoading,
  selectItem,
  removeItem,
  refreshList
} = useProductList();`}
          </pre>
        </motion.div>
      </div>

      <div className="gap-3 grid sm:grid-cols-3 mx-auto w-full max-w-6xl">
        {[
          ["selectItem", "azione semantica"],
          ["removeItem", "intenzione esplicita"],
          ["refreshList", "sincronizzazione incapsulata"],
        ].map(([name, note], i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.42 + i * 0.1 }}
            className="bg-[var(--pres-accent-dim)] px-4 py-3 border border-[var(--pres-border)] rounded-lg text-center"
          >
            <p className="font-mono text-[var(--pres-text)] text-sm">{name}</p>
            <p className="mt-1 text-[var(--pres-muted)] text-xs">{note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
