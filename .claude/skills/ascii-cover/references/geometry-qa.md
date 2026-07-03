# Geometry-First QA Gate

Accuracy is a first-class requirement. Structural correctness beats stylistic flourish.

## Precision standards

- **Symmetry** — when concept is symmetric (faces, icons, framed compositions), left/right must mirror correctly around a clear center axis.
- **Horizontal alignment** — rows representing the same structural level must share consistent left/right boundaries.
- **Spacing integrity** — deliberate spacing; no accidental double/trimmed spaces.
- **Baseline consistency** — labels/captions on intentional baselines, no drift.
- **Frame integrity** — borders, corners, connectors join cleanly, no gaps.

If trade-off between decorative detail and structural accuracy → prefer accuracy.

## How to verify alignment

1. Pick a fixed width for every line inside a box frame (e.g., 26 chars).
2. Concatenate all string literals across all `<span>` elements per line.
3. Every line with left `│` and right `│` must be **exactly** the same total width.
4. Watch: multi-byte Unicode looking 1-char but wider, inconsistent spacing around variable labels, off-by-one from variable-width content.

## How to verify symmetry and spacing

1. Identify intended center axis (for symmetric compositions).
2. Compare mirrored segments left vs right for equal visual depth/spacing.
3. Ensure recurring columns (borders/connectors) appear at same character positions across relevant rows.
4. Re-check after color-span splitting; formatting must not alter geometry.

**Practical approach**: write each line as a flat string first, count length, verify all boxed lines match, only then split into colored `<span>` elements.

## Mandatory geometry QA gate

Before considering the cover approved, run this strict gate:

1. **Flat-line extraction** — rewrite each rendered row as single flat string (after span splitting).
2. **Column map check** — for every structural column (`│`, `||`, corners, connector trunks), record its character index and verify same index on every continuing row.
3. **Mirror check** for illustrative symmetry — compare left/right halves around center axis row-by-row.
4. **Uneven-width check** — all rows in same structural block share intended width; no trim/extra spaces.
5. **Theme parity check** — verify geometry in both light and dark themes (color changes perception; geometry must not change).
6. **First-review fail rule** — any single check fail = **failed** gate. Fix, reload, re-run full gate.

Mandatory for every new or updated cover, including quick edits.

## Browser evidence gate

DOM inspection is not enough — take a screenshot and look at it. Alignment bugs (invisible spaces, wrong monospace metrics) only show visually.

1. Dev server running (`pnpm dev`).
2. Open homepage/articles page in integrated browser.
3. Find the article card with the new cover.
4. Screenshot both light and dark theme.
5. Cover art renders with proper alignment, symmetry, spacing, colors, topic recognition, fits card without overflow.
6. Fix + re-check on any failure.
