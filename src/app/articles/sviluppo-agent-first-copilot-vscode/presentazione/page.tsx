import type { Metadata } from "next";
import { Slideshow } from "./slides";

const SLUG = "sviluppo-agent-first-copilot-vscode";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "L'Era Agent-First — Presentazione",
  description:
    "I cinque pilastri, il ciclo plan-act e il debugging trasparente con GitHub Copilot in VS Code.",
};

export default function PresentazionePage() {
  return <Slideshow slug={SLUG} />;
}
