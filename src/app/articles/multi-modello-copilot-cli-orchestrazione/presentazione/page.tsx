import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "multi-modello-copilot-cli-orchestrazione";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione — Orchestrazione multi-modello con GitHub Copilot CLI",
  description:
    "Presentazione visiva: come combinare più LLM in un sistema di agenti specializzati usando GitHub Copilot CLI.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
