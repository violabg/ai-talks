# Publication State Module

Load this module only when editing `published`/`featured` behavior, listing logic, admin publish UI, or KV integration.

- Do not treat MDX frontmatter as sole production source for `published`/`featured`.
- Runtime override layer: `src/lib/kv.ts` (Upstash Redis).
- If `KV_REST_API_URL` or `KV_REST_API_TOKEN` are missing, KV gracefully returns `null` and app falls back to frontmatter.
- When changing visibility logic, account for both sources: frontmatter + KV.
- Preserve boundary expectations:
  - `src/lib/articles.ts` = content loading/filtering rules
  - `src/lib/kv.ts` = runtime override state
  - `src/app/admin/` = admin workflows
