"use client";

import { motion } from "motion/react";

export function Slide02Paradigm() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 60%, rgba(167,139,250,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Before label */}
      <motion.div
        className="flex items-center gap-3 mb-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="font-mono text-[#94a3b8] text-sm line-through opacity-60">Prima</span>
        <span className="text-[#f87171] font-mono text-sm">Completamento automatico · riga per riga</span>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="mb-10"
      >
        <svg viewBox="0 0 40 60" width="40" height="60">
          <line x1="20" y1="0" x2="20" y2="45" stroke="#334155" strokeWidth="2" />
          <polygon points="10,38 20,58 30,38" fill="#a78bfa" />
        </svg>
      </motion.div>

      {/* Main statement */}
      <motion.h2
        className="font-bold text-3xl sm:text-5xl leading-tight tracking-tight max-w-2xl mb-6"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        L&apos;IA come{" "}
        <span className="text-[#a78bfa]">collaboratore autonomo</span>
      </motion.h2>

      <motion.p
        className="text-[#94a3b8] text-lg max-w-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        Ragiona sulle architetture. Pianifica interventi multi-file.
        Usa strumenti di sistema. Corregge i propri errori.
      </motion.p>
    </div>
  );
}
