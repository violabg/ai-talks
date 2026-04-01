import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Link utili",
  description:
    "Una selezione curata di documentazione, tool, raccolte e riferimenti utili per lavorare con agenti AI e coding assistant.",
};

type ResourceKind = "Ufficiale" | "Tool" | "Community" | "Esperimento";

type Resource = {
  title: string;
  description: string;
  url: string;
  kind: ResourceKind;
};

type ResourceCategory = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  resources: Resource[];
};

const kindVariant: Record<ResourceKind, "default" | "secondary" | "outline"> = {
  Ufficiale: "default",
  Tool: "secondary",
  Community: "outline",
  Esperimento: "secondary",
};

const resourceCategories: ResourceCategory[] = [
  {
    id: "documentazione-ufficiale",
    eyebrow: "Per orientarsi",
    title: "Documentazione ufficiale",
    description:
      "Le fonti da cui partire per capire prodotti, flussi e opzioni di configurazione prima di passare agli esperimenti.",
    resources: [
      {
        title: "GitHub Copilot in VS Code: overview",
        description:
          "Panoramica completa delle funzionalita di Copilot dentro VS Code, dai suggerimenti inline alla chat e ai flussi agentici.",
        url: "https://code.visualstudio.com/docs/copilot/overview",
        kind: "Ufficiale",
      },
      {
        title: "VS Code Copilot customization",
        description:
          "Guida alle personalizzazioni di Copilot: istruzioni, contesto, impostazioni e pattern per modellare meglio il comportamento dell'assistente.",
        url: "https://code.visualstudio.com/docs/copilot/customization/overview",
        kind: "Ufficiale",
      },
      {
        title: "GitHub Copilot CLI",
        description:
          "Introduzione ufficiale a Copilot CLI per portare suggerimenti e automazione direttamente nel terminale.",
        url: "https://github.com/features/copilot/cli",
        kind: "Ufficiale",
      },
      {
        title: "Claude Code docs",
        description:
          "Documentazione del tool di Anthropic per coding agent e sviluppo assistito, con esempi di uso da terminale e workflow pratici.",
        url: "https://code.claude.com/docs",
        kind: "Ufficiale",
      },
      {
        title: "GitHub Copilot docs",
        description:
          "Hub documentale piu ampio di GitHub Copilot, utile per vedere funzionalita, scenari d'uso e differenze tra ambienti e piani.",
        url: "https://docs.github.com/en/copilot",
        kind: "Ufficiale",
      },
      {
        title: "Model Context Protocol",
        description:
          "Introduzione al protocollo MCP, utile per capire come collegare agenti, tool esterni e contesto strutturato.",
        url: "https://modelcontextprotocol.io/introduction",
        kind: "Ufficiale",
      },
      {
        title: "Agent Skills",
        description:
          "Documentazione ufficiale e catalogo di skill per agenti AI: pattern riusabili, criteri di attivazione e workflow multi-step pronti da integrare nei propri flussi di sviluppo.",
        url: "https://agentskills.io/home",
        kind: "Ufficiale",
      },
    ],
  },
  {
    id: "tool-e-workflow",
    eyebrow: "Per lavorare meglio",
    title: "Tool e workflow",
    description:
      "Risorse operative per costruire routine concrete: skill riusabili, prompt, configurazioni e strumenti pensati per flussi moderni.",
    resources: [
      {
        title: "skills.sh",
        description:
          "Catalogo di skill e pattern riusabili per agenti e coding assistant, utile per standardizzare istruzioni e capability.",
        url: "https://skills.sh",
        kind: "Tool",
      },
      {
        title: "Matt Pocock skills",
        description:
          "Catalogo di skill e pattern riusabili /grill-me, /write-a-prd, /prd-to-issues, /tdd, /improve-codebase-architecture...",
        url: "https://github.com/mattpocock/skills",
        kind: "Tool",
      },
      {
        title: "everything-claude-code",
        description:
          "Raccolta production-ready di agenti, skill, hook, comandi, regole e configurazioni MCP per Claude Code — compatibile anche con Cursor, OpenCode e Codex da un'unica sorgente di config.",
        url: "https://github.com/affaan-m/everything-claude-code",
        kind: "Tool",
      },
      {
        title: "gh-aw (GitHub Agentic Workflows)",
        description:
          "Estensione per GitHub CLI che abilita workflow di automazione AI-driven: definisci flussi in markdown e gh-aw li compila in GitHub Actions, con agenti Copilot/Claude per triage, PR labeling e analisi CI.",
        url: "https://github.github.io/gh-aw/",
        kind: "Tool",
      },
      {
        title: "varlock",
        description:
          "Gestione sicura dei file .env per team che lavorano con AI: definisce variabili con schema e validazione, fornisce agli agenti il contesto di configurazione senza esporre i segreti — recuperati a runtime da provider come 1Password, Infisical e AWS.",
        url: "https://varlock.dev",
        kind: "Tool",
      },
    ],
  },
  {
    id: "community-e-raccolte",
    eyebrow: "Per ampliare il raggio",
    title: "Community e raccolte",
    description:
      "Directory, repository e raccolte che aiutano a scoprire esempi, integrazioni e risorse curate da altri sviluppatori.",
    resources: [
      {
        title: "awesome-copilot",
        description:
          "Repository community-driven con tool, template, guide e link interessanti attorno all'ecosistema GitHub Copilot.",
        url: "https://github.com/github/awesome-copilot",
        kind: "Community",
      },
      {
        title: "claude-plugins-official",
        description:
          "Repository ufficiale con esempi e plugin collegati all'ecosistema Claude, utile per vedere approcci concreti e integrazioni.",
        url: "https://github.com/anthropics/claude-plugins-official",
        kind: "Community",
      },
      {
        title: "claude-code",
        description:
          "Claude Code plugins that extend functionality through custom commands, agents, and workflows. These are examples of what's possible with the Claude Code plugin system—many more plugins are available through community marketplaces.",
        url: "https://github.com/anthropics/claude-code",
        kind: "Community",
      },
      {
        title: "awesome-claude-code",
        description:
          "La directory community-driven piu completa sull'ecosistema Claude Code: skill, hook, comandi slash, template CLAUDE.md, tooling, status line e workflow. Il punto di partenza per chi vuole esplorare cosa la community ha costruito.",
        url: "https://github.com/hesreallyhim/awesome-claude-code",
        kind: "Community",
      },
      {
        title: "claude-code-system-prompts",
        description:
          "Raccolta aggiornata di tutte le parti del system prompt di Claude Code: descrizioni dei tool built-in, prompt dei sub-agent (Plan, Explore, Task) e prompt di utilita. Utile per capire come ragiona Claude Code e per fare prompt engineering consapevole.",
        url: "https://github.com/Piebald-AI/claude-code-system-prompts",
        kind: "Community",
      },
    ],
  },
  {
    id: "pattern-ed-esempi",
    eyebrow: "Per studiare approcci",
    title: "Pattern ed esempi",
    description:
      "Materiali piccoli ma densi: gist, demo e prototipi utili per osservare come altri stanno modellando agenti e collaboration loop.",
    resources: [
      {
        title: "Ultralight orchestrator",
        description: "Un multi-agent orchestration framework per VS Code.",
        url: "https://burkeholland.github.io/ultralight",
        kind: "Esperimento",
      },
      {
        title: "Anvil",
        description:
          "Un agente di coding evidence-first per GitHub Copilot CLI. Verifica prima di presentare, attacca il proprio output e utilizza una revisione multi-modello avversariale per garantire la qualità del codice.",
        url: "https://burkeholland.github.io/anvil/",
        kind: "Esperimento",
      },
      {
        title: "Microsoft AgentRC",
        description:
          "AgentRC reads your codebase and generates the files that close that gap — then evaluates whether they actually help, so the context doesn't go stale as your code evolves.",
        url: "https://github.com/microsoft/agentrc",
        kind: "Esperimento",
      },
    ],
  },
  {
    id: "blog-esterni",
    eyebrow: "Per seguire chi fa ricerca",
    title: "Blog esterni",
    description:
      "Siti e blog di sviluppatori e ricercatori che esplorano agenti AI, orchestrazione e workflow moderni con approccio pratico e sperimentale.",
    resources: [
      {
        title: "AI Hero",
        description:
          "Raccolta di risorse e spunti per usare l'AI nello sviluppo software con taglio pratico e orientato alla produttivita.",
        url: "https://www.aihero.dev",
        kind: "Tool",
      },
      {
        title: "Burke Holland",
        description:
          "Blog personale di Burke Holland, sviluppatore e developer advocate che esplora GitHub Copilot CLI, orchestrazione multi-modello e agenti AI con esempi concreti e strumenti open source.",
        url: "https://burkeholland.github.io/",
        kind: "Community",
      },
    ],
  },
];

