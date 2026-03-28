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
date: "YYYY-MM-DD"
author: ""
tags: []
featured: false
coverImage: ""
---
```

Ask the user for: title, slug (kebab-case filename), description, tags (comma-separated), whether it's featured, and an optional coverImage path. Use today's date for the `date` field. Leave `coverImage` out entirely if not provided.
