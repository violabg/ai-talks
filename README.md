<!-- prettier-ignore -->
<div align="center">

<img src="./src/app/icon.svg" alt="AI Talks icon" width="72" height="72" />

# AI Talks

Italian-language Next.js site about AI-assisted software development, with MDX articles, companion presentations, and a small admin area for publication management.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5B6BFF?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MDX](https://img.shields.io/badge/MDX-content-0f766e?style=flat-square)](https://mdxjs.com/)
[![pnpm](https://img.shields.io/badge/pnpm-workspace-f69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)

[Overview](#overview) • [Features](#features) • [Getting Started](#getting-started) • [Configuration](#configuration) • [Content Authoring](#content-authoring)

</div>

## Overview

AI Talks is a content-driven App Router project built to publish articles about developer workflows, architecture, prompting, refactoring, and practical use of AI in software engineering.

The site reads articles from `content/articles/*.mdx`, renders them server-side, and can optionally attach a dedicated slide deck under each article route. Runtime publication state can come from either MDX frontmatter or Upstash Redis, so the public site and the admin area stay aligned.

> [!NOTE]
> In development, draft articles are visible and show a draft badge. In production, visibility depends on the effective `published` state, with Redis overrides taking precedence when configured.

## Features

- MDX-based article publishing with typed frontmatter.
- Next.js 16 App Router with server-rendered content pages.
- Optional article presentations under `src/app/articles/[slug]/presentazione/`.
- Admin area with GitHub sign-in via `better-auth`.
- Runtime `published` and `featured` overrides through Upstash Redis.
- Tailwind CSS v4 styling with custom typography and shadcn/ui components.
- Narration support for presentations via generated `speech.json` files.

## Architecture

The project is intentionally simple:

- `content/articles/`: source of truth for article bodies and default frontmatter.
- `src/lib/articles.ts`: MDX loading, sorting, filtering, draft visibility, static params.
- `src/lib/kv.ts`: optional Redis-backed override layer for `published`, `featured`, and admin lists.
- `src/app/articles/[slug]/`: article pages and optional presentation routes.
- `src/app/admin/`: content management UI.
- `src/components/presentation/`: shared presentation shell, controls, and narration UI.

## Getting Started

### Prerequisites

- Node.js 20+
- `pnpm`

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

Open `http://localhost:3000`.

### Useful commands

```bash
pnpm lint
pnpm build
pnpm start
```

> [!IMPORTANT]
> No automated test runner is configured in this repository at the moment.

## Configuration

The site can run locally with only article content, but admin login and runtime state management require environment variables.

### Authentication

Required for GitHub admin sign-in:

| Variable | Purpose |
| --- | --- |
| `BETTER_AUTH_SECRET` | Secret used by `better-auth` |
| `BETTER_AUTH_URL` | Base URL for auth callbacks, defaults to `http://localhost:3000` |
| `GITHUB_CLIENT_ID` | GitHub OAuth app client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth app client secret |

### Runtime article state

Optional for Redis-backed publication and featured overrides:

| Variable | Purpose |
| --- | --- |
| `KV_REST_API_URL` | Upstash Redis REST endpoint |
| `KV_REST_API_TOKEN` | Upstash Redis REST token |

If Redis is not configured, the app falls back to MDX frontmatter for article visibility and featured state.

### Admin bootstrap

| Variable | Purpose |
| --- | --- |
| `ADMIN_EMAILS` | Comma-separated list of admin emails allowed by environment configuration |

Admin authorization order is:

1. Denied emails in Redis always win.
2. `ADMIN_EMAILS` grants access if the email is not denied.
3. Redis admin allow-list is checked last.

## Content Authoring

Articles live in `content/articles/` as `.mdx` files. The file name is the route slug.

Example frontmatter:

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

Authoring rules worth keeping in mind:

- Use an ISO datetime with explicit offset.
- Keep the filename slug aligned with the article route.
- `published: false` is the safe default for drafts.
- Do not assume frontmatter is the only production source of truth for `published` or `featured`.

## Presentations And Narration

An article can have a companion presentation under:

```text
src/app/articles/[slug]/presentazione/
```

Typical files in that folder:

- `page.tsx`
- `slides.tsx`
- `slide-XX-*.tsx`
- `speech.json`

To draft narration JSON for an existing presentation:

```bash
pnpm exec tsx scripts/generate-speech-json.ts <slug>
```

The shared presentation UI and narration controls live in `src/components/presentation/`.

## Project Structure

```text
content/articles/             MDX articles
public/images/articles/      Article images and diagrams
scripts/                     Utility scripts
src/app/                     App Router routes and layouts
src/app/admin/               Admin interface
src/components/              Shared UI, MDX, layout, and presentation components
src/lib/articles.ts          Article loading and visibility rules
src/lib/kv.ts                Redis-backed runtime state
src/lib/auth.ts              better-auth configuration
src/lib/actions/             Server actions
```

## Development Notes

- Use `pnpm` for package and project commands.
- Tailwind CSS v4 configuration lives in `src/app/globals.css` via `@theme` blocks.
- MDX is compiled server-side with `next-mdx-remote/rsc`.
- Components are server components by default; add `"use client"` only when needed.
- For internal mutations, prefer server actions in `src/lib/actions/` over adding new API routes.

## Related Files

- `AGENTS.md`: repository-specific guidance for coding agents.
- `CLAUDE.md`: agent bootstrap reference.
- `components.json`: shadcn/ui configuration.
