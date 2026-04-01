"use client";

import { cn } from "@/lib/utils";
import type { ArticleSection } from "@/types/article";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type ArticleTocProps = {
  sections: ArticleSection[];
};

export function ArticleToc({ sections }: ArticleTocProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (sections.length === 0) {
      return;
    }

    const updateFromHash = () => {
      const currentHash = decodeURIComponent(
        window.location.hash.replace(/^#/, ""),
      );

      if (currentHash) {
        setActiveId(currentHash);
      }
    };

    const headingElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    updateFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio ||
              firstEntry.boundingClientRect.top -
                secondEntry.boundingClientRect.top,
          );

        if (visibleEntries[0]?.target.id) {
          setActiveId(visibleEntries[0].target.id);
          return;
        }

        const closestSectionAboveFold = headingElements
          .filter((element) => element.getBoundingClientRect().top <= 120)
          .at(-1);

        if (closestSectionAboveFold) {
          setActiveId(closestSectionAboveFold.id);
        }
      },
      {
        rootMargin: "-88px 0px -55% 0px",
        threshold: [0, 0.2, 0.5, 1],
      },
    );

    headingElements.forEach((element) => observer.observe(element));
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [sections]);

  if (sections.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="In questa pagina"
      className="bg-background/60 dark:bg-card/60 backdrop-blur-md p-5 border border-border/60 dark:border-primary/15 rounded-xl shadow-sm lg:max-h-[calc(100lvh-var(--header-height)-4rem)] overflow-y-auto"
    >
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        In questa pagina
      </p>

      <ul
        className="flex flex-col gap-1.5"
        onMouseLeave={() => setHoveredId(null)}
      >
        {sections.map((section) => {
          const isActive = section.id === activeId;
          const highlighted =
            hoveredId === section.id || (!hoveredId && isActive);

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onMouseEnter={() => setHoveredId(section.id)}
                className={cn(
                  "relative flex px-3 py-2 rounded-lg font-sans text-xs leading-snug transition-colors duration-150",
                  highlighted ? "text-foreground" : "text-muted-foreground",
                )}
                aria-current={isActive ? "location" : undefined}
              >
                {highlighted && (
                  <motion.div
                    layoutId="toc-indicator"
                    className="absolute inset-0 rounded-lg bg-primary/8 shadow-[inset_2px_0_0_var(--primary)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                  />
                )}
                <span className="relative z-10 text-balance">
                  {section.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
