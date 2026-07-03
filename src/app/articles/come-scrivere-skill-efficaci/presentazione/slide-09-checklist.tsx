import { FadeIn, GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const checks = [
  ["Trigger", "Chi invoca? Quanto contesto costa?"],
  ["Structure", "Step e reference sono separati?"],
  ["Steering", "Le leading words guidano davvero?"],
  ["Pruning", "Cosa fallisce il deletion test?"],
];

export function Slide09Checklist() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="08 / checklist"
        title="La review di una skill sta in quattro domande"
        description="Una skill buona entra al momento giusto, fa una cosa chiara e resta abbastanza piccola da essere auditabile."
        titleClassName="text-2xl sm:text-4xl lg:text-5xl"
        descriptionClassName="text-sm sm:text-lg"
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {checks.map(([title, text], index) => (
          <FadeIn key={title} delay={0.15 + index * 0.1}>
            <GlowCard className="p-3 sm:p-5">
              <p className="font-display text-xl text-[var(--pres-accent)] sm:text-2xl">
                {title}
              </p>
              <p className="mt-2 text-sm text-[var(--pres-text-sub)] sm:mt-4 sm:text-lg">
                {text}
              </p>
            </GlowCard>
          </FadeIn>
        ))}
      </div>
    </SlideFrame>
  );
}
