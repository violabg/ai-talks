"use client";

import { cn } from "@/lib/utils";
import type { ArticleSection } from "@/types/article";
import { useEffect, useState } from "react";

type ArticleTocProps = {
  sections: ArticleSection[];
};

export function ArticleToc({ sections }: ArticleTocProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

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
      className="bg-card/85 supports-backdrop-filter:bg-card/75 shadow-[0_24px_60px_-48px_color-mix(in_oklch,var(--foreground)_35%,transparent)] backdrop-blur-sm p-5 border border-border/80 rounded-xl"
    >
      <p className="mb-4 font-sans font-medium text-foreground text-sm uppercase tracking-[0.18em]">
        In questa pagina
      </p>

      <ul className="flex flex-col gap-1.5">
        {sections.map((section) => {
          const isActive = section.id === activeId;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "relative flex px-3 py-2 rounded-lg font-sans text-sm leading-snug transition-all duration-150",
                  isActive
                    ? "bg-primary/8 text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
                aria-current={isActive ? "location" : undefined}
              >
                <span
                  className={cn(
                    "top-2.5 bottom-2.5 left-0 absolute rounded-full w-px transition-colors duration-150",
                    isActive ? "bg-primary" : "bg-transparent",
                  )}
                  aria-hidden="true"
                />
                <span className="text-balance">{section.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
