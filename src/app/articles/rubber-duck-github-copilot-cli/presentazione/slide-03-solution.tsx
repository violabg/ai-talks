import { FadeIn, FadeInLeft, FadeInRight } from "./slide-shared";

export function SolutionSlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          La Soluzione: Critica Incrociata
        </h2>
      </FadeIn>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 px-6 w-full max-w-5xl">
        {/* Single Model - Wrong */}
        <FadeInLeft delay={0.3}>
          <div className="bg-[var(--pres-danger-dim)] p-8 border-[var(--pres-danger)] border-2 rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <div className="text-5xl">❌</div>
            </div>
            <h3 className="mb-3 font-semibold text-[var(--pres-text)] text-xl text-center">
              Singolo Modello
            </h3>
            <div className="space-y-2 text-[var(--pres-text-sub)] text-center">
              <p>• Punti ciechi</p>
              <p>• Errori sistematici</p>
              <p>• Test compiacenti</p>
              <p>• Loop bloccati</p>
            </div>
          </div>
        </FadeInLeft>

        {/* Dual Model - Right */}
        <FadeInRight delay={0.3}>
          <div className="bg-[var(--pres-success-dim)] p-8 border-[var(--pres-success)] border-2 rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <div className="text-5xl">✓</div>
            </div>
            <h3 className="mb-3 font-semibold text-[var(--pres-text)] text-xl text-center">
              Due Modelli Diversi
            </h3>
            <div className="space-y-2 text-[var(--pres-text-sub)] text-center">
              <p>• Ridondanza</p>
              <p>• Errori intercettati</p>
              <p>• Validazione critica</p>
              <p>• Autogenerazione</p>
            </div>
          </div>
        </FadeInRight>
      </div>

      <FadeIn delay={0.6} className="max-w-3xl text-center">
        <p className="text-[var(--pres-muted)] text-lg">
          È statisticamente improbabile che due modelli con architetture e dati
          di addestramento distinti commettano lo{" "}
          <span className="font-semibold text-[var(--pres-text)]">
            stesso errore logico
          </span>
        </p>
      </FadeIn>
    </div>
  );
}
