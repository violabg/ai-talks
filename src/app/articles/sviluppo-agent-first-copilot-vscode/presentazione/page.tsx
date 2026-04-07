import type { Metadata } from "next";
import { getAllArticleSlugs } from "@/lib/articles";
import { Slideshow } from "./slides";

export const metadata: Metadata = {
  title: "L'Era Agent-First — Presentazione",
  description:
    "I cinque pilastri, il ciclo plan-act e il debugging trasparente con GitHub Copilot in VS Code.",
};

export async function generateStaticParams() {
  return getAllArticleSlugs()
    .filter((slug) => slug === "sviluppo-agent-first-copilot-vscode")
    .map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default function PresentazionePage() {
  return (
    <div className="fixed inset-0 bg-[#0f172a] text-[#e2e8f0] overflow-hidden">
      <Slideshow />
    </div>
  );
}
