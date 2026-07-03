---
name: ascii-cover
description: "Manual skill for generating a colored ASCII art React component for an article card. Invoke explicitly for ASCII card art; SVG article assets belong to article-images."
disable-model-invocation: true
---

# ASCII Cover Generator

Generate a React server component that renders colored ASCII art as an article-card cover. Art is topic-aware — visually represents the article subject using text characters, box-drawing glyphs, color.

## Leading words

- **geometry-first** — structural correctness (alignment, symmetry, spacing, frame integrity) beats stylistic flourish. Every design/verify decision cites geometry-first.
- **evidence-gated** — no cover is "done" until screenshot in integrated browser confirms alignment in both themes.

## Manual Invocation

- **TRIGGER:** Run only when the user explicitly invokes this skill for an ASCII article-card cover.
- **CHECKPOINT:** Ask for style selection unless the user already chose illustrative or technical.
- **BOUNDARY:** Create/update one cover component and registry entry; no SVG assets, no presentation slides.
- **VERIFY:** Geometry-first + evidence-gated. Every created or updated cover must open in the integrated browser.

## Skill System Contract

Specialist module inside the article workflow.

### Responsibility

- Create or update one ASCII cover component for one article slug
- Register the component in the cover registry

### Required input

```json
{
  "slug": "string",
  "articlePath": "content/articles/<slug>.mdx",
  "style": "illustrative | technical"
}
```

### Structured output (handoff)

```json
{
  "slug": "string",
  "componentPath": "src/components/covers/<slug>.tsx",
  "registryUpdated": true,
  "styleUsed": "illustrative",
  "verifiedInBrowser": true,
  "notes": ["Theme checked in light and dark mode"]
}
```

### Human checkpoint

- Mandatory style selection (illustrative vs technical) unless user already specified.

### Boundaries

- No SVG files in `public/images/articles/`.
- No presentation slide updates.
- No article-text rewrites.

## Before you start

If the user did not specify which article, **ask them**. Never generate for a random article. List available articles from `content/articles/*.mdx` and let them choose.

## Architecture

### File location

```
src/components/covers/{slug}.tsx
```

Named export = slug in PascalCase. Example: `testing-feedback-loop-agenti-ai` → `TestingFeedbackLoopAgentiAi`.

### Cover registry

Barrel at `src/components/covers/index.ts` maps slugs to lazy-loaded components:

```ts
import dynamic from "next/dynamic";

export const covers: Record<string, React.ComponentType> = {
  "testing-feedback-loop-agenti-ai": dynamic(() =>
    import("./testing-feedback-loop-agenti-ai").then((m) => ({
      default: m.TestingFeedbackLoopAgentiAi,
    })),
  ),
  // ... more entries
};
```

Add the new slug entry. Create the file if it doesn't exist.

### Integration with ArticleCard

`ArticleCard` in `src/components/article-card.tsx` already renders covers via the registry. No changes needed — just add the component + entry.

## Workflow

### Step 1 — Understand the article

Read `content/articles/{slug}.mdx`. Identify:

- Main topic (testing, refactoring, CLI, multi-model orchestration…)
- 2–3 key visual concepts
- Mood (technical, playful, architectural, whimsical…)

### Step 2 — Choose the style (branch)

Ask the user which style if not specified. Then load **only** the matching reference:

- **Illustrative** — hand-drawn-looking picture of an object/character/scene. Load [references/style-illustrative.md](references/style-illustrative.md).
- **Technical** — structured diagram with box-drawing characters. Load [references/style-technical.md](references/style-technical.md).

### Step 3 — Write the component

```tsx
export function MyArticleCover() {
  return (
    <pre className="whitespace-pre mx-auto w-fit">
      <span className="text-primary">{"╭──────────────────╮"}</span>
      {"\n"}
      <span className="text-primary">{"│"}</span>
      <span className="text-chart-2">{" ▶ running tests "}</span>
      <span className="text-primary">{"│"}</span>
      {/* ... more lines ... */}
    </pre>
  );
}
```

Key rules:

- **Server component** — no `"use client"`.
- **Wrapper styles live in `ArticleCard`** (`bg-muted/30 dark:bg-black/50 -mx-6 -mt-6 mb-4 py-4 rounded-t-xl min-h-50 overflow-hidden font-mono text-xs leading-tight select-none`, `aria-hidden="true"`). Do **not** duplicate them in the cover.
- **Centered**: `<pre>` must carry `mx-auto w-fit`.
- **Height limit**: max **11 rows** total (count every rendered line, including caption).
- **Border color consistency**: if drawing a box/connected structural lines around content, keep the entire border path in one consistent color class (e.g. `text-primary`) across all rows. Inner content can use other colors; the border network must not change color.
- **No hardcoded colors** — only Tailwind utility classes below. Never inline hex/oklch.

### Step 4 — Geometry-first verification

Alignment is the #1 failure mode. Follow the strict gate in [references/geometry-qa.md](references/geometry-qa.md) **before** claiming completion.

Summary of the gate:

1. Flat-line extraction + column map check.
2. Mirror check for symmetric subjects.
3. Uneven-width check (no stray spaces).
4. Theme parity check.
5. Screenshot in integrated browser (light + dark). DOM inspection alone is not enough.
6. Any check fails → gate fails → fix, reload, re-run.

## Color palette

Tailwind classes that adapt to dark/light theme:

| Class                      | Use for                                        |
| -------------------------- | ---------------------------------------------- |
| `text-primary`             | Main structural elements, borders, key symbols |
| `text-primary/60`          | Secondary structural elements                  |
| `text-muted-foreground`    | Background detail, less important text         |
| `text-muted-foreground/50` | Faint background elements, dots, shadows      |
| `text-foreground`          | High-contrast important text                   |
| `text-chart-1`             | Accent color 1 (warm amber)                    |
| `text-chart-2`             | Accent color 2 (green)                         |
| `text-chart-3`             | Accent color 3 (teal/cyan)                     |
| `text-chart-4`             | Accent color 4 (pink/magenta)                  |
| `text-chart-5`             | Accent color 5 (orange/red)                    |
| `text-accent-teal`         | Teal accent                                    |
| `text-accent-amber`        | Amber accent                                   |

3–4 colors per cover. Reserve `text-primary` for the main structure; use chart/accent colors for interesting inner content.

## Quality checklist

- [ ] Matches the **style the user chose**
- [ ] Every framed line has exact same character width (counted)
- [ ] Vertical lines aligned across rows
- [ ] Border/connector color consistent across the whole shape
- [ ] Symmetric subjects are truly symmetric around intended axis
- [ ] Horizontal boundaries and baselines consistent
- [ ] Spacing intentional (no accidental shifts)
- [ ] `<pre>` has `mx-auto w-fit`
- [ ] Max **11 rows** total
- [ ] Renders well at `text-xs` in a ~300px wide card
- [ ] Only Tailwind color classes (no inline hex/oklch)
- [ ] No `"use client"` directive
- [ ] Slug entry added to `src/components/covers/index.ts`
- [ ] Topically relevant
- [ ] Geometry-first gate ([references/geometry-qa.md](references/geometry-qa.md)) passed in both themes
