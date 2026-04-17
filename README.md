# AI Talks

AI Talks is a Next.js 16 App Router site for publishing Italian-language articles about AI, developer workflows, and code architecture. The site renders MDX articles, supports optional presentation pages for selected articles, and includes an admin area for managing publication and featured state.

## Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS v4
- MDX via `next-mdx-remote/rsc`
- better-auth for admin authentication
- Upstash Redis for runtime article/admin state

## What The App Does

- Lists and renders MDX articles from `content/articles/`
- Shows featured articles on the homepage when present
- Supports draft articles in development
- Supports optional article presentations under `src/app/articles/[slug]/presentazione/`
- Lets admins toggle `published` and `featured` state from the admin UI
- Uses Redis KV as an optional runtime override layer for article visibility and admin allow/deny lists

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

Other useful commands:

```bash
pnpm lint
pnpm build
pnpm start
```

There is currently no test runner configured.

## Environment Variables

The app can run in a reduced local mode without every integration configured, but admin auth and KV-backed state require environment variables.

### Required for GitHub admin login

- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

### Optional for KV-backed runtime state

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

When KV is not configured, the app falls back to article frontmatter for `published` and `featured` state.

### Optional for bootstrap admin access

- `ADMIN_EMAILS`

`ADMIN_EMAILS` is a comma-separated list of email addresses that should be treated as admins. KV can also maintain allow and deny lists, with deny taking precedence.

## Content Model

Articles live in `content/articles/` as `.mdx` files with YAML frontmatter:

```yaml
title: ""
description: ""
date: "2026-03-30T16:30:00+02:00"
author: ""
tags: []
published: false
featured: false
coverImage: "optional-slug"
```

Notes:

- Use ISO datetime strings with an explicit offset.
- In production, article visibility can be overridden by Redis KV.
- In development, draft articles are still visible and show a draft badge.
- The article filename slug drives the route.

## Presentation Support

Some articles have a companion presentation at:

```text
src/app/articles/[slug]/presentazione/
```

Typical files:

- `page.tsx`
- `slides.tsx`
- `slide-XX-*.tsx`
- `speech.json` for narration

Narration can be generated with:

```bash
npx tsx scripts/generate-speech-json.ts <slug>
```

Presentation UI primitives are shared from `src/components/presentation/`.

## Publication State

`published` and `featured` are a dual-source system:

- MDX frontmatter provides the default state
- Upstash Redis can override that state at runtime

This matters in both the public site and the admin UI. Do not assume frontmatter is the only source of truth when KV is configured.

## Admin Area

The admin interface lives under `src/app/admin/`.

It provides:

- article list and metadata overview
- published toggle
- featured toggle
- sync actions for KV-backed state
- user/admin management support

Authentication is handled with `better-auth` and GitHub sign-in.

## Project Structure

```text
content/articles/             MDX articles
public/images/articles/      Static article images and diagrams
scripts/                     Utility scripts such as speech generation
src/app/                     App Router pages and layouts
src/app/admin/               Admin interface
src/components/              Shared UI, MDX, layout, and presentation components
src/lib/articles.ts          Article loading, sorting, filtering, draft logic
src/lib/kv.ts                Redis-backed runtime state
src/lib/auth.ts              better-auth configuration
src/lib/admin.ts             Admin resolution logic
```

## Development Notes

- Use `pnpm`, not npm or yarn, for project commands.
- Tailwind configuration lives in `src/app/globals.css` via Tailwind v4 `@theme` blocks.
- MDX rendering is configured server-side via `next-mdx-remote/rsc`.
- The project uses server components by default; only opt into client components when needed.
- Internal mutations should use server actions in `src/lib/actions/` rather than new API routes.

## Related Files

- `AGENTS.md` contains repo-specific instructions for coding agents.
- `.claude/skills/` contains reusable project workflows for articles, presentations, images, and related tasks.
