import * as motion from "motion/react-client";
import { GlassCard, SectionTitle, SlideFrame } from "./slide-shared";

const roles = [
  {
    title: "Planner",
    detail: "non implementa: prepara il percorso",
    color: "var(--pres-blue)",
  },
  {
    title: "Reviewer",
    detail: "cerca rischi, regressioni e punti deboli",
    color: "var(--pres-warning)",
  },
  {
    title: "Implementatore",
    detail: "scrive codice dentro vincoli gia chiari",
    color: "var(--pres-success)",
  },
];

export function Slide07SkillsAgents() {
  return (
    <SlideFrame>
      <div className="flex flex-col px-6 py-6 h-full">
        <SectionTitle
          eyebrow="metodo vs mandato"
          title="Skill e custom agents si assomigliano solo in superficie"
          description="La skill codifica un percorso ripetibile. Il custom agent separa il ruolo. Confonderli significa chiedere allo stesso agente di pianificare, implementare e giudicare nello stesso momento."
        />

        <div className="flex-1 gap-5 grid grid-cols-1 xl:grid-cols-[1fr_1fr] mt-8">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <GlassCard className="p-6 md:p-7 h-full">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-(--pres-success)">
                skill = metodo
              </div>
              <h3 className="mt-4 text-3xl text-(--pres-text)">
                Workflow ripetibile
              </h3>
              <div className="gap-3 grid mt-8">
                {[
                  "ricerca iniziale della codebase",
                  "checkpoint prima di editare",
                  "pipeline test-lint-build",
                  "verifica finale coerente",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.28 + index * 0.1 }}
                    className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4 text-lg"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
          >
            <GlassCard className="p-6 md:p-7 h-full">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-(--pres-accent)">
                custom agent = mandato
              </div>
              <h3 className="mt-4 text-3xl text-(--pres-text)">
                Ruolo separato
              </h3>
              <div className="gap-3 grid mt-8">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.36 + index * 0.11 }}
                    className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4"
                  >
                    <div
                      className="font-mono text-sm uppercase tracking-wide"
                      style={{ color: role.color }}
                    >
                      {role.title}
                    </div>
                    <p className="mt-2 text-lg leading-snug">{role.detail}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
