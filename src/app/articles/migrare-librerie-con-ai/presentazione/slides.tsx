"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import speechData from "./speech.json";
import { Slide01Title } from "./slide-01-title";
import { Slide02Difficulties } from "./slide-02-difficulties";
import { Slide03Hybrid } from "./slide-03-hybrid";
import { Slide04Tools } from "./slide-04-tools";
import { Slide05Codemods } from "./slide-05-codemods";
import { Slide06Prompt } from "./slide-06-prompt";
import { Slide07Loop } from "./slide-07-loop";
import { Slide08Risks } from "./slide-08-risks";
import { Slide09Strategy } from "./slide-09-strategy";
import { Slide10Closing } from "./slide-10-closing";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title",        component: <Slide01Title key="title" /> },
    { key: "difficulties", component: <Slide02Difficulties key="difficulties" /> },
    { key: "hybrid",       component: <Slide03Hybrid key="hybrid" /> },
    { key: "tools",        component: <Slide04Tools key="tools" /> },
    { key: "codemods",     component: <Slide05Codemods key="codemods" /> },
    { key: "prompt",       component: <Slide06Prompt key="prompt" /> },
    { key: "loop",         component: <Slide07Loop key="loop" /> },
    { key: "risks",        component: <Slide08Risks key="risks" /> },
    { key: "strategy",     component: <Slide09Strategy key="strategy" /> },
    { key: "closing",      component: <Slide10Closing key="closing" /> },
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
