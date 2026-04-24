import type { ReactNode } from "react";

export const CONFIG_TAGS = [
  "agenti AI",
  "configurazione",
  "workflow",
  "CLI",
  "IDE",
];

export const LAYERS = [
  {
    name: "Always-on instructions",
    short: "always-on",
    family: "memoria",
    color: "var(--pres-accent)",
    tone: "color-mix(in srgb, var(--pres-accent) 12%, transparent)",
  },
  {
    name: "File-based instructions",
    short: "file-based",
    family: "memoria",
    color: "var(--pres-blue)",
    tone: "color-mix(in srgb, var(--pres-blue) 12%, transparent)",
  },
  {
    name: "Prompt files",
    short: "prompt",
    family: "metodo",
    color: "var(--pres-warning)",
    tone: "color-mix(in srgb, var(--pres-warning) 12%, transparent)",
  },
  {
    name: "Agent skills",
    short: "skills",
    family: "metodo",
    color: "var(--pres-success)",
    tone: "color-mix(in srgb, var(--pres-success) 12%, transparent)",
  },
  {
    name: "Custom agents",
    short: "agents",
    family: "mandato",
    color: "var(--pres-accent)",
    tone: "color-mix(in srgb, var(--pres-accent) 18%, transparent)",
  },
  {
    name: "MCP",
    short: "mcp",
    family: "capacita",
    color: "var(--pres-blue)",
    tone: "color-mix(in srgb, var(--pres-blue) 18%, transparent)",
  },
  {
    name: "Hooks",
    short: "hooks",
    family: "automazione",
    color: "var(--pres-warning)",
    tone: "color-mix(in srgb, var(--pres-warning) 12%, transparent)",
  },
  {
    name: "Agent plugins",
    short: "plugin",
    family: "automazione",
    color: "var(--pres-success)",
    tone: "color-mix(in srgb, var(--pres-success) 14%, transparent)",
  },
] as const;

export function SlideFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col h-full overflow-hidden rounded-[2rem] border border-(--pres-border) bg-(--pres-bg) ${className}`}
    >
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top left, color-mix(in srgb, var(--pres-blue) 10%, transparent), transparent 35%), radial-gradient(circle at 85% 15%, color-mix(in srgb, var(--pres-accent) 12%, transparent), transparent 30%), linear-gradient(180deg, color-mix(in srgb, var(--pres-bg-surface) 45%, transparent), transparent)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in srgb, var(--pres-border) 30%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--pres-border) 30%, transparent) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.08))",
          }}
        />
      </div>
      <div className="relative flex flex-col flex-1">{children}</div>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-(--pres-muted) text-sm uppercase tracking-[0.22em]">
      {children}
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.6rem] border border-(--pres-border) bg-[color:color-mix(in_srgb,var(--pres-bg-node)_88%,transparent)] backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-balance tracking-tight">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base sm:text-lg text-(--pres-text-sub) leading-relaxed text-balance">
        {description}
      </p>
    </div>
  );
}

export { ArrowTip } from "@/components/presentation/slide-primitives";
