"use client";

import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "p" | "span" | "section";
}) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: delay / 1000 }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
