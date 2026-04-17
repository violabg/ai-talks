---
name: new-article
description: Scaffold a new MDX article in content/articles/ with correct frontmatter and route-safe metadata. Use this whenever the user wants to create a new article, start a draft, add a post skeleton, or prepare a new MDX article before writing or generating related assets.
disable-model-invocation: true
---

Create a new MDX article at `content/articles/<slug>.mdx` with this frontmatter template:

```mdx
---
title: ""
description: ""
date: "YYYY-MM-DDTHH:mm:ss+01:00"
author: ""
tags: []
published: false
featured: false
---
```

Ask the user for:

- title
- slug (kebab-case filename and route segment)
- description
- author
- tags (comma-separated)
- whether it is featured
- whether it should be published immediately
- optional `coverImage` slug/path
- whether we should also generate article images
- whether we should also create a presentation
- if a presentation is requested, whether we should also add speech narration

Guidelines:

- If description is not provided, derive it from the title or use the first 160 characters of the article content as a fallback.
- Use today's date and include an explicit local time in ISO format for the `date` field.
- Set `published: false` by default unless the user explicitly wants the article visible in production.
- In development, articles with `published: false` are still visible and show a Draft badge.
- `published` and `featured` frontmatter are defaults for new content, but production visibility can later be overridden by Redis KV.
- Keep the article slug aligned with any future route folders under `src/app/articles/[slug]/`.
- Leave `coverImage` out entirely if not provided.
- If `generateImages` is true, create the images using the `.claude/skills/article-images/SKILL.md` skill.
- If `createPresentation` is true, create it using the `.claude/skills/article-presentation/SKILL.md` skill.
- If `addSpeechNarration` is true, add narration using the `.claude/skills/presentation-speech/SKILL.md` skill after the presentation exists.
