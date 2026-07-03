---
name: ascii-cover
description: "Manual skill for generating a colored ASCII art React component for an article card. Invoke explicitly for ASCII card art; SVG article assets belong to article-images."
disable-model-invocation: true
---

# ASCII Cover Generator

Generate a React server component that renders colored ASCII art as a cover image for an article card. The art is topic-aware — it visually represents the article's subject using text characters, box-drawing glyphs, and color.

## Manual Invocation

- **TRIGGER:** Run only when the user explicitly invokes this skill for an ASCII article-card cover.
- **CHECKPOINT:** Ask for style selection unless the user already chose illustrative or technical.
- **BOUNDARY:** Create/update one cover component and registry entry; do not generate SVG assets or presentation slides.
- **VERIFY:** Geometry and alignment matter before style.

## Skill System Contract

This is a **specialist module** inside the article workflow.

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

- Mandatory style selection checkpoint (illustrative vs technical) unless user already specified it.

### Boundaries

- Do not generate SVG files in `public/images/articles/`.
- Do not update presentation slides.
- Do not rewrite article text.

## Before you start

If the user did not specify which article to generate a cover for, **ask them**. Do not generate a cover for a random article. List available articles from `content/articles/*.mdx` and let them choose.

## Architecture

### File location

Each cover lives at:

```
src/components/covers/{slug}.tsx
```

The component is a named export matching the slug in PascalCase. For example, `testing-feedback-loop-agenti-ai` exports `TestingFeedbackLoopAgentiAi`.

### Cover registry

A barrel file at `src/components/covers/index.ts` maps slugs to lazy-loaded components:

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

When adding a new cover, add its entry to this registry. Create the file if it doesn't exist yet.

### Integration with ArticleCard

The `ArticleCard` component in `src/components/article-card.tsx` already renders covers. No changes needed — just add the cover component and registry entry.

## Generating the ASCII art component

### Step 1: Understand the article

Read the article's MDX file from `content/articles/{slug}.mdx`. Identify:

- The main topic (e.g., testing, refactoring, CLI tools, multi-model orchestration)
- 2-3 key visual concepts that could be represented visually
- The general mood (technical, playful, architectural, whimsical, etc.)

### Step 1.5: Ask the user which style they want

Before designing the art, **ask the user** which style they prefer for this specific article. Present the two options:

1. **Illustrative** — a hand-drawn-looking picture of an object, character, or scene (e.g., rubber ducks, a robot, a caterpillar). More artistic and playful.
2. **Technical** — a structured diagram with box-drawing characters (e.g., terminal windows, flowcharts, module diagrams). More precise and schematic.

If the user already specified a style in their original request, skip this question.

### Step 2: Design the ASCII art

Follow the guidelines for the chosen style below.

---

#### Style A: Illustrative

**Think illustration, not diagram.** The goal is to draw a small picture — a character, an object, a scene — not a technical schematic with boxes and arrows. The best covers look like tiny hand-drawn illustrations made of text characters.

**Good example** (the rubber duck cover):

