import * as motion from "motion/react-client";
import type { ReactNode } from "react";

export const COLORS = {
  bg: "#0f172a",
  text: "#e2e8f0",
  muted: "#94a3b8",
  accent: "#a78bfa",
  success: "#34d399",
  warning: "#fbbf24",
  danger: "#f87171",
  border: "#334155",
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
      transition={{ duration: 0.45, delay }}
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
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
