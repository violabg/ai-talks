# Dark Mode Palette

Use when generating a dark-themed SVG. Values derived from `--pres-*` tokens in `src/app/globals.css`.

| CSS variable       | Hex value | Use in SVGs                    |
| ------------------ | --------- | ------------------------------ |
| `--pres-bg`        | `#0f172a` | Full-page / canvas background  |
| `--pres-bg-card`   | `#0b1222` | Card/surface background        |
| `--pres-text`      | `#e2e8f0` | Primary text                   |
| `--pres-text-sub`  | `#cbd5e1` | Secondary text                 |
| `--pres-muted`     | `#94a3b8` | Labels, captions               |
| `--pres-accent`    | `#a78bfa` | Primary accent                 |
| `--pres-border`    | `#334155` | Box strokes, dividers          |

When `globals.css` changes (e.g. `--primary` hue shift), re-derive these hex values from the `--pres-*` tokens before generating.
