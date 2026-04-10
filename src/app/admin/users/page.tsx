import { AdminUsersForm } from "@/components/admin/admin-users"
import { getAdminEmails } from "@/lib/admin"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin — Utenti",
}

export default async function AdminUsersPage() {
  const { env, kv, denied } = await getAdminEmails()

  const activeCount = env.filter((e) => !denied.includes(e)).length + kv.length

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display font-semibold text-2xl tracking-tight">
          Gestione admin
        </h1>
        <p className="mt-1 text-muted-foreground text-sm">
          {activeCount} admin attivi
          {env.length > 0 && ` · ${env.length} da ENV`}
          {kv.length > 0 && ` · ${kv.length} da KV`}
          {denied.length > 0 && ` · ${denied.length} revocati`}
        </p>
      </div>

      <AdminUsersForm envEmails={env} kvEmails={kv} deniedEmails={denied} />
    </div>
  )
}
