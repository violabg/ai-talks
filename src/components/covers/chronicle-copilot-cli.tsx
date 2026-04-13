export function ChronicleCopilotCli() {
  // Every boxed line = 25 chars
  return (
    <div className="relative bg-muted/30 dark:bg-muted/20 py-4 font-mono text-xs leading-tight select-none overflow-hidden" aria-hidden="true">
      <pre className="whitespace-pre mx-auto w-fit">
        <span className="text-muted-foreground/50">{"╭─ /chronicle ──────────╮"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-3">{" ● "}</span>
        <span className="text-muted-foreground">{"session #47      2h"}</span>
        <span className="text-muted-foreground/50">{" │"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-3">{" ● "}</span>
        <span className="text-muted-foreground">{"session #46     45m"}</span>
        <span className="text-muted-foreground/50">{" │"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-3">{" ● "}</span>
        <span className="text-muted-foreground">{"session #45      1h"}</span>
        <span className="text-muted-foreground/50">{" │"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-muted-foreground/30">{" ·  ···                "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"├───────────────────────┤"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│ "}</span>
        <span className="text-chart-1">{"log"}</span>
        <span className="text-muted-foreground">{" > "}</span>
        <span className="text-primary">{"improve"}</span>
        <span className="text-muted-foreground">{" > "}</span>
        <span className="text-chart-2">{"learn"}</span>
        <span className="text-muted-foreground/50">{" │"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"╰───────────────────────╯"}</span>
      </pre>
    </div>
  )
}
