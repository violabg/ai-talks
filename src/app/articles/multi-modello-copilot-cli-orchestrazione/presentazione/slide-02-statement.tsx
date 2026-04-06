import { FadeIn } from "./slide-shared";

export function StatementSlide() {
  return (
    <div className="text-center">
      <FadeIn delay={0.15}>
        <p className="text-3xl font-bold leading-snug md:text-5xl">
          Il modello migliore <span className="text-[#f87171]">non esiste.</span>
        </p>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-8 text-2xl leading-snug text-[#94a3b8] md:text-4xl">
          Esiste il modello giusto
          <br />
          <span className="text-[#34d399]">per il task giusto.</span>
        </p>
      </FadeIn>
    </div>
  );
}
