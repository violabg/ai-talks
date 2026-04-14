export function SviluppoConAgentiAiGuidaRiferimento() {
  // box width = 11 chars (.---------.); box starts at column 9
  return (
    <pre
      aria-hidden="true"
      className="mx-auto w-fit whitespace-pre select-none"
    >
      <span className="text-chart-4">{" ?   ?   "}</span>
      <span className="text-primary">{".---------.  "}</span>
      <span className="text-chart-4">{"?   ?  "}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{" .   .   "}</span>
      <span className="text-primary">{"|"}</span>
      <span className="text-foreground">{" (o) (o) "}</span>
      <span className="text-primary">{"|  "}</span>
      <span className="text-muted-foreground/50">{".   .  "}</span>
      {"\n"}
      <span className="text-chart-3">{"[?] [?]  "}</span>
      <span className="text-primary">{"|  "}</span>
      <span className="text-muted-foreground/50">{"~~~~~"}</span>
      <span className="text-primary">{"  |  "}</span>
      <span className="text-chart-3">{"[?] [?]"}</span>
      {"\n"}
      <span className="text-primary">{"         |  "}</span>
      <span className="text-chart-1">{"[ ? ]"}</span>
      <span className="text-primary">{"  |"}</span>
      {"\n"}
      <span className="text-chart-4">{" ?   ?   "}</span>
      <span className="text-primary">{"'----+----'  "}</span>
      <span className="text-chart-4">{"?   ?  "}</span>
      {"\n"}
      <span className="text-primary/60">{"             /|\\"}</span>
      {"\n"}
      <span className="text-primary/60">{"            / | \\"}</span>
      {"\n"}
      <span className="text-muted-foreground">{"          no memory"}</span>
    </pre>
  );
}
