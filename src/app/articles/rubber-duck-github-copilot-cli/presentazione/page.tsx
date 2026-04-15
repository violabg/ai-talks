import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "rubber-duck-github-copilot-cli";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione — Rubber Duck: il revisore multi-modello",
  description:
    "Presentazione visiva: come Rubber Duck usa la critica incrociata tra modelli per ridurre allucinazioni e sbloccare loop di errore nella Copilot CLI.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
