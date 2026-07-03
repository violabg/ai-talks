import { FadeIn, SlideFrame, SlideHeading } from "./slide-shared";

const gauges = [
  {
    key: "trigger",
    label: "Trigger",
    color: "var(--pres-warning)",
    question: "Chi la invoca?",
    check: "user vs model, deciso esplicitamente",
  },
  {
    key: "structure",
    label: "Struttura",
    color: "var(--pres-blue)",
    question: "Serve sempre o solo a volte?",
    check: "step nel file, reference fuori se condizionale",
  },
  {
    key: "steering",
    label: "Steering",
    color: "var(--pres-success)",
    question: "Quale parola guida?",
    check: "leading word breve, ripetibile, concreta",
  },
  {
    key: "pruning",
    label: "Pruning",
    color: "var(--pres-danger)",
    question: "Cosa posso cancellare?",
    check: "deletion test superato, zero sediment",
  },
];

export function Slide10Cockpit() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="cockpit"
        title="Quattro domande, una skill sana"
        description="Se questi quattro punti sono chiari, la skill diventa più prevedibile, più piccola e più facile da mantenere."
      />
      <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
        {gauges.map((g, i) => (
          <FadeIn key={g.key} delay={0.15 + i * 0.1}>
            <div
              className="flex h-full items-start gap-5 rounded-3xl border bg-[var(--pres-bg-card)] p-6"
              style={{
                borderColor: `color-mix(in srgb, ${g.color} 45%, transparent)`,
              }}
            >
              <div className="h-14 w-14 shrink-0">
                <GaugeIcon color={g.color} />
              </div>
              <div className="flex-1">
                <p
                  className="font-mono text-sm uppercase tracking-[0.16em]"
                  style={{ color: g.color }}
                >
                  {g.label}
                </p>
                <p className="mt-1 font-display text-2xl text-[var(--pres-text)] sm:text-3xl">
                  {g.question}
                </p>
                <p className="mt-3 text-sm text-[var(--pres-text-sub)] sm:text-base">
                  {g.check}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.65}>
        <p className="mt-6 text-center font-mono text-sm text-[var(--pres-muted)] sm:text-base">
          Skill fatta bene ={" "}
          <span className="text-[var(--pres-accent)]">non sembra magica</span>.
          Sembra ovvia.
        </p>
      </FadeIn>
    </SlideFrame>
  );
}

function GaugeIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      width="56"
      height="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30"
        cy="30"
        r="26"
        fill="none"
        stroke="color-mix(in srgb, currentColor 18%, transparent)"
        strokeWidth="4"
        style={{ color }}
      />
      <path
        d="M 6 30 A 24 24 0 0 1 47 15"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="30" cy="30" r="4" fill={color} />
      <line
        x1="30"
        y1="30"
        x2="45"
        y2="18"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
