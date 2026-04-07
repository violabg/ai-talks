import { FadeIn } from "./slide-shared";

export function TitleSlide() {
  const tags = [
    "GitHub Copilot",
    "CLI",
    "agenti AI",
    "orchestrazione",
    "multi-modello",
  ];

  return (
    <div className="text-center">
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[var(--pres-accent-dim)] px-3 py-1 rounded-full font-mono text-[var(--pres-accent)] text-xs uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h1 className="mb-6 font-bold text-4xl md:text-6xl leading-tight">
          Orchestrazione Multi-Modello
        </h1>
      </FadeIn>
      <FadeIn delay={0.4}>
        <p className="mx-auto max-w-2xl text-[var(--pres-muted)] text-xl md:text-2xl leading-relaxed">
          Come costruire un sistema di agenti specializzati
          <br />
          con GitHub Copilot CLI
        </p>
      </FadeIn>
    </div>
  );
}
