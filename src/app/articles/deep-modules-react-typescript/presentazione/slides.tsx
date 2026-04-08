"use client";

import { Slide01Title } from "@/app/articles/deep-modules-react-typescript/presentazione/slide-01-title";
import { Slide02ProblemMap } from "@/app/articles/deep-modules-react-typescript/presentazione/slide-02-problem-map";
import { Slide03Comparison } from "@/app/articles/deep-modules-react-typescript/presentazione/slide-03-comparison";
import { Slide04Anatomy } from "@/app/articles/deep-modules-react-typescript/presentazione/slide-04-anatomy";
import { Slide05BehaviorApi } from "@/app/articles/deep-modules-react-typescript/presentazione/slide-05-behavior-api";
import { Slide06AuthFlow } from "@/app/articles/deep-modules-react-typescript/presentazione/slide-06-auth-flow";
import { Slide07VideoEditor } from "@/app/articles/deep-modules-react-typescript/presentazione/slide-07-video-editor";
import { Slide08GreyBox } from "@/app/articles/deep-modules-react-typescript/presentazione/slide-08-grey-box";
import { Slide09Enforcement } from "@/app/articles/deep-modules-react-typescript/presentazione/slide-09-enforcement";
import { Slide10Closing } from "@/app/articles/deep-modules-react-typescript/presentazione/slide-10-closing";
import speechData from "@/app/articles/deep-modules-react-typescript/presentazione/speech.json";
import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <Slide01Title key="title" /> },
    { key: "problem-map", component: <Slide02ProblemMap key="problem-map" /> },
    { key: "comparison", component: <Slide03Comparison key="comparison" /> },
    { key: "anatomy", component: <Slide04Anatomy key="anatomy" /> },
    {
      key: "behavior-api",
      component: <Slide05BehaviorApi key="behavior-api" />,
    },
    { key: "auth-flow", component: <Slide06AuthFlow key="auth-flow" /> },
    {
      key: "video-editor",
      component: <Slide07VideoEditor key="video-editor" />,
    },
    { key: "grey-box", component: <Slide08GreyBox key="grey-box" /> },
    { key: "enforcement", component: <Slide09Enforcement key="enforcement" /> },
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
