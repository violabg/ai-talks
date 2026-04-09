"use client"

import { useState } from "react"

interface PublishToggleProps {
  slug: string
  initialPublished: boolean
}

export function PublishToggle({ slug, initialPublished }: PublishToggleProps) {
  const [published, setPublished] = useState(initialPublished)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle")

  async function handleToggle() {
    const next = !published
    setPublished(next) // optimistic
    setLoading(true)
    setStatus("idle")

    try {
      const res = await fetch(`/api/admin/articles/${slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: next }),
      })
      if (!res.ok) throw new Error()
      setStatus("ok")
    } catch {
      setPublished(!next) // revert
      setStatus("error")
    } finally {
      setLoading(false)
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <div className="flex items-center gap-2">
      {status === "ok" && (
        <span className="text-green-600 text-xs">✓</span>
      )}
      {status === "error" && (
        <span className="text-destructive text-xs">Errore</span>
      )}
      <button
        onClick={handleToggle}
        disabled={loading}
        role="switch"
        aria-checked={published}
        aria-label={published ? "Spubblica articolo" : "Pubblica articolo"}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 ${
          published ? "bg-primary" : "bg-input"
        }`}
      >
        <span
          className={`pointer-events-none inline-block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform ${
            published ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
      <span
        className={`min-w-8 font-mono text-xs ${
          published ? "text-green-600" : "text-muted-foreground"
        }`}
      >
        {published ? "live" : "draft"}
      </span>
    </div>
  )
}
