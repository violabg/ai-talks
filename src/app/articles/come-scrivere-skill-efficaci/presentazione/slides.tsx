"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02SkillHell } from "./slide-02-skill-hell";
import { Slide03OsAnatomy } from "./slide-03-os-anatomy";
import { Slide04Trigger } from "./slide-04-trigger";
import { Slide05Structure } from "./slide-05-structure";
import { Slide06LeadingWords } from "./slide-06-leading-words";
import { Slide07LegWork } from "./slide-07-leg-work";
import { Slide08Pruning } from "./slide-08-pruning";
import { Slide09DeletionTest } from "./slide-09-deletion-test";
import { Slide10Cockpit } from "./slide-10-cockpit";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    { key: "skill-hell", component: <Slide02SkillHell key="skill-hell" /> },
    { key: "os-anatomy", component: <Slide03OsAnatomy key="os-anatomy" /> },
    { key: "trigger", component: <Slide04Trigger key="trigger" /> },
    { key: "structure", component: <Slide05Structure key="structure" /> },
    {
      key: "leading-words",
      component: <Slide06LeadingWords key="leading-words" />,
    },
    { key: "leg-work", component: <Slide07LegWork key="leg-work" /> },
    { key: "pruning", component: <Slide08Pruning key="pruning" /> },
    {
      key: "deletion-test",
      component: <Slide09DeletionTest key="deletion-test" />,
    },
    { key: "cockpit", component: <Slide10Cockpit key="cockpit" /> },
  ];

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-[var(--pres-accent)]" />
        </div>
      }
    >
      <PresentationShell slug={slug} speechData={null} slides={slides} />
    </Suspense>
  );
}
