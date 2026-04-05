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
- The article card (`src/components/article-card.tsx`) currently doesn't display `coverImage` — it shows text-only cards. You can update the card to show the cover image if asked, or just generate and save the image for future use.

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
- Use the project's purple primary color (`#7c3aed` in hex, or derive from it) as the dominant accent
- Dark background for impact, or light background that matches the site's muted gray (`#f1f5f9`)
- Include the article's topic visually — an abstract representation, an icon, a pattern, or a minimal diagram that captures the subject
- Add the article title or a key phrase as text (optional — sometimes a purely visual image is more compelling)
- Keep it clean and modern. Look at the existing SVG style in `public/images/articles/arch-*.svg` for reference on the technical illustration style.
- Consider: geometric patterns, abstract shapes that represent the concept (e.g., interconnected nodes for "agents", branching paths for "workflows", layered rectangles for "architecture")

**Filename**: `[article-slug]-cover.svg`

**After generating**: Update the MDX frontmatter to add/update `coverImage: "[article-slug]-cover"` (just the slug, no extension, no path prefix).

### Step 3: Generate inline diagrams

For each identified visual opportunity, generate an SVG file.

**Dimensions**: 800×450 is a good default for horizontal diagrams. For tall flowcharts, 600×700 or similar is fine. Match the content's natural shape.

**SVG style guide** — match the existing illustrations in this project:
- Background: `#f1f5f9` (light) or `#1e293b` (dark themed)
- Boxes/cards: `#e2e8f0` fill, `#94a3b8` stroke, `rx="8"` for rounded corners
- Primary accent: `#7c3aed` (purple) for highlighted elements, arrows, key nodes
- Text: `#334155` (headings), `#64748b` (body/labels), monospace for code identifiers
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

### Arrow marker definition (reuse at top of SVG's `<defs>`)
```svg
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
  </marker>
  <!-- Purple arrow for emphasis -->
  <marker id="arrow-primary" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#7c3aed"/>
  </marker>
</defs>
```

### Standard box/node
```svg
<rect x="50" y="50" width="160" height="60" rx="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
<text x="130" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#334155">Label</text>
```

### Highlighted/primary box
```svg
<rect x="50" y="50" width="160" height="60" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="130" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#5b21b6" font-weight="600">Label</text>
```

### Connection line with arrow
```svg
<line x1="210" y1="80" x2="280" y2="80" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)"/>
```

### Caption at bottom
```svg
<text x="400" y="430" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#64748b">Caption describing the diagram</text>
```

### Diamond (decision node)
```svg
<polygon points="400,200 460,240 400,280 340,240" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="400" y="245" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#92400e">Decision?</text>
```
