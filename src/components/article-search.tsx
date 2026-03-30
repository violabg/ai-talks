"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

export function ArticleSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const query = searchParams.get("q") ?? "";
  const [term, setTerm] = useState(query);

  useEffect(() => {
    setTerm(query);
  }, [query]);

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

  function clearSearch() {
    setTerm("");
    handleSearch("");
    inputRef.current?.focus();
  }

  return (
    <InputGroup className="max-w-xs">
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupInput
        ref={inputRef}
        placeholder="Cerca per titolo, descrizione o tag…"
        value={term}
        onChange={(e) => {
          const nextTerm = e.target.value;
          setTerm(nextTerm);
          handleSearch(nextTerm);
        }}
        data-pending={isPending ? "" : undefined}
      />
      {term ? (
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            aria-label="Cancella ricerca"
            onClick={clearSearch}
          >
            <X />
          </InputGroupButton>
        </InputGroupAddon>
      ) : null}
    </InputGroup>
  );
}
