"use client";

import { FadeIn, SlideFrame, SlideHeading } from "./slide-shared";

const STRENGTH = [
  {
    label: "Caparbietà",
    body: "Non si stanca, non abbandona, riprova finché c'è un percorso.",
  },
  {
    label: "Velocità",
    body: "Ogni tentativo costa una frazione del tempo umano.",
  },
  {
    label: "Undo del tempo",
    body: "Può tornare indietro dopo ogni colpo sbagliato.",
  },
];

const BLINDNESS = [
  {
    label: "Stato interno opaco",
    body: "Non vede cosa sta succedendo dentro il sistema che modifica.",
  },
  {
    label: "Nessun metro",
    body: "Non sa se il suo tentativo è un progresso o una regressione.",
  },
  {
    label: "Iterazioni casuali",
    body: "Senza esito osservato, ogni ciclo è sostanzialmente cieco.",
  },
];

export function Slide04StrengthBlindness() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 px-6 py-6">
        <SlideHeading
          eyebrow="il paradosso"
          title="Ha tutto per convergere — tranne gli occhi"
          description="Il vantaggio strutturale degli agenti si annulla quando non possono valutare i propri tentativi."
        />

        <div className="grid flex-1 grid-cols-1 lg:grid-cols-2 gap-6 content-center mt-4">
          <FadeIn
            delay={0.2}
            className="flex flex-col gap-4 bg-(--pres-bg-card) p-6 border border-(--pres-success)/40 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-(--pres-success)/15 rounded-full w-10 h-10 font-mono text-(--pres-success)">
                +
              </div>
              <div className="font-display text-(--pres-text) text-xl sm:text-2xl">
                Vantaggio strutturale
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {STRENGTH.map((item) => (
                <li
                  key={item.label}
                  className="border-(--pres-success)/40 pl-4 border-l-2"
                >
                  <div className="font-mono text-(--pres-success) text-sm uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-(--pres-text-sub) text-sm sm:text-base leading-relaxed">
                    {item.body}
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn
            delay={0.4}
            className="flex flex-col gap-4 bg-(--pres-bg-card) p-6 border border-(--pres-danger)/40 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-(--pres-danger)/15 rounded-full w-10 h-10 font-mono text-(--pres-danger)">
                ×
              </div>
              <div className="font-display text-(--pres-text) text-xl sm:text-2xl">
                Limite di base
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {BLINDNESS.map((item) => (
                <li
                  key={item.label}
                  className="border-(--pres-danger)/40 pl-4 border-l-2"
                >
                  <div className="font-mono text-(--pres-danger) text-sm uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-(--pres-text-sub) text-sm sm:text-base leading-relaxed">
                    {item.body}
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </SlideFrame>
  );
}
