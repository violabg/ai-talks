---
name: presentation-speech
description: "Add speech narration to an existing presentation. Extracts article text into a speech.json file, integrates narration components (toggle, audio orb) into the presentation's slides.tsx. Use when the user wants to add voice/narration/speech to a presentation, or when prompted by the article-presentation skill after building a presentation."
---

# Presentation Speech Narration

Add TTS (text-to-speech) narration to an existing presentation. The narration plays article-derived text for each slide, synced with navigation, with a pulsing orb visualization and mute control.

Uses the **Browser Web Speech API** (`window.speechSynthesis`) — completely free, no API key, zero latency, works offline.

## Prerequisites

A presentation must already exist at `src/app/articles/[slug]/presentazione/`.

No packages to install. No environment variables needed.

## Step 1: Generate speech.json

Run the generation script to create a first draft:

```bash
npx tsx scripts/generate-speech-json.ts <slug>
```

This reads the article MDX, strips markdown, splits by sections, and distributes text across slide slots. Output goes to `src/app/articles/[slug]/presentazione/speech.json`.

**Important**: The auto-generated text is a rough draft. Manually refine it:

- Each slide's text should be natural narration (30-60 words, 10-20 seconds of speech)
- Match the text to the actual slide content, not just article section order
- Use conversational Italian, not raw article prose
- Set empty string `""` for slides with no narration
- Title and closing slides should have short, punchy text

### speech.json format

```json
{
  "voice": "it-IT",
  "slides": [
    { "text": "Narration text for slide 1..." },
    { "text": "Narration text for slide 2..." },
    { "text": "" }
  ]
}
```

- Array index = slide index (0-based)
- `voice`: BCP 47 language tag for `SpeechSynthesisUtterance.lang`. Use `"it-IT"` for Italian. The browser auto-selects the best available voice for that language.
- Empty `text` means no narration for that slide

## Step 2: Integrate into slides.tsx

Add these imports and wrap the presentation JSX (~10 lines):

```tsx
// Add imports at the top
import { AudioOrb } from "@/components/presentation/audio-orb";
import { NarrationProvider } from "@/components/presentation/narration-provider";
import { NarrationToggle } from "@/components/presentation/narration-toggle";
import speechData from "./speech.json";

// Wrap the return JSX with NarrationProvider
return (
  <NarrationProvider speechData={speechData} currentSlide={current}>
    <div className="fixed inset-0 ...">
      {/* In the header, wrap the slide counter with a flex container */}
      <div className="flex items-center gap-3">
        <NarrationToggle />
        <span className="font-mono tabular-nums">
          {current + 1} / {totalSlides}
        </span>
      </div>

      {/* ... existing slides and progress bar ... */}

      {/* Add AudioOrb before closing the main div */}
      <AudioOrb />
    </div>
  </NarrationProvider>
);
```

## Architecture

All components live in `src/components/presentation/`:

- `use-narration.ts` — custom hook managing `speechSynthesis`, voice selection, word-boundary pulse events
- `narration-provider.tsx` — React context wrapping the presentation
- `narration-toggle.tsx` — mute/unmute button (Volume2 / VolumeOff icons from lucide-react)
- `audio-orb.tsx` — pulsing orb animated by word-boundary events + a smooth sine oscillation

### How it works

1. User clicks the volume icon → toggles narration on
2. On each slide change, `speechSynthesis.cancel()` stops any current speech, then a new `SpeechSynthesisUtterance` is spoken
3. `onboundary` events (word boundaries) increment a counter that drives orb pulse spikes
4. The orb decays each spike over ~150ms, creating a natural speaking rhythm
5. Browser auto-selects an Italian system voice (`lang: 'it-IT'`, prefers `localService: true`)

### Browser compatibility

- Chrome: full support, good Italian voices via Google TTS
- Safari: full support, uses macOS system voices (excellent quality)
- Firefox: `onboundary` events may not fire, orb falls back to smooth oscillation
- Mobile: works on iOS/Android, voice quality depends on device

## Features

### Automatic Cleanup
When the user leaves the presentation page, any currently playing narration is automatically stopped via `useEffect` cleanup in the `PresentationShell` component. This prevents audio from continuing to play in the background if the user navigates away or closes the page.

### First-Time Prompt
On first visit (or when localStorage is cleared), a shadcn/ui Dialog modal appears asking if the user wants narration enabled. Options:
- "Sì, attiva" — enables narration with Google voice (if available) or a system Italian voice
- "No, grazie" — disables narration

The preference is saved to `localStorage` and persists across sessions.

### Default Voice Selection
When available voices are first discovered, the system automatically selects:
1. **Google voice (Italian)** — if found in the system voices (preferred for quality)
2. **System local voice (Italian)** — any local system voice as fallback
3. **First Italian voice** — any other Italian voice in the list

### 1-Second Delay
Speech automatically delays by 1 second after navigating to a new slide. This gives the slide animation time to complete before audio starts.

### Voice Selection Dropdown
When narration is enabled, a dropdown menu (Select component from shadcn/ui) appears showing all available Italian system voices. Users can:
- See voice name and indicator for local system voices "(locale)"
- Switch voices on the fly; changes apply to the next slide
- Voice preference is saved to `localStorage` per browser

### Narration ID
Each time the user toggles narration on/off, a unique `narrationId` is generated (using `Date.now()`). This ensures proper state isolation if narration is toggled rapidly.

## Verify

1. `pnpm build` passes
2. First visit → Dialog modal appears: "Narrazione Vocale — Desideri attivare la narrazione vocale per questa presentazione?" with "No, grazie" and "Sì, attiva" buttons
3. Click "Sì, attiva" → dialog closes, toggle button shows Volume2 icon, voice selector dropdown appears with Italian voices
4. Default voice is Google voice (if available), otherwise a system local voice
5. Click the voice dropdown → see list of Italian voices with "(locale)" indicator for system voices, select one
6. Navigate to next slide → 1-second delay, then speech starts in selected voice
7. Toggle volume button → toggles narration on/off, dropdown hides when disabled, narrationId updates
8. Refresh page → narration preference and voice selection are restored from localStorage
9. Voice preference persists across different presentations
