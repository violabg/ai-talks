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
          className="bg-[rgba(30,41,59,0.8)] p-4 border border-[#f87171]/40 rounded-xl"
        >
          <p className="mb-2 font-mono text-[#f87171] text-xs uppercase">
            anti-pattern
          </p>
          <pre className="bg-[#0b1222] p-3 rounded overflow-x-auto text-[#fecaca] text-[12px] leading-relaxed">
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
          className="bg-[rgba(30,41,59,0.8)] p-4 border border-[#34d399]/40 rounded-xl"
        >
          <p className="mb-2 font-mono text-[#34d399] text-xs uppercase">
            deep module API
          </p>
          <pre className="bg-[#0b1222] p-3 rounded overflow-x-auto text-[#bbf7d0] text-[12px] leading-relaxed">
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

      <div className="gap-3 grid sm:grid-cols-3 mx-auto w-full max-w-5xl">
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
            className="bg-[#a78bfa]/15 px-4 py-3 border border-[#334155] rounded-lg text-center"
          >
            <p className="font-mono text-[#e2e8f0] text-sm">{name}</p>
            <p className="mt-1 text-[#94a3b8] text-xs">{note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
