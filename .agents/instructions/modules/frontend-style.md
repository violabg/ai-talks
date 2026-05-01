# Frontend Style Module

Load this module only for UI styling, theming, component behavior, or Tailwind/shadcn tasks.

- Tailwind CSS v4 config lives in `src/app/globals.css` via `@theme` blocks.
- Do not look for `tailwind.config.*`.
- Color system uses `oklch`.
- shadcn/ui uses `base-nova`; add components with `pnpm dlx shadcn@latest add <component>`.
- Prose typography uses `@tailwindcss/typography`.
- Components are server components by default.
- Add `"use client"` only when necessary.
- Existing client examples include `ThemeToggle` and `ThemeProvider`.
- Path alias: `@/` -> `src/`.
- Theme stack: `next-themes` via `src/components/theme-provider.tsx`.
