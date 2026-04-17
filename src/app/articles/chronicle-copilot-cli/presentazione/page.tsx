import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "chronicle-copilot-cli";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione — /chronicle: la memoria persistente di Copilot CLI",
  description:
    "Presentazione visiva: come /chronicle archivia le sessioni in un database SQLite locale e usa quella storia per suggerire miglioramenti al tuo modo di lavorare.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}
