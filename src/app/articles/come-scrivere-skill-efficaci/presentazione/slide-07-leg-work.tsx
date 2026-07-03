import { FadeIn, GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const phases = [
  ["Grill", "solo domande", "var(--pres-blue)"],
  ["Plan", "solo piano", "var(--pres-success)"],
  ["Build", "solo esecuzione", "var(--pres-warning)"],
];

export function Slide07LegWork() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="06 / leg work"
        title="Se uno step e debole, nascondi il futuro"
        description="Una fase critica lavora meglio quando non vede gia l'obiettivo finale."
        titleClassName="text-2xl sm:text-4xl lg:text-5xl"
        descriptionClassName="text-sm sm:text-lg"
      />
      <div className="grid grid-cols-3 items-center gap-2 sm:gap-4">
        {phases.map(([title, text, color], index) => (
          <FadeIn key={title} delay={0.15 + index * 0.14}>
            <GlowCard className="relative p-3 text-center sm:p-7">
              <p className="font-display text-xl sm:text-4xl" style={{ color }}>
                {title}
              </p>
              <p className="mt-2 text-xs text-[var(--pres-text-sub)] sm:mt-4 sm:text-lg">
                {text}
              </p>
              {index < phases.length - 1 ? (
                <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 font-mono text-2xl text-[var(--pres-muted)] md:block">
                  -&gt;
                </span>
              ) : null}
            </GlowCard>
          </FadeIn>
        ))}
      </div>
    </SlideFrame>
  );
}
