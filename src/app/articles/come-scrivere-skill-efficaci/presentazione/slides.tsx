"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02SkillHell } from "./slide-02-skill-hell";
import { Slide03Trigger } from "./slide-03-trigger";
import { Slide04Structure } from "./slide-04-structure";
import { Slide05ContextPointers } from "./slide-05-context-pointers";
import { Slide06LeadingWords } from "./slide-06-leading-words";
import { Slide07LegWork } from "./slide-07-leg-work";
import { Slide08Pruning } from "./slide-08-pruning";
import { Slide09Checklist } from "./slide-09-checklist";
import speechData from "./speech.json";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    { key: "skill-hell", component: <Slide02SkillHell key="skill-hell" /> },
    { key: "trigger", component: <Slide03Trigger key="trigger" /> },
    { key: "structure", component: <Slide04Structure key="structure" /> },
    {
      key: "context-pointers",
      component: <Slide05ContextPointers key="context-pointers" />,
    },
    {
      key: "leading-words",
      component: <Slide06LeadingWords key="leading-words" />,
    },
    { key: "leg-work", component: <Slide07LegWork key="leg-work" /> },
    { key: "pruning", component: <Slide08Pruning key="pruning" /> },
    { key: "checklist", component: <Slide09Checklist key="checklist" /> },
  ];

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-[var(--pres-accent)]" />
        </div>
      }
    >
      <PresentationShell slug={slug} speechData={speechData} slides={slides} />
    </Suspense>
  );
}
