import { FadeIn } from "./slide-shared";

export function ClosingSlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 h-full">
      <FadeIn delay={0.1} className="text-center">
        <div className="mb-8 text-6xl md:text-8xl">🦆</div>
      </FadeIn>

      <FadeIn delay={0.3} className="text-center">
        <h2 className="mb-6 font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Prova Rubber Duck
        </h2>
      </FadeIn>

      <FadeIn delay={0.5} className="px-6 max-w-3xl">
        <div className="space-y-4 bg-[var(--pres-accent)]/10 p-8 border-[var(--pres-accent)] border-2 rounded-lg">
          <p className="mb-4 font-semibold text-[var(--pres-text)] text-lg">
            Nella Copilot CLI:
          </p>
          <div className="bg-[var(--pres-bg)] px-4 py-3 border border-[var(--pres-border)] rounded font-mono text-sm">
            <p className="text-[var(--pres-muted)]">&gt; /experimental on</p>
          </div>
          <p className="text-[var(--pres-text-sub)] text-base">
            Poi usa la CLI normalmente. Rubber Duck interviene automaticamente
            quando rileva problemi critici.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.7} className="px-6 max-w-2xl text-center">
        <p className="text-[var(--pres-text-sub)] text-lg">
          Disponibile nella{" "}
          <span className="font-semibold text-[var(--pres-text)]">
            versione sperimentale
          </span>{" "}
          di GitHub Copilot CLI
        </p>
      </FadeIn>
    </div>
  );
}
