# Flowcharts, Diagrams, and Connecting Lines

Connectors between boxes (arrows, flow lines) are the most bug-prone part of any SVG diagram. Internalize these pitfalls before writing a single path.

Before drawing connectors, make the box layout stable: boxes on a predictable grid, enough width/height for labels, same gap rhythm horizontally and vertically. Clean spacing is not cosmetic — it's what keeps arrows legible and unambiguous.

## Pitfall 1 — `linearGradient` on horizontal or vertical paths

SVG `<linearGradient>` defaults to `gradientUnits="objectBoundingBox"`. For a path like `M 302 110 L 496 110` the bounding box has **zero height** → gradient collapses → stroke renders **completely invisible** (even though arrowhead markers still render, which misleads you).

**Rule:** no gradient strokes for horizontal/vertical connector lines. Solid colors only:

```tsx
// ❌ Invisible — bbox collapses to 0 height
<motion.path d="M302 110 L 496 110" stroke="url(#my-gradient)" strokeDasharray="8 8" />

// ✅ Visible
<motion.path d="M302 110 L 496 110" stroke="var(--pres-accent)" strokeDasharray="8 8" />
```

If you truly need a gradient on a straight line, set `gradientUnits="userSpaceOnUse"` with explicit `x1/y1/x2/y2` in viewBox coordinates.

## Pitfall 2 — Motion's `pathLength` animation destroys `strokeDasharray`

When you animate `pathLength` 0→1 on a `motion.path`, Motion internally sets `stroke-dasharray="1 1"` + `pathLength="1"` to drive the draw-in effect. Any `strokeDasharray` prop you set is **overwritten** → path renders as continuous solid line or invisible dashes.

**Rule:** pick one:

- Draw-in effect, solid line → animate `pathLength`, omit `strokeDasharray`.
- Dashed line, fade-in → animate `opacity` only, keep `strokeDasharray`.

```tsx
// ❌ Dashes disappear — pathLength wins
<motion.path strokeDasharray="8 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />

// ✅ Dashes preserved
<motion.path strokeDasharray="8 8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
```

## Pitfall 3 — Arrow markers need explicit `fill` and matching `refX`

Arrowheads via `<marker>` only show if the marker's `<path>` has a solid `fill` (not inherited) and `refX/refY` position the tip at the path endpoint. One marker per color — markers don't inherit stroke color.

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

The line itself must stay clearly visible, not just the arrowhead. Connector is broken if marker shows but stroke is faint, collapsed, hidden behind other shapes, or pointing wrong.

## Pitfall 4 — Endpoints must sit outside the box, not on the edge

If a connector starts/ends exactly on a box border coordinate, the arrowhead is hidden under the rectangle stroke. Leave 4–8px gap. Box at `x=500, width=280` (right edge 780) → incoming arrow ends at `x=496`, not `x=500`.

## Pitfall 5 — Plan the layout on a grid before drawing paths

Do not improvise connector coordinates. Before writing paths:

1. Lay boxes on a simple grid (e.g. 2×2 at `x=40/500`, `y=50/220`).
2. Compute each box's four anchor points (top/right/bottom/left midpoints).
3. Draw connectors as straight horizontal/vertical segments between anchors, or L-shapes with a single bend.

Diagonal connectors between misaligned boxes look messy and read poorly. Align boxes first, lines become trivial.

## Verification workflow for any diagram slide

A diagram that compiles is not a diagram that works. Always:

1. Open the slide in the browser preview.
2. **Take a screenshot and look at it.** Do not trust DOM inspection alone — gradients, markers, dasharrays can all report "correct" while rendering as invisible.
3. For every connector, confirm both the line **and** the arrowhead are visible, and the arrowhead points at the intended box.
4. For every labeled box, confirm title + body text stay fully inside the box with comfortable padding, and no child text overlaps headings/borders.
5. If multiple peer boxes: confirm layout still reads as a deliberate grid with uniform gaps unless there's a strong content reason.
6. If something is missing, check in order: (a) gradient/bbox issue, (b) `pathLength` vs `strokeDasharray` conflict, (c) marker fill color, (d) endpoint hidden under a box edge.