const totalResources = resourceCategories.reduce(
  (count, category) => count + category.resources.length,
  0,
);

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col bg-card hover:shadow-md p-6 border rounded-xl h-full transition-all duration-200",
        "border-border hover:border-primary/40",
        "dark:hover:shadow-[0_0_12px_color-mix(in_oklch,var(--primary)_15%,transparent)]",
      )}
    >
      {/* Fully-clickable card overlay */}
      <a
        href={resource.url}
        target="_blank"
        rel="noreferrer"
        className="z-10 absolute inset-0 rounded-xl"
        aria-label={`${resource.title} — apri in una nuova scheda`}
      />

      <div className="flex items-center gap-2 mb-4">
        <Badge variant={kindVariant[resource.kind]}>{resource.kind}</Badge>
      </div>

      <h3 className="mb-3 font-display font-medium group-hover:text-primary text-xl leading-snug tracking-tight transition-colors duration-200">
        {resource.title}
      </h3>

      <p className="flex-1 mb-6 font-sans text-muted-foreground text-sm leading-relaxed">
        {resource.description}
      </p>

      <span
        aria-hidden="true"
        className="inline-flex items-center self-end gap-2 font-sans text-foreground group-hover:text-primary text-sm transition-colors"
      >
        Visita il sito
        <ExternalLink className="size-3.5 text-primary transition-transform group-hover:translate-x-0.5" />
      </span>
    </article>
  );
}

