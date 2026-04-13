export function StrumentiEConfigurazioni() {
  // Every boxed line = 26 chars
  return (
    <div className="relative bg-muted/30 dark:bg-muted/20 py-4 font-mono text-xs leading-tight select-none overflow-hidden" aria-hidden="true">
      <pre className="whitespace-pre mx-auto w-fit">
        <span className="text-muted-foreground/50">{"╭─ config layers ────────╮"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-primary">{" o "}</span>
        <span className="text-foreground">{"instructions"}</span>
        <span className="text-muted-foreground/50">{"    ░░░░ "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-3">{" o "}</span>
        <span className="text-foreground">{"skills"}</span>
        <span className="text-muted-foreground/50">{"      ░░░░░░░░ "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-1">{" o "}</span>
        <span className="text-foreground">{"agents"}</span>
        <span className="text-muted-foreground/50">{"    ░░░░░░░░░░ "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-4">{" o "}</span>
        <span className="text-foreground">{"MCP"}</span>
        <span className="text-muted-foreground/50">{"     ░░░░░░░░░░░░ "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-2">{" o "}</span>
        <span className="text-foreground">{"hooks"}</span>
        <span className="text-muted-foreground/50">{" ░░░░░░░░░░░░░░ "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"╰────────────────────────╯"}</span>
      </pre>
    </div>
  )
}
