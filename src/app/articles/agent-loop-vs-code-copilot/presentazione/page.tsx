import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "agent-loop-vs-code-copilot";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione — Dentro l'agent loop di VS Code Copilot",
  description:
    "Presentazione visiva: il ciclo system prompt / contesto / tool / user prompt, il ruolo dei sub-agent, perché Haiku sostituisce Opus nella fase di esplorazione, e cos'è l'harness.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
