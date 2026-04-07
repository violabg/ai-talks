"use client";

import { Volume2, VolumeOff } from "lucide-react";
import { useNarrationContext } from "./narration-provider";

export function NarrationToggle() {
  const { enabled, playing, toggleEnabled } = useNarrationContext();

  return (
    <button
      type="button"
      onClick={toggleEnabled}
      className="flex items-center justify-center size-8 rounded-full transition-colors hover:bg-white/10"
      aria-label={enabled ? "Disattiva narrazione" : "Attiva narrazione"}
      title={enabled ? "Disattiva narrazione" : "Attiva narrazione"}
    >
      {enabled ? (
        <Volume2
          className={`size-4 transition-colors ${
            playing ? "text-[#a78bfa]" : "text-[#94a3b8]"
          }`}
        />
      ) : (
        <VolumeOff className="size-4 text-[#94a3b8]" />
      )}
    </button>
  );
}
