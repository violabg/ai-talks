---
name: article-presentation
description: "Create a rich, custom-built presentation page for an MDX article. Each presentation is a unique static React page with bespoke slides, inline SVG visuals, animated flowcharts, diagrams, and varied layouts — NOT a generic bullet-point template. Use this skill whenever the user wants to create a presentation for an article, add slides to an article, make a slideshow, or mentions 'presentazione' in the context of articles. If no specific article is referenced, ask the user which article they want."
---

# Article Presentation Generator

Create a unique, high-value presentation page for an MDX article. Each presentation is a **custom static page** with its own React components, inline SVG graphics, animated flowcharts, and slide layouts designed specifically for that article's content.

The goal is to **add value beyond the article text** — not to summarize it into bullet points. A presentation should make complex ideas click through visual storytelling: flowcharts that reveal step by step, diagrams that build up, comparisons that animate side by side, code that highlights incrementally.

## Before You Start: Ask and Plan

This skill requires thoughtful analysis. Do not jump into implementation.

### Step 1: Identify the Article

If the user didn't specify which article, ask. Articles live in `content/articles/*.mdx`.

### Step 2: Deep Read and Analysis

Read the full article. As you read, identify:

- The **core thesis** — what's the one thing the reader should walk away understanding?
- The **narrative arc** — how does the article build its argument?
- **Key concepts** that would benefit from visual explanation (flowcharts, diagrams, comparisons)
- **Relationships and processes** that are described in text but would be clearer as visuals
- **Code patterns** worth highlighting with step-by-step annotation
- Sections that are **supporting detail** vs. sections that are **essential to the argument**

### Step 3: Present a Plan to the User

Before writing any code, present the user with:

