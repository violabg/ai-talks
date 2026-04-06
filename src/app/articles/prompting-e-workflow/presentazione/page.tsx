import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "prompting-e-workflow";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione — Prompting e Workflow",
  description:
    "Presentazione visiva: pattern di prompting e workflow multi-agente per task di ingegneria software affidabili.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
