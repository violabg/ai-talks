"use client";

import * as motion from "motion/react-client";
import { SlideFrame, SlideHeading } from "./slide-shared";

const ruleRows = [
  { pro: "sempre presente", con: "gonfia ogni prompt" },
  { pro: "nessun tool extra", con: "manutenzione manuale" },
  { pro: "latenza invariata", con: "contenuto invecchia" },
];

const toolRows = [
  { pro: "contenuto sempre aggiornato", con: "modello deve decidere quando" },
  { pro: "contesto leggero", con: "serve prompting forte" },
  { pro: "scala su più fonti", con: "più latenza per turno" },
];

export function Slide11RuleVsTool() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="decisione concreta"
        title="Istruzione nel prompt o tool che interroga?"
        description="Stesso contenuto, due percorsi, due tradeoff. Capire il loop serve a scegliere consapevolmente."
      />

      <div className="flex flex-1 items-stretch gap-6 px-4">
        <motion.div
          className="flex flex-col flex-1 bg-[color:var(--pres-bg-card)] p-6 border border-(--pres-border) rounded-3xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-2 font-mono text-(--pres-blue) text-sm uppercase tracking-widest">
            opzione A
          </div>
          <div className="mb-5 font-display font-bold text-2xl sm:text-3xl">
            rule file
          </div>

          <div className="flex flex-col flex-1 gap-2.5">
            {ruleRows.map((r, i) => (
              <motion.div
                key={r.pro}
                className="grid grid-cols-2 gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
              >
                <div className="bg-(--pres-success)/10 px-3 py-2 border border-(--pres-success)/40 rounded-lg text-(--pres-text) text-sm">
                  <span className="text-(--pres-success)">+ </span>
                  {r.pro}
                </div>
                <div className="bg-(--pres-danger)/10 px-3 py-2 border border-(--pres-danger)/40 rounded-lg text-(--pres-text) text-sm">
                  <span className="text-(--pres-danger)">− </span>
                  {r.con}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col flex-1 bg-[color:var(--pres-bg-card)] p-6 border border-(--pres-border) rounded-3xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="mb-2 font-mono text-(--pres-warning) text-sm uppercase tracking-widest">
            opzione B
          </div>
          <div className="mb-5 font-display font-bold text-2xl sm:text-3xl">
            tool dedicato
          </div>

          <div className="flex flex-col flex-1 gap-2.5">
            {toolRows.map((r, i) => (
              <motion.div
                key={r.pro}
                className="grid grid-cols-2 gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.12 }}
              >
                <div className="bg-(--pres-success)/10 px-3 py-2 border border-(--pres-success)/40 rounded-lg text-(--pres-text) text-sm">
                  <span className="text-(--pres-success)">+ </span>
                  {r.pro}
                </div>
                <div className="bg-(--pres-danger)/10 px-3 py-2 border border-(--pres-danger)/40 rounded-lg text-(--pres-text) text-sm">
                  <span className="text-(--pres-danger)">− </span>
                  {r.con}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
