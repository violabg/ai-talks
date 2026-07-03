import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "come-scrivere-skill-efficaci";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione - Come scrivere skill efficaci",
  description:
    "Presentazione visiva sulla progettazione di skill AI efficaci: trigger, struttura, steering e pruning.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
