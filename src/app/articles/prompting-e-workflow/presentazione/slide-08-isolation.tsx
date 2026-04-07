import { FadeIn, FadeInLeft } from "./slide-shared";

export function Slide08Isolation() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 font-bold text-[var(--pres-accent)] text-2xl md:text-4xl text-center">
          Context isolation tra step
        </h2>
      </FadeIn>

      <div className="gap-6 grid md:grid-cols-2">
        <FadeInLeft delay={0.2}>
          <div className="bg-[var(--pres-danger)]/12 p-6 border border-[var(--pres-danger)]/45 rounded-xl">
            <p className="mb-3 font-semibold text-[var(--pres-danger)]">
              Passa tutto a tutti
            </p>
            <div className="bg-[var(--pres-bg-surface)]/80 p-4 rounded-lg font-mono text-[var(--pres-text-sub)] text-xs">
              previous_conversations + research + plan + ...
            </div>
            <ul className="space-y-1 mt-4 text-[var(--pres-danger-fg)] text-sm">
              <li>context window saturo</li>
              <li>degrada la qualita delle risposte</li>
            </ul>
          </div>
        </FadeInLeft>

        <FadeInLeft delay={0.45}>
          <div className="bg-[var(--pres-success)]/12 p-6 border border-[var(--pres-success)]/45 rounded-xl">
            <p className="mb-3 font-semibold text-[var(--pres-success)]">
              Passa solo input rilevante
            </p>
            <div className="bg-[var(--pres-bg-surface)]/80 p-4 rounded-lg font-mono text-[var(--pres-text-sub)] text-xs">
              PLAN.md + RESEARCH.md + task corrente
            </div>
            <ul className="space-y-1 mt-4 text-[var(--pres-success-fg)] text-sm">
              <li>focus sul compito attuale</li>
              <li>meno rumore, maggiore affidabilita</li>
            </ul>
          </div>
        </FadeInLeft>
      </div>
    </div>
  );
}
