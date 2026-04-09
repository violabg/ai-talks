"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export function SignOutButton() {
  const router = useRouter()

  async function handleSignOut() {
    await authClient.signOut()
    router.push("/admin/login")
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
    >
      Esci
    </button>
  )
}
