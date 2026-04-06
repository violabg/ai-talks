import { FadeIn } from "./slide-shared";

export function StatementSlide() {
  return (
    <div className="text-center">
      <FadeIn delay={0.15}>
        <p className="font-bold text-3xl md:text-5xl leading-snug">
          Il modello migliore{" "}
          <span className="text-[#f87171]">non esiste.</span>
        </p>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-8 text-[#94a3b8] text-2xl md:text-4xl leading-snug">
          Esiste il modello giusto
          <br />
          <span className="text-[#34d399]">per il task giusto.</span>
        </p>
      </FadeIn>
    </div>
  );
}
