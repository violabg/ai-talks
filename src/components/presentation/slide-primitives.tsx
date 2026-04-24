import * as motion from "motion/react-client";
import type { ReactNode } from "react";

/** Simple flex-column slide wrapper used across multiple presentations. */
export function SlideFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-full py-4 sm:py-5 mx-auto w-full max-w-6xl text-(--pres-text)">
      {children}
    </div>
  );
}

/** Animated heading block with eyebrow label, title, and optional description. */
export function SlideHeading({
  eyebrow,
  title,
  description,
  titleClassName = "",
  descriptionClassName = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-6"
    >
      <div className="mb-3 font-mono text-(--pres-muted) text-sm uppercase tracking-[0.24em]">
        {eyebrow}
      </div>
      <h2
        className={`max-w-4xl font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 max-w-3xl text-(--pres-text-sub) text-base sm:text-lg leading-relaxed ${descriptionClassName}`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

/** Rounded card with accent glow shadow. */
export function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-(--pres-border) bg-(--pres-bg-card) shadow-[0_20px_60px_color-mix(in_srgb,var(--pres-accent)_8%,transparent)] ${className}`}
    >
      {children}
    </div>
  );
}

/** Returns motion props for a fade-in-up animation. Use with spread syntax on a motion element. */
export function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay },
  } as const;
}

/** Fade-in-up motion wrapper component. */
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

/** Fade-in-from-left motion wrapper component. */
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

export function ArrowTip({
  x,
  y,
  angle = 0,
  color,
  delay,
  size = 11,
  duration = 0.2,
}: {
  x: number;
  y: number;
  angle?: number;
  color: string;
  delay: number;
  size?: number;
  duration?: number;
}) {
  const back = -size;
  const half = size * 0.7;
  const points = `${back},${-half} 0,0 ${back},${half}`;
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <motion.polygon
        points={points}
        fill={color}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration, delay, ease: "easeOut" }}
        style={{ transformOrigin: "0 0" }}
      />
    </g>
  );
}
