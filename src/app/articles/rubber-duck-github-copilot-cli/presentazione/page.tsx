import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "rubber-duck-github-copilot-cli";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione — Rubber Duck e la review multi-modello",
  description:
    "Presentazione visiva: come Rubber Duck introduce critica incrociata, validazione dei test e guardrail MCP nella GitHub Copilot CLI.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
