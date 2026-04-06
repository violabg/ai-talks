"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TitleSlide } from "./slide-01-title";
import { StatementSlide } from "./slide-02-statement";
import { ComparisonSlide } from "./slide-03-comparison";
import { ModelRolesSlide } from "./slide-04-model-roles";
import { OrchestrationFlowSlide } from "./slide-05-orchestration-flow";
import { FleetSlide } from "./slide-06-fleet";
import { AdversarialSlide } from "./slide-07-adversarial";
import { PlanningSlide } from "./slide-08-planning";
import { ClosingSlide } from "./slide-09-closing";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = useMemo(
    () => [
      <TitleSlide key="title" />,
      <StatementSlide key="statement" />,
      <ComparisonSlide key="comparison" />,
      <ModelRolesSlide key="roles" />,
      <OrchestrationFlowSlide key="flow" />,
      <FleetSlide key="fleet" />,
      <AdversarialSlide key="adversarial" />,
      <PlanningSlide key="planning" />,
      <ClosingSlide key="closing" />,
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
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0f172a] text-[#e2e8f0]">
      <div className="flex shrink-0 items-center justify-between px-6 py-4 text-sm text-[#94a3b8]">
        <Link
          href={`/articles/${slug}`}
          className="transition-colors hover:text-white"
        >
          &larr; Torna all&apos;articolo
        </Link>
        <span className="font-mono tabular-nums">
          {current + 1} / {totalSlides}
        </span>
      </div>

      <div
        className="flex flex-1 items-center justify-center overflow-hidden px-6 md:px-16 lg:px-24"
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
                x: direction > 0 ? 200 : -200,
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (direction: number) => ({
                x: direction > 0 ? -200 : 200,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-5xl"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="shrink-0 px-6 py-4">
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
                    ? "bg-[#a78bfa]/40"
                    : "bg-[#334155]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
