import { FadeIn } from "./slide-shared";

export function ProblemSlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="mb-8 font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Il Problema
        </h2>
      </FadeIn>

      <FadeIn delay={0.3} className="max-w-3xl">
        <div className="space-y-6">
          <div className="bg-[var(--pres-bg-card)] p-6 border border-[var(--pres-border)] rounded-lg">
            <p className="mb-3 font-semibold text-[var(--pres-text)] text-xl md:text-2xl">
              Un singolo modello ha punti ciechi strutturali
            </p>
            <p className="text-[var(--pres-text-sub)] text-lg">
              Tende a commettere certi tipi di errori in modo sistematico
            </p>
          </div>

          <div className="bg-[var(--pres-bg-card)] p-6 border border-[var(--pres-border)] rounded-lg">
            <p className="mb-3 font-semibold text-[var(--pres-text)] text-xl md:text-2xl">
              Test compiacenti
            </p>
            <p className="text-[var(--pres-text-sub)] text-lg">
              Scritti per adattarsi al codice sbagliato, non per verificare la
              correttezza
            </p>
          </div>

          <div className="bg-[var(--pres-bg-card)] p-6 border border-[var(--pres-border)] rounded-lg">
            <p className="mb-3 font-semibold text-[var(--pres-text)] text-xl md:text-2xl">
              Loop di errore
            </p>
            <p className="text-[var(--pres-text-sub)] text-lg">
              Difficile uscirne da solo quando bloccato
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
