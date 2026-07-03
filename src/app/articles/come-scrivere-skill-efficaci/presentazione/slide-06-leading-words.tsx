import { FadeIn, SlideFrame, SlideHeading } from "./slide-shared";

const rows = [
  {
    weak: "Non lavorare tutto il layer prima dell'interfaccia",
    word: "vertical slice",
  },
  {
    weak: "Chiedi chiarimenti prima di pianificare",
    word: "grill phase",
  },
  {
    weak: "Controlla che lo step riceva input pulito",
    word: "handoff",
  },
  {
    weak: "Rimuovi testo che non cambia il comportamento",
    word: "deletion test",
  },
];

export function Slide06LeadingWords() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="03 · steering"
        title="Leading words: ganci comportamentali"
        description="Una parola-guida buona viene ripetuta dal modello. Comprime un intero modo di lavorare in un termine breve."
      />
      <div className="flex flex-1 flex-col gap-3">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-2 pb-2 font-mono text-sm uppercase tracking-[0.16em] text-[var(--pres-muted)]">
          <span>istruzione debole</span>
          <span className="opacity-0">→</span>
          <span className="text-right sm:text-left">leading word</span>
        </div>
        {rows.map((row, i) => (
          <FadeIn key={row.word} delay={0.15 + i * 0.1}>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-5 py-4">
              <p className="text-base text-[var(--pres-text-sub)] sm:text-lg">
                {row.weak}
              </p>
              <span
                aria-hidden
                className="font-mono text-lg text-[var(--pres-muted)] sm:text-xl"
              >
                →
              </span>
              <p className="text-right font-display text-xl text-[var(--pres-accent)] sm:text-left sm:text-2xl">
                {row.word}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SlideFrame>
  );
}
