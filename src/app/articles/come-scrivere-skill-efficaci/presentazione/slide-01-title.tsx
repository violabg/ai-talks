import { FadeIn, SlideFrame } from "./slide-shared";

const pillars = ["Trigger", "Struttura", "Steering", "Pruning"];

export function Slide01Title() {
  return (
    <SlideFrame>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <FadeIn>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-[var(--pres-muted)]">
            Missing manual
          </p>
          <h1 className="mx-auto max-w-5xl text-balance font-display text-5xl tracking-tight text-[var(--pres-text)] sm:text-7xl">
            Come scrivere skill efficaci
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--pres-text-sub)]">
            Una rubric pratica per uscire dallo skill hell e progettare skill
            piccole, invocabili, guidate e mantenibili.
          </p>
        </FadeIn>
        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar} delay={0.35 + index * 0.1}>
              <div className="rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-4 font-mono text-sm text-[var(--pres-accent)]">
                {pillar}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
