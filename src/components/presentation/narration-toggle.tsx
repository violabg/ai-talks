"use client";

import { Volume2, VolumeOff } from "lucide-react";
import { useNarrationContext } from "./narration-provider";
import { VoiceSelector } from "./voice-selector";

export function NarrationToggle() {
  const { enabled, playing, toggleEnabled } = useNarrationContext();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleEnabled}
        className="flex items-center justify-center size-8 rounded-full transition-colors hover:bg-[var(--pres-text)]/10"
        aria-label={enabled ? "Disattiva narrazione" : "Attiva narrazione"}
        title={enabled ? "Disattiva narrazione" : "Attiva narrazione"}
      >
        {enabled ? (
          <Volume2
            className={`size-4 transition-colors ${
              playing ? "text-[var(--pres-accent)]" : "text-[var(--pres-muted)]"
            }`}
          />
        ) : (
          <VolumeOff className="size-4 text-[var(--pres-muted)]" />
        )}
      </button>
      {enabled && <VoiceSelector />}
    </div>
  );
}
