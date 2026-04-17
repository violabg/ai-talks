"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02Statement } from "./slide-02-statement";
import { Slide03WhatRecords } from "./slide-03-what-records";
import { Slide04ImproveVsTips } from "./slide-04-improve-vs-tips";
import { Slide05ImproveExample } from "./slide-05-improve-example";
import { Slide06TipsExample } from "./slide-06-tips-example";
import { Slide07DynamicMemory } from "./slide-07-dynamic-memory";
import { Slide08WeeklyCycle } from "./slide-08-weekly-cycle";
import { Slide09Ecosystem } from "./slide-09-ecosystem";
import { Slide10Closing } from "./slide-10-closing";
import speechData from "./speech.json";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    { key: "statement", component: <Slide02Statement key="statement" /> },
    { key: "records", component: <Slide03WhatRecords key="records" /> },
    {
      key: "improve-vs-tips",
      component: <Slide04ImproveVsTips key="improve-vs-tips" />,
    },
    {
      key: "improve-example",
      component: <Slide05ImproveExample key="improve-example" />,
    },
    {
      key: "tips-example",
      component: <Slide06TipsExample key="tips-example" />,
    },
    {
      key: "dynamic-memory",
      component: <Slide07DynamicMemory key="dynamic-memory" />,
    },
    {
      key: "weekly-cycle",
      component: <Slide08WeeklyCycle key="weekly-cycle" />,
    },
    { key: "ecosystem", component: <Slide09Ecosystem key="ecosystem" /> },
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
