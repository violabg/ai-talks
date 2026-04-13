export function SviluppoConAgentiAiGuidaRiferimento() {
  // Every boxed line = 22 chars
  return (
    <div className="relative bg-muted/30 dark:bg-muted/20 py-4 font-mono text-xs leading-tight select-none overflow-hidden" aria-hidden="true">
      <pre className="whitespace-pre mx-auto w-fit">
        <span className="text-muted-foreground/50">{"╭─ agent ────────────╮"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│ "}</span>
        <span className="text-chart-3">{"ctx:"}</span>
        <span className="text-muted-foreground">{" ░░░░░"}</span>
        <span className="text-chart-5">{"████████"}</span>
        <span className="text-muted-foreground/50">{" │"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│ "}</span>
        <span className="text-chart-3">{"mem:"}</span>
        <span className="text-muted-foreground/40">{" - "}</span>
        <span className="text-muted-foreground">{"(stateless)"}</span>
        <span className="text-muted-foreground/50">{" │"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"╰─────────┬──────────╯"}</span>
        {"\n"}
        <span className="text-primary/60">{"     ┌────┴────┐"}</span>
        {"\n"}
        <span className="text-primary/60">{"     v    v    v"}</span>
        {"\n"}
        <span className="text-primary">{"   ┌───┐"}</span>
        <span className="text-muted-foreground">{" "}</span>
        <span className="text-chart-2">{"┌───┐"}</span>
        <span className="text-muted-foreground">{" "}</span>
        <span className="text-chart-1">{"┌───┐"}</span>
        {"\n"}
        <span className="text-primary">{"   │ R │"}</span>
        <span className="text-muted-foreground">{" "}</span>
        <span className="text-chart-2">{"│ E │"}</span>
        <span className="text-muted-foreground">{" "}</span>
        <span className="text-chart-1">{"│ W │"}</span>
        {"\n"}
        <span className="text-primary">{"   └───┘"}</span>
        <span className="text-muted-foreground">{" "}</span>
        <span className="text-chart-2">{"└───┘"}</span>
        <span className="text-muted-foreground">{" "}</span>
        <span className="text-chart-1">{"└───┘"}</span>
      </pre>
    </div>
  )
}
