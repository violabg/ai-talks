import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function ThreeMomentsSlide() {
  const moments = [
    {
      title: "Revisione della Pianificazione",
      description: "Prima della scrittura dei file",
      icon: "📋",
      delay: 0.2,
    },
    {
      title: "Validazione dei Test",
      description: "Rileva test compiacenti prima dell'esecuzione",
      icon: "✓",
      delay: 0.4,
    },
    {
      title: "Recupero dai Loop",
      description: "Sblocca quando l'agente è bloccato",
      icon: "🔓",
      delay: 0.6,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Tre Momenti Critici
        </h2>
        <p className="mt-3 text-[var(--pres-text-sub)] text-lg">
          Quando Rubber Duck interviene automaticamente
        </p>
      </FadeIn>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-3 px-6 w-full max-w-5xl">
        {moments.map((moment) => (
          <motion.div
            key={moment.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: moment.delay }}
            className="bg-[var(--pres-bg-card)] p-6 border border-[var(--pres-border)] rounded-lg text-center"
          >
            <div className="mb-4 text-5xl">{moment.icon}</div>
            <h3 className="mb-2 font-bold text-[var(--pres-text)] text-lg">
              {moment.title}
            </h3>
            <p className="text-[var(--pres-text-sub)] text-sm">
              {moment.description}
            </p>
          </motion.div>
        ))}
      </div>

      <FadeIn delay={0.9} className="max-w-3xl text-center">
        <p className="text-[var(--pres-muted)] text-base">
          Nessuno di questi interventi blocca il flusso di esecuzione — la
          revisione avviene in parallelo
        </p>
      </FadeIn>
    </div>
  );
}
