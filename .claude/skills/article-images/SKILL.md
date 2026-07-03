---
name: article-images
description: "Manual skill for generating SVG cover assets and inline diagrams for MDX articles. Invoke explicitly for article SVGs, not ASCII article-card covers."
disable-model-invocation: true
---

# Article Image Generator

Generate SVG visuals for MDX articles in this Next.js project: cover images for article cards, and inline diagrams/flowcharts where they genuinely help readers understand the content.

## Leading words

- **load-bearing visual** — every image must carry meaning the text alone cannot. If a diagram just restates the paragraph, delete it.
- **evidence-gated** — before "done", render the modified article in dev and screenshot each new SVG. Broken viewBox / invisible strokes are common and only show visually.

## Manual Invocation

- **TRIGGER:** Run only when the user explicitly invokes this skill for SVG article assets.
- **CHECKPOINT:** If scope is broad, propose the image list before generating files.
- **BOUNDARY:** Generate SVG files and MDX image references only; ASCII article-card covers belong to `ascii-cover`.
- **VERIFY:** Keep only load-bearing visuals; screenshot each generated SVG.

## Skill System Contract

Specialist module inside the article workflow.

### Responsibility

- Generate article-specific SVG assets
- Update the MDX article with image references and (when requested) `coverImage`

### Required input

```json
{
  "slug": "string",
  "articlePath": "content/articles/<slug>.mdx",
  "mode": "cover | inline | both",
  "theme": "light | dark | auto"
}
```

### Structured output (handoff)

```json
{
  "slug": "string",
  "generatedFiles": [
    "public/images/articles/<slug>-cover.svg",
    "public/images/articles/<slug>-pipeline.svg"
  ],
  "mdxUpdated": true,
  "insertedImageRefs": ["/images/articles/<slug>-pipeline.svg"],
  "coverImageValue": "<slug>-cover",
  "notes": ["Alt text added for all inserted diagrams"]
}
```

### Human checkpoint

- If the user asks broadly for visuals, propose the cover + inline diagram candidates before writing files.
- If more than 3 inline diagrams are proposed, ask the user to approve the list.
- If the article is short and diagrams add little value, propose skipping inline assets.

### Boundaries

- No presentation slide updates.
- No ASCII card cover components.
- No article-section restructuring unless needed to place images coherently.

## Project Context

- Articles: `content/articles/*.mdx`
- Images: `public/images/articles/`, referenced as `/images/articles/filename.svg`
- `coverImage` frontmatter accepts a slug-style string (e.g. `"prompting"`)
- Inline images: standard markdown `![alt text](/images/articles/filename.svg)`
- **Where covers show up today:** `src/components/article-card.tsx` renders an **ASCII cover** when the slug is registered in `src/components/covers/index.ts` (see `ascii-cover` skill). The `coverImage` SVG field is stored in frontmatter but **not** rendered in the card today. Generate SVG cover art when the user wants a proper SVG asset; point them at `ascii-cover` if what they actually want is card art.

## Design Tokens — Light mode (default)

SVGs served from `public/` are static and **cannot use CSS variables**. Use these hardcoded hex values, derived from the `--pres-*` tokens in `src/app/globals.css`.

| CSS variable                 | Hex value                              | Use in SVGs                                    |
| ---------------------------- | -------------------------------------- | ---------------------------------------------- |
| `--pres-bg`                  | `#ffffff`                              | Full-page background                           |
| `--pres-bg-card`             | `#f1f5f9`                              | SVG canvas background                          |
| `--pres-text`                | `#0f172a`                              | Primary text / headings                        |
| `--pres-text-sub`            | `#334155`                              | Secondary text                                 |
| `--pres-muted`               | `#64748b`                              | Labels, captions, body text                    |
| `--pres-accent`              | `#7c3aed`                              | Primary accent (arrows, key nodes, highlights) |
| `--pres-accent-dim`          | `rgba(124, 58, 237, 0.12)` → `#ede9fe` | Highlighted box fill                           |
| `--pres-border`              | `#cbd5e1`                              | Box strokes, dividers                          |
| `--pres-warning`             | `#d97706`                              | Decision node stroke                           |