1. **Presentation concept** — a 2-3 sentence description of the approach and visual style you'll take
2. **Slide plan** — for each proposed slide:
   - Working title
   - Slide type/layout (see Slide Vocabulary below)
   - What visual elements it will contain (flowchart, diagram, SVG icon, code walkthrough, etc.)
   - Why this slide adds value (what does it make clearer that the text alone doesn't?)
3. **What you're skipping** — which article sections you're intentionally leaving out and why

Ask the user: "Does this plan work? Want me to adjust any slides before I build it?"

Wait for confirmation before proceeding.

## Slide Vocabulary

Think of these as layout patterns you can mix and match. Each presentation will use a different combination depending on the content. You are not limited to these — invent new layouts when the content calls for it.

### Visual-first slides

- **Flowchart slide** — an SVG flowchart that builds step by step with staggered animations. Great for processes, pipelines, decision trees.
- **Diagram slide** — a relationship diagram, architecture overview, or concept map rendered as inline SVG with animated connections.
- **Comparison slide** — two or three columns that animate in, showing before/after, good/bad, or option A vs B.
- **Timeline slide** — a horizontal or vertical progression showing evolution or sequence of steps.

### Content slides

- **Statement slide** — a single bold statement or question, centered. No bullet points. Used to introduce a key idea or create a pause.
- **Code spotlight slide** — a code block with specific lines or sections that highlight sequentially via animation, with annotations that appear alongside.
- **Quote/insight slide** — a key insight from the article, typographically prominent, with optional supporting context below.
- **Key points slide** — when (and only when) a list of points genuinely is the best format, show 3-5 short items with staggered entrance. But ask yourself first: could this be a flowchart or diagram instead?

### Structural slides

- **Title slide** — article title, a punchy presentation-specific subtitle, and tags.
- **Section divider** — a full-screen heading that marks a major shift in topic.
- **Closing slide** — final takeaways. Can be a summary diagram, a set of principles, or a single memorable statement.

## Building the Presentation

### Architecture & Code Reuse

Each presentation is a **static page** at `src/app/articles/[slug]/presentazione/page.tsx`. All presentations use the same standard layout via the reusable `PresentationShell` component (`src/components/presentation/presentation-shell.tsx`) to ensure consistency and eliminate repetition. This component handles:

- Navigation (keyboard, click, progress bar)
- Header (back link, narration toggle, slide counter)
- Slide transitions and animations
- Speech narration integration
- Audio orb visualization
- First-time narration consent dialog

Slides only need to define their visual content — all UI chrome is handled by the shell.

The page should:

- Be a server component that renders the slideshow (typically just calling `<PresentationSlides slug={SLUG} />` or `<Slideshow slug={SLUG} />`)
- Import a client component in `slides.tsx` that uses `PresentationShell` for the interactive slideshow
- Keep slide content in local component files in the same `presentazione/` folder (one slide component per file)
- Include inline SVG graphics directly in the JSX

### File Structure

```
src/app/articles/[slug]/presentazione/
├── page.tsx               # Server component — metadata, static params, simple render
├── slides.tsx             # "use client" — imports PresentationShell from shared components
├── slide-01-*.tsx         # Slide 1 component
├── slide-02-*.tsx         # Slide 2 component
├── speech.json            # Narration text for each slide (optional, required for voice)
└── ...                    # Continue with one file per slide in this folder
```

### Technical Requirements

- **Animations**: Use `motion/react` and `motion/react-client` (already installed). Every slide should have entrance animations. Flowcharts and diagrams should build incrementally — elements appearing with staggered delays.
- **Slide components**: Every slide must live in a separate component file in the same `presentazione/` folder. Avoid monolithic `slides.tsx` files containing all slide JSX.
- **SVG**: Create inline SVG graphics directly in the JSX. Use the presentation's color palette (see below). SVGs must be responsive — never use fixed `width`/`height` attributes on main diagram SVGs; use `className="w-full"` or `className="w-full max-w-xs sm:max-w-sm"` on the wrapper `<div>` instead, paired with `viewBox`. Icon-only SVGs (small decorative icons inside cards) may keep fixed pixel dimensions.
- **Visual sizing**: Diagrams, flowcharts, and composed SVGs should fill as much of the slide as possible. Wrap them in containers of at least `max-w-3xl`, preferably `max-w-4xl` or `max-w-5xl`. Never constrain a diagram to `max-w-xl` or smaller — this makes visuals feel cramped on large screens. The SVG `viewBox` should use a generous coordinate space (e.g. `0 0 700 400` for complex flowcharts) so nodes and labels have room to breathe. Overall slide content wrappers should use `max-w-5xl` or `max-w-6xl`, not `max-w-4xl`.
- **Boxes and text fit**: Text inside cards, nodes, and labeled boxes must always remain inside the box at every supported viewport size. Do not accept overflow, clipping, or text sitting on top of headers. If content does not fit, first enlarge the box or reorganize the layout; then shorten copy only if needed. Do not solve overflow by shrinking text below readable sizes.
- **Grid-first box layouts**: When a slide contains multiple peer boxes, default to a clean grid with uniform horizontal and vertical gaps. Use irregular placement only when the content truly needs a special composition. A tidy grid makes connectors easier to draw, spacing easier to maintain, and overflow easier to spot.
- **Fill available height**: Slides with card grids or lists should use `flex flex-col h-full py-6` on the outer container (not `justify-center`) so content fills the full slide height. Add `flex-1` to the content grid/list so it expands to fill remaining space after the title. This prevents content from clustering in the vertical center of large screens.
- **Text sizes**: Slide titles use `text-3xl sm:text-4xl` minimum. Subtitles/descriptions use `text-base` minimum. Card labels use `text-sm` minimum — never `text-xs` for primary labels. Eyebrow/tag labels (`font-mono uppercase`) use `text-sm`. Inner `max-w-5xl` wrappers inside an outer `max-w-6xl` container are redundant — remove them.
- **Navigation**: Arrow keys, spacebar (next), click left/right halves. Show slide count. Progress bar at bottom.
- **Responsive**: Must work on desktop and mobile. Use Tailwind breakpoints.
- **Back link**: "Torna all'articolo" link in top-left pointing to `/articles/[slug]`.
- **Language**: All content in Italian (matching the article language).

### Color Palette

Use the theme-aware CSS variables defined in globals.css (`--pres-*`). Do not use hardcoded hex colors or Tailwind generic colors for presentation elements, especially inside SVGs, to ensure proper light/dark mode support.

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

For translucent background colors, use tailwind opacity modifiers like `bg-[var(--pres-accent)]/10` or use the CSS `color-mix` function, such as `color-mix(in srgb, var(--pres-success) 10%, transparent)`.

### Flowcharts, Diagrams, and Connecting Lines

Connectors between boxes (arrows, flow lines) are the most bug-prone part of any SVG diagram. These pitfalls come up every time — internalize them before writing a single path.

Before drawing connectors, make the box layout stable: boxes should sit on a predictable grid, have enough width/height for their labels, and preserve the same gap rhythm horizontally and vertically whenever possible. Clean spacing is not cosmetic here; it is what keeps arrows legible and pointing in an unambiguous direction.

#### Pitfall 1 — `linearGradient` on horizontal or vertical paths

SVG `<linearGradient>` defaults to `gradientUnits="objectBoundingBox"`. For a path like `M 302 110 L 496 110` the bounding box has **zero height**, so the gradient collapses and the stroke renders as **completely invisible** (even though arrowhead markers still render correctly — which misleads you into thinking the connector works).

**Rule:** do not use gradient strokes for horizontal/vertical connector lines. Use solid colors:

```tsx
// ❌ Invisible — bbox collapses to 0 height
<motion.path d="M302 110 L 496 110" stroke="url(#my-gradient)" strokeDasharray="8 8" />

// ✅ Visible
<motion.path d="M302 110 L 496 110" stroke="var(--pres-accent)" strokeDasharray="8 8" />
```

If you truly need a gradient on a straight line, set `gradientUnits="userSpaceOnUse"` with explicit `x1/y1/x2/y2` in viewBox coordinates.

#### Pitfall 2 — Motion's `pathLength` animation destroys `strokeDasharray`

When you animate `pathLength` from 0 to 1 on a `motion.path`, Motion internally sets `stroke-dasharray="1 1"` and `pathLength="1"` to drive the draw-in effect. Any `strokeDasharray` prop you set is **overwritten**, so the path renders as a continuous solid line or — worse — invisible dashes.

**Rule:** pick one:

- Draw-in effect, solid line → animate `pathLength`, omit `strokeDasharray`.
- Dashed line, fade-in → animate `opacity` only, keep `strokeDasharray`.

```tsx
// ❌ Dashes disappear — pathLength wins
<motion.path strokeDasharray="8 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />

// ✅ Dashes preserved
<motion.path strokeDasharray="8 8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
```

#### Pitfall 3 — Arrow markers need explicit `fill` and a matching `refX`

Arrowheads via `<marker>` only show if the marker's `<path>` has a solid `fill` (not inherited from the stroke) and the marker's `refX/refY` positions the tip at the path endpoint. Define one marker per color you need — markers do not inherit the stroke color.

```tsx
<marker
  id="arrow-accent"
  viewBox="0 0 10 10"
  refX="9"
  refY="5"
  markerWidth="6"
  markerHeight="6"
  orient="auto-start-reverse"
>
  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-accent)" />
</marker>
```

The line itself must stay clearly visible, not just the arrowhead. A connector is broken if the marker shows but the stroke is faint, collapsed, hidden behind other shapes, or points in the wrong direction.

#### Pitfall 4 — Endpoints must sit outside the box, not on the edge

If a connector starts/ends exactly on a box's border coordinate, the arrowhead tip is hidden under the rectangle stroke. Leave a 4–8px gap so the arrow visibly enters the next box. For a box at `x=500, width=280` (right edge at 780), an incoming arrow should end at `x=496`, not `x=500`.

#### Pitfall 5 — Plan the layout on a grid before drawing paths

Do not improvise connector coordinates. Before writing paths:

1. Lay the boxes out on a simple grid (e.g. 2×2 at `x=40/500`, `y=50/220`).
2. Compute each box's four anchor points (top/right/bottom/left midpoints).
3. Draw connectors as straight horizontal or vertical segments between those anchors, or as L-shapes with a single bend.

Diagonal connectors between misaligned boxes look messy and are hard to read. Align the boxes first, then the lines are trivial.

#### Verification workflow for any diagram slide

A diagram that compiles is not a diagram that works. Always:

1. Open the slide in the browser preview.
2. **Take a screenshot and look at it.** Do not trust DOM inspection alone — gradients, markers, and dasharrays can all report "correct" values while rendering as invisible.
3. For every connector, confirm you can see both the line **and** the arrowhead, and that the arrowhead points at the intended box.
4. For every labeled box, confirm the title and body text stay fully inside the box with comfortable padding, and that no child text overlaps headings or borders.
5. If the slide uses multiple peer boxes, confirm the layout still reads as a deliberate grid with uniform gaps unless there is a strong content reason not to.
6. If something is missing, check in this order: (a) gradient/bbox issue, (b) `pathLength` vs `strokeDasharray` conflict, (c) marker fill color, (d) endpoint hidden under a box edge.

### Static Generation

The page must work with Next.js static generation. Add `generateStaticParams` that returns the slug, and set `dynamicParams = false`. Look at how the article page does it in `src/app/articles/[slug]/page.tsx` for the pattern.

### Connecting to the Article Page

The article page at `src/app/articles/[slug]/page.tsx` shows the "Inizia presentazione" button when `hasPresentation(slug)` returns true. In this project, `hasPresentation` should check if `src/app/articles/[slug]/presentazione/` exists.

## Quality Standards

### What makes a great presentation

- **Visual storytelling**: The presentation makes something click that the article text alone doesn't. A flowchart that reveals a process step by step. A diagram that shows relationships. A comparison that makes the difference obvious at a glance.
- **Varied layouts**: No two consecutive slides should have the same layout. Mix flowcharts, statements, code spotlights, diagrams.
- **Restraint**: 8-15 slides. Cut ruthlessly. If a slide doesn't add visual value beyond what reading the text provides, remove it.
- **Animation with purpose**: Staggered reveals to control the narrative flow. Flowchart nodes appearing in sequence to show a process. Not animation for decoration.
- **Standalone coherence**: Someone watching the presentation without reading the article should understand the core ideas.
- **Spatial discipline**: Box layouts feel intentional. Text fits comfortably inside cards and nodes. Gaps are even. Connectors are easy to follow at a glance.

### What to avoid

- **Bullet-point walls**: If you find yourself writing 5 bullet points on a slide, stop. Can it be a flowchart? A diagram? A single bold statement?
- **Article summary**: The presentation is not a summary. It's a **visual companion** that adds a new dimension.
- **Generic visuals**: Every SVG should be designed for that specific content. No placeholder icons or decorative shapes without meaning.
- **Text-heavy slides**: If a slide has more than ~30 words of body text, it's too much. Rethink the layout.
- **Layout debt**: Do not leave a slide with text escaping boxes, titles colliding with child content, uneven box spacing, or connector lines that are faint, truncated, or pointing ambiguously.

## Speech Narration

After the presentation is built and verified, ask the user:

> "Vuoi aggiungere la narrazione vocale a questa presentazione?"

If yes, use the **presentation-speech** skill (`.claude/skills/presentation-speech/SKILL.md`) to:

1. Generate a `speech.json` file from the article text
2. Refine the narration text for each slide
3. Integrate the narration components into `slides.tsx`

## ASCII Cover Art

After the presentation (and optionally narration) is complete, check if this article already has an ASCII cover in `src/components/covers/{slug}.tsx`. If not, ask the user:

> "Vuoi generare anche la cover ASCII per la card di questo articolo?"

If yes, use the **ascii-cover** skill (`.claude/skills/ascii-cover/SKILL.md`) to generate a colored ASCII art component for the article card.

## Verify

After building:

1. Check that the page compiles — run `pnpm build` or at minimum check for TypeScript errors
2. Verify slide count is 8-15
3. Confirm every SVG uses viewBox and is responsive
4. Check that animations use staggered delays so content reveals progressively
5. Ensure "Torna all'articolo" link points to the correct slug
6. Verify the "Inizia presentazione" button appears on the article page
7. Open the presentation in a browser and do a quick walkthrough to check for any glaring issues with layout, navigation, or content flow, especially look for layout issues like text overflow, cramped diagrams, lines not fitting, or anything that looks off on mobile.
8. Treat browser-found layout defects as blocking issues, not polish: if text exits a box, peer boxes lose a clear grid rhythm, or arrow lines are not clearly visible and directional, the presentation is not done yet.
