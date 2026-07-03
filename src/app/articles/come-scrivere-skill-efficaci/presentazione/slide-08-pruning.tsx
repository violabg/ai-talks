import { FadeIn, GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const failures = [
  ["DRY rotto", "La stessa regola vive in tre posti."],
  ["Sediment", "Note storiche e stale restano nel main file."],
  ["No-op", "Il testo suona utile, ma cancellarlo non cambia nulla."],
];

export function Slide08Pruning() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="07 / pruning"
        title="Una skill lunga spesso sta nascondendo sediment"
        description="Tagliare non e estetica: e ridurre rumore competitivo dentro il contesto."
        titleClassName="text-2xl sm:text-4xl lg:text-5xl"
        descriptionClassName="text-sm sm:text-lg"
      />
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {failures.map(([title, text], index) => (
          <FadeIn key={title} delay={0.15 + index * 0.12}>
            <GlowCard className="p-3 sm:p-5">
              <p className="font-display text-lg text-[var(--pres-danger)] sm:text-2xl">
                {title}
              </p>
              <p className="mt-2 text-xs leading-snug text-[var(--pres-text-sub)] sm:mt-4 sm:text-base sm:leading-relaxed">
                {text}
              </p>
            </GlowCard>
          </FadeIn>
        ))}
      </div>
    </SlideFrame>
  );
}
