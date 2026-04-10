"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const adminNavItems = [
  { href: "/admin", label: "Articoli" },
  { href: "/admin/users", label: "Utenti" },
]

export function AdminNav() {
  const pathname = usePathname()
  const [hovered, setHovered] = useState<string | null>(null)

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href)

  return (
    <nav
      className="flex items-center gap-0.5"
      onMouseLeave={() => setHovered(null)}
    >
      {adminNavItems.map((item) => {
        const active = isActive(item.href)
        const highlighted = hovered === item.href || (!hovered && active)

        return (
          <Link
            key={item.href}
            href={item.href}
            onMouseEnter={() => setHovered(item.href)}
            className={cn(
              "relative px-3 py-1 rounded-md text-xs transition-colors duration-150",
              highlighted ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {highlighted && (
              <motion.div
                layoutId="admin-nav-indicator"
                className="absolute inset-0 bg-primary/8 shadow-[inset_0_-2px_0_var(--primary)] rounded-md"
                transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
