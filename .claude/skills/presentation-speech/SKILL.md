---
name: presentation-speech
description: "Add speech narration to an existing presentation. Drafts a `speech.json` file from the article text and wires it into the presentation by passing it to `PresentationShell`. Use when the user wants to add voice/narration/speech to a presentation, or when prompted by the article-presentation skill after building a presentation."
---

# Presentation Speech Narration

Add TTS (text-to-speech) narration to an existing presentation. Narration text lives in a `speech.json` alongside the slides; the presentation shell handles all of the UI (toggle, orb, first-time dialog, voice selector) automatically.

Uses the **Browser Web Speech API** (`window.speechSynthesis`) — no API key, no network call, no latency, works offline.

## Prerequisites

A presentation must already exist at `src/app/articles/[slug]/presentazione/` with a working `slides.tsx` that renders `<PresentationShell ...>`.

No packages to install. No environment variables needed.

## Step 1: Draft `speech.json`

Run the generator to get a first pass:

```bash
npx tsx scripts/generate-speech-json.ts <slug>
```

This reads the article MDX, strips markdown, splits it by sections, and distributes text across slide slots. Output goes to `src/app/articles/<slug>/presentazione/speech.json`.

**Important**: the auto-generated text is a rough draft, not shippable. Refine it by hand:

- Each slide's text should be natural narration (roughly 30–60 words, ~10–20 seconds of speech)
- Match the text to the **actual slide visuals**, not just article section order — narration should describe what the viewer is seeing, not recap paragraphs
- Write in conversational Italian, not raw article prose — read it aloud to yourself; if it sounds like prose being read, rewrite it
- Use an empty string (`""`) for slides that should stay silent (title, visual-only beats, closing pause)
- Title and closing slides should have short, punchy lines

### `speech.json` format

```json
{
  "voice": "it-IT",
  "slides": [
    { "text": "Testo di narrazione per la slide 1..." },
    { "text": "Testo di narrazione per la slide 2..." },
    { "text": "" }
  ]
}
```

- Array index = slide index (0-based). The array **length must equal the number of slides**; the shell maps `slides[currentIndex]` directly.
- `voice`: BCP 47 language tag used as `SpeechSynthesisUtterance.lang`. Use `"it-IT"` for Italian. The browser auto-picks the best available system voice for that language.
- `text: ""` means no narration for that slide.

## Step 2: Wire it into `slides.tsx`

The integration is tiny — the `PresentationShell` does all the work when you give it `speechData`. In most cases you only need to add **two lines**: an import and a prop.

```tsx
// slides.tsx
"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
// ...slide imports...
import speechData from "./speech.json"; // ← add

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    // ...
  ];

  return (
    <PresentationShell
      slug={slug}
      speechData={speechData} // ← add (pass `null` to disable narration)
      slides={slides}
    />
  );
}
```

That's it. **Do not** import `NarrationProvider`, `NarrationToggle`, `AudioOrb`, or `NarrationDialog` into `slides.tsx` — the shell mounts all of them internally when `speechData` is non-null. Wrapping the JSX yourself will result in double providers and duplicated UI.

If narration should be optional (e.g. you want to ship the presentation first and add narration later), pass `speechData={null}` until the `speech.json` is ready.

## Architecture (for reference)

All narration pieces live in `src/components/presentation/`:

- `presentation-shell.tsx` — the shell that conditionally wires up narration when `speechData` is provided
- `narration-provider.tsx` — React context powered by the `useNarration` hook
- `use-narration.ts` — hook managing `speechSynthesis`, voice selection, and word-boundary pulse events
- `narration-toggle.tsx` — mute/unmute button (Volume2 / VolumeOff from lucide-react)
- `audio-orb.tsx` — pulsing orb driven by word-boundary events plus a smooth sine oscillation
- `narration-dialog.tsx` — first-visit shadcn/ui Dialog that asks whether to enable narration
- `voice-selector.tsx` — dropdown of available Italian voices, shown when narration is on

### How the runtime flow works

1. On first visit the shell shows `NarrationDialog`: "Sì, attiva" vs "No, grazie" — the choice is persisted in `localStorage`.
2. When narration is enabled, the `NarrationToggle` appears in the header (next to the slide counter).
3. Slide changes trigger `speechSynthesis.cancel()` and then speak the new slide's text with a ~1s delay so the slide animation can complete first.
4. `onboundary` (word-boundary) events drive the `AudioOrb` pulse; between events the orb eases down, so it breathes with the speech.
5. The shell auto-selects the best Italian voice: Google voice first (highest quality when installed), then any local system voice, then any Italian voice. Users can switch via the voice selector; choice is persisted.
6. Leaving the presentation page cancels any in-flight utterance via an effect cleanup — no audio bleeds into other pages.

### Browser compatibility

- **Chrome**: full support, Google TTS voices available for Italian
- **Safari**: full support, uses macOS system voices (high quality)
- **Firefox**: `onboundary` may not fire reliably — the orb falls back to its smooth oscillation, audio still works
- **Mobile**: works on iOS/Android; voice quality depends on the device's installed voices

## Verify

1. `pnpm build` passes.
2. `speech.json`'s `slides` array length equals the number of slides in `slides.tsx`.
3. First visit → dialog modal appears: "Narrazione Vocale — Desideri attivare la narrazione vocale per questa presentazione?" with "No, grazie" and "Sì, attiva".
4. Click "Sì, attiva" → dialog closes, the toggle button (Volume2) and voice selector appear in the header.
5. Navigate to the next slide → ~1s delay, then speech starts in the selected Italian voice; the orb pulses with word boundaries.
6. Toggling off clears current speech; toggling back on resumes on the next slide change.
7. Refresh → narration preference and chosen voice are restored from `localStorage`.
8. Navigate away mid-speech → audio stops immediately.
