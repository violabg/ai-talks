# Auth And Admin Module

Load this module only for authentication, admin authorization, or env handling changes.

- Internal mutations should use server actions in `src/lib/actions/`, not new `src/app/api/` routes.
- Exception: `src/app/api/auth/` is third-party integration (`better-auth`) and should remain.
- Current env access pattern lives in `src/lib/auth.ts`, `src/lib/admin.ts`, `src/lib/kv.ts`.
- Follow existing env access pattern unless user explicitly asks for env refactor.
