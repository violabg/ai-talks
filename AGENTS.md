# AGENTS

## Commands

This project uses **pnpm** as the package manager.

No test runner is configured.

## Architecture

**AI Talks** is a Next.js App Router site for publishing MDX articles about AI development (Italian language).

### Content System

Articles live in [content/articles/](content/articles/) as `.mdx` files with YAML frontmatter:

```yaml
title, description, date, author, tags, published, featured?, coverImage?
```

Use `date` as an ISO datetime with explicit time and offset, for example `2026-03-30T16:30:00+02:00`.

Set `published: false` by default for new drafts. In production only `published: true` articles are visible; in development drafts are still visible and show a Draft badge.

[src/lib/articles.ts](src/lib/articles.ts) handles all file I/O: reading MDX files with `gray-matter`, sorting by full datetime, filtering visible articles by environment, and filtering featured articles. Pages use `generateStaticParams()` + `dynamicParams: false` for full static generation.

MDX is compiled server-side via `next-mdx-remote/rsc`. Custom MDX component overrides are split between [mdx-components.tsx](mdx-components.tsx) (root, required by Next.js) and [src/components/mdx-components.tsx](src/components/mdx-components.tsx).

### Styling

- **Tailwind CSS v4** — config is done entirely in [src/app/globals.css](src/app/globals.css) via `@theme` blocks (no `tailwind.config.*` file)
- Colors use **oklch color space** throughout
- **shadcn/ui** components use the `base-nova` style variant; add new ones with `pnpm dlx shadcn@latest add <component>`
- Typography for article prose uses `@tailwindcss/typography`

### Key Conventions

- Path alias `@/` maps to `src/`
- All components are server components by default; use `"use client"` only when needed (currently: `ThemeToggle`, `ThemeProvider`)
- Theme (light/dark) managed by `next-themes` via [src/components/theme-provider.tsx](src/components/theme-provider.tsx)
- preffer next.js server action to api routes
