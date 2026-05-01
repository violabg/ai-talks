# Content And Routing Module

Load this module only for article/content changes, slug/routing changes, or MDX rendering behavior.

- Project: Next.js App Router site for Italian AI articles.
- Articles live in [content/articles/](../../../content/articles/) as `.mdx`.
- Frontmatter keys: `title, description, date, author, tags, published, featured?, coverImage?`.
- `date` must be ISO datetime with explicit offset.
- New drafts default to `published: false`.
- Keep article filename slug aligned with route slug.
- Core content loader: `src/lib/articles.ts` (I/O, sorting, filtering, static params).
- Pages rely on `generateStaticParams()` with `dynamicParams: false`.
- MDX compile path: `next-mdx-remote/rsc`.
- MDX component overrides: `mdx-components.tsx` and `src/components/mdx-components.tsx`.
- Keep article and presentation copy in Italian unless user requests another language.
