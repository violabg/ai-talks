#!/usr/bin/env bash
set -euo pipefail

if ! git rev-parse --show-toplevel >/dev/null 2>&1; then
  cat <<'JSON'
{"continue": true}
JSON
  exit 0
fi

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

declare -a changed_files=()

while IFS= read -r -d '' entry; do
  status="${entry:0:2}"
  path="${entry:3}"

  if [[ "$status" == R* || "$status" == C* ]]; then
    IFS= read -r -d '' renamed_path || true
    if [[ -n "${renamed_path:-}" ]]; then
      path="$renamed_path"
    fi
  fi

  changed_files+=("$path")
done < <(git status --porcelain -z --untracked-files=all)

if [[ ${#changed_files[@]} -eq 0 ]]; then
  cat <<'JSON'
{"continue": true}
JSON
  exit 0
fi

declare -a article_slugs=()

contains_slug() {
  local needle="$1"
  local item
  for item in "${article_slugs[@]-}"; do
    if [[ "$item" == "$needle" ]]; then
      return 0
    fi
  done
  return 1
}

for file in "${changed_files[@]}"; do
  if [[ "$file" == content/articles/*.mdx ]]; then
    slug="${file##*/}"
    slug="${slug%.mdx}"
    if ! contains_slug "$slug"; then
      article_slugs+=("$slug")
    fi
  fi
done

if [[ ${#article_slugs[@]} -eq 0 ]]; then
  cat <<'JSON'
{"continue": true}
JSON
  exit 0
fi

has_presentation() {
  local slug="$1"
  [[ -d "src/app/articles/$slug/presentazione" ]]
}

presentation_updated() {
  local slug="$1"
  local file
  for file in "${changed_files[@]-}"; do
    if [[ "$file" == src/app/articles/"$slug"/presentazione/* ]]; then
      return 0
    fi
  done
  return 1
}

declare -a violations=()
for slug in "${article_slugs[@]-}"; do
  if has_presentation "$slug" && ! presentation_updated "$slug"; then
    violations+=("$slug")
  fi
done

if [[ ${#violations[@]} -eq 0 ]]; then
  cat <<'JSON'
{"continue": true}
JSON
  exit 0
fi

violations_csv="$(printf '%s, ' "${violations[@]-}")"
violations_csv="${violations_csv%, }"

cat <<JSON
{
  "continue": false,
  "stopReason": "Presentation sync required",
  "systemMessage": "Hai modificato questi articoli con presentazione: ${violations_csv}. Devi aggiornare anche i file di presentazione corrispondenti in src/app/articles/<slug>/presentazione/* seguendo .claude/skills/article-presentation/SKILL.md."
}
JSON

exit 2
