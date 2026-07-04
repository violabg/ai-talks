"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type MermaidApi = {
  initialize: (config: Record<string, unknown>) => void;
  contentLoaded: () => void;
  run?: (config?: {
    querySelector?: string;
    nodes?: ArrayLike<Element>;
  }) => Promise<void> | void;
};

declare global {
  interface Window {
    mermaid?: MermaidApi;
  }
}

export function MermaidInit() {
  const pathname = usePathname();

  useEffect(() => {
    let attempts = 0;
    let timer: ReturnType<typeof setInterval> | undefined;

    const renderMermaid = () => {
      if (!window.mermaid) return false;

      const nodes = document.querySelectorAll<HTMLElement>(
        "pre.mermaid:not([data-processed])",
      );
      if (nodes.length === 0) return true;

      window.mermaid.initialize({ startOnLoad: false });

      if (typeof window.mermaid.run === "function") {
        void window.mermaid.run({ nodes });
      } else {
        window.mermaid.contentLoaded();
      }

      return true;
    };

    if (!renderMermaid()) {
      timer = setInterval(() => {
        attempts += 1;
        if (renderMermaid() || attempts > 120) {
          if (timer) clearInterval(timer);
        }
      }, 50);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [pathname]);

  return null;
}
