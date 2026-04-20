import * as motion from "motion/react-client";
import { GlassCard, SectionTitle, SlideFrame } from "./slide-shared";

const columns = [
  {
    title: "Memoria",
    color: "var(--pres-accent)",
    items: ["Always-on instructions", "File-based instructions"],
  },
  {
    title: "Metodo",
    color: "var(--pres-success)",
    items: ["Prompt files", "Agent skills"],
  },
  {
    title: "Capacità",
    color: "var(--pres-blue)",
    items: ["Custom agents", "MCP"],
  },
  {
    title: "Automazione",
    color: "var(--pres-warning)",
    items: ["Hooks", "Agent plugins"],
  },
];

export function Slide04Categories() {
  return (
    <SlideFrame>
      <div className="flex flex-col px-6 py-6 h-full">
        <SectionTitle
          eyebrow="la tassonomia reale"
          title="Le configurazioni hanno valore solo se rispondono a una funzione distinta"
          description="Qui il punto chiave dell'articolo si vede subito: alcune leve fissano regole, altre impongono un processo, altre ancora abilitano azioni esterne o automatizzano il workflow."
        />

        <div className="flex-1 gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-8">
          {columns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.1 }}
            >
              <GlassCard className="flex flex-col p-6 h-full">
                <div
                  className="font-mono text-sm uppercase tracking-[0.18em]"
                  style={{ color: column.color }}
                >
                  {column.title}
                </div>
                <div className="flex-1 space-y-4 mt-6">
                  {column.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4 text-(--pres-text) text-lg"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
