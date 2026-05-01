# AGENTS

## Agent mode

- Always use the `caveman` skill for response style and verbosity.
- Skill reference: [.agents/skills/caveman/SKILL.md](.agents/skills/caveman/SKILL.md)

## Minimal routing

- Keep this file minimal by design.
- Use [.agents/instructions/project-conventions.md](.agents/instructions/project-conventions.md) as a router.
- Never load all instruction modules by default; load only prompt-relevant module(s).
- Use existing skills under [.agents/skills/](.agents/skills/) for task-specific workflows.
