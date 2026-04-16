"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02Statement } from "./slide-02-statement";
import { Slide03TwoBrains } from "./slide-03-two-brains";
import { Slide04CrossFamily } from "./slide-04-cross-family";
import { Slide05InterventionPoints } from "./slide-05-intervention-points";
import { Slide06ReviewLoop } from "./slide-06-review-loop";
import { Slide07McpGuardrail } from "./slide-07-mcp-guardrail";
import { Slide08ErrorPrevention } from "./slide-08-error-prevention";
import { Slide09Outcomes } from "./slide-09-outcomes";
import speechData from "./speech.json";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    { key: "statement", component: <Slide02Statement key="statement" /> },
    { key: "brains", component: <Slide03TwoBrains key="brains" /> },
    {
      key: "cross-family",
      component: <Slide04CrossFamily key="cross-family" />,
    },
    {
      key: "intervention-points",
      component: <Slide05InterventionPoints key="intervention-points" />,
    },
    { key: "review-loop", component: <Slide06ReviewLoop key="review-loop" /> },
    { key: "mcp", component: <Slide07McpGuardrail key="mcp" /> },
    {
      key: "error-prevention",
      component: <Slide08ErrorPrevention key="error-prevention" />,
    },
    { key: "outcomes", component: <Slide09Outcomes key="outcomes" /> },
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
