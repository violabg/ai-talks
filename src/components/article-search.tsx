"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export function ArticleSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[--muted-foreground] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z"
        />
      </svg>
      <input
        type="search"
        placeholder="Cerca per titolo, descrizione o tag…"
        defaultValue={searchParams.get("q") ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
        data-pending={isPending ? "" : undefined}
        className="w-full rounded-lg border border-[--border] bg-[--card] py-2.5 pl-9 pr-4 text-sm text-[--foreground] placeholder:text-[--muted-foreground] outline-none transition-colors focus:border-[--primary] focus:ring-2 focus:ring-[--primary]/20 data-[pending]:opacity-60 sm:max-w-sm"
      />
    </div>
  );
}
