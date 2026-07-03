---
name: presentation-speech
description: "Manual skill for adding speech narration to an existing presentation. Invoke explicitly after slides exist; this drafts `speech.json` and wires it into `PresentationShell`."
disable-model-invocation: true
---

# Presentation Speech Narration

Add TTS (text-to-speech) narration to an existing presentation. Narration text lives in a `speech.json` alongside the slides; the presentation shell handles all UI (toggle, orb, first-time dialog, voice selector) automatically.

## Leading words

- **match visuals not paragraphs** — narration describes what the viewer is seeing on the slide, not what the article paragraph says. Article prose is the source; slide visuals are the target.
- **length-locked** — `speech.json` slides array length must equal the slides array in `slides.tsx`. Mismatch is a blocking failure, not a warning.

## Manual Invocation

- **TRIGGER:** Run only when the user explicitly invokes this skill for an existing presentation.
- **CHECKPOINT:** Stop if slide count and speech entry count differ; fix alignment before completion.
- **BOUNDARY:** Write narration data and tiny wiring changes only; do not redesign slides.
- **VERIFY:** Narration must match actual slide visuals, not just article section order.

## Skill System Contract

This is a **specialist module** inside the article workflow.

### Responsibility

- Produce and refine `speech.json` for an existing presentation
- Wire narration data into `PresentationShell`

### Required input

```json
{
  "slug": "string",
  "presentationPath": "src/app/articles/<slug>/presentazione",
  "slidesCount": 0,
  "language": "it-IT"
}
```

### Structured output (handoff)

```json
{
  "slug": "string",
  "speechFile": "src/app/articles/<slug>/presentazione/speech.json",
  "slidesCount": 10,
  "speechEntriesCount": 10,
  "slidesTsxUpdated": true,
  "voice": "it-IT",
  "notes": ["Silent entries kept where visual-only slides were preferred"]
}
```

### Human checkpoint

- If narration tone or verbosity is unclear, ask once before final rewrite.
- If slide count and speech entries differ, stop and fix alignment before completion.

### Boundaries

- Do not redesign slide visuals.
- Do not create a presentation from scratch.
- Do not modify unrelated article content.

Runtime: Browser Web Speech API (`window.speechSynthesis`). No API key, package, network call, or environment variable.

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

## Runtime Reference

`PresentationShell` owns narration UI and state: dialog, toggle, voice selector, speech cancellation, and audio orb. `slides.tsx` only passes `speechData`.

Keep these invariants:

- Do not import narration providers or controls into `slides.tsx`; this creates duplicate UI.
- Slide changes cancel current speech before speaking the next entry.
- Voice preference and first-visit consent are persisted by the shell.
- Firefox may miss word-boundary events; audio still works and orb falls back to idle motion.
- Mobile voice quality depends on installed system voices.

## Verify

1. `pnpm build` passes.
2. `speech.json`'s `slides` array length equals the number of slides in `slides.tsx`.
3. First visit → dialog modal appears: "Narrazione Vocale — Desideri attivare la narrazione vocale per questa presentazione?" with "No, grazie" and "Sì, attiva".
4. Click "Sì, attiva" → dialog closes, the toggle button (Volume2) and voice selector appear in the header.
5. Navigate to the next slide → ~1s delay, then speech starts in the selected Italian voice; the orb pulses with word boundaries.
6. Toggling off clears current speech; toggling back on resumes on the next slide change.
7. Refresh → narration preference and chosen voice are restored from `localStorage`.
8. Navigate away mid-speech → audio stops immediately.
