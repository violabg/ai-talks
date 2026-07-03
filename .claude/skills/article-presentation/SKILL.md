---
name: article-presentation
description: "Manual skill for creating or updating a custom presentation page for one MDX article. Invoke explicitly for slide work; narration belongs to presentation-speech."
disable-model-invocation: true
---

# Article Presentation Generator

Create a unique, high-value presentation page for an MDX article. Each presentation is a **custom static page** with its own React components, inline SVG graphics, animated flowcharts, and slide layouts designed for that article's content.

## Leading words

- **visual storytelling** — presentation is a visual companion, not a summary. Every slide must add a visual dimension the article text alone doesn't.
- **grid-first** — box layouts default to a clean grid with uniform gaps. Break the grid only when content genuinely demands it.
- **evidence-gated** — no presentation is "done" until it's opened in the integrated browser and layout, connectors, text-fit, and navigation pass a visual walkthrough.

## Manual Invocation

- **TRIGGER:** Run only when the user explicitly invokes this skill for a presentation page.
- **CHECKPOINT:** Always propose concept + slide plan before implementation.
- **BOUNDARY:** Build slides and presentation structure only; narration → `presentation-speech`.
- **VERIFY:** Every slide adds visual value beyond the article; every created/updated presentation is opened in the integrated browser for quality review.

## Skill System Contract

Specialist module inside the article workflow.

### Responsibility

- Build or update a presentation for one article slug
- Keep slide structure coherent with article narrative

### Required input

```json
{
  "slug": "string",
  "articlePath": "content/articles/<slug>.mdx",
  "mode": "create | update",
  "targetSlideCount": "8-15"
}
```

### Structured output (handoff)

```json
{
  "slug": "string",
  "presentationPath": "src/app/articles/<slug>/presentazione",
  "slidesCount": 10,
  "slidesCreated": ["slide-01-title.tsx", "slide-02-flow.tsx"],
  "slidesUpdated": ["slide-05-comparison.tsx"],
  "requiresSpeechSync": true,
  "requiresAsciiCoverCheck": true,
  "notes": ["Plan approved before implementation"]
}
```

### Human checkpoint

- Mandatory: propose concept + slide plan, wait for user confirmation before implementation.
- Optional: if article scope changed heavily, ask whether to keep old visual style or redesign.

### Boundaries

- No narration text generation; delegate to `presentation-speech`.
- No ASCII cover components.
- No article body rewrites except tiny alignment edits requested by the user.

Goal: **add value beyond the article text** — not summarize into bullet points. A presentation makes complex ideas click via visual storytelling: flowcharts that reveal step by step, diagrams that build up, comparisons that animate side by side, code that highlights incrementally.

## Before you start: ask and plan

Do not jump into implementation.

### Step 1 — Identify the article

If the user didn't specify, ask. Articles live in `content/articles/*.mdx`.

### Step 2 — Deep read and analysis

Read the full article. Identify:

- **Core thesis** — the one thing the reader should walk away understanding.
- **Narrative arc** — how the article builds its argument.
- **Key concepts** that benefit from visual explanation (flowcharts, diagrams, comparisons).
- **Relationships and processes** described in text that would be clearer as visuals.
- **Code patterns** worth highlighting with step-by-step annotation.
- **Supporting detail vs essential to the argument**.

### Step 3 — Present a plan to the user

Before any code, present:

1. **Presentation concept** — 2–3 sentences describing approach + visual style.
2. **Slide plan** — for each proposed slide:
   - Working title
   - Slide type/layout (see [references/slide-vocabulary.md](references/slide-vocabulary.md))
   - Visual elements (flowchart, diagram, SVG icon, code walkthrough…)
   - Why this slide adds visual value the text alone doesn't.
3. **What you're skipping** — which article sections you're intentionally leaving out and why.

Ask: "Does this plan work? Want me to adjust any slides before I build it?"

Wait for confirmation before proceeding.

## Building the presentation

### Architecture & code reuse

Each presentation is a **static page** at `src/app/articles/[slug]/presentazione/page.tsx`. All presentations use the same layout via `PresentationShell` (`src/components/presentation/presentation-shell.tsx`) — consistency and no repetition. The shell handles:

- Navigation (keyboard, click, progress bar)
- Header (back link, narration toggle, slide counter)
- Slide transitions and animations
- Speech narration integration
- Audio orb visualization
- First-time narration consent dialog

Slides only define visual content; the shell handles all UI chrome. Priorities in order: 1) narrative coherence, 2) required architecture/file structure, 3) visual/layout quality, 4) polish + optional enhancements.

#### Shared slide primitives

Common low-level slide components live in `src/components/presentation/slide-primitives.tsx`. **Always import from there instead of re-implementing them.** Each presentation's `slide-shared.tsx` re-exports whichever primitives it uses, alongside article-specific data (tag lists, palette constants). Available primitives:

