"use client";

import { motion } from "motion/react";

export function Slide11Closing() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(167,139,250,0.1) 0%, transparent 70%)",
        }}
      />

      <motion.p
        className="font-mono text-[#94a3b8] text-xs uppercase tracking-[0.2em] mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Il Dialogo Architettonico
      </motion.p>

      {/* Two sides */}
      <div className="flex items-center gap-4 sm:gap-10 mb-10 w-full max-w-2xl justify-center">
        {/* Developer */}
        <motion.div
          className="flex flex-col items-center gap-3 flex-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-[#38bdf8] bg-[rgba(56,189,248,0.1)] flex items-center justify-center">
            <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
              <circle cx="16" cy="10" r="5" stroke="#38bdf8" strokeWidth="1.5" />
              <path d="M6 28c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="font-bold text-[#38bdf8] text-sm">Sviluppatore</p>
          <div className="flex flex-col gap-1.5 text-center">
            <p className="text-[#e2e8f0] text-xs font-semibold">Visione</p>
            <p className="text-[#94a3b8] text-xs">Qualità</p>
            <p className="text-[#94a3b8] text-xs">Architettura</p>
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex-shrink-0"
        >
          <svg viewBox="0 0 80 30" width="80" height="30">
            <path d="M5 15 H 35 M 45 15 H 75" stroke="#a78bfa" strokeWidth="1.5" />
            <polygon points="32,10 42,15 32,20" fill="#a78bfa" />
            <polygon points="48,10 38,15 48,20" fill="#a78bfa" />
          </svg>
        </motion.div>

        {/* Agent */}
        <motion.div
          className="flex flex-col items-center gap-3 flex-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-[#a78bfa] bg-[rgba(167,139,250,0.1)] flex items-center justify-center">
            <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
              <rect x="6" y="8" width="20" height="16" rx="3" stroke="#a78bfa" strokeWidth="1.5" />
              <circle cx="11" cy="16" r="2" fill="#a78bfa" />
              <circle cx="21" cy="16" r="2" fill="#a78bfa" />
              <path d="M11 24v3M21 24v3" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="font-bold text-[#a78bfa] text-sm">Agente AI</p>
          <div className="flex flex-col gap-1.5 text-center">
            <p className="text-[#e2e8f0] text-xs font-semibold">Esecuzione</p>
            <p className="text-[#94a3b8] text-xs">Struttura</p>
            <p className="text-[#94a3b8] text-xs">Auto-correzione</p>
          </div>
        </motion.div>
      </div>

      {/* Central quote */}
      <motion.blockquote
        className="max-w-xl text-lg sm:text-2xl font-semibold leading-snug mb-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        Lo sviluppo Agent-First trasforma la programmazione in un{" "}
        <span className="text-[#a78bfa]">dialogo architettonico</span>.
      </motion.blockquote>

      <motion.p
        className="text-[#94a3b8] text-sm max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        Tu detti la visione e vigili sulla qualità. L&apos;agente esegue il lavoro meccanico e strutturale.
      </motion.p>
    </div>
  );
}
