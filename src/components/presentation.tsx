"use client";

import type { Slide } from "@/types/presentation";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -200 : 200,
    opacity: 0,
  }),
};

const slideTransition = { duration: 0.4, ease: "easeOut" as const };

export function Presentation({
  slides,
  slug,
}: {
  slides: Slide[];
  slug: string;
}) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current, slides.length],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0f172a] text-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 text-slate-400 text-sm">
        <Link
          href={`/articles/${slug}`}
          className="transition-colors hover:text-white"
        >
          &larr; Torna all&apos;articolo
        </Link>
        <span className="font-mono tabular-nums">
          {current + 1} / {slides.length}
        </span>
      </div>

      {/* Slide area */}
      <div
        className="flex flex-1 items-center justify-center overflow-hidden px-8 md:px-16 lg:px-24"
        onClick={(e) => {
          const x = e.clientX;
          const w = window.innerWidth;
          if (x > w * 0.6) next();
          else if (x < w * 0.4) prev();
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="w-full max-w-4xl"
          >
            {slide.type === "title" && <TitleSlide slide={slide} />}
            {slide.type === "section" && <SectionSlide slide={slide} />}
            {slide.type === "closing" && <ClosingSlide slide={slide} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation hints */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex w-16 items-center justify-center opacity-0 transition-opacity hover:opacity-100 md:w-24">
        {current > 0 && (
          <span className="text-2xl text-slate-600">&larr;</span>
        )}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex w-16 items-center justify-center opacity-0 transition-opacity hover:opacity-100 md:w-24">
        {current < slides.length - 1 && (
          <span className="text-2xl text-slate-600">&rarr;</span>
        )}
      </div>

      {/* Progress bar */}
      <div className="px-6 py-4">
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i === current
                  ? "bg-purple-500"
                  : i < current
                    ? "bg-purple-500/40"
                    : "bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TitleSlide({ slide }: { slide: Slide }) {
  return (
    <div className="text-center">
      {slide.tags && slide.tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {slide.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-purple-500/20 px-3 py-1 font-mono text-sm uppercase tracking-wider text-purple-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl"
        >
          {slide.subtitle}
        </motion.p>
      )}
    </div>
  );
}

function SectionSlide({ slide }: { slide: Slide }) {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-3xl font-bold text-purple-300 md:text-5xl"
      >
        {slide.title}
      </motion.h2>
      {slide.points && slide.points.length > 0 && (
        <ul className="space-y-5">
          {slide.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
              className="flex items-start gap-4 text-lg text-slate-200 md:text-xl"
            >
              <span className="mt-2 size-2 shrink-0 rounded-full bg-purple-500" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      )}
      {slide.code && (
        <motion.pre
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-8 overflow-x-auto rounded-lg border border-slate-700 bg-slate-800/80 p-5 font-mono text-sm text-slate-300"
        >
          {slide.code}
        </motion.pre>
      )}
      {slide.note && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-8 text-base italic text-slate-400"
        >
          {slide.note}
        </motion.p>
      )}
    </div>
  );
}

function ClosingSlide({ slide }: { slide: Slide }) {
  return (
    <div className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-bold md:text-5xl"
      >
        {slide.title}
      </motion.h2>
      {slide.points && slide.points.length > 0 && (
        <ul className="mx-auto max-w-2xl space-y-4">
          {slide.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.15, duration: 0.4 }}
              className="text-lg text-slate-200 md:text-xl"
            >
              {point}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}
