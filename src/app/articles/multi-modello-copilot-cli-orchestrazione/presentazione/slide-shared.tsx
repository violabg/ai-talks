import * as motion from "motion/react-client";
import type { ReactNode } from "react";

export const MODEL_COLORS = {
  haiku: "#34d399",
  sonnet: "#60a5fa",
  gpt4: "#fbbf24",
  opus: "#a78bfa",
} as const;

export function FadeIn({
  delay = 0,
  children,
  className,
}: {
  delay?: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInLeft({
  delay = 0,
  children,
  className,
}: {
  delay?: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
