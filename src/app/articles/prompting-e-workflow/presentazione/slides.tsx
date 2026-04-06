"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02Anatomy } from "./slide-02-anatomy";
import { Slide03Ambiguity } from "./slide-03-ambiguity";
import { Slide04Patterns } from "./slide-04-patterns";
import { Slide05StepByStep } from "./slide-05-step-by-step";
import { Slide06Workflow } from "./slide-06-workflow";
import { Slide07Checkpoint } from "./slide-07-checkpoint";
import { Slide08Isolation } from "./slide-08-isolation";
import { Slide09FeedbackLoop } from "./slide-09-feedback-loop";
import { Slide10Closing } from "./slide-10-closing";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = useMemo(
    () => [
      <Slide01Title key="title" />,
      <Slide02Anatomy key="anatomy" />,
      <Slide03Ambiguity key="ambiguity" />,
      <Slide04Patterns key="patterns" />,
      <Slide05StepByStep key="step-by-step" />,
      <Slide06Workflow key="workflow" />,
      <Slide07Checkpoint key="checkpoint" />,
      <Slide08Isolation key="isolation" />,
      <Slide09FeedbackLoop key="feedback-loop" />,
      <Slide10Closing key="closing" />,
    ],
    [],
  );

  const totalSlides = slides.length;
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) return;
      setDir(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current, totalSlides],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        prev();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div className="z-50 fixed inset-0 flex flex-col bg-[#0f172a] text-[#e2e8f0]">
      <div className="flex justify-between items-center px-6 py-4 text-[#94a3b8] text-sm shrink-0">
        <Link
          href={`/articles/${slug}`}
          className="hover:text-white transition-colors"
        >
          &larr; Torna all&apos;articolo
        </Link>
        <span className="font-mono tabular-nums">
          {current + 1} / {totalSlides}
        </span>
      </div>

      <div
        className="flex flex-1 justify-center items-center px-6 md:px-16 lg:px-24 overflow-hidden"
        onClick={(event) => {
          const x = event.clientX;
          const width = window.innerWidth;
          if (x > width * 0.6) next();
          else if (x < width * 0.4) prev();
        }}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? 220 : -220,
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (direction: number) => ({
                x: direction > 0 ? -220 : 220,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-6xl"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-6 py-4 shrink-0">
        <div className="flex gap-1.5">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i === current
                  ? "bg-[#a78bfa]"
                  : i < current
                    ? "bg-[#a78bfa]/35"
                    : "bg-[#334155]"
              }`}
              aria-label={`Vai alla slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
