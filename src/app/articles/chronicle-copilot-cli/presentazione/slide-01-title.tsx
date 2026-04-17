"use client";

import * as motion from "motion/react-client";
import { CHRONICLE_TAGS, SlideFrame } from "./slide-shared";

const sessions = [
  { y: 50, delay: 0.2, label: "sessione lun" },
  { y: 120, delay: 0.35, label: "sessione mer" },
  { y: 190, delay: 0.5, label: "sessione ven" },
];

export function Slide01Title() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 justify-center items-center px-6 text-center">
        <motion.div
          className="mb-8 w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
        >
          <svg viewBox="0 0 820 260" className="w-full">
            <defs>
              <linearGradient id="chronicle-flow" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--pres-blue)" />
                <stop offset="100%" stopColor="var(--pres-accent)" />
              </linearGradient>
            </defs>

            {sessions.map((s) => (
              <motion.g
                key={s.label}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: s.delay }}
              >
                <rect
                  x="40"
                  y={s.y}
                  width="200"
                  height="44"
                  rx="14"
                  fill="color-mix(in srgb, var(--pres-blue) 10%, transparent)"
                  stroke="var(--pres-blue)"
                  strokeWidth="1.8"
                />
                <text
                  x="140"
                  y={s.y + 28}
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="15"
                  fontFamily="monospace"
                >
                  {s.label}
                </text>
                <motion.path
                  d={`M240 ${s.y + 22}C320 ${s.y + 22} 360 130 470 130`}
                  fill="none"
                  stroke="url(#chronicle-flow)"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.7, delay: s.delay + 0.2 }}
                />
              </motion.g>
            ))}

            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{ transformOrigin: "610px 130px" }}
            >
              <rect
                x="470"
                y="62"
                width="300"
                height="136"
                rx="26"
                fill="color-mix(in srgb, var(--pres-accent) 12%, transparent)"
                stroke="var(--pres-accent)"
                strokeWidth="2"
              />
              <text
                x="620"
                y="98"
                textAnchor="middle"
                fill="var(--pres-accent)"
                fontSize="13"
                fontFamily="monospace"
              >
                ~/copilot · SQLITE
              </text>
              <text
                x="620"
                y="140"
                textAnchor="middle"
                fill="var(--pres-text)"
                fontSize="34"
                fontWeight="700"
              >
                chronicle
              </text>
              <text
                x="620"
                y="172"
                textAnchor="middle"
                fill="var(--pres-text-sub)"
                fontSize="14"
              >
                memoria persistente locale
              </text>
            </motion.g>
          </svg>
        </motion.div>

        <motion.h1
          className="max-w-5xl font-display text-4xl sm:text-5xl lg:text-6xl text-balance tracking-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          /chronicle: la
          <span className="text-[var(--pres-accent)]"> memoria persistente</span>
          {" "}di Copilot CLI
        </motion.h1>

        <motion.p
          className="mt-5 max-w-3xl text-[var(--pres-text-sub)] text-base sm:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
        >
          Un database SQLite locale che trasforma la storia delle tue sessioni
          in suggerimenti concreti per lavorare meglio.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
        >
          {CHRONICLE_TAGS.map((tag) => (
            <span
              key={tag}
              className="bg-[var(--pres-bg-surface)] px-3 py-1.5 border border-[var(--pres-border)] rounded-full font-mono text-[var(--pres-muted)] text-sm uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </SlideFrame>
  );
}
