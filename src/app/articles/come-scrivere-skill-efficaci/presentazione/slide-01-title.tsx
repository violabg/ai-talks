import { FadeIn, PILLARS, SlideFrame } from "./slide-shared";

export function Slide01Title() {
  return (
    <SlideFrame>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <FadeIn>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.28em] text-[var(--pres-muted)]">
            skill design · rubric
          </p>
          <h1 className="mx-auto max-w-5xl text-balance font-display text-5xl tracking-tight text-[var(--pres-text)] sm:text-7xl">
            Skill che funzionano
          </h1>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--pres-text-sub)]">
            Una skill non è un prompt più lungo. È un piccolo{" "}
            <span className="text-[var(--pres-accent)]">sistema operativo</span>
            : decide quando entrare, cosa caricare e cosa tacere.
          </p>
        </FadeIn>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {PILLARS.map((pillar, index) => (
            <FadeIn key={pillar} delay={0.32 + index * 0.08}>
              <div className="rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-5 py-2 font-mono text-sm uppercase tracking-[0.18em] text-[var(--pres-accent)]">
                {pillar}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
