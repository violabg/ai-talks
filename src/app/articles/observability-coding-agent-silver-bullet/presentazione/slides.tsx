"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02Statement } from "./slide-02-statement";
import { Slide03KnownGood } from "./slide-03-known-good";
import { Slide04StrengthBlindness } from "./slide-04-strength-blindness";
import { Slide05BlindSculptor } from "./slide-05-blind-sculptor";
import { Slide06Emulator } from "./slide-06-emulator";
import { Slide07TestsVsObservability } from "./slide-07-tests-vs-observability";
import { Slide08Baseline } from "./slide-08-baseline";
import { Slide09Frontend } from "./slide-09-frontend";
import { Slide10Closing } from "./slide-10-closing";
import speechData from "./speech.json";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    { key: "statement", component: <Slide02Statement key="statement" /> },
    { key: "known-good", component: <Slide03KnownGood key="known-good" /> },
    {
      key: "strength-blindness",
      component: <Slide04StrengthBlindness key="strength-blindness" />,
    },
    {
      key: "blind-sculptor",
      component: <Slide05BlindSculptor key="blind-sculptor" />,
    },
    { key: "emulator", component: <Slide06Emulator key="emulator" /> },
    {
      key: "tests-vs-observability",
      component: <Slide07TestsVsObservability key="tests-vs-observability" />,
    },
    { key: "baseline", component: <Slide08Baseline key="baseline" /> },
    { key: "frontend", component: <Slide09Frontend key="frontend" /> },
    { key: "closing", component: <Slide10Closing key="closing" /> },
  ];

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-screen">
          <Loader2 className="w-8 h-8 text-(--pres-accent) animate-spin" />
        </div>
      }
    >
      <PresentationShell slug={slug} speechData={speechData} slides={slides} />
    </Suspense>
  );
}
