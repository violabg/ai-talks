import { FadeIn } from "./slide-shared";

export function Slide01Title() {
  const tags = ["prompt", "workflow", "agents", "engineering"];

  return (
    <div className="text-center">
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[var(--pres-accent)]/15 px-3 py-1 border border-[var(--pres-accent)]/35 rounded-full font-mono text-[var(--pres-accent)] text-xs uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.22}>
        <h1 className="mb-6 font-bold text-4xl md:text-6xl leading-tight">
          Prompting e Workflow
        </h1>
      </FadeIn>
      <FadeIn delay={0.36}>
        <p className="mx-auto max-w-3xl text-[var(--pres-muted)] text-lg md:text-2xl leading-relaxed">
          Come orchestrare agenti AI per task di ingegneria
          <br />
          in modo affidabile e verificabile.
        </p>
      </FadeIn>
      <FadeIn delay={0.55}>
        <div className="bg-[var(--pres-bg-surface)]/65 mx-auto mt-10 px-6 py-5 border border-[var(--pres-border)] rounded-xl max-w-3xl">
          <p className="font-mono text-[var(--pres-muted)] text-sm">
            Prompt preciso -&gt; Workflow strutturato -&gt; Output prevedibile
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
