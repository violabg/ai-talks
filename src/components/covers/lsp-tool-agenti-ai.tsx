export function LspToolAgentiAi() {
  // Every boxed line = 25 chars
  return (
    <div className="relative bg-muted/30 dark:bg-muted/20 py-4 font-mono text-xs leading-tight select-none overflow-hidden" aria-hidden="true">
      <pre className="whitespace-pre mx-auto w-fit">
        <span className="text-muted-foreground/50">{"╭─ LSP ─────────────────╮"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-5">{" x "}</span>
        <span className="text-muted-foreground">{"err: "}</span>
        <span className="text-foreground">{"Type 'string'"}</span>
        <span className="text-muted-foreground/50">{"  │"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-1">{" @ "}</span>
        <span className="text-muted-foreground">{"ref: "}</span>
        <span className="text-foreground">{"3 references"}</span>
        <span className="text-muted-foreground/50">{"   │"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-2">{" + "}</span>
        <span className="text-muted-foreground">{"def: "}</span>
        <span className="text-foreground">{"auth.ts:42"}</span>
        <span className="text-muted-foreground/50">{"     │"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"├───────────────────────┤"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│ "}</span>
        <span className="text-primary">{"agent"}</span>
        <span className="text-muted-foreground/50">{" <── "}</span>
        <span className="text-chart-3">{"LSP"}</span>
        <span className="text-muted-foreground/50">{" ─> "}</span>
        <span className="text-primary">{"code"}</span>
        <span className="text-muted-foreground/50">{" │"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"╰───────────────────────╯"}</span>
      </pre>
    </div>
  )
}
