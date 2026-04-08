import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "migrare-librerie-con-ai";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione — Migrare Librerie Obsolete con l'AI",
  description:
    "Presentazione visiva: come combinare codemods deterministici e agenti AI per migrare dipendenze in modo sicuro e incrementale.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
