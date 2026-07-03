# AGENTS

## Agent mode

- Always use the `caveman` skill for response style and verbosity.
- Skill reference: [.agents/skills/caveman/SKILL.md](.agents/skills/caveman/SKILL.md)

## Minimal routing

- Keep this file minimal by design.
- Use [.agents/instructions/project-conventions.md](.agents/instructions/project-conventions.md) as a router.
- Never load all instruction modules by default; load only prompt-relevant module(s).
- Use existing skills under [.agents/skills/](.agents/skills/) for task-specific workflows.

## Manual skills

- Attached article workflow skills under [.claude/skills/](.claude/skills/) are user-invoked only; do not rely on model auto-invocation for them.

## Global principle: evidence-gated

- For any coding, layout, or visual task: instrument first, observe results, then iterate. No task is "done" on compile alone — browser screenshot, dev-server run, or explicit dump/log is required when the output is visual or stateful.
- Leading word to repeat inside skills and prompts: **evidence-gated**.

always use caveman
