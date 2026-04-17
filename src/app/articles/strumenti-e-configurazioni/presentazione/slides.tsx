"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import type { SpeechData } from "@/components/presentation/use-narration";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Slide01Title } from "./slide-01-title";
import { Slide02Question } from "./slide-02-question";
import { Slide03Atlas } from "./slide-03-atlas";
import { Slide04Categories } from "./slide-04-categories";
import { Slide05Flow } from "./slide-05-flow";
import { Slide06Scope } from "./slide-06-scope";
import { Slide07SkillsAgents } from "./slide-07-skills-agents";
import { Slide08Mcp } from "./slide-08-mcp";
import { Slide09Automation } from "./slide-09-automation";
import { Slide10Priority } from "./slide-10-priority";
import { Slide11Closing } from "./slide-11-closing";
import rawSpeechData from "./speech.json";

const speechData = (Array.isArray(rawSpeechData)
  ? rawSpeechData[0]
  : rawSpeechData) as unknown as SpeechData;

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    { key: "question", component: <Slide02Question key="question" /> },
    { key: "atlas", component: <Slide03Atlas key="atlas" /> },
    { key: "categories", component: <Slide04Categories key="categories" /> },
    { key: "flow", component: <Slide05Flow key="flow" /> },
    { key: "scope", component: <Slide06Scope key="scope" /> },
    {
      key: "skills-agents",
      component: <Slide07SkillsAgents key="skills-agents" />,
    },
    { key: "mcp", component: <Slide08Mcp key="mcp" /> },
    {
      key: "automation",
      component: <Slide09Automation key="automation" />,
    },
    { key: "priority", component: <Slide10Priority key="priority" /> },
    { key: "closing", component: <Slide11Closing key="closing" /> },
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
