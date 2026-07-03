import { FadeIn, SlideFrame, SlideHeading } from "./slide-shared";

const failures = [
  {
    title: "DRY",
    color: "var(--pres-blue)",
    tag: "duplicazione",
    body: "Template, regole o definizioni ripetute prima o poi divergono. Una sola casa per ogni pezzo di reference.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none">
        <rect
          x="6"
          y="6"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="18"
          y="18"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.55"
        />
      </svg>
    ),
  },
  {
    title: "Sediment",
    color: "var(--pres-warning)",
    tag: "materiale accumulato",
    body: "Istruzioni aggiunte da persone diverse senza riorganizzare. Note storiche, eccezioni, regole stale che non guidano più.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none">
        <path
          d="M6 12 h28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 20 h28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M6 28 h28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    title: "No-op",
    color: "var(--pres-danger)",
    tag: "sembra utile, non lo è",
    body: "Frasi ragionevoli che non cambiano l'output. Rumore che compete con le istruzioni davvero importanti.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="2" />
        <path
          d="M11 11 L 29 29"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function Slide08Pruning() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="05 · pruning"
        title="Tre failure mode da tagliare"
        description="Una skill grande non è automaticamente una skill completa. Spesso è solo una skill con sediment."
      />
      <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-3">
        {failures.map((f, i) => (
          <FadeIn key={f.title} delay={0.15 + i * 0.12}>
            <div
              className="flex h-full flex-col rounded-3xl border p-6"
              style={{
                borderColor: `color-mix(in srgb, ${f.color} 45%, transparent)`,
                background: `color-mix(in srgb, ${f.color} 6%, transparent)`,
              }}
            >
              <div className="flex items-start justify-between">
                <p className="font-display text-3xl" style={{ color: f.color }}>
                  {f.title}
                </p>
                <div style={{ color: f.color }}>{f.icon}</div>
              </div>
              <p
                className="mt-1 font-mono text-sm uppercase tracking-[0.14em]"
                style={{ color: f.color, opacity: 0.75 }}
              >
                {f.tag}
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--pres-text-sub)]">
                {f.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SlideFrame>
  );
}
