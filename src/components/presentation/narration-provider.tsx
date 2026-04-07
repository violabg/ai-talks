"use client";

import { createContext, use, type ReactNode } from "react";
import {
  useNarration,
  type NarrationState,
  type SpeechData,
} from "./use-narration";

const NarrationContext = createContext<NarrationState | null>(null);

export function useNarrationContext() {
  const ctx = use(NarrationContext);
  if (!ctx)
    throw new Error(
      "useNarrationContext must be used within NarrationProvider",
    );
  return ctx;
}

export function NarrationProvider({
  speechData,
  currentSlide,
  children,
}: {
  speechData: SpeechData | null;
  currentSlide: number;
  children: ReactNode;
}) {
  const narration = useNarration(speechData, currentSlide);

  return (
    <NarrationContext value={narration}>{children}</NarrationContext>
  );
}
