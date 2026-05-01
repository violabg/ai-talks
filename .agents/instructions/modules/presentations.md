# Presentations Module

Load this module only for presentation UI, slide files, narration, or speech generation tasks.

- Optional presentation path per article: `src/app/articles/[slug]/presentazione/`.
- Typical files: `page.tsx`, `slides.tsx`, `slide-XX-*.tsx`, optional `speech.json`.
- Reuse shared shell/controls from `src/components/presentation/`.
- Do not rebuild article-specific navigation/progress/narration controls if shared components already provide them.
