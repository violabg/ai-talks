import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "observability-coding-agent-silver-bullet";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione — Observability per coding agent",
  description:
    "Presentazione visiva: perché dare agli agenti AI gli strumenti per osservare il proprio lavoro sblocca un livello nuovo di autonomia e qualità del codice.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
