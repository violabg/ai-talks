import { PresentationSlides } from "@/app/articles/deep-modules-react-typescript/presentazione/slides";
import type { Metadata } from "next";

const SLUG = "deep-modules-react-typescript";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione — Deep Modules in React/TypeScript",
  description:
    "Presentazione visiva: come progettare moduli profondi in React/TypeScript per ridurre accoppiamento e migliorare il lavoro con agenti AI.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
