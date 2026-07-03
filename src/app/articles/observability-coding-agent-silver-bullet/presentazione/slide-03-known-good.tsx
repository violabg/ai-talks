"use client";

import * as motion from "motion/react-client";
import { SlideFrame, SlideHeading, fadeIn } from "./slide-shared";

const ITEMS = [
  {
    title: "Specifica chiara",
    body: "Cosa fare, quali vincoli non violare, quali comportamenti sono parte del contratto.",
  },
  {
    title: "Intuizioni non vincolanti",
    body: "Condividi lo spazio delle soluzioni che vedi, con linguaggio che suggerisce — non impone.",
  },
  {
    title: "Codebase pulita",
    body: "Un nucleo ben modellato tiene bilanciata la crescita organica del codice.",
  },
  {
    title: "Commenti sulle tensioni",
    body: "Non ripetere cosa fa il codice: spiega vincoli, invarianti, motivazioni.",
  },
];

export function Slide03KnownGood() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 px-6 py-6">
        <SlideHeading
          eyebrow="ciò che già funziona"
          title="Quattro leve valide — ma nessuna basta"
          description="Sono tutti consigli veri. Nessuno spiega però perché lo stesso agente, sullo stesso task, a volte riesce e a volte gira a vuoto."
        />
        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-5 content-center mt-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeIn(0.2 + i * 0.12)}
              className="flex flex-col gap-2 bg-(--pres-bg-card) p-6 border border-(--pres-border) rounded-2xl"
            >
              <div className="font-mono text-(--pres-accent) text-sm uppercase tracking-wider">
                0{i + 1}
              </div>
              <h3 className="font-display text-(--pres-text) text-xl sm:text-2xl leading-snug">
                {item.title}
              </h3>
              <p className="text-(--pres-text-sub) text-sm sm:text-base leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
