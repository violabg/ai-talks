import { FadeIn } from "./slide-shared";

export function TitleSlide() {
  const tags = [
    "GitHub Copilot",
    "CLI",
    "agenti AI",
    "multi-modello",
    "code review",
    "MCP",
  ];

  return (
    <div className="text-center">
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full font-mono text-[var(--pres-accent)] text-xs uppercase tracking-wider bg-[var(--pres-accent-dim)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h1 className="mb-6 font-bold text-5xl md:text-7xl leading-tight">
          Rubber Duck
        </h1>
      </FadeIn>
      <FadeIn delay={0.35}>
        <h2 className="mb-8 font-semibold text-[var(--pres-text-sub)] text-2xl md:text-4xl">
          Il revisore multi-modello
        </h2>
      </FadeIn>
      <FadeIn delay={0.5}>
        <p className="mx-auto max-w-2xl text-[var(--pres-muted)] text-lg md:text-xl leading-relaxed">
          Come la critica incrociata tra modelli di famiglie diverse riduce
          allucinazioni e sblocca loop di errore
        </p>
      </FadeIn>
    </div>
  );
}
