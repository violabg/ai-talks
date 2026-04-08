"use client";

import { AudioOrb } from "@/components/presentation/audio-orb";
import { NarrationDialog } from "@/components/presentation/narration-dialog";
import {
  NarrationProvider,
  useNarrationContext,
} from "@/components/presentation/narration-provider";
import { NarrationToggle } from "@/components/presentation/narration-toggle";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { SpeechData } from "./use-narration";

export interface PresentationSlideComponent {
  key: string;
  component: React.ReactNode;
}

export function PresentationShell({
  slug,
  speechData,
  slides,
}: {
  slug: string;
  speechData: SpeechData | null;
  slides: PresentationSlideComponent[];
}) {
  const totalSlides = slides.length;
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSlide = Math.min(
    Math.max(0, Number(searchParams.get("slide") ?? 0) - 1),
    totalSlides - 1,
  );
  const [current, setCurrent] = useState(initialSlide);
  const [dir, setDir] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) return;
      setDir(index > current ? 1 : -1);
      setCurrent(index);
      const params = new URLSearchParams(window.location.search);
      params.set("slide", String(index + 1));
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [current, totalSlides, router],
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

  // Stop narration when component unmounts (user leaves page)
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const headerContent = (
    <div className="flex justify-between items-center px-6 py-4 text-[var(--pres-muted)] text-sm shrink-0">
      <Link
        href={`/articles/${slug}`}
        className="hover:text-[var(--pres-text)] transition-colors"
      >
        &larr; Torna all&apos;articolo
      </Link>
      <div className="flex items-center gap-3">
        {speechData && <NarrationToggle />}
        <span className="font-mono tabular-nums">
          {current + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );

  const slideContent = (
    <div
      className="flex flex-1 justify-center items-start md:items-center px-6 md:px-16 lg:px-24 min-h-0 overflow-scroll md:overflow-hidden"
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
          {slides[current].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  const progressBar = (
    <div className="px-6 py-4 shrink-0">
      <div className="flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i === current
                ? "bg-[var(--pres-accent)]"
                : i < current
                  ? "bg-[var(--pres-accent)]/35"
                  : "bg-[var(--pres-border)]"
            }`}
            aria-label={`Vai alla slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );

  if (speechData) {
    return (
      <NarrationProvider speechData={speechData} currentSlide={current}>
        <PresentationWithNarration>
          {headerContent}
          {slideContent}
          {progressBar}
          <AudioOrb />
          <NarrationDialog />
        </PresentationWithNarration>
      </NarrationProvider>
    );
  }

  return (
    <div className="z-50 fixed inset-0 flex flex-col bg-[var(--pres-bg)] text-[var(--pres-text)]">
      {headerContent}
      {slideContent}
      {progressBar}
    </div>
  );
}

/**
 * Inner component that lives inside NarrationProvider.
 * Captures any user click on the presentation and forwards it to `onUserGesture`,
 * which primes the iOS audio context on the first interaction after a silent restore.
 */
function PresentationWithNarration({ children }: { children: ReactNode }) {
  const { onUserGesture } = useNarrationContext();
  return (
    <div
      className="z-50 fixed inset-0 flex flex-col bg-[var(--pres-bg)] text-[var(--pres-text)]"
      onClick={onUserGesture}
    >
      {children}
    </div>
  );
}
