import { FadeIn, GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const modes = [
  {
    title: "User-invoked",
    tag: "manuale",
    color: "var(--pres-blue)",
    gain: "Controllo. Prevedibile. Zero costo di contesto.",
    cost: "L'utente deve sapere quando invocarla.",
  },
  {
    title: "Model-invoked",
    tag: "automatica",
    color: "var(--pres-warning)",
    gain: "Discovery automatica. Meno carico umano.",
    cost: "Più contesto. Più ambiguità. Richiede eval.",
  },
];

export function Slide04Trigger() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="01 · trigger"
        title="Chi invoca la skill?"
        description="La domanda non è tecnica: dove vuoi pagare il costo — nel contesto dell'agente o nella memoria dell'utente?"
      />
      <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2">
        {modes.map((mode, i) => (
          <FadeIn key={mode.title} delay={0.15 + i * 0.15}>
            <GlowCard className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-baseline justify-between">
                <p
                  className="font-display text-3xl"
                  style={{ color: mode.color }}
                >
                  {mode.title}
                </p>
                <span className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--pres-muted)]">
                  {mode.tag}
                </span>
              </div>
              <div className="mt-5 flex flex-1 flex-col gap-3">
                <div
                  className="rounded-2xl border p-4"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--pres-success) 40%, transparent)",
                    background:
                      "color-mix(in srgb, var(--pres-success) 8%, transparent)",
                  }}
                >
                  <p className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--pres-success)]">
                    gain
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-[var(--pres-text)]">
                    {mode.gain}
                  </p>
                </div>
                <div
                  className="rounded-2xl border p-4"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--pres-danger) 40%, transparent)",
                    background:
                      "color-mix(in srgb, var(--pres-danger) 8%, transparent)",
                  }}
                >
                  <p className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--pres-danger)]">
                    cost
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-[var(--pres-text)]">
                    {mode.cost}
                  </p>
                </div>
              </div>
            </GlowCard>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.6}>
        <p className="mt-6 text-center font-mono text-sm text-[var(--pres-muted)] sm:text-base">
          <span className="text-[var(--pres-accent)]">Regola:</span> la
          strategia di trigger deve essere{" "}
          <span className="text-[var(--pres-text)]">esplicita</span>. Una skill
          senza strategia diventa presto rumore.
        </p>
      </FadeIn>
    </SlideFrame>
  );
}
