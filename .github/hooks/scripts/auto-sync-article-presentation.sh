#!/usr/bin/env bash
set -euo pipefail

# Hook: when an article with an active presentation is edited,
# inject a systemMessage telling Claude to update the presentation automatically.
# Returns {"continue": true} always so it never blocks.

TOOL_INPUT="${CLAUDE_TOOL_INPUT:-}"
if [[ -z "$TOOL_INPUT" ]]; then
  echo '{"continue": true}'
  exit 0
fi

# Extract file_path from the tool input JSON
file_path="$(echo "$TOOL_INPUT" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | head -1 | sed 's/.*"file_path"[[:space:]]*:[[:space:]]*"//' | sed 's/"$//')"

if [[ -z "$file_path" ]]; then
  echo '{"continue": true}'
  exit 0
fi

# Check if the edited file is an article
if [[ "$file_path" != */content/articles/*.mdx ]]; then
  echo '{"continue": true}'
  exit 0
fi

# Extract slug from the article path
slug="$(basename "$file_path" .mdx)"

# Check if the article has a presentation
repo_root="$(git rev-parse --show-toplevel 2>/dev/null || echo "$(cd "$(dirname "$0")/../../.." && pwd)")"
if [[ ! -d "$repo_root/src/app/articles/$slug/presentazione" ]]; then
  echo '{"continue": true}'
  exit 0
fi

# Article has a presentation — inject instruction to update it
cat <<JSON
{
  "continue": true,
  "systemMessage": "IMPORTANT: You just edited the article '${slug}'. This article has an active presentation at src/app/articles/${slug}/presentazione/. You MUST now update the presentation slides to reflect the article changes. Read the updated article, compare with the current slides, and edit the affected slide components. Follow the directives in .claude/skills/article-presentation/SKILL.md. Do this immediately without asking the user — just do it."
}
JSON
