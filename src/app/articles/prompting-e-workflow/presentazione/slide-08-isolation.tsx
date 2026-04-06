import { FadeIn, FadeInLeft } from "./slide-shared";

export function Slide08Isolation() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 font-bold text-[#a78bfa] text-2xl md:text-4xl text-center">
          Context isolation tra step
        </h2>
      </FadeIn>

      <div className="gap-6 grid md:grid-cols-2">
        <FadeInLeft delay={0.2}>
          <div className="bg-[#f87171]/12 p-6 border border-[#f87171]/45 rounded-xl">
            <p className="mb-3 font-semibold text-[#f87171]">
              Passa tutto a tutti
            </p>
            <div className="bg-[#1e293b]/80 p-4 rounded-lg font-mono text-[#cbd5e1] text-xs">
              previous_conversations + research + plan + ...
            </div>
            <ul className="space-y-1 mt-4 text-[#fecaca] text-sm">
              <li>context window saturo</li>
              <li>degrada la qualita delle risposte</li>
            </ul>
          </div>
        </FadeInLeft>

        <FadeInLeft delay={0.45}>
          <div className="bg-[#34d399]/12 p-6 border border-[#34d399]/45 rounded-xl">
            <p className="mb-3 font-semibold text-[#34d399]">
              Passa solo input rilevante
            </p>
            <div className="bg-[#1e293b]/80 p-4 rounded-lg font-mono text-[#cbd5e1] text-xs">
              PLAN.md + RESEARCH.md + task corrente
            </div>
            <ul className="space-y-1 mt-4 text-[#bbf7d0] text-sm">
              <li>focus sul compito attuale</li>
              <li>meno rumore, maggiore affidabilita</li>
            </ul>
          </div>
        </FadeInLeft>
      </div>
    </div>
  );
}
