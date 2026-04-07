"use client";

import { motion } from "motion/react";

export function Slide01Title() {
  const tags = ["GitHub Copilot", "VS Code", "agenti AI", "agent-first", "workflow"];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(167,139,250,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Eyebrow */}
      <motion.p
        className="font-mono text-[#a78bfa] text-xs uppercase tracking-[0.2em] mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Masterclass · GitHub Copilot &amp; VS Code
      </motion.p>

      {/* Title */}
      <motion.h1
        className="font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-4 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        L&apos;Era dello Sviluppo{" "}
        <span className="text-[#a78bfa]">Agent-First</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-[#94a3b8] text-lg sm:text-xl max-w-xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Architettura, ciclo operativo e strumenti per programmare con un agente autonomo
      </motion.p>

      {/* Tags */}
      <motion.div
        className="flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            className="px-3 py-1 rounded-full border border-[#334155] bg-[rgba(167,139,250,0.08)] text-[#94a3b8] text-xs font-mono"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.9 + i * 0.08 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