For dark-themed SVGs, load [references/dark-palette.md](references/dark-palette.md).

For reusable SVG snippets (arrow markers, boxes, connections, captions, decision diamonds), load [references/svg-snippets.md](references/svg-snippets.md).

## Workflow

### Step 1 — Read and analyze the article

Read the full article. Identify:

1. **Cover image need**: A cover SVG can be a reusable asset for article branding. Generate one unless the user says not to. Remember: this SVG is **not** what the article card currently renders.

2. **Inline diagram opportunities** — apply the load-bearing test. Good candidates:
   - Architecture or system diagrams ("how X talks to Y")
   - Before/after comparisons
   - Step-by-step flows or pipelines
   - Hierarchies, trees, module structures
   - Decision flowcharts

   Skip where text is self-sufficient. A table of numbers doesn't need a chart. A simple list of steps is usually clearer as text. Only create images that make the reader's job easier.

### Step 2 — Generate the cover SVG

Reusable visual asset for the article's identity. Not automatically rendered in card/header today.

**Dimensions**: 800×450 (16:9).

**Design principles**:

- Purple primary accent (`--pres-accent` → `#7c3aed`) as dominant color
- Dark background for impact (`#0f172a`), or light (`#f1f5f9`)
- Represent the topic visually — abstract, icon, pattern, or minimal diagram
- Optionally include title or key phrase as text (sometimes purely visual is stronger)
- Clean, modern. Look at `public/images/articles/arch-*.svg` for style reference.
- Consider: geometric patterns, interconnected nodes for "agents", branching paths for "workflows", layered rectangles for "architecture"

**Filename**: `[article-slug]-cover.svg`

**After generating**: update MDX frontmatter `coverImage: "[article-slug]-cover"` (slug only, no extension/path).

### Step 3 — Generate inline diagrams

**Dimensions**: 800×450 default for horizontal diagrams. Tall flowcharts: 600×700 fine. Match content shape.

**SVG style guide** — hex values from the Design Tokens table:

- Background: `#f1f5f9` (light) / `#0b1222` (dark)
- Boxes: `#e2e8f0` fill, `#cbd5e1` stroke, `rx="8"` rounded
- Accent: `#7c3aed` for highlights, arrows, key nodes
- Text: `#334155` headings, `#64748b` body/labels; monospace for code identifiers
- Fonts: `font-family="monospace"` for code labels, `font-family="sans-serif"` for regular text
- Arrows: `<marker>` with `markerEnd`
- Flat design, no gradients unless they add clarity

**Flowcharts**: rounded rectangles for steps, diamonds for decisions, arrows connecting.
**Architecture diagrams**: rectangles for boxes/modules, lines/arrows for connections, group related elements.
**Before/after**: split canvas in two halves with a subtle divider.

Load [references/svg-snippets.md](references/svg-snippets.md) for reusable patterns.

**After generating each diagram**: insert a markdown image reference at the right spot in the MDX — right after the paragraph/heading that introduces the concept.

```markdown
![Description of what the image shows](/images/articles/[slug]-[concept].svg)
```

Alt text describes what the image shows, not just labels it. "Struttura modulare della codebase — ogni modulo ha un'interfaccia chiara" beats "Diagram 1".

### Step 4 — Evidence-gated review

After generating everything:

- Does each image actually add value, or restate the text? Apply load-bearing test again.
- Alt text descriptive and helpful?
- Frontmatter `coverImage` updated?
- Image references placed at right MDX spots (after the text they illustrate)?
- **Screenshot check**: open the modified article in the integrated browser and confirm each new SVG renders: viewBox correct, no invisible strokes, no collapsed gradients (see connectors pitfalls in `article-presentation`).

If an image isn't load-bearing → delete it and its MDX reference rather than leaving mediocre visuals.
