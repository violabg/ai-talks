import { FadeIn, FadeInLeft } from "./slide-shared";

export function Slide03Ambiguity() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 font-bold text-[#a78bfa] text-2xl md:text-4xl text-center">
          Ambiguo vs contestualizzato
        </h2>
      </FadeIn>
      <div className="gap-6 grid md:grid-cols-2">
        <FadeInLeft delay={0.2}>
          <div className="bg-[#f87171]/10 p-6 border border-[#f87171]/40 rounded-xl">
            <p className="mb-4 font-semibold text-[#f87171]">Prompt ambiguo</p>
            <pre className="bg-[#1e293b]/80 p-4 rounded-lg overflow-x-auto font-mono text-[#cbd5e1] text-xs">
              {"Aggiungi la validazione\nall'endpoint di registrazione"}
            </pre>
            <p className="mt-4 text-[#fca5a5] text-sm">
              Spazio per assunzioni non controllate.
            </p>
          </div>
        </FadeInLeft>

        <FadeInLeft delay={0.45}>
          <div className="bg-[#34d399]/10 p-6 border border-[#34d399]/40 rounded-xl">
            <p className="mb-4 font-semibold text-[#34d399]">
              Prompt contestualizzato
            </p>
            <pre className="bg-[#1e293b]/80 p-4 rounded-lg overflow-x-auto font-mono text-[#cbd5e1] text-xs">
              {
                "POST /auth/register in src/routes/auth.ts\nUsa zod gia installata\nSchema email/password/name\nErrore 400 con formato coerente"
              }
            </pre>
            <p className="mt-4 text-[#86efac] text-sm">
              Minor ambiguita, output allineato al progetto.
            </p>
          </div>
        </FadeInLeft>
      </div>
    </div>
  );
}
