---
name: article-images
description: "Generate SVG images, diagrams, flowcharts, and cover art for MDX articles to improve reader comprehension and visual appeal. Use this skill whenever the user wants to add images to an article, generate a cover/poster image for the article card, create diagrams or flowcharts to explain concepts, improve visual presentation of content, or says things like 'add images', 'illustrate this article', 'make a diagram for', 'create a cover image'. Always use this skill when working with articles that have technical concepts that could benefit from visual explanation."
---

# Article Image Generator

Generate SVG visuals for MDX articles in this Next.js project: cover images for article cards, and inline diagrams/flowcharts where they genuinely help readers understand the content.

## Project Context

- Articles live in `content/articles/*.mdx`
- Images go in `public/images/articles/` and are referenced as `/images/articles/filename.svg`
- The `coverImage` field in frontmatter accepts a string (slug-style name, e.g. `"prompting"`)
- Images in MDX are standard markdown: `![alt text](/images/articles/filename.svg)`
- **Where covers actually show up:** The article card (`src/components/article-card.tsx`) renders an **ASCII-art cover** when one is registered in `src/components/covers/index.ts` (see the `ascii-cover` skill) — it does **not** render the `coverImage` SVG. The `coverImage` field is stored in frontmatter and is available for future use (e.g. OG images, article header hero art) but isn't displayed automatically today. Generate SVG cover art when the user wants a proper SVG asset tied to the article; point them at the `ascii-cover` skill if what they actually want is card art.

## Design Tokens

SVG files served from `public/` are static and **cannot use CSS variables**. Use the hardcoded hex values below, which are derived directly from the `--pres-*` tokens defined in `src/app/globals.css`.

**Light mode palette** (default for SVGs):

| CSS variable (globals.css) | Hex value | Use in SVGs |
|---|---|---|
| `--pres-bg` | `#ffffff` | Full-page background |
| `--pres-bg-card` | `#f1f5f9` | SVG canvas background |
| `--pres-text` | `#0f172a` | Primary text / headings |
| `--pres-text-sub` | `#334155` | Secondary text |
| `--pres-muted` | `#64748b` | Labels, captions, body text |
| `--pres-accent` | `#7c3aed` | Primary accent (arrows, key nodes, highlights) |
| `--pres-accent-dim` | `rgba(124, 58, 237, 0.12)` → `#ede9fe` | Highlighted box fill |
| `--pres-border` | `#cbd5e1` | Box strokes, dividers |
| `--pres-warning` | `#d97706` | Decision node stroke |

**Dark mode palette** (use when generating a dark-themed SVG):

| CSS variable (globals.css) | Hex value | Use in SVGs |
|---|---|---|
| `--pres-bg` | `#0f172a` | Full-page / canvas background |
| `--pres-bg-card` | `#0b1222` | Card/surface background |
| `--pres-text` | `#e2e8f0` | Primary text |
| `--pres-text-sub` | `#cbd5e1` | Secondary text |
| `--pres-muted` | `#94a3b8` | Labels, captions |
| `--pres-accent` | `#a78bfa` | Primary accent |
| `--pres-border` | `#334155` | Box strokes, dividers |

When the project's `globals.css` changes (e.g. the `--primary` hue shifts), re-derive these hex values from the `--pres-*` tokens before generating new SVGs.

## Workflow

### Step 1: Read and analyze the article

Read the full article. Identify:

1. **Cover image need**: Every article benefits from a cover image — it creates visual identity for the article card. Generate one unless the user explicitly says not to.

2. **Inline diagram opportunities**: Look for concepts that are genuinely clearer with a visual than with text alone. Good candidates:
   - Architecture or system diagrams ("how X talks to Y")
   - Before/after comparisons ("bad pattern vs. good pattern")
   - Step-by-step flows or pipelines
   - Hierarchies, trees, or module structures
   - Decision flowcharts
   
   Skip sections where text is self-sufficient. A table of numbers doesn't need a chart. A simple list of steps is often clearer as text. Only create images that make the reader's job easier.

### Step 2: Generate the cover SVG

The cover image represents the article's identity. It appears on the article card and in the article header.

**Dimensions**: 800×450 (16:9)

