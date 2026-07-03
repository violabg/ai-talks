import { FadeIn, GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const problems = [
  ["Troppi file", "Skill disponibili, ma nessuna mappa condivisa."],
  ["Trigger vaghi", "Non si capisce quando una skill dovrebbe entrare."],
  ["Promesse fragili", "La skill sembra utile, ma il risultato non cambia."],
];

export function Slide02SkillHell() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="01 / problema"
        title="Skill hell: tanta potenza, poca leggibilita"
        description="Il problema non e avere poche skill. E non avere criteri per distinguere quelle buone da quelle rumorose."
        titleClassName="text-2xl sm:text-4xl lg:text-5xl"
        descriptionClassName="text-sm sm:text-lg"
      />
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {problems.map(([title, text], index) => (
          <FadeIn key={title} delay={0.15 + index * 0.12}>
            <GlowCard className="p-3 sm:p-5">
              <p className="font-display text-base text-[var(--pres-text)] sm:text-2xl">
                {title}
              </p>
              <p className="mt-3 text-xs leading-snug text-[var(--pres-text-sub)] sm:mt-5 sm:text-base sm:leading-relaxed">
                {text}
              </p>
            </GlowCard>
          </FadeIn>
        ))}
      </div>
    </SlideFrame>
  );
}
