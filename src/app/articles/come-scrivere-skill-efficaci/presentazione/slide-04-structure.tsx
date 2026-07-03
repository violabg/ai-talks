import { FadeIn, GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const columns = [
  {
    title: "Steps",
    body: ["Ordine", "Checkpoint", "Output atteso"],
    color: "var(--pres-blue)",
  },
  {
    title: "Reference",
    body: ["Template", "Definizioni", "Regole tecniche"],
    color: "var(--pres-accent)",
  },
];

export function Slide04Structure() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="03 / struttura"
        title="Una skill sana separa procedura e materiale di supporto"
        description="Gli step guidano l'azione. La reference aiuta solo quando serve eseguire bene uno step."
        titleClassName="text-2xl sm:text-4xl lg:text-5xl"
        descriptionClassName="text-sm sm:text-lg"
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        {columns.map((column, index) => (
          <FadeIn key={column.title} delay={0.15 + index * 0.15}>
            <GlowCard className="p-3 sm:p-7">
              <p
                className="font-display text-xl sm:text-3xl"
                style={{ color: column.color }}
              >
                {column.title}
              </p>
              <ul className="mt-3 space-y-2 sm:mt-8 sm:space-y-4">
                {column.body.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/55 px-2 py-2 text-xs text-[var(--pres-text-sub)] sm:px-4 sm:py-3 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </FadeIn>
        ))}
      </div>
    </SlideFrame>
  );
}
