"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02Paradigm } from "./slide-02-paradigm";
import { Slide03Pillars } from "./slide-03-pillars";
import { Slide04Cycle } from "./slide-04-cycle";
import { Slide05Autonomy } from "./slide-05-autonomy";
import { Slide06Safety } from "./slide-06-safety";
import { Slide07Context } from "./slide-07-context";
import { Slide08Environments } from "./slide-08-environments";
import { Slide09Debug } from "./slide-09-debug";
import { Slide10SelfHeal } from "./slide-10-selfheal";
import { Slide11Closing } from "./slide-11-closing";
import speechData from "./speech.json";

export function Slideshow({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    { key: "paradigm", component: <Slide02Paradigm key="paradigm" /> },
    { key: "pillars", component: <Slide03Pillars key="pillars" /> },
    { key: "cycle", component: <Slide04Cycle key="cycle" /> },
    { key: "autonomy", component: <Slide05Autonomy key="autonomy" /> },
    { key: "safety", component: <Slide06Safety key="safety" /> },
    { key: "context", component: <Slide07Context key="context" /> },
    {
      key: "environments",
      component: <Slide08Environments key="environments" />,
    },
    { key: "debug", component: <Slide09Debug key="debug" /> },
    { key: "selfheal", component: <Slide10SelfHeal key="selfheal" /> },
    { key: "closing", component: <Slide11Closing key="closing" /> },
  ];

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-screen">
          <Loader2 className="w-8 h-8 text-[var(--pres-accent)] animate-spin" />
        </div>
      }
    >
      <PresentationShell slug={slug} speechData={speechData} slides={slides} />
    </Suspense>
  );
}
