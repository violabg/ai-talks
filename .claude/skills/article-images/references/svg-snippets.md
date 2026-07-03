# SVG Snippet Library

Reusable SVG snippets for inline diagrams. All hex values correspond to the **light mode** Design Tokens table in the main SKILL.md. For dark mode, swap to [dark-palette.md](dark-palette.md).

## Arrow marker definition (top of `<defs>`)

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

## Standard box / node

```svg
<!-- fill: --pres-border lightened (#e2e8f0), stroke: --pres-border (#cbd5e1), text: --pres-text-sub (#334155) -->
<rect x="50" y="50" width="160" height="60" rx="8" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5"/>
<text x="130" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#334155">Label</text>
```

## Highlighted / primary box

```svg
<!-- fill: --pres-accent-dim (#ede9fe), stroke: --pres-accent (#7c3aed), text: accent dark -->
<rect x="50" y="50" width="160" height="60" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="130" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#5b21b6" font-weight="600">Label</text>
```

## Connection line with arrow

```svg
<!-- stroke: --pres-muted (#94a3b8) -->
<line x1="210" y1="80" x2="280" y2="80" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)"/>
```

## Caption at bottom

```svg
<!-- fill: --pres-muted (#64748b) -->
<text x="400" y="430" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#64748b">Caption describing the diagram</text>
```

## Diamond (decision node)

```svg
<!-- fill: warning dim, stroke: --pres-warning (#d97706) -->
<polygon points="400,200 460,240 400,280 340,240" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="400" y="245" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#92400e">Decision?</text>
```
