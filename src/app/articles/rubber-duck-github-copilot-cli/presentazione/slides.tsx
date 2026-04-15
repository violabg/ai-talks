"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { TitleSlide } from "./slide-01-title";
import { ProblemSlide } from "./slide-02-problem";
import { SolutionSlide } from "./slide-03-solution";
import { ArchitectureSlide } from "./slide-04-architecture";
import { ThreeMomentsSlide } from "./slide-05-three-moments";
import { PlanningReviewSlide } from "./slide-06-planning-review";
import { TestValidationSlide } from "./slide-07-test-validation";
import { LoopRecoverySlide } from "./slide-08-loop-recovery";
import { ActivationSlide } from "./slide-09-activation";
import { MCPSlide } from "./slide-10-mcp";
import { CaseStudySlide } from "./slide-11-case-study";
import { PerformanceSlide } from "./slide-12-performance";
import { PrincipleSlide } from "./slide-13-principle";
import { ClosingSlide } from "./slide-14-closing";
import speechData from "./speech.json";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <TitleSlide key="title" /> },
    { key: "problem", component: <ProblemSlide key="problem" /> },
    { key: "solution", component: <SolutionSlide key="solution" /> },
    {
      key: "architecture",
      component: <ArchitectureSlide key="architecture" />,
    },
    {
      key: "three-moments",
      component: <ThreeMomentsSlide key="three-moments" />,
    },
    {
      key: "planning-review",
      component: <PlanningReviewSlide key="planning-review" />,
    },
    {
      key: "test-validation",
      component: <TestValidationSlide key="test-validation" />,
    },
    {
      key: "loop-recovery",
      component: <LoopRecoverySlide key="loop-recovery" />,
    },
    { key: "activation", component: <ActivationSlide key="activation" /> },
    { key: "mcp", component: <MCPSlide key="mcp" /> },
    { key: "case-study", component: <CaseStudySlide key="case-study" /> },
    {
      key: "performance",
      component: <PerformanceSlide key="performance" />,
    },
    {
      key: "principle",
      component: <PrincipleSlide key="principle" />,
    },
    { key: "closing", component: <ClosingSlide key="closing" /> },
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
