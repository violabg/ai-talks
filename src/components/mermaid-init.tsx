"use client";

import { useEffect } from "react";

type MermaidApi = {
  initialize: (config: Record<string, unknown>) => void;
  contentLoaded: () => void;
  run?: (config?: { querySelector?: string }) => Promise<void> | void;
};

declare global {
  interface Window {
    mermaid?: MermaidApi;
  }
}

export function MermaidInit() {
  useEffect(() => {
    let attempts = 0;
    let timer: ReturnType<typeof setInterval> | undefined;

    const renderMermaid = () => {
      if (!window.mermaid) return false;

      window.mermaid.initialize({ startOnLoad: false });

      if (typeof window.mermaid.run === "function") {
        void window.mermaid.run({ querySelector: "pre.mermaid" });
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
  }, []);

  return null;
}
