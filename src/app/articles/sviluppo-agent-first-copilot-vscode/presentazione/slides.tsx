"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02Paradigm } from "./slide-02-paradigm";
import { Slide03Pillars } from "./slide-03-pillars";
import { Slide04Cycle } from "./slide-04-cycle";
import { Slide05Autonomy } from "./slide-05-autonomy";
import { Slide06Safety } from "./slide-06-safety";
import { Slide07Context } from "./slide-07-context";
import { Slide08Environments } from "./slide-08-environments";
import { Slide09Debug } from "./slide-09-debug";
import { Slide10SelfHeal } from "./slide-10-selfheal";
import { Slide11Closing } from "./slide-11-closing";

const SLUG = "sviluppo-agent-first-copilot-vscode";

const slides = [
  { id: "title", component: Slide01Title },
  { id: "paradigm", component: Slide02Paradigm },
  { id: "pillars", component: Slide03Pillars },
  { id: "cycle", component: Slide04Cycle },
  { id: "autonomy", component: Slide05Autonomy },
  { id: "safety", component: Slide06Safety },
  { id: "context", component: Slide07Context },
  { id: "environments", component: Slide08Environments },
  { id: "debug", component: Slide09Debug },
  { id: "selfheal", component: Slide10SelfHeal },
  { id: "closing", component: Slide11Closing },
];

const TOTAL = slides.length;

export function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next >= TOTAL) return;
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const handleClick = (e: React.MouseEvent) => {
    const midX = window.innerWidth / 2;
    if (e.clientX >= midX) {
      next();
    } else {
      prev();
    }
  };

  const SlideComponent = slides[current]!.component;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-full select-none">
      {/* Back link */}
      <Link
        href={`/articles/${SLUG}`}
        className="absolute top-4 left-4 z-20 flex items-center gap-1.5 text-[#94a3b8] hover:text-[#e2e8f0] transition-colors text-xs font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        <span>←</span>
        <span>Torna all&apos;articolo</span>
      </Link>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-20 font-mono text-xs text-[#94a3b8]">
        {current + 1} / {TOTAL}
      </div>

      {/* Click area */}
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={handleClick}
        aria-label="Slide successiva"
      />

      {/* Slides */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slides[current]!.id}
            className="absolute inset-0"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e293b] z-20">
        <motion.div
          className="h-full bg-[#a78bfa]"
          animate={{ width: `${((current + 1) / TOTAL) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Navigation arrows (desktop) */}
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full text-[#94a3b8] hover:text-[#e2e8f0] transition-colors opacity-40 hover:opacity-100 hidden sm:flex items-center"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        disabled={current === 0}
        aria-label="Slide precedente"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full text-[#94a3b8] hover:text-[#e2e8f0] transition-colors opacity-40 hover:opacity-100 hidden sm:flex items-center"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        disabled={current === TOTAL - 1}
        aria-label="Slide successiva"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