```
      __
    <(o )____A
     (  ._>  /       __
  ~~~~`-----'~~~~  <(o )____A
          ~~~~~~    (  ._>  /
                 ~~~~`-----'~~~~
      dual-model review
```

This is a **drawing of rubber ducks** — it tells a story, has personality, and uses simple ASCII characters (`/`, `\`, `_`, `~`, `<`, `>`, parentheses) to create recognizable shapes. Feel free to get creative with the characters you use if they improve the illustration.

Character selection is intentionally model-driven: choose the symbols that best express the topic and the chosen style. You are not restricted to a fixed character set when a different set improves clarity or aesthetics.

**Design principles:**

1. **Draw objects and characters, not diagrams** — a robot face, an animal, a tool, a scene with depth. Think "tiny illustration" not "flowchart"
2. **Use the most suitable characters for the concept** — basic ASCII is often enough, but you may freely use box-drawing or other Unicode symbols when they improve legibility, style, or topic fit
3. **Tell a visual story** — the art should have a subject (a character, object, or scene) that relates to the article topic. A duck reviewing code is more engaging than a box labeled "review"
4. **Add environmental details** — water ripples (`~~~~`), ground lines, shadows, motion lines, small decorative elements that give the scene life
5. **Include a short caption** — a 1-3 word label in muted color at the bottom to anchor the meaning
6. **Fits the card gracefully** — choose width/height dynamically based on the concept and detail level; avoid hard caps and optimize for visual balance without overwhelming article metadata
7. **Has visual weight balance** — not too dense, not too sparse. Leave breathing room around the subject

**Topic inspiration (illustrative):**

- **Testing / feedback loops**: A bug under a magnifying glass, a lab flask bubbling, a cat batting at a failing test
- **CLI tools**: A rubber duck at a terminal, a wizard casting commands, a toolbox with tools spilling out
- **Architecture / patterns**: A tower of building blocks, a bridge between islands, a tree with branching roots
- **Refactoring / migration**: A caterpillar becoming a butterfly, a house being renovated, before/after sketches
- **Orchestration / multi-model**: A conductor with a baton, birds flying in formation, a puppet master with strings
- **Configuration / setup**: A control panel with levers, a key fitting a lock, a compass pointing north
- **AI agents**: A robot with a thought bubble, a brain with lightning, an octopus juggling tools
- **General**: Animals, space scenes, weather, landscapes, everyday objects — anything that creates a visual metaphor for the topic

---

#### Style B: Technical

**Think structured schematic.** The goal is a clean, precise diagram using box-drawing characters — terminal windows, flowcharts, module layouts. These covers feel informational and developer-oriented.

**Design principles:**

1. **Is visually recognizable** — someone should glance at it and get a sense of the article topic
2. **Uses the character language that best communicates structure** — box-drawing and symbolic glyphs are encouraged, but not mandatory; pick what best matches the topic
3. **Fits the card gracefully** — choose dimensions dynamically based on topic complexity and readability, rather than fixed width/height limits
4. **Has visual weight balance** — not too dense, not too sparse

**Topic inspiration (technical):**

- **Testing / feedback loops**: Terminal output with checkmarks/crosses, test runner UI, circular arrows
- **CLI tools**: Terminal window frame with prompt and output, command pipeline
- **Architecture / patterns**: Module boxes connected by arrows, layered stack diagram
- **Refactoring / migration**: Before→after diff view, transformation arrows
- **Orchestration / multi-model**: Network of connected nodes, message passing diagram
- **Configuration / setup**: Config file snippet, toggle switches, slider bars
- **AI agents**: Robot/brain icon, thought bubbles, tool invocation chains

---

### Step 3: Write the component

The component structure:

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

- **Server component** — no `"use client"` directive needed
- **`aria-hidden`, `select-none`, `font-mono text-xs leading-tight`, tinted background, vertical padding, and horizontal centering** are all applied by the cover wrapper in `ArticleCard` (`src/components/article-card.tsx`). Your component only needs to return the `<pre>` with the art — do **not** duplicate those wrapper styles. At time of writing the wrapper uses `bg-muted/30 dark:bg-black/50 -mx-6 -mt-6 mb-4 py-4 rounded-t-xl min-h-50 overflow-hidden font-mono text-xs leading-tight select-none` with `aria-hidden="true"`; if you need to sanity-check, open that file.
- **Centered**: The `<pre>` must still carry `mx-auto w-fit` so the ASCII art is horizontally centered inside the wrapper.
- **Height limit**: The ASCII art must be **max 11 rows total** (count every rendered line, including optional caption lines).
- **Border color consistency**: If you draw a box or connected structural lines that contain text/content, keep the entire border/connector path in one consistent border color class (for example `text-primary`) across all connected rows. Inner content can use different colors, but the border color must not change along the same box/line network.
- **No hardcoded colors** — use only Tailwind utility classes that map to the project's CSS custom properties (see Color palette below). Never inline hex or oklch values.

### Alignment (critical)

Vertical lines in box-drawing frames **must** align across all lines. The most common bug is misaligned closing `│` characters because the character count per line is inconsistent.

### Precision standards (mandatory)

Accuracy is a first-class requirement. Prioritize geometric correctness before stylistic flourish.

- **Symmetry**: When the concept is symmetric (faces, icons, framed compositions), left/right structure must mirror correctly around a clear center axis.
- **Horizontal alignment**: Rows that represent the same structural level must share consistent left and right boundaries.
- **Spacing integrity**: Use deliberate spacing; avoid accidental double/trimmed spaces that shift the drawing.
- **Baseline consistency**: Labels/captions should sit on intentional baselines and not visually drift between rows.
- **Frame integrity**: Borders, corners, and connectors must join cleanly with no visual gaps.

If there is a trade-off between decorative detail and structural accuracy, prefer structural accuracy.

**How to verify alignment:**

1. Pick a fixed width for every line inside a box frame (e.g., 26 characters)
2. For each line, concatenate all string literals across all `<span>` elements
3. Count the characters — every line with a left `│` and right `│` must be **exactly** the same total width
4. Watch out for: multi-byte Unicode characters that look like 1 char but render wider, inconsistent spacing around labels of different lengths, and off-by-one from variable-width content

**How to verify symmetry and spacing:**

1. Identify the intended center axis (for symmetric compositions).
2. Compare mirrored segments left vs right for equal visual depth and spacing.
3. Ensure recurring columns (borders/connectors) appear at the same character positions across all relevant rows.
4. Re-check after color-span splitting; formatting should not alter geometry.

**Practical approach**: Write each line as a flat string first, count its length, verify all boxed lines match, and only then split into colored `<span>` elements.

### Color palette

Use these Tailwind classes that automatically adapt to dark/light theme:

| Class                      | Use for                                        |
| -------------------------- | ---------------------------------------------- |
| `text-primary`             | Main structural elements, borders, key symbols |
| `text-primary/60`          | Secondary structural elements                  |
| `text-muted-foreground`    | Background detail, less important text         |
| `text-muted-foreground/50` | Faint background elements, dots, shadows       |
| `text-foreground`          | High-contrast important text                   |
| `text-chart-1`             | Accent color 1 (warm amber)                    |
| `text-chart-2`             | Accent color 2 (green)                         |
| `text-chart-3`             | Accent color 3 (teal/cyan)                     |
| `text-chart-4`             | Accent color 4 (pink/magenta)                  |
| `text-chart-5`             | Accent color 5 (orange/red)                    |
| `text-accent-teal`         | Teal accent                                    |
| `text-accent-amber`        | Amber accent                                   |

Use 3-4 colors per cover — enough for visual interest, not so many it looks chaotic. Reserve `text-primary` for the main structure (borders, frames) and use chart/accent colors for the interesting content inside.

### Quality checklist

Before saving, verify:

- [ ] The art matches the **style the user chose** (illustrative or technical)
- [ ] If using framed/boxed lines, every line has the exact same character width (count them!)
- [ ] Every vertical line should be perfectly aligned with its counterparts on other lines
- [ ] Borders/connected structural lines keep a consistent border color across the whole shape/path
- [ ] Symmetric subjects are truly symmetric around the intended axis
- [ ] Horizontal boundaries and baselines are consistent across related rows
- [ ] Spacing is intentional (no accidental shifts caused by extra/missing spaces)
- [ ] The `<pre>` has `mx-auto w-fit` for centering
- [ ] The art uses **no more than 11 rows** in total
- [ ] Art looks good at `text-xs` in a ~300px wide card
- [ ] All colors use Tailwind classes (no inline `style` with hardcoded hex/oklch)
- [ ] The component has no `"use client"` directive
- [ ] `aria-hidden="true"` remains set on the wrapper in `ArticleCard` (no changes needed in the cover component)
- [ ] The slug entry is added to `src/components/covers/index.ts`
- [ ] The art is topically relevant to the article

### Step 4: Verify in browser (mandatory)

After writing the component and adding the registry entry, **always check the result in the browser**:

1. Make sure the dev server is running (`pnpm dev`)
2. Open the homepage or articles page in Chrome using the browser automation tools
3. Find the article card with the new cover and visually verify:
   - The ASCII art renders correctly with proper alignment

- Symmetry (when expected) is preserved and visually balanced
- Horizontal spacing and row baselines are consistent
- Colors look good in both light and dark themes (toggle the theme to check)
- The illustration is recognizable and conveys the article topic
- The art fits well within the card without overflow or awkward spacing

### Step 4.5: Mandatory geometry QA gate (new, required)

Before considering the cover approved, run this strict gate:

1. **Flat-line extraction**: rewrite each rendered row as a single flat string (after span splitting).
2. **Column map check**: for every structural column (`│`, `||`, box corners, connector trunks), record its character index and verify the same index is used on every row where that structure continues.
3. **Mirror check for illustrative symmetry**: when the subject is intended to be symmetric, compare left and right halves around the center axis row-by-row.
4. **Uneven-width check**: ensure all rows in the same structural block share intended width; no accidental trim/extra spaces.
5. **Theme parity check**: verify geometry in both light and dark themes (color can change perception; geometry must remain unchanged).
6. **First-review fail rule**: if any single geometry check above fails, the review is **failed** and must not be marked complete. Fix, reload, and re-run the full gate.

This gate is mandatory for every new or updated cover, including quick edits.

4. If anything looks off, fix the component and re-check in the browser

**Do not consider the cover done until it has been visually verified in the browser.**
**Do not consider the cover done until Step 4.5 passes in full.**
