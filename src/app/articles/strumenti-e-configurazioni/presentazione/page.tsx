import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "strumenti-e-configurazioni";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title:
    "Presentazione — Strumenti e configurazioni: livelli di personalizzazione degli agenti AI",
  description:
    "Presentazione visiva: come leggere instructions, skill, custom agent, MCP, hook e plugin come livelli distinti di memoria, metodo, capacità e automazione.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
