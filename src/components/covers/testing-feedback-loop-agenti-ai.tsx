export function TestingFeedbackLoopAgentiAi() {
  // Every boxed line = 29 chars
  return (
    <pre className="mx-auto w-fit whitespace-pre">
      <span className="text-muted-foreground/50">
        {"╭───────────────────────────╮"}
      </span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-2">{" + "}</span>
      <span className="text-foreground">{"auth.login         "}</span>
      <span className="text-chart-2">{"pass"}</span>
      <span className="text-muted-foreground/50">{" │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-2">{" + "}</span>
      <span className="text-foreground">{"auth.signup        "}</span>
      <span className="text-chart-2">{"pass"}</span>
      <span className="text-muted-foreground/50">{" │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-5">{" x "}</span>
      <span className="text-foreground">{"auth.refresh       "}</span>
      <span className="text-chart-5">{"FAIL"}</span>
      <span className="text-muted-foreground/50">{" │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-2">{" + "}</span>
      <span className="text-foreground">{"db.connection      "}</span>
      <span className="text-chart-2">{"pass"}</span>
      <span className="text-muted-foreground/50">{" │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">
        {"├───────────────────────────┤"}
      </span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│ "}</span>
      <span className="text-primary">{"Tests:"}</span>
      <span className="text-muted-foreground"> </span>
      <span className="text-chart-2">{"3 passed"}</span>
      <span className="text-muted-foreground">{" · "}</span>
      <span className="text-chart-5">{"1 fail"}</span>
      <span className="text-muted-foreground/50">{"  │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">
        {"╰───────────────────────────╯"}
      </span>
      {"\n"}
      <span className="text-primary/60">{"    v"}</span>
      <span className="text-muted-foreground">{" fix -> re-run -> "}</span>
      <span className="text-chart-2">{"+ all"}</span>
    </pre>
  );
}
