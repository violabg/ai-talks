"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articoli" },
  { href: "/link-utili", label: "Link utili" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="top-0 z-50 sticky bg-background/75 backdrop-blur-md border-border border-b w-full">
      <div className="flex justify-between items-center mx-auto px-6 max-w-6xl h-16">
        <Link
          href="/"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <span className="font-display font-medium text-xl tracking-tight">
            <span className="text-primary">AI</span>{" "}
            <span className="text-foreground">Talks</span>
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-1 font-sans text-sm">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-150",
                  active
                    ? "bg-primary/10 text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
