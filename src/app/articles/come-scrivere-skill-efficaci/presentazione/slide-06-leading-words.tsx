import { FadeIn, GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const words = [
  ["Vertical slice", "evita layer by layer"],
  ["Handoff", "output pulito tra step"],
  ["Checkpoint", "giudizio umano dove serve"],
  ["Deletion test", "taglia no-op"],
];

export function Slide06LeadingWords() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="05 / steering"
        title="Leading words: piccoli ganci per grandi comportamenti"
        description="Una parola-guida buona viene ripetuta dal modello e comprime un intero modo di lavorare."
        titleClassName="text-2xl sm:text-4xl lg:text-5xl"
        descriptionClassName="text-sm sm:text-lg"
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {words.map(([word, meaning], index) => (
          <FadeIn key={word} delay={0.15 + index * 0.1}>
            <GlowCard className="p-3 sm:p-5">
              <p className="font-display text-xl text-[var(--pres-accent)] sm:text-2xl">
                {word}
              </p>
              <p className="mt-2 text-sm text-[var(--pres-text-sub)] sm:mt-3 sm:text-lg">
                {meaning}
              </p>
            </GlowCard>
          </FadeIn>
        ))}
      </div>
    </SlideFrame>
  );
}
