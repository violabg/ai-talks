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
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#a78bfa]/20 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#a78bfa]"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Orchestrazione Multi-Modello
        </h1>
      </FadeIn>
      <FadeIn delay={0.4}>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[#94a3b8] md:text-2xl">
          Come costruire un sistema di agenti specializzati
          <br />
          con GitHub Copilot CLI
        </p>
      </FadeIn>
    </div>
  );
}