| Export           | What it does                                                               |
| ---------------- | -------------------------------------------------------------------------- |
| `SlideFrame`     | Flex-column slide wrapper (`max-w-6xl`, full height, `--pres-text` colour) |
| `SlideHeading`   | Animated eyebrow + h2 title + optional description                         |
| `GlowCard`       | Rounded card with accent glow shadow                                       |
| `fadeIn(delay?)` | Returns spread-able motion props for fade-in-up on a `motion.*` element    |
| `FadeIn`         | Motion wrapper component — fade in from below                              |
| `FadeInLeft`     | Motion wrapper component — fade in from the left                           |
| `ArrowTip`       | Animated SVG arrowhead helper for flow/diagram connectors                  |

Minimal `slide-shared.tsx`:

```tsx
export {
  SlideFrame,
  SlideHeading,
  GlowCard,
  fadeIn,
} from "@/components/presentation/slide-primitives";

export const MY_TAGS = ["tag-a", "tag-b"];
```

If a primitive is used locally inside `slide-shared.tsx` (e.g. `FadeIn` inside `SlideTitle`), import explicitly before re-exporting:

```tsx
import { FadeIn } from "@/components/presentation/slide-primitives";
export { FadeIn };
```

The page should:

- Be a server component that renders the slideshow — typically a one-liner `<PresentationSlides slug={SLUG} />`
- Export `generateStaticParams` and `dynamicParams = false` so the route is fully static
- Delegate to a `"use client"` component in `slides.tsx` that:
  - Imports each slide component and `speech.json` (if narration exists)
  - Builds a `slides` array of `{ key, component }` entries in narrative order
  - Renders `<PresentationShell slug={slug} speechData={speechData} slides={slides} />`
  - Passes `speechData={null}` (or omits the import) when there is no narration
- Keep slide content in local component files in the same `presentazione/` folder (one slide component per file)
- Include inline SVG graphics directly in the JSX

### File structure

```
src/app/articles/[slug]/presentazione/
├── page.tsx               # Server component — metadata, static params, simple render
├── slides.tsx             # "use client" — imports PresentationShell from shared components
├── slide-shared.tsx       # Re-exports from slide-primitives + article-specific data/constants
├── slide-01-*.tsx         # Slide 1 component
├── slide-02-*.tsx         # Slide 2 component
├── speech.json            # Narration text for each slide (optional, required for voice)
└── ...                    # One file per slide in this folder
```

### Slide vocabulary

Load [references/slide-vocabulary.md](references/slide-vocabulary.md) during planning to pick layouts.

### Technical requirements

- **Animations**: `motion/react` + `motion/react-client`. Every slide has entrance animations. Flowcharts/diagrams build incrementally with staggered delays.
- **Slide components**: every slide in a separate component file in `presentazione/`. No monolithic `slides.tsx` containing all JSX.
- **SVG**: inline SVG in JSX. Presentation color palette (below). SVGs must be **responsive** — never fixed `width`/`height` on main diagram SVGs; use `className="w-full"` or `className="w-full max-w-xs sm:max-w-sm"` on the wrapper `<div>`, paired with `viewBox`. Icon-only SVGs (small decorative icons inside cards) may keep fixed pixel dimensions.
- **Visual sizing**: diagrams, flowcharts, composed SVGs fill as much of the slide as possible. Wrap in containers of at least `max-w-3xl`, preferably `max-w-4xl`/`max-w-5xl`. Never constrain a diagram to `max-w-xl` or smaller. `viewBox` uses generous coordinate space (e.g. `0 0 700 400` for complex flowcharts). Overall slide content wrappers use `max-w-5xl` or `max-w-6xl`, not `max-w-4xl`.
- **Boxes and text fit**: text inside cards, nodes, labeled boxes must stay inside the box at every supported viewport. No overflow, clipping, or text sitting on top of headers. If content doesn't fit → enlarge the box or reorganize; shorten copy only if needed. Do not shrink text below readable sizes.
- **Grid-first box layouts**: multiple peer boxes → default to a clean grid with uniform horizontal and vertical gaps. Irregular placement only when content truly requires it. Tidy grid = easier connectors, easier spacing, easier overflow detection.
- **Fill available height**: slides with card grids/lists use `flex flex-col h-full py-6` on the outer container (not `justify-center`) so content fills the full slide height. Add `flex-1` to the content grid/list so it expands. Prevents content clustering in vertical center on large screens.
- **Text sizes**: slide titles use `text-3xl sm:text-4xl` minimum. Subtitles/descriptions use `text-base` minimum. Card labels use `text-sm` minimum — never `text-xs` for primary labels. Eyebrow/tag labels (`font-mono uppercase`) use `text-sm`. Inner `max-w-5xl` wrappers inside an outer `max-w-6xl` container are redundant — remove them.
- **Navigation**: arrow keys, spacebar (next), click left/right halves. Slide count. Progress bar at bottom.
- **Responsive**: desktop + mobile. Tailwind breakpoints.
- **Back link**: "Torna all'articolo" in top-left → `/articles/[slug]`.
- **Language**: Italian (matching article).

