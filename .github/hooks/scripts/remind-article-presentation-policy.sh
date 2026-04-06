#!/usr/bin/env bash
set -euo pipefail

cat <<'JSON'
{
  "continue": true,
  "systemMessage": "Policy presentazioni: se modifichi content/articles/<slug>.mdx e esiste una presentazione per quello slug, aggiorna anche la presentazione usando .claude/skills/article-presentation/SKILL.md."
}
JSON
