import { FadeIn, SlideFrame } from "./slide-shared";

export function Slide09DeletionTest() {
  return (
    <SlideFrame>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <FadeIn>
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.28em] text-[var(--pres-muted)]">
            il test decisivo
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--pres-accent)]/40 bg-[color-mix(in_srgb,var(--pres-accent)_6%,transparent)] px-8 py-10 sm:px-14 sm:py-14">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--pres-accent)]">
              deletion test
            </p>
            <p className="mt-6 text-balance font-display text-3xl leading-snug text-[var(--pres-text)] sm:text-5xl">
              Se cancello questo paragrafo,{" "}
              <span className="text-[var(--pres-accent)]">
                l&apos;agente continua
              </span>{" "}
              a fare la cosa giusta?
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-base text-[var(--pres-text-sub)]">
            <span className="rounded-full border border-[var(--pres-success)]/50 bg-[color-mix(in_srgb,var(--pres-success)_10%,transparent)] px-4 py-2 text-[var(--pres-success)]">
              sì → cancella
            </span>
            <span className="text-[var(--pres-muted)]">·</span>
            <span className="rounded-full border border-[var(--pres-warning)]/50 bg-[color-mix(in_srgb,var(--pres-warning)_10%,transparent)] px-4 py-2 text-[var(--pres-warning)]">
              forse → riscrivi come leading word
            </span>
            <span className="text-[var(--pres-muted)]">·</span>
            <span className="rounded-full border border-[var(--pres-danger)]/50 bg-[color-mix(in_srgb,var(--pres-danger)_10%,transparent)] px-4 py-2 text-[var(--pres-danger)]">
              no → tienilo, è procedura
            </span>
          </div>
        </FadeIn>
      </div>
    </SlideFrame>
  );
}
