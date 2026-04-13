export function MultiModelloCopilotCliOrchestrazione() {
  // Router box = 16 chars, with 6-char left pad = 22 total
  return (
    <div
      className="relative bg-muted/30 dark:bg-muted/20 py-4 overflow-hidden font-mono text-xs leading-tight select-none"
      aria-hidden="true"
    >
      <pre className="mx-auto w-fit whitespace-pre">
        <span className="text-muted-foreground/50">{"     "}</span>
        <span className="text-primary">{"╭─── router ───╮"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"     "}</span>
        <span className="text-primary">{"│"}</span>
        <span className="text-muted-foreground">{"   "}</span>
        <span className="text-chart-1">{"o"}</span>
        <span className="text-muted-foreground">{" select   "}</span>
        <span className="text-primary">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"     "}</span>
        <span className="text-primary">{"╰─┬────┬─────┬─╯"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"    "}</span>
        <span className="text-primary">{"┌──┘    │     └─┐"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"    "}</span>
        <span className="text-primary">{"v       v       v"}</span>
        {"\n"}
        <span className="text-chart-3">{" ╭─────╮"}</span>
        <span className="text-muted-foreground"> </span>
        <span className="text-chart-4">{"╭─────╮"}</span>
        <span className="text-muted-foreground"> </span>
        <span className="text-chart-1">{"╭─────╮"}</span>
        {"\n"}
        <span className="text-chart-3">{" │ M1  │"}</span>
        <span className="text-muted-foreground"> </span>
        <span className="text-chart-4">{"│ M2  │"}</span>
        <span className="text-muted-foreground"> </span>
        <span className="text-chart-1">{"│ M3  │"}</span>
        {"\n"}
        <span className="text-chart-3">{" ╰──┬──╯"}</span>
        <span className="text-muted-foreground"> </span>
        <span className="text-chart-4">{"╰──┬──╯"}</span>
        <span className="text-muted-foreground"> </span>
        <span className="text-chart-1">{"╰──┬──╯"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"    "}</span>
        <span className="text-primary">{"└───────┴───────┘"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"            "}</span>
        <span className="text-primary">{"v"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"        "}</span>
        <span className="text-chart-2">{"[ merge ]"}</span>
      </pre>
    </div>
  );
}
