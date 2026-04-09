"use client"

import { useState } from "react"
import { syncArticles } from "@/lib/actions/articles"

export function SyncButton() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  )
  const [newCount, setNewCount] = useState<number | null>(null)

  async function handleSync() {
    setStatus("loading")
    setNewCount(null)
    try {
      const result = await syncArticles()
      if (result.error) throw new Error(result.error)
      setNewCount(result.initialized.length)
      setStatus("ok")
    } catch {
      setStatus("error")
    } finally {
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <div className="flex items-center gap-3">
      {status === "ok" && (
        <span className="text-muted-foreground text-xs">
          {newCount === 0
            ? "Tutto sincronizzato"
            : `${newCount} ${newCount === 1 ? "articolo" : "articoli"} aggiunti`}
        </span>
      )}
      {status === "error" && (
        <span className="text-destructive text-xs">Errore di sincronizzazione</span>
      )}
      <button
        onClick={handleSync}
        disabled={status === "loading"}
        className="hover:bg-muted disabled:opacity-50 px-3 py-1.5 border border-border rounded-md text-sm transition-colors"
      >
        {status === "loading" ? "Sync…" : "Sincronizza"}
      </button>
    </div>
  )
}
