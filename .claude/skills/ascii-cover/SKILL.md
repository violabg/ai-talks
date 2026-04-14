---
name: ascii-cover
description: Generate a colored ASCII art React component as cover art for an article card. Use this skill whenever the user asks for an ASCII cover, ASCII art card image, text-art cover, or wants to create/update a cover component for an article. Also use when the user says "create a cover for [article]" or "generate card art for [article]".
---

# ASCII Cover Generator

Generate a React server component that renders colored ASCII art as a cover image for an article card. The art is topic-aware — it visually represents the article's subject using text characters, box-drawing glyphs, and color.

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

This is a **drawing of rubber ducks** — it tells a story, has personality, and uses simple ASCII characters (`/`, `\`, `_`, `~`, `<`, `>`, parentheses) to create recognizable shapes. but fill free to get creative with the characters you use, if you need them to improve the illustration!

**Design principles:**

1. **Draw objects and characters, not diagrams** — a robot face, an animal, a tool, a scene with depth. Think "tiny illustration" not "flowchart"
2. **Use basic ASCII characters creatively** — `/  \  _  |  (  )  <  >  ~  .  *  '  ^  =  -  o  O` are often enough to draw recognizable shapes. Box-drawing chars (`╭ ╮ │ ─`) are fine as accents but should not be the main visual
3. **Tell a visual story** — the art should have a subject (a character, object, or scene) that relates to the article topic. A duck reviewing code is more engaging than a box labeled "review"
4. **Add environmental details** — water ripples (`~~~~`), ground lines, shadows, motion lines, small decorative elements that give the scene life
5. **Include a short caption** — a 1-3 word label in muted color at the bottom to anchor the meaning
6. **Is compact** — roughly 20-30 columns wide, 7-11 rows tall (max 11 rows). It must fit inside a card without overwhelming the text content
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
2. **Uses box-drawing and special characters** — `│ ─ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼ ╭ ╮ ╰ ╯ ═ ║ ╔ ╗ ╚ ╝ ▓ ░ ▒ █ ● ○ ◆ ◇ ► ◄ ▲ ▼ ⬡ ⚡ ⟡ ✦ ⊕ ⊗` and similar
3. **Is compact** — roughly 20-28 columns wide, 8-11 rows tall (max 11 rows). It must fit inside a card without overwhelming the text content
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
- **`aria-hidden="true"`** — the art is decorative, not content
- **`select-none`** — prevent accidental text selection
- **`font-mono text-xs leading-tight`** — use the project's monospace font at small size, this is applyed globally in the card, so no need to repeat here
- **Centered**: The `<pre>` must have `mx-auto w-fit` so the ASCII art is horizontally centered within the card
- **Background**: `bg-muted/30 dark:bg-muted/20` gives a subtle tinted panel that works in both themes. Use `py-4` for vertical padding (no horizontal padding — the centering handles it), this is also applied globally in the card so no need to repeat here
- **No hardcoded colors** — use only Tailwind CSS utility classes that reference CSS custom properties

### Alignment (critical)

Vertical lines in box-drawing frames **must** align across all lines. The most common bug is misaligned closing `│` characters because the character count per line is inconsistent.

**How to verify alignment:**

1. Pick a fixed width for every line inside a box frame (e.g., 26 characters)
2. For each line, concatenate all string literals across all `<span>` elements
3. Count the characters — every line with a left `│` and right `│` must be **exactly** the same total width
4. Watch out for: multi-byte Unicode characters that look like 1 char but render wider, inconsistent spacing around labels of different lengths, and off-by-one from variable-width content

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
- [ ] The `<pre>` has `mx-auto w-fit` for centering
- [ ] Art looks good at `text-xs` in a ~300px wide card
- [ ] All colors use Tailwind classes (no inline `style` with hardcoded hex/oklch)
- [ ] The component has no `"use client"` directive
- [ ] `aria-hidden="true"` is set on the wrapper
- [ ] The slug entry is added to `src/components/covers/index.ts`
- [ ] The art is topically relevant to the article

### Step 4: Verify in browser (mandatory)

After writing the component and adding the registry entry, **always check the result in the browser**:

1. Make sure the dev server is running (`pnpm dev`)
2. Open the homepage or articles page in Chrome using the browser automation tools
3. Find the article card with the new cover and visually verify:
   - The ASCII art renders correctly with proper alignment
   - Colors look good in both light and dark themes (toggle the theme to check)
   - The illustration is recognizable and conveys the article topic
   - The art fits well within the card without overflow or awkward spacing
4. If anything looks off, fix the component and re-check in the browser

**Do not consider the cover done until it has been visually verified in the browser.**
