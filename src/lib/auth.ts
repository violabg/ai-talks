import { kvSecondaryStorage } from "@/lib/kv"
import { betterAuth } from "better-auth"

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  secondaryStorage: kvSecondaryStorage,
})

export function isAllowedAdmin(email: string | undefined | null): boolean {
  if (!email) return false
  const allowed = (process.env.ADMIN_GITHUB_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
  return allowed.includes(email.toLowerCase())
}
