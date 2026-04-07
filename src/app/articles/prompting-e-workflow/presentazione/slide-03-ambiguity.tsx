import { FadeIn, FadeInLeft } from "./slide-shared";

export function Slide03Ambiguity() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 font-bold text-[var(--pres-accent)] text-2xl md:text-4xl text-center">
          Ambiguo vs contestualizzato
        </h2>
      </FadeIn>
      <div className="gap-6 grid md:grid-cols-2">
        <FadeInLeft delay={0.2}>
          <div className="bg-[var(--pres-danger)]/10 p-6 border border-[var(--pres-danger)]/40 rounded-xl">
            <p className="mb-4 font-semibold text-[var(--pres-danger)]">Prompt ambiguo</p>
            <pre className="bg-[var(--pres-bg-surface)]/80 p-4 rounded-lg overflow-x-auto font-mono text-[var(--pres-text-sub)] text-xs">
              {"Aggiungi la validazione\nall'endpoint di registrazione"}
            </pre>
            <p className="mt-4 text-[var(--pres-danger-fg)] text-sm">
              Spazio per assunzioni non controllate.
            </p>
          </div>
        </FadeInLeft>

        <FadeInLeft delay={0.45}>
          <div className="bg-[var(--pres-success)]/10 p-6 border border-[var(--pres-success)]/40 rounded-xl">
            <p className="mb-4 font-semibold text-[var(--pres-success)]">
              Prompt contestualizzato
            </p>
            <pre className="bg-[var(--pres-bg-surface)]/80 p-4 rounded-lg overflow-x-auto font-mono text-[var(--pres-text-sub)] text-xs">
              {
                "POST /auth/register in src/routes/auth.ts\nUsa zod gia installata\nSchema email/password/name\nErrore 400 con formato coerente"
              }
            </pre>
            <p className="mt-4 text-[var(--pres-success-fg)] text-sm">
              Minor ambiguita, output allineato al progetto.
            </p>
          </div>
        </FadeInLeft>
      </div>
    </div>
  );
}
