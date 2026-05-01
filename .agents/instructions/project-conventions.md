# Project Conventions Router

Load as little context as possible.

Default behavior:

- Do not load all convention files.
- Read only the module(s) required by the current user prompt.
- If prompt scope is unclear, start with no module and ask one clarifying question.

Module map:

- Command execution or build/lint requests:
	- [.agents/instructions/modules/commands.md](./modules/commands.md)
- Article editing, MDX behavior, slug/route alignment:
	- [.agents/instructions/modules/content-and-routing.md](./modules/content-and-routing.md)
- Published/featured behavior, listing logic, KV overrides:
	- [.agents/instructions/modules/publication-state.md](./modules/publication-state.md)
- Presentation slides, shell controls, narration/speech.json:
	- [.agents/instructions/modules/presentations.md](./modules/presentations.md)
- Styling/theming, Tailwind/shadcn, client/server component boundaries:
	- [.agents/instructions/modules/frontend-style.md](./modules/frontend-style.md)
- Auth, admin, env access, API-vs-server-action boundary:
	- [.agents/instructions/modules/auth-and-admin.md](./modules/auth-and-admin.md)

If multiple areas are involved, load only the minimal subset of modules needed for that exact task.
