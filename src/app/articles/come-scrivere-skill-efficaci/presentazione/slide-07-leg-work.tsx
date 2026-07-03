import * as motion from "motion/react-client";
import { ArrowTip, FadeIn, SlideFrame, SlideHeading } from "./slide-shared";

export function Slide07LegWork() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="04 · leg work"
        title="Nascondi il futuro quando serve più profondità"
        description="Se una fase viene sempre saltata, non aggiungere avvertimenti. Isolala in una skill dedicata: l'agente non correrà verso il passaggio finale."
      />
      <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2">
        {/* Skill grossa */}
        <FadeIn delay={0.15}>
          <div className="flex h-full flex-col rounded-3xl border border-[var(--pres-danger)]/40 bg-[color-mix(in_srgb,var(--pres-danger)_5%,transparent)] p-6">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--pres-danger)]">
              1 skill grossa
            </p>
            <p className="mt-2 text-base text-[var(--pres-text-sub)]">
              L'agente vede già il piano finale. Le domande diventano
              superficiali.
            </p>
            <div className="mt-6 flex flex-1 items-center justify-center">
              <svg viewBox="0 0 300 180" className="w-full max-w-xs">
                <motion.rect
                  x="30"
                  y="60"
                  width="240"
                  height="60"
                  rx="14"
                  fill="color-mix(in srgb, var(--pres-danger) 12%, transparent)"
                  stroke="var(--pres-danger)"
                  strokeWidth="1.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                />
                <text
                  x="150"
                  y="88"
                  textAnchor="middle"
                  fill="var(--pres-danger)"
                  fontSize="14"
                  fontFamily="monospace"
                  fontWeight="700"
                >
                  ask + plan
                </text>
                <text
                  x="150"
                  y="108"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="12"
                >
                  ask sacrificato al plan
                </text>
              </svg>
            </div>
          </div>
        </FadeIn>

        {/* 2 skill separate */}
        <FadeIn delay={0.3}>
          <div className="flex h-full flex-col rounded-3xl border border-[var(--pres-success)]/40 bg-[color-mix(in_srgb,var(--pres-success)_5%,transparent)] p-6">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--pres-success)]">
              2 skill separate
            </p>
            <p className="mt-2 text-base text-[var(--pres-text-sub)]">
              Il focus è isolato. La fase critica riceve tutto il leg work
              necessario.
            </p>
            <div className="mt-6 flex flex-1 items-center justify-center">
              <svg viewBox="0 0 300 180" className="w-full max-w-sm">
                {/* ask box */}
                <motion.rect
                  x="20"
                  y="60"
                  width="110"
                  height="60"
                  rx="14"
                  fill="color-mix(in srgb, var(--pres-success) 14%, transparent)"
                  stroke="var(--pres-success)"
                  strokeWidth="1.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                />
                <text
                  x="75"
                  y="88"
                  textAnchor="middle"
                  fill="var(--pres-success)"
                  fontSize="14"
                  fontFamily="monospace"
                  fontWeight="700"
                >
                  ask
                </text>
                <text
                  x="75"
                  y="106"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="11"
                >
                  raccoglie vincoli
                </text>

                {/* arrow */}
                <motion.path
                  d="M 132 90 L 168 90"
                  stroke="var(--pres-success)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.75 }}
                />
                <ArrowTip
                  x={168}
                  y={90}
                  color="var(--pres-success)"
                  delay={1.1}
                  size={8}
                />

                {/* plan box */}
                <motion.rect
                  x="170"
                  y="60"
                  width="110"
                  height="60"
                  rx="14"
                  fill="color-mix(in srgb, var(--pres-success) 14%, transparent)"
                  stroke="var(--pres-success)"
                  strokeWidth="1.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.85 }}
                />
                <text
                  x="225"
                  y="88"
                  textAnchor="middle"
                  fill="var(--pres-success)"
                  fontSize="14"
                  fontFamily="monospace"
                  fontWeight="700"
                >
                  plan
                </text>
                <text
                  x="225"
                  y="106"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="11"
                >
                  produce output
                </text>
              </svg>
            </div>
          </div>
        </FadeIn>
      </div>
    </SlideFrame>
  );
}
