"use client"

import { useState, useTransition } from "react"
import { addAdminEmail, removeAdminEmail, restoreAdminEmail } from "@/lib/actions/admin"

interface AdminUsersFormProps {
  kvEmails: string[]
  envEmails: string[]
  deniedEmails: string[]
}

export function AdminUsersForm({ kvEmails, envEmails, deniedEmails }: AdminUsersFormProps) {
  const [newEmail, setNewEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [kvList, setKvList] = useState(kvEmails)
  const [deniedList, setDeniedList] = useState(deniedEmails)
  const [isPending, startTransition] = useTransition()

  function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const email = newEmail.trim().toLowerCase()
    if (!email) return
    startTransition(async () => {
      const result = await addAdminEmail(email)
      if (result.error) {
        setError(result.error)
      } else {
        // Also lift denial if it was previously denied
        setDeniedList((prev) => prev.filter((e) => e !== email))
        setKvList((prev) => (prev.includes(email) ? prev : [...prev, email]))
        setNewEmail("")
      }
    })
  }

  function handleRemove(email: string, source: "env" | "kv") {
    setError(null)
    startTransition(async () => {
      const result = await removeAdminEmail(email)
      if (result.error) {
        setError(result.error)
      } else {
        if (source === "env") {
          setDeniedList((prev) => (prev.includes(email) ? prev : [...prev, email]))
        } else {
          setKvList((prev) => prev.filter((e) => e !== email))
        }
      }
    })
  }

  function handleRestore(email: string) {
    setError(null)
    startTransition(async () => {
      const result = await restoreAdminEmail(email)
      if (result.error) {
        setError(result.error)
      } else {
        setDeniedList((prev) => prev.filter((e) => e !== email))
      }
    })
  }

  const activeEnvEmails = envEmails.filter((e) => !deniedList.includes(e))

  return (
    <div className="space-y-8">
      {/* ENV admins */}
      <section>
        <h2 className="font-semibold text-base mb-1">Admin da ENV</h2>
        <p className="text-muted-foreground text-xs mb-3">
          Configurati via <code className="font-mono">ADMIN_EMAILS</code>. La rimozione aggiunge una negazione in KV che ha precedenza sull&apos;ENV.
        </p>
        {envEmails.length === 0 ? (
          <p className="text-amber-500 text-sm">
            ⚠ Nessun admin configurato via ENV. Imposta <code className="font-mono">ADMIN_EMAILS</code>.
          </p>
        ) : activeEnvEmails.length === 0 ? (
          <p className="text-muted-foreground text-sm">Tutti gli admin ENV sono stati revocati.</p>
        ) : (
          <ul className="space-y-2">
            {activeEnvEmails.map((email) => (
              <li
                key={email}
                className="flex items-center gap-3 bg-card px-4 py-2.5 border border-border rounded-lg"
              >
                <span className="flex-1 font-mono text-sm">{email}</span>
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground">
                  ENV
                </span>
                <button
                  onClick={() => handleRemove(email, "env")}
                  disabled={isPending}
                  className="text-destructive hover:text-destructive/80 disabled:opacity-50 text-xs transition-colors"
                >
                  Rimuovi
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* KV admins */}
      <section>
        <h2 className="font-semibold text-base mb-1">Admin da KV</h2>
        <p className="text-muted-foreground text-xs mb-3">
          Aggiunti dinamicamente. Rimossi immediatamente senza redeploy.
        </p>
        {kvList.length === 0 ? (
          <p className="text-muted-foreground text-sm">Nessun admin aggiunto via KV.</p>
        ) : (
          <ul className="space-y-2">
            {kvList.map((email) => (
              <li
                key={email}
                className="flex items-center gap-3 bg-card px-4 py-2.5 border border-border rounded-lg"
              >
                <span className="flex-1 font-mono text-sm">{email}</span>
                <button
                  onClick={() => handleRemove(email, "kv")}
                  disabled={isPending}
                  className="text-destructive hover:text-destructive/80 disabled:opacity-50 text-xs transition-colors"
                >
                  Rimuovi
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Denied / revoked */}
      {deniedList.length > 0 && (
        <section>
          <h2 className="font-semibold text-base mb-1">Accesso revocato</h2>
          <p className="text-muted-foreground text-xs mb-3">
            Negazione esplicita in KV — hanno precedenza sull&apos;ENV. Clicca &ldquo;Ripristina&rdquo; per riabilitare.
          </p>
          <ul className="space-y-2">
            {deniedList.map((email) => (
              <li
                key={email}
                className="flex items-center gap-3 bg-card px-4 py-2.5 border border-border rounded-lg opacity-60"
              >
                <span className="flex-1 font-mono text-sm line-through">{email}</span>
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-destructive/10 text-destructive">
                  revocato
                </span>
                <button
                  onClick={() => handleRestore(email)}
                  disabled={isPending}
                  className="text-primary hover:text-primary/80 disabled:opacity-50 text-xs transition-colors"
                >
                  Ripristina
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Add form */}
      <section>
        <h2 className="font-semibold text-base mb-3">Aggiungi admin</h2>
        <form onSubmit={handleAdd} className="flex gap-2">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="nuovoadmin@example.com"
            disabled={isPending}
            className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isPending || !newEmail.trim()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            {isPending ? "…" : "Aggiungi"}
          </button>
        </form>
        {error && (
          <p className="mt-2 text-destructive text-sm">{error}</p>
        )}
      </section>
    </div>
  )
}
