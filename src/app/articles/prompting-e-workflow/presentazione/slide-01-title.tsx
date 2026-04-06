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
              className="bg-[#a78bfa]/15 px-3 py-1 border border-[#a78bfa]/35 rounded-full font-mono text-[#a78bfa] text-xs uppercase tracking-wider"
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
        <p className="mx-auto max-w-3xl text-[#94a3b8] text-lg md:text-2xl leading-relaxed">
          Come orchestrare agenti AI per task di ingegneria
          <br />
          in modo affidabile e verificabile.
        </p>
      </FadeIn>
      <FadeIn delay={0.55}>
        <div className="bg-[#1e293b]/65 mx-auto mt-10 px-6 py-5 border border-[#334155] rounded-xl max-w-3xl">
          <p className="font-mono text-[#94a3b8] text-sm">
            Prompt preciso -&gt; Workflow strutturato -&gt; Output prevedibile
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
