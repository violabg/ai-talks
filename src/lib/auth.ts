import { kvSecondaryStorage } from "@/lib/kv";
import { betterAuth } from "better-auth";
import { ENV } from "varlock/env";

export const auth = betterAuth({
  secret: ENV.BETTER_AUTH_SECRET,
  baseURL: ENV.BETTER_AUTH_URL ?? "http://localhost:3000",
  session: {
    cookieCache: {
      refreshCache: false,
    },
  },
  socialProviders: {
    github: {
      clientId: ENV.GITHUB_CLIENT_ID,
      clientSecret: ENV.GITHUB_CLIENT_SECRET,
    },
  },
  secondaryStorage: kvSecondaryStorage,
})

