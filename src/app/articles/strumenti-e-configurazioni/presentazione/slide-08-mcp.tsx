import { ArrowTip } from "@/components/presentation/slide-primitives";
import * as motion from "motion/react-client";
import { GlassCard, SectionTitle, SlideFrame } from "./slide-shared";

export function Slide08Mcp() {
  return (
    <SlideFrame>
      <div className="flex flex-col px-6 py-6 h-full">
        <SectionTitle
          eyebrow="capacita esterne"
          title="Sapere come fare una cosa non significa poterla fare davvero"
          description="MCP conta quando il task dipende da dati o azioni fuori dal repository: database, cloud, knowledge base interne, API specialistiche."
        />

        <div className="flex-1 items-center gap-5 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <GlassCard className="p-6 md:p-7">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-(--pres-muted)">
                dentro il repo
              </div>
              <div className="space-y-3 mt-6 text-lg">
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  file
                </div>
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  test locali
                </div>
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  comandi disponibili
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="w-full"
          >
            <svg viewBox="0 0 720 320" className="w-full">
              <motion.rect
                x="222"
                y="88"
                width="276"
                height="144"
                rx="34"
                fill="color-mix(in srgb, var(--pres-blue) 10%, transparent)"
                stroke="var(--pres-blue)"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.26 }}
              />
              <text
                x="360"
                y="134"
                textAnchor="middle"
                fill="var(--pres-blue)"
                fontSize="15"
                fontFamily="var(--font-mono)"
              >
                bridge operativo
              </text>
              <text
                x="360"
                y="182"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="42"
                fontWeight="700"
              >
                MCP
              </text>
              <text
                x="360"
                y="214"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="18"
              >
                collega l'agente a sistemi reali
              </text>

              <motion.path
                d="M58 160 L216 160"
                stroke="var(--pres-blue)"
                strokeWidth="5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.5 }}
              />
              <ArrowTip x={216} y={160} color="var(--pres-blue)" delay={0.95} />
              <motion.path
                d="M504 160 L662 160"
                stroke="var(--pres-blue)"
                strokeWidth="5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.66 }}
              />
              <ArrowTip x={662} y={160} color="var(--pres-blue)" delay={1.11} />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
          >
            <GlassCard className="p-6 md:p-7">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-(--pres-muted)">
                fuori dal repo
              </div>
              <div className="space-y-3 mt-6 text-lg">
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  database
                </div>
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  cloud e risorse
                </div>
                <div className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4">
                  knowledge base interne
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