### Color palette

Theme-aware CSS variables in `globals.css` (`--pres-*`). No hardcoded hex or generic Tailwind colors for presentation elements — especially inside SVGs — so light/dark mode works.

```css
var(--pres-bg)           /* Main background */
var(--pres-bg-surface)   /* Slightly elevated background */
var(--pres-bg-card)      /* Card background */
var(--pres-bg-node)      /* SVG node background */

var(--pres-text)         /* Primary text */
var(--pres-text-sub)     /* Secondary text */
var(--pres-muted)        /* Muted text/borders */

var(--pres-border)       /* Default borders */

var(--pres-accent)       /* Primary brand color (purple) */
var(--pres-blue)         /* Sky blue for links/accents */
var(--pres-success)      /* Emerald green */
var(--pres-warning)      /* Amber */
var(--pres-danger)       /* Rose red */
```

Translucent backgrounds: Tailwind opacity modifiers like `bg-[var(--pres-accent)]/10`, or CSS `color-mix` like `color-mix(in srgb, var(--pres-success) 10%, transparent)`.

### Diagrams and connectors

Any slide with a flowchart, diagram, or connecting lines: load [references/connectors.md](references/connectors.md) **before** drawing. Covers the 5 pitfalls (invisible gradients, `pathLength` vs `strokeDasharray`, arrow marker fills, endpoints under box edges, grid-first layout) plus the verification workflow.

### Static generation

Each presentation route is a concrete slug folder (`src/app/articles/<slug>/presentazione/page.tsx`) with a local `SLUG` constant, `generateStaticParams()` returning `[{}]`, and `dynamicParams = false`.

### Connecting to the article page

`src/app/articles/[slug]/page.tsx` shows the "Inizia presentazione" button when `hasPresentation(slug)` returns true. `hasPresentation` should check if `src/app/articles/[slug]/presentazione/` exists.

## Quality standards

### What makes a great presentation

- **Visual storytelling** — makes something click the text alone doesn't. Flowchart that reveals a process step by step. Diagram that shows relationships. Comparison that makes difference obvious at a glance.
- **Varied layouts** — no two consecutive slides have the same layout. Mix flowcharts, statements, code spotlights, diagrams.
- **Restraint** — 8–15 slides. Cut ruthlessly. If a slide doesn't add visual value beyond reading the text, remove it.
- **Animation with purpose** — staggered reveals to control narrative flow. Flowchart nodes appearing in sequence to show a process. Not animation for decoration.
- **Standalone coherence** — someone watching without reading the article understands the core ideas.
- **Spatial discipline** — box layouts feel intentional. Text fits comfortably. Gaps even. Connectors easy to follow at a glance.

### What to avoid

- **Bullet-point walls** — 5 bullets on a slide → stop. Flowchart? Diagram? Single bold statement?
- **Article summary** — presentation is a **visual companion**, not a summary.
- **Generic visuals** — every SVG designed for that specific content. No placeholder icons or decorative shapes without meaning.
- **Text-heavy slides** — >~30 words of body text → too much. Rethink.
- **Layout debt** — no text escaping boxes, titles colliding with child content, uneven box spacing, faint/truncated/ambiguous connector lines.

## Speech narration

After presentation is built and verified, ask:

> "Vuoi aggiungere la narrazione vocale a questa presentazione?"

If yes, use the **presentation-speech** skill (`.claude/skills/presentation-speech/SKILL.md`) to:

1. Generate `speech.json` from the article text
2. Refine narration text per slide
3. Integrate narration into `slides.tsx`

## ASCII cover art

After presentation (and optionally narration) is complete, check if this article has an ASCII cover in `src/components/covers/{slug}.tsx`. If not, ask:

> "Vuoi generare anche la cover ASCII per la card di questo articolo?"

If yes, use the **ascii-cover** skill to generate a colored ASCII art component.

## Verify — evidence-gated

After building:

1. Compile check — `pnpm build` or at minimum TypeScript check.
2. Slide count is 8–15.
3. Every SVG uses `viewBox` and is responsive.
4. Animations use staggered delays.
5. "Torna all'articolo" link points to the correct slug.
6. "Inizia presentazione" button appears on the article page.
7. Open the presentation in the integrated browser. Walkthrough: layout, navigation, content flow, desktop + mobile framing, text overflow, cramped diagrams, missing/invisible SVG lines, anything visually off.
8. Treat browser-found layout defects as **blocking**, not polish: text out of a box, peer boxes losing grid rhythm, or arrow lines not clearly visible and directional → not done.
9. Do not report the presentation as complete until the integrated-browser check passes. Fail → fix, reload, re-check.
