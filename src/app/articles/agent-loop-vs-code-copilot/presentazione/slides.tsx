"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02WhileLoop } from "./slide-02-while-loop";
import { Slide03Ingredients } from "./slide-03-ingredients";
import { Slide04TurnFlow } from "./slide-04-turn-flow";
import { Slide05EverythingIsText } from "./slide-05-everything-is-text";
import { Slide06ToolParadox } from "./slide-06-tool-paradox";
import { Slide07SubAgent } from "./slide-07-sub-agent";
import { Slide08HaikuVsOpus } from "./slide-08-haiku-vs-opus";
import { Slide09Harness } from "./slide-09-harness";
import { Slide10Trajectory } from "./slide-10-trajectory";
import { Slide11RuleVsTool } from "./slide-11-rule-vs-tool";
import { Slide12Closing } from "./slide-12-closing";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    { key: "while-loop", component: <Slide02WhileLoop key="while-loop" /> },
    { key: "ingredients", component: <Slide03Ingredients key="ingredients" /> },
    { key: "turn-flow", component: <Slide04TurnFlow key="turn-flow" /> },
    {
      key: "everything-is-text",
      component: <Slide05EverythingIsText key="everything-is-text" />,
    },
    {
      key: "tool-paradox",
      component: <Slide06ToolParadox key="tool-paradox" />,
    },
    { key: "sub-agent", component: <Slide07SubAgent key="sub-agent" /> },
    {
      key: "haiku-vs-opus",
      component: <Slide08HaikuVsOpus key="haiku-vs-opus" />,
    },
    { key: "harness", component: <Slide09Harness key="harness" /> },
    { key: "trajectory", component: <Slide10Trajectory key="trajectory" /> },
    {
      key: "rule-vs-tool",
      component: <Slide11RuleVsTool key="rule-vs-tool" />,
    },
    { key: "closing", component: <Slide12Closing key="closing" /> },
  ];

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-screen">
          <Loader2 className="w-8 h-8 text-(--pres-accent) animate-spin" />
        </div>
      }
    >
      <PresentationShell slug={slug} speechData={null} slides={slides} />
    </Suspense>
  );
}
