import { FadeIn, ScaleIn } from "./slide-shared";

export function PrincipleSlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="mb-8 font-bold text-[var(--pres-muted)] text-3xl md:text-4xl">
          La Lezione Chiave
        </h2>
      </FadeIn>

      <ScaleIn delay={0.3}>
        <div className="bg-gradient-to-br from-[var(--pres-accent)]/15 to-[var(--pres-warning)]/15 px-6 py-12 border-[var(--pres-accent)] border-2 rounded-xl max-w-3xl">
          <p className="font-bold text-[var(--pres-text)] text-3xl md:text-5xl leading-tight">
            La qualità del codice
            <br />
            <span className="text-[var(--pres-accent)]">≠</span>
            <br />
            potenza del singolo modello
          </p>
        </div>
      </ScaleIn>

      <FadeIn delay={0.6} className="px-6 max-w-3xl text-center">
        <p className="mb-6 text-[var(--pres-text-sub)] text-lg">
          Dipende dalla{" "}
          <span className="font-semibold text-[var(--pres-text)]">
            struttura del processo
          </span>{" "}
          che lo circonda
        </p>
        <div className="space-y-3 text-[var(--pres-text-sub)]">
          <p className="text-base">✓ Separare generazione da revisione</p>
          <p className="text-base">✓ Affidarle a modelli diversi</p>
          <p className="text-base">✓ Introduce ridondanza strutturale</p>
        </div>
      </FadeIn>
    </div>
  );
}
