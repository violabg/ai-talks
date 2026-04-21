export function AgentLoopVsCodeCopilot() {
  return (
    <pre className="mx-auto w-fit whitespace-pre">
      <span className="text-primary">{"       ╭────────╮"}</span>
      {"\n"}
      <span className="text-chart-3">{"prompt"}</span>
      <span className="text-primary">{">│ "}</span>
      <span className="text-muted-foreground">{"model"}</span>
      <span className="text-primary">{"  │"}</span>
      <span className="text-chart-2">{"──text"}</span>
      {"\n"}
      <span className="text-chart-1">{"ctx "}</span>
      <span className="text-primary">{"<──┤"}</span>
      <span className="text-foreground">{" decide "}</span>
      <span className="text-primary">{"├──┐"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"       "}</span>
      <span className="text-primary">{"╰───┬────╯  │"}</span>
      {"\n"}
      <span className="text-primary">{"           v       │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"       "}</span>
      <span className="text-primary">{"╭────────╮  │"}</span>
      {"\n"}
      <span className="text-chart-5">{" exec  "}</span>
      <span className="text-primary">{"│ "}</span>
      <span className="text-chart-4">{"tool()"}</span>
      <span className="text-primary">{" │──┘"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"       "}</span>
      <span className="text-primary">{"╰────────╯"}</span>
      {"\n"}
      <span className="text-muted-foreground">{"       agent loop"}</span>
    </pre>
  );
}
