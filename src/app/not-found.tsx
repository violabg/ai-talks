import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center px-4 min-h-[60vh] text-center">
      <h1 className="mb-4 font-bold text-[--muted-foreground] text-8xl">404</h1>
      <h2 className="mb-4 font-semibold text-2xl">Pagina non trovata</h2>
      <p className="mb-8 max-w-md text-[--muted-foreground]">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <Button
        nativeButton={false}
        render={<Link href="/">Torna alla home</Link>}
      ></Button>
    </div>
  );
}
