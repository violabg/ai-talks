"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02Anatomy } from "./slide-02-anatomy";
import { Slide03Ambiguity } from "./slide-03-ambiguity";
import { Slide04Patterns } from "./slide-04-patterns";
import { Slide05StepByStep } from "./slide-05-step-by-step";
import { Slide06Workflow } from "./slide-06-workflow";
import { Slide07Checkpoint } from "./slide-07-checkpoint";
import { Slide08Isolation } from "./slide-08-isolation";
import { Slide09FeedbackLoop } from "./slide-09-feedback-loop";
import { Slide10Closing } from "./slide-10-closing";
import speechData from "./speech.json";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    { key: "anatomy", component: <Slide02Anatomy key="anatomy" /> },
    { key: "ambiguity", component: <Slide03Ambiguity key="ambiguity" /> },
    { key: "patterns", component: <Slide04Patterns key="patterns" /> },
    {
      key: "step-by-step",
      component: <Slide05StepByStep key="step-by-step" />,
    },
    { key: "workflow", component: <Slide06Workflow key="workflow" /> },
    { key: "checkpoint", component: <Slide07Checkpoint key="checkpoint" /> },
    { key: "isolation", component: <Slide08Isolation key="isolation" /> },
    {
      key: "feedback-loop",
      component: <Slide09FeedbackLoop key="feedback-loop" />,
    },
    { key: "closing", component: <Slide10Closing key="closing" /> },
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
