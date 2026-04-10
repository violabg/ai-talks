# AGENTS

## Commands

This project uses **pnpm** as the package manager.

No test runner is configured.

## Architecture

**AI Talks** — Next.js 16 App Router site publishing MDX articles about AI (Italian language).

### Content system

Articles live in [content/articles/](content/articles/) as `.mdx` files with YAML frontmatter:

```yaml
title, description, date, author, tags, published, featured?, coverImage?
```

- `date`: ISO datetime with explicit offset — e.g. `2026-03-30T16:30:00+02:00`
- `published: false` by default for new drafts
- In production, only `published: true` articles are visible; in dev, drafts show a Draft badge

`src/lib/articles.ts` handles all MDX file I/O (gray-matter), sorting, and static-params generation. Pages use `generateStaticParams()` + `dynamicParams: false`.

MDX compiled server-side via `next-mdx-remote/rsc`. MDX component overrides: `mdx-components.tsx` (root) and `src/components/mdx-components.tsx`.

### Article published/featured state (KV + frontmatter dual-source)

**Do not treat MDX frontmatter as the sole source of truth for `published`/`featured` in production.**

At runtime, `published` and `featured` flags are stored in **Upstash Redis** via `src/lib/kv.ts`. The KV store is optional — if `KV_REST_API_URL`/`KV_REST_API_TOKEN` are not set, it gracefully returns `null` and the system falls back to frontmatter. When editing article visibility logic, always account for both sources.

### Presentations

Each article can optionally have a presentation at `src/app/articles/[slug]/presentazione/` containing `page.tsx`, `slides.tsx`, individual `slide-XX-*.tsx` files, and optionally `speech.json` for narration.

### Styling

- **Tailwind CSS v4** — config is entirely in `src/app/globals.css` via `@theme` blocks (no `tailwind.config.*` file)
- Colors use **oklch** throughout
- **shadcn/ui** with `base-nova` style; add components with `pnpm dlx shadcn@latest add <component>`
- Prose typography via `@tailwindcss/typography`

## Key Conventions

### Server actions over API routes

**Always use Next.js server actions instead of API routes.** Do not create files under `src/app/api/` for internal data mutations — use `"use server"` functions in `src/lib/actions/` instead. The existing `src/app/api/auth/` route is a third-party integration (better-auth) and is the only exception.

### Environment variables — use `varlock`

**Never use `process.env` directly.** All environment variables are accessed via `varlock`:

```ts
import { ENV } from "varlock/env"
// ENV.MY_VAR
```

Do not add `.env` files or reach for `process.env.FOO` — use `varlock/env`.

### Component defaults

- All components are **server components** by default
- Use `"use client"` only when necessary (currently: `ThemeToggle`, `ThemeProvider`)
- Path alias `@/` maps to `src/`
- Theme (light/dark) via `next-themes` → `src/components/theme-provider.tsx`
