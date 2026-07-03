import { FadeIn, GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const modes = [
  {
    title: "User-invoked",
    gain: "Controllo e prevedibilita",
    cost: "Carico cognitivo sull'utente",
    color: "var(--pres-success)",
  },
  {
    title: "Model-invoked",
    gain: "Autonomia e discovery automatica",
    cost: "Contesto, ambiguita, eval",
    color: "var(--pres-warning)",
  },
];

export function Slide03Trigger() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="02 / trigger"
        title="Ogni skill paga un costo di invocazione"
        description="La scelta non e tecnica in astratto: decidi dove vuoi mettere il costo, nel contesto dell'agente o nella memoria dell'utente."
        titleClassName="text-2xl sm:text-4xl lg:text-5xl"
        descriptionClassName="text-sm sm:text-lg"
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        {modes.map((mode, index) => (
          <FadeIn key={mode.title} delay={0.15 + index * 0.16}>
            <GlowCard className="p-3 sm:p-5">
              <p
                className="font-display text-xl sm:text-3xl"
                style={{ color: mode.color }}
              >
                {mode.title}
              </p>
              <div className="mt-3 space-y-2 text-xs sm:mt-5 sm:space-y-3 sm:text-base">
                <p className="rounded-2xl bg-[var(--pres-bg)]/60 p-2 text-[var(--pres-text-sub)] sm:p-3">
                  <span className="font-mono text-[var(--pres-muted)]">
                    Gain
                  </span>
                  <br />
                  {mode.gain}
                </p>
                <p className="rounded-2xl bg-[var(--pres-bg)]/60 p-2 text-[var(--pres-text-sub)] sm:p-3">
                  <span className="font-mono text-[var(--pres-muted)]">
                    Cost
                  </span>
                  <br />
                  {mode.cost}
                </p>
              </div>
            </GlowCard>
          </FadeIn>
        ))}
      </div>
    </SlideFrame>
  );
}
