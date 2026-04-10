"use server"

import { auth } from "@/lib/auth"
import { isAdmin, getAdminEmails, getEnvAdminEmails } from "@/lib/admin"
import {
  addKVAdminEmail,
  removeKVAdminEmail,
  addKVDeniedEmail,
  removeKVDeniedEmail,
} from "@/lib/kv"
import { headers } from "next/headers"

async function requireAdmin() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error("Unauthorized")
  if (!await isAdmin(session.user.email)) throw new Error("Forbidden")
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function listAdmins(): Promise<{
  env: string[]
  kv: string[]
  denied: string[]
  error?: string
}> {
  try {
    await requireAdmin()
    return await getAdminEmails()
  } catch (err) {
    return { env: [], kv: [], denied: [], error: err instanceof Error ? err.message : "Unknown error" }
  }
}

export async function addAdminEmail(
  email: string
): Promise<{ error?: string }> {
  try {
    await requireAdmin()
    const normalized = email.trim().toLowerCase()
    if (!isValidEmail(normalized)) return { error: "Indirizzo email non valido" }
    // If previously denied, lift the denial first
    await removeKVDeniedEmail(normalized)
    await addKVAdminEmail(normalized)
    return {}
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Unknown error" }
  }
}

export async function removeAdminEmail(
  email: string
): Promise<{ error?: string }> {
  try {
    await requireAdmin()
    const normalized = email.trim().toLowerCase()
    if (getEnvAdminEmails().includes(normalized)) {
      // ENV email: add to denied set so KV takes precedence
      await addKVDeniedEmail(normalized)
    } else {
      // KV email: remove from allowed set
      await removeKVAdminEmail(normalized)
    }
    return {}
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Unknown error" }
  }
}

export async function restoreAdminEmail(
  email: string
): Promise<{ error?: string }> {
  try {
    await requireAdmin()
    const normalized = email.trim().toLowerCase()
    await removeKVDeniedEmail(normalized)
    return {}
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Unknown error" }
  }
}