**Design principles**:
- Use the project's purple primary accent (`--pres-accent` → `#7c3aed`) as the dominant accent
- Dark background for impact (`--pres-bg` dark → `#0f172a`), or light background (`--pres-bg-card` → `#f1f5f9`)
- Include the article's topic visually — an abstract representation, an icon, a pattern, or a minimal diagram that captures the subject
- Add the article title or a key phrase as text (optional — sometimes a purely visual image is more compelling)
- Keep it clean and modern. Look at the existing SVG style in `public/images/articles/arch-*.svg` for reference on the technical illustration style.
- Consider: geometric patterns, abstract shapes that represent the concept (e.g., interconnected nodes for "agents", branching paths for "workflows", layered rectangles for "architecture")

**Filename**: `[article-slug]-cover.svg`

**After generating**: Update the MDX frontmatter to add/update `coverImage: "[article-slug]-cover"` (just the slug, no extension, no path prefix).

### Step 3: Generate inline diagrams

For each identified visual opportunity, generate an SVG file.

**Dimensions**: 800×450 is a good default for horizontal diagrams. For tall flowcharts, 600×700 or similar is fine. Match the content's natural shape.

**SVG style guide** — use the hex values from the Design Tokens table above (sourced from `globals.css`):
- Background: `--pres-bg-card` (`#f1f5f9` light / `#0b1222` dark)
- Boxes/cards: `#e2e8f0` fill (`--pres-border` lightened), `--pres-border` stroke (`#cbd5e1`), `rx="8"` for rounded corners
- Primary accent: `--pres-accent` (`#7c3aed`) for highlighted elements, arrows, key nodes
- Text: `--pres-text-sub` (`#334155`) for headings, `--pres-muted` (`#64748b`) for body/labels; monospace for code identifiers
- Fonts: `font-family="monospace"` for code-related labels, `font-family="sans-serif"` for regular text
- Arrows: Use `<marker>` with `markerEnd` for arrow tips
- Keep it simple — flat design, no gradients needed unless they add clarity

**For flowcharts**, use rectangles with rounded corners for steps, diamonds for decisions, arrows connecting them.

**For architecture diagrams**, use rectangles as boxes/modules, lines or arrows for connections, group related elements visually.

**For before/after comparisons**, split the canvas in two halves with a subtle divider.

**After generating each diagram**: Insert a markdown image reference at the right place in the MDX, right after the paragraph or heading that introduces the concept the diagram illustrates.

```markdown
![Description of what the image shows](/images/articles/[slug]-[concept].svg)
```

The alt text should describe what the image shows, not just label it. "Struttura modulare della codebase — ogni modulo ha un'interfaccia chiara" is better than "Diagram 1".

### Step 4: Review what you generated

After generating everything, do a quick self-check:
- Does each image actually add value, or does it just restate what the text already says clearly?
- Is the alt text descriptive and helpful?
- Did you update the frontmatter for the cover image?
- Are image references placed at the right spots in the MDX (after the text they illustrate, not before)?

If an image you generated isn't adding value, remove it and the reference from the MDX rather than leaving mediocre visuals.

## SVG Patterns Reference

All hex values below correspond to the Design Tokens table (light mode). See that table when working in dark mode.

### Arrow marker definition (reuse at top of SVG's `<defs>`)
```svg
<defs>
  <!-- --pres-muted (#94a3b8) for neutral arrows -->
  <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
  </marker>
  <!-- --pres-accent (#7c3aed) for emphasis arrows -->
  <marker id="arrow-primary" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#7c3aed"/>
  </marker>
</defs>
```

### Standard box/node
```svg
<!-- fill: --pres-border lightened (#e2e8f0), stroke: --pres-border (#cbd5e1), text: --pres-text-sub (#334155) -->
<rect x="50" y="50" width="160" height="60" rx="8" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5"/>
<text x="130" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#334155">Label</text>
```

### Highlighted/primary box
```svg
<!-- fill: --pres-accent-dim (#ede9fe), stroke: --pres-accent (#7c3aed), text: accent dark -->
<rect x="50" y="50" width="160" height="60" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="130" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#5b21b6" font-weight="600">Label</text>
```

### Connection line with arrow
```svg
<!-- stroke: --pres-muted (#94a3b8) -->
<line x1="210" y1="80" x2="280" y2="80" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)"/>
```

### Caption at bottom
```svg
<!-- fill: --pres-muted (#64748b) -->
<text x="400" y="430" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#64748b">Caption describing the diagram</text>
```

### Diamond (decision node)
```svg
<!-- fill: warning dim, stroke: --pres-warning (#d97706) -->
<polygon points="400,200 460,240 400,280 340,240" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="400" y="245" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#92400e">Decision?</text>
```
