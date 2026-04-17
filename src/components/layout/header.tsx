"use client";

import { BrandMark } from "@/components/layout/brand-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articoli" },
  { href: "/link-utili", label: "Link utili" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const { data: session } = authClient.useSession();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="top-0 z-50 sticky bg-background/75 backdrop-blur-md border-border border-b w-full">
      <div className="flex justify-between items-center mx-auto px-6 max-w-7xl h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <BrandMark />
          {/* Wordmark */}
          <span className="font-display font-medium text-xl tracking-tight">
            <span className="text-primary">AI</span>{" "}
            <span className="text-foreground">Talks</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden sm:flex items-center gap-1 font-sans text-sm"
          onMouseLeave={() => setHovered(null)}
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            const highlighted = hovered === item.href || (!hovered && active);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onMouseEnter={() => setHovered(item.href)}
                className={cn(
                  "relative px-4 py-2 rounded-lg transition-colors duration-150",
                  highlighted ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {highlighted && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-primary/8 shadow-[inset_0_-2px_0_var(--primary)] rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                  />
                )}
                <span className="z-10 relative">{item.label}</span>
              </Link>
            );
          })}
          {session?.user && (
            <Link
              href="/admin"
              aria-current={isActive("/admin") ? "page" : undefined}
              onMouseEnter={() => setHovered("/admin")}
              className={cn(
                "relative px-4 py-2 rounded-lg transition-colors duration-150",
                hovered === "/admin" || isActive("/admin")
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {(hovered === "/admin" || isActive("/admin")) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-primary/8 shadow-[inset_0_-2px_0_var(--primary)] rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                />
              )}
              <span className="z-10 relative">Admin</span>
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle with distinct interactive zone */}
          <div className="bg-muted p-0.5 rounded-lg">
            <ThemeToggle />
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="sm:hidden"
                  aria-label="Apri menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="pt-8 w-64">
              <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>

              {/* Mobile sheet branding */}
              <div className="flex items-center gap-1.5 px-4 pb-4 border-border border-b">
                <BrandMark size={14} />
                <span className="font-display font-medium text-lg tracking-tight">
                  <span className="text-primary">AI</span>{" "}
                  <span className="text-foreground">Talks</span>
                </span>
              </div>

              <nav className="flex flex-col gap-1 mt-4 font-sans text-sm">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "mx-4 px-4 py-3 rounded-lg text-base transition-all duration-150",
                        active
                          ? "bg-primary/8 text-foreground shadow-[inset_2px_0_0_var(--primary)]"
                          : "text-muted-foreground hover:bg-primary/8 hover:text-foreground hover:shadow-[inset_2px_0_0_var(--primary)]",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                {session?.user && (
                  <Link
                    href="/admin"
                    aria-current={isActive("/admin") ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "mx-4 px-4 py-3 rounded-lg text-base transition-all duration-150",
                      isActive("/admin")
                        ? "bg-primary/8 text-foreground shadow-[inset_2px_0_0_var(--primary)]"
                        : "text-muted-foreground hover:bg-primary/8 hover:text-foreground hover:shadow-[inset_2px_0_0_var(--primary)]",
                    )}
                  >
                    Admin
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Gradient energy line */}
      <div
        aria-hidden="true"
        className="right-0 bottom-0 left-0 absolute h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in oklch, var(--primary) 25%, transparent), transparent)",
        }}
      />
    </header>
  );
}
