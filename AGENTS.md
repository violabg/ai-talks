# AGENTS

## Commands

Use `pnpm` for all package-management and script commands.

- `pnpm dev` starts the Next.js dev server
- `pnpm build` runs the production build
- `pnpm lint` runs ESLint
- No test runner is configured
- `npx tsx scripts/generate-speech-json.ts <slug>` drafts narration for an existing presentation

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

When adding a new article, keep the filename slug in sync with the article route and any optional presentation folder under `src/app/articles/[slug]/`.

### Article published/featured state (KV + frontmatter dual-source)

**Do not treat MDX frontmatter as the sole source of truth for `published`/`featured` in production.**

At runtime, `published` and `featured` flags are stored in **Upstash Redis** via `src/lib/kv.ts`. The KV store is optional — if `KV_REST_API_URL`/`KV_REST_API_TOKEN` are not set, it gracefully returns `null` and the system falls back to frontmatter. When editing article visibility logic, always account for both sources.

### Presentations

Each article can optionally have a presentation at `src/app/articles/[slug]/presentazione/` containing `page.tsx`, `slides.tsx`, individual `slide-XX-*.tsx` files, and optionally `speech.json` for narration.

Presentation shell and narration UI are shared from `src/components/presentation/`; avoid rebuilding navigation, progress, or narration controls inside article-specific slides.

### Styling

- **Tailwind CSS v4** — config is entirely in `src/app/globals.css` via `@theme` blocks (no `tailwind.config.*` file)
- Colors use **oklch** throughout
- **shadcn/ui** with `base-nova` style; add components with `pnpm dlx shadcn@latest add <component>`
- Prose typography via `@tailwindcss/typography`

## Key Conventions

### Server actions over API routes

**Always use Next.js server actions instead of API routes.** Do not create files under `src/app/api/` for internal data mutations — use `"use server"` functions in `src/lib/actions/` instead. The existing `src/app/api/auth/` route is a third-party integration (better-auth) and is the only exception.

### Environment variables

Environment access currently lives directly in `src/lib/auth.ts`, `src/lib/admin.ts`, and `src/lib/kv.ts`. Follow the existing pattern unless the user explicitly asks for an env-management refactor.

For article visibility and featured state, remember that Redis KV can override frontmatter in production.

### Article and admin boundaries

- `src/lib/articles.ts` is the source for MDX loading, sorting, filtering, and draft visibility rules
- `src/lib/kv.ts` is the runtime override layer for `published` and `featured`
- `src/app/admin/` is the content-management UI; preserve its assumptions when changing publication behavior

### Component defaults

- All components are **server components** by default
- Use `"use client"` only when necessary (currently: `ThemeToggle`, `ThemeProvider`)
- Path alias `@/` maps to `src/`
- Theme (light/dark) via `next-themes` → `src/components/theme-provider.tsx`

### Styling and content patterns

- Tailwind config lives entirely in `src/app/globals.css`; do not look for `tailwind.config.*`
- Use the existing prose/article components instead of hand-rolling MDX HTML wrappers
- Keep article and presentation copy in Italian unless the user asks for another language
