import { FadeIn } from "./slide-shared";

const principles = [
  {
    title: "Contesto esplicito",
    desc: "Non dare nulla per scontato",
    color: "#60a5fa",
  },
  {
    title: "Step verificabili",
    desc: "Ogni passo produce un artefatto controllabile",
    color: "#34d399",
  },
  {
    title: "Feedback deterministico",
    desc: "Test, typecheck, lint come oracoli",
    color: "#fbbf24",
  },
  {
    title: "Granularita giusta",
    desc: "Task piccoli, correggibili al primo giro",
    color: "#a78bfa",
  },
];

export function Slide10Closing() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-6 font-bold text-[#e2e8f0] text-3xl md:text-5xl text-center">
          Quattro principi operativi
        </h2>
      </FadeIn>
      <div className="gap-4 grid md:grid-cols-2 mx-auto max-w-5xl">
        {principles.map((principle, i) => (
          <FadeIn key={principle.title} delay={0.2 + i * 0.12}>
            <div
              className="p-5 border rounded-xl"
              style={{
                borderColor: `${principle.color}55`,
                backgroundColor: `${principle.color}14`,
              }}
            >
              <p className="font-semibold" style={{ color: principle.color }}>
                {principle.title}
              </p>
              <p className="mt-1 text-[#cbd5e1] text-sm">{principle.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.85}>
        <p className="mx-auto mt-8 max-w-3xl text-[#94a3b8] text-base md:text-lg text-center">
          Prompting efficace e workflow strutturato non sono cosmetica: sono
          ingegneria del processo.
        </p>
      </FadeIn>
    </div>
  );
}
