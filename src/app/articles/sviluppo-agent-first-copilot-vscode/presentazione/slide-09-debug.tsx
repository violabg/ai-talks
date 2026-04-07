"use client";

import { motion } from "motion/react";

const logLines = [
  { key: "action", value: '"call_tool"', color: "var(--pres-blue)", label: "L'agente invoca uno strumento" },
  { key: "tool_name", value: '"list_workspace_files"', color: "var(--pres-accent)", label: "Nome esatto dello strumento usato" },
  { key: "arguments", value: '{ "directory": "./src/components", "pattern": "*.tsx" }', color: "var(--pres-warning)", label: "Parametri: dove sta cercando" },
  { key: "status", value: '"success"', color: "var(--pres-success)", label: "Esito dell'operazione" },
  { key: "response", value: '["Button.tsx", "Header.tsx"]', color: "var(--pres-success)", label: "File effettivamente trovati" },
];

export function Slide09Debug() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Guardare <span className="text-[var(--pres-warning)]">Sotto il Cofano</span>
      </motion.h2>
      <motion.p
        className="text-[var(--pres-muted)] text-sm mb-8 text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Panel Output → GitHub Copilot Chat: ogni chiamata agli strumenti è ispezionabile
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl items-start">
        {/* Code block */}
        <motion.div
          className="flex-1 rounded-xl border border-[var(--pres-border)] overflow-hidden"
          style={{ background: "color-mix(in srgb, var(--pres-bg-surface) 80%, transparent)" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--pres-border)] bg-[var(--pres-bg-card)]/5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[var(--pres-danger)]/60" />
              <span className="w-3 h-3 rounded-full bg-[var(--pres-warning)]/60" />
              <span className="w-3 h-3 rounded-full bg-[var(--pres-success)]/60" />
            </div>
            <span className="text-[var(--pres-muted)] text-xs font-mono ml-2">tool_call.json</span>
          </div>
          <div className="p-4 font-mono text-xs leading-relaxed">
            <p className="text-[var(--pres-muted)]">{"{"}</p>
            {logLines.map((line, i) => (
              <motion.div
                key={line.key}
                className="ml-4"
                initial={{ opacity: 0, x: -10, backgroundColor: `color-mix(in srgb, ${line.color} 13%, transparent)` }}
                animate={{ opacity: 1, x: 0, backgroundColor: "transparent" }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.2 }}
              >
                <span className="text-[var(--pres-muted)]">&quot;</span>
                <span className="text-[var(--pres-text)]">{line.key}</span>
                <span className="text-[var(--pres-muted)]">&quot;: </span>
                <span style={{ color: line.color }}>{line.value}</span>
                {i < logLines.length - 1 && <span className="text-[var(--pres-muted)]">,</span>}
              </motion.div>
            ))}
            <p className="text-[var(--pres-muted)]">{"}"}</p>
          </div>
        </motion.div>

        {/* Annotations */}
        <div className="flex flex-col gap-3 sm:w-52 flex-shrink-0">
          {logLines.map((line, i) => (
            <motion.div
              key={line.key}
              className="flex items-start gap-2 rounded-lg px-3 py-2.5 border"
              style={{
                borderColor: `color-mix(in srgb, ${line.color} 19%, transparent)`,
                background: `color-mix(in srgb, ${line.color} 5%, transparent)`,
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.2 }}
            >
              <span
                className="text-xs font-mono font-bold flex-shrink-0 mt-0.5"
                style={{ color: line.color }}
              >
                {line.key}
              </span>
              <span className="text-[var(--pres-muted)] text-xs leading-snug">{line.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "255,255,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
