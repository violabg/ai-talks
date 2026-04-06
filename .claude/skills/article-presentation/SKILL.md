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

### Architecture

Each presentation is a **static page** at `src/app/articles/[slug]/presentazione/page.tsx`. This is a regular Next.js page component — not a dynamic route reading from JSON.

The page should:
- Be a server component that renders the presentation shell
- Import a client component for the interactive slideshow (navigation, animations)
- Keep slide content in local component files in the same `presentazione/` folder (one slide component per file)
- Include inline SVG graphics directly in the JSX

### File Structure

```
src/app/articles/[slug]/presentazione/
├── page.tsx          # Server component — metadata, static params, shell
├── slides.tsx        # "use client" — slideshow shell, navigation, transitions
├── slide-01-*.tsx    # Slide 1 component
├── slide-02-*.tsx    # Slide 2 component
└── ...               # Continue with one file per slide in this folder
```

### Technical Requirements

- **Animations**: Use `motion/react` and `motion/react-client` (already installed). Every slide should have entrance animations. Flowcharts and diagrams should build incrementally — elements appearing with staggered delays.
- **Slide components**: Every slide must live in a separate component file in the same `presentazione/` folder. Avoid monolithic `slides.tsx` files containing all slide JSX.
- **SVG**: Create inline SVG graphics directly in the JSX. Use the presentation's color palette (see below). SVGs should be responsive (use viewBox, not fixed dimensions).
- **Navigation**: Arrow keys, spacebar (next), click left/right halves. Show slide count. Progress bar at bottom.
- **Responsive**: Must work on desktop and mobile. Use Tailwind breakpoints.
- **Back link**: "Torna all'articolo" link in top-left pointing to `/articles/[slug]`.
- **Language**: All content in Italian (matching the article language).

### Color Palette

Use the dark presentation theme — consistent across all presentations:

```
Background:    #0f172a (slate-900)
Text primary:  #e2e8f0 (slate-200)
Text muted:    #94a3b8 (slate-400)
Accent:        #a78bfa (purple-400) — for highlights, flowchart nodes, active elements
Accent dim:    rgba(167, 139, 250, 0.2) — for backgrounds, inactive elements
Code bg:       rgba(30, 41, 59, 0.8) — for code blocks
Borders:       #334155 (slate-700)
Success/green: #34d399
Warning/amber: #fbbf24
Error/red:     #f87171
```

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

### What to avoid

- **Bullet-point walls**: If you find yourself writing 5 bullet points on a slide, stop. Can it be a flowchart? A diagram? A single bold statement?
- **Article summary**: The presentation is not a summary. It's a **visual companion** that adds a new dimension.
- **Generic visuals**: Every SVG should be designed for that specific content. No placeholder icons or decorative shapes without meaning.
- **Text-heavy slides**: If a slide has more than ~30 words of body text, it's too much. Rethink the layout.

## Verify

After building:

1. Check that the page compiles — run `pnpm build` or at minimum check for TypeScript errors
2. Verify slide count is 8-15
3. Confirm every SVG uses viewBox and is responsive
4. Check that animations use staggered delays so content reveals progressively
5. Ensure "Torna all'articolo" link points to the correct slug
6. Verify the "Inizia presentazione" button appears on the article page
