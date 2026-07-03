export {
  ArrowTip,
  FadeIn,
  fadeIn,
  FadeInLeft,
  GlowCard,
  SlideFrame,
  SlideHeading,
} from "@/components/presentation/slide-primitives";

export const PILLARS = ["trigger", "struttura", "steering", "pruning"] as const;

export const COLORS = {
  text: "var(--pres-text)",
  sub: "var(--pres-text-sub)",
  muted: "var(--pres-muted)",
  border: "var(--pres-border)",
  bg: "var(--pres-bg)",
  card: "var(--pres-bg-card)",
  accent: "var(--pres-accent)",
  blue: "var(--pres-blue)",
  success: "var(--pres-success)",
  warning: "var(--pres-warning)",
  danger: "var(--pres-danger)",
} as const;
