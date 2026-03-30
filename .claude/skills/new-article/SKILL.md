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

Ask the user for: title, slug (kebab-case filename), description, tags (comma-separated), whether it's featured, whether it should be published immediately, and an optional coverImage path.

Guidelines:

- Use today's date and include an explicit local time in ISO format for the `date` field.
- Set `published: false` by default unless the user explicitly wants the article visible in production.
- In development, articles with `published: false` are still visible and show a Draft badge.
- Leave `coverImage` out entirely if not provided.
