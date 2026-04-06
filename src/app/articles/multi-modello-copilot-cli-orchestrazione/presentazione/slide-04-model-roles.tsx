import { FadeIn, MODEL_COLORS } from "./slide-shared";

export function ModelRolesSlide() {
  const roles = [
    {
      model: "Haiku",
      role: "Explore",
      desc: "Analisi struttura, lettura veloce",
      color: MODEL_COLORS.haiku,
    },
    {
      model: "Sonnet",
      role: "Plan",
      desc: "Pianificazione, decomposizione task",
      color: MODEL_COLORS.sonnet,
    },
    {
      model: "GPT-4",
      role: "Code",
      desc: "Generazione codice precisa",
      color: MODEL_COLORS.gpt4,
    },
    {
      model: "Opus",
      role: "Architect",
      desc: "Design, ragionamento complesso",
      color: MODEL_COLORS.opus,
    },
  ];

  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 text-center text-2xl font-bold text-[#a78bfa] md:text-4xl">
          Ogni modello ha un ruolo
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {roles.map((role, i) => (
          <FadeIn key={role.model} delay={0.2 + i * 0.15}>
            <div
              className="rounded-xl border p-5 md:p-6"
              style={{
                borderColor: `${role.color}40`,
                backgroundColor: `${role.color}08`,
              }}
            >
              <div className="mb-2 flex items-center gap-3">
                <svg viewBox="0 0 32 32" className="size-8 shrink-0">
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill={role.color}
                    fillOpacity="0.2"
                    stroke={role.color}
                    strokeWidth="2"
                  />
                  <text
                    x="16"
                    y="20"
                    textAnchor="middle"
                    fill={role.color}
                    fontSize="11"
                    fontWeight="bold"
                  >
                    {role.model.charAt(0)}
                  </text>
                </svg>
                <div>
                  <p className="font-bold" style={{ color: role.color }}>
                    {role.model}
                  </p>
                  <p className="text-xs text-[#94a3b8]">{role.role}</p>
                </div>
              </div>
              <p className="text-sm text-[#94a3b8]">{role.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.9}>
        <p className="mt-6 text-center text-sm italic text-[#94a3b8]">
          Non tutti i task richiedono il modello piu potente: un modello veloce
          e spesso la scelta migliore.
        </p>
      </FadeIn>
    </div>
  );
}
