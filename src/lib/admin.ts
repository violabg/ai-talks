import { getKVAdminEmails, getKVDeniedEmails, isKVAdmin, isKVDenied } from "@/lib/kv"

export function getEnvAdminEmails(): string[] {
  const raw = process.env.ADMIN_EMAILS ?? ""
  return raw
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
}

/**
 * Returns true if the email is authorized as admin.
 * Priority order:
 *   1. KV denied list — if present, always blocked (even if in ENV)
 *   2. ENV ADMIN_EMAILS — if present and not denied, authorized
 *   3. KV allowed list — if present and not denied, authorized
 */
export async function isAdmin(email: string | null | undefined): Promise<boolean> {
  if (!email) return false
  const normalized = email.toLowerCase()
  if (await isKVDenied(normalized)) return false
  if (getEnvAdminEmails().includes(normalized)) return true
  return isKVAdmin(normalized)
}

export async function getAdminEmails(): Promise<{
  env: string[]
  kv: string[]
  denied: string[]
}> {
  const [kv, denied] = await Promise.all([getKVAdminEmails(), getKVDeniedEmails()])
  return { env: getEnvAdminEmails(), kv, denied }
}
