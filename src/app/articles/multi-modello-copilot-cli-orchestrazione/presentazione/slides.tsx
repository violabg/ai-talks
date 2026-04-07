"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { TitleSlide } from "./slide-01-title";
import { StatementSlide } from "./slide-02-statement";
import { ComparisonSlide } from "./slide-03-comparison";
import { ModelRolesSlide } from "./slide-04-model-roles";
import { OrchestrationFlowSlide } from "./slide-05-orchestration-flow";
import { FleetSlide } from "./slide-06-fleet";
import { AdversarialSlide } from "./slide-07-adversarial";
import { PlanningSlide } from "./slide-08-planning";
import { ClosingSlide } from "./slide-09-closing";
import speechData from "./speech.json";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <TitleSlide key="title" /> },
    { key: "statement", component: <StatementSlide key="statement" /> },
    { key: "comparison", component: <ComparisonSlide key="comparison" /> },
    { key: "roles", component: <ModelRolesSlide key="roles" /> },
    { key: "flow", component: <OrchestrationFlowSlide key="flow" /> },
    { key: "fleet", component: <FleetSlide key="fleet" /> },
    { key: "adversarial", component: <AdversarialSlide key="adversarial" /> },
    { key: "planning", component: <PlanningSlide key="planning" /> },
    { key: "closing", component: <ClosingSlide key="closing" /> },
  ];

  return <PresentationShell slug={slug} speechData={speechData} slides={slides} />;
}
