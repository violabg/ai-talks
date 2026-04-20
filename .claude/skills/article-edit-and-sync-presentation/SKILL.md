---
name: article-edit-and-sync-presentation
description: "Edit an MDX article and then keep its presentation in sync. Use this skill whenever the user wants to edit, rewrite, condense, restructure, or add sections to an article in content/articles/ — the skill handles both the article edits AND the presentation update in one pass. Also triggers when an article was just edited and the presentation needs catching up. If the article slug isn't clear from context, ask before proceeding. Do NOT ask for confirmation before syncing the presentation after editing — just do it."
---

# Article Edit and Sync Presentation

When an MDX article needs editing, this skill handles both steps: apply the requested changes to the article, then update the presentation slides to stay in sync. The two steps are always done together — never edit the article without also updating the presentation (if one exists).

## Step 1: Identify the Article

If the article slug isn't clear from context, ask the user which article to edit. Articles live in `content/articles/*.mdx`.

Once you have the slug, check in parallel:
- The MDX article (`content/articles/[slug].mdx`)
- Whether a presentation exists at `src/app/articles/[slug]/presentazione/`

## Step 2: Edit the Article

Read the full MDX article, then apply the changes the user requested. This may include:
- Rewrites or condensations
- Adding, removing, or restructuring sections
- Fixing content, improving clarity, updating technical details
- Any other editorial changes

Apply the edits directly. Don't ask for step-by-step approval — make the changes and move on.

## Step 3: Check for a Presentation

If no presentation exists at `src/app/articles/[slug]/presentazione/`, stop here — there's nothing to sync. Tell the user the article was updated but no presentation was found.

If a presentation exists, continue to Step 4.

## Step 4: Read the Presentation

Read all slide files in `src/app/articles/[slug]/presentazione/` — including `slide-shared.tsx` (per-article helpers — varies, commonly exports things like `SlideFrame`, `SlideHeading`, `GlowCard`, a `fadeIn()` variant builder, and a tags array), `slides.tsx`, every `slide-NN-*.tsx`, and `speech.json` if present.

Build a mental map of:

- **Article structure after edits**: sections, key concepts, narrative arc, what changed
- **Current slides**: one-line summary of each slide's topic and what visual it contains
- **Mapping**: which slide corresponds to which part of the article
- **Shared helpers available**: which helpers this presentation's `slide-shared.tsx` exposes, so you reuse them instead of reinventing layout/animation primitives

## Step 5: Diff and Plan

Compare the updated article against the current slides. Identify:

### Slides that need updating

A slide needs updating when the article section it covers has changed in meaning, scope, or emphasis — not just wording. If the visual (SVG, diagram, flowchart) is still accurate but the label or caption text changed, that's a text update. If the article restructured a concept entirely, the visual may need rebuilding.

### Slides to remove

Remove a slide when the article section it covered no longer exists or has been folded into another section. Don't keep slides that have no anchor in the updated article.

### Slides to add

Add a slide when the article now covers a concept that has no slide representation yet, and that concept is visual/important enough to warrant one. Follow the vocabulary from the `article-presentation` skill: flowchart, diagram, comparison, statement, code spotlight, key points, etc.

### Slides to leave alone

If a slide's content is still accurate and its visual still reflects the article, leave it untouched. Prefer not touching the `slide-shared.tsx` palette or `slides.tsx` navigation logic unless you're adding/removing slides from the array.

## Step 6: Apply Presentation Changes

Make the changes directly. Do not ask the user whether to proceed.

### Rules to preserve

**Keep the visual identity intact:**

- Use the theme-aware `var(--pres-*)` CSS variables from `src/app/globals.css` (e.g. `var(--pres-accent)`, `var(--pres-text)`, `var(--pres-bg-card)`) — these are the single source of truth for presentation colors. Do not hardcode hex values or introduce a parallel palette.
- Reuse whatever helpers this presentation's `slide-shared.tsx` already exports (layout frames, headings, cards, `fadeIn()`-style motion variants). Don't introduce new primitives if an existing one fits.
- Animations are built on `motion/react` and `motion/react-client` with staggered delays — match the existing rhythm rather than inventing new easing/timing.
- The navigation, progress bar, header, narration toggle, and slide transitions all come from `PresentationShell` (`src/components/presentation/presentation-shell.tsx`). Slide components are **only responsible for their own visual content** — never try to re-implement chrome inside a slide.

**When updating a slide:**

- Update text content to match the new article
- If the visual metaphor is still valid (e.g. a pipeline diagram that gained one extra step), extend it rather than replacing it
- If the visual metaphor no longer makes sense, rebuild the slide from scratch

**When adding a slide:**

- Create a new file: `slide-NN-[concept].tsx` with the appropriate number in sequence
- Follow the same component structure as existing slides (named export, reuses `slide-shared.tsx` helpers where they fit, Tailwind layout, `motion/react-client` for entrance animations)
- Add it to the `slides` array in `slides.tsx` in the right position (matching article order), importing its named export and giving the entry a stable `key`

**When removing a slide:**

- Delete the file
- Remove its import and array entry from `slides.tsx`
- Renumber remaining slide files if gaps would be confusing (optional, use judgment)

**When narration exists (`speech.json` present):**

- Keep the `speech.json` array length in sync with the slides array. Add an entry (even `{ "text": "" }`) when you add a slide; remove the corresponding entry when you delete one; rewrite the entry when a slide's meaning changes materially.

### Slide numbering after removals/additions

After any add or remove, update `slides.tsx` to reflect the new array. You don't need to rename files for minor gaps (e.g. slide-03 deleted, slide-04 stays as is), but if the total count changes significantly, renaming for clarity is fine.

## Step 7: Verify

After making changes, do a quick sanity check:

- Does every slide in `slides.tsx` have a corresponding file?
- Does every new or updated slide use `COLORS` from `slide-shared.tsx`?
- Does the slide order in `slides.tsx` match the article's narrative flow?
- Are there any orphaned imports or missing imports in `slides.tsx`?

Report back to the user with a brief summary: what was changed in the article, and which slides were updated, removed, or added in the presentation.