export default function UsefulLinksPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative border-border border-b overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 5% 50%, color-mix(in oklch, var(--primary) 10%, transparent) 0%, transparent 60%), radial-gradient(ellipse 50% 80% at 95% 20%, color-mix(in oklch, var(--primary) 6%, transparent) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 60% 100%, color-mix(in oklch, var(--primary) 4%, transparent) 0%, transparent 50%)",
          }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--foreground) 0.6px, transparent 0.6px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />

        <div className="relative mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <FadeIn as="p" className="mb-5">
            <span className="inline-flex items-center gap-2 bg-primary/8 px-3 py-1 border border-primary/30 rounded-full font-mono font-medium text-primary text-xs uppercase tracking-[0.18em]">
              <span className="inline-block bg-primary rounded-full w-1.5 h-1.5" />
              {totalResources} riferimenti selezionati
            </span>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="mb-7 font-display font-medium text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Link utili
              <br />
              <em className="text-primary not-italic">per lavorare meglio</em>
            </h1>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="bg-primary mb-8 rounded-full w-16 h-0.5" />
          </FadeIn>
          <FadeIn
            as="p"
            delay={160}
            className="mb-10 max-w-2xl font-sans text-muted-foreground text-lg sm:text-xl leading-relaxed"
          >
            Una raccolta ragionata di documentazione, tool, raccolte ed esempi
            per orientarti tra coding assistant, agenti AI e workflow di
            sviluppo piu strutturati.
          </FadeIn>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
            {resourceCategories.map((category, index) => (
              <FadeIn key={category.id} delay={240 + index * 60}>
                <a
                  href={`#${category.id}`}
                  className="group block relative bg-background hover:shadow-md p-5 border border-border hover:border-primary/40 rounded-xl h-full overflow-hidden transition-all duration-200 accent-top-line"
                >
                  <span className="top-3 right-4 absolute font-mono text-primary/[0.07] text-5xl pointer-events-none select-none">
                    0{index + 1}
                  </span>
                  <span className="block mb-4 font-mono text-muted-foreground text-xs">
                    {category.resources.length}{" "}
                    {category.resources.length === 1 ? "risorsa" : "risorse"}
                  </span>
                  <h3 className="mb-2 font-display font-medium group-hover:text-primary text-xl tracking-tight transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resource sections ── */}
      <div className="mx-auto px-6 py-20 max-w-6xl">
        <div className="space-y-20">
          {resourceCategories.map((category, catIdx) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28"
            >
              <FadeIn className="mb-8 max-w-3xl">
                <p className="mb-2 font-mono font-medium text-primary text-xs uppercase tracking-[0.18em]">
                  {category.eyebrow}
                </p>
                <h2 className="mb-4 font-display font-medium text-3xl sm:text-4xl tracking-tight">
                  {category.title}
                </h2>
                <p className="font-sans text-muted-foreground text-lg leading-relaxed">
                  {category.description}
                </p>
              </FadeIn>

              <div
                className={cn(
                  "gap-5 grid grid-cols-1",
                  category.resources.length === 1
                    ? "md:grid-cols-1 max-w-xl"
                    : category.resources.length === 2
                      ? "md:grid-cols-2"
                      : "md:grid-cols-2 xl:grid-cols-3",
                )}
              >
                {category.resources.map((resource, i) => (
                  <FadeIn key={resource.url} delay={i * 80}>
                    <ResourceCard resource={resource} />
                  </FadeIn>
                ))}
              </div>

              {/* Subtle divider between sections (not after the last one) */}
              {catIdx < resourceCategories.length - 1 && (
                <div className="flex items-center gap-4 mt-20">
                  <span className="flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px" />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* ── CTA footer ── */}
      <section className="relative bg-muted border-border border-t overflow-hidden">
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />
        <FadeIn className="relative flex sm:flex-row flex-col justify-between items-start sm:items-end gap-6 mx-auto px-6 py-16 max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-2 font-mono font-medium text-primary text-xs uppercase tracking-[0.18em]">
              Continua a esplorare
            </p>
            <h2 className="mb-3 font-display font-medium text-3xl tracking-tight">
              Vuoi contesto e casi pratici?
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed">
              Dopo questi riferimenti, gli articoli del sito sono il posto
              giusto per vedere come trasformare concetti, prompt e
              configurazioni in workflow concreti.
            </p>
          </div>

          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/articles">Esplora gli articoli</Link>}
          />
        </FadeIn>
      </section>
    </>
  );
}
