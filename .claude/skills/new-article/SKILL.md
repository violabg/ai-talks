---
name: new-article
description: Scaffold a new MDX article in content/articles/ with correct frontmatter
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

Ask the user for: title, slug (kebab-case filename), description, tags (comma-separated), whether it's featured, whether it should be published immediately, and an optional coverImage path, also ask if we should generateImages and generateAnimations for the article.

Guidelines:

- if description is not provided, derive it from the title or use the first 160 characters of the article content as a fallback.
- Use today's date and include an explicit local time in ISO format for the `date` field.
- Set `published: false` by default unless the user explicitly wants the article visible in production.
- In development, articles with `published: false` are still visible and show a Draft badge.
- Leave `coverImage` out entirely if not provided.
- If `generateImages` is true, create the images using the `.claude/skills/article-images/SKILL.md` skill.
- If `generateAnimations` is true, create the animations using the `.claude/skills/article-animations/SKILL.md` skill.
