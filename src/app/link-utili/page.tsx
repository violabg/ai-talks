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
        title: "AI Hero",
        description:
          "Raccolta di risorse e spunti per usare l'AI nello sviluppo software con taglio pratico e orientato alla produttivita.",
        url: "https://www.aihero.dev",
        kind: "Tool",
      },
      {
        title: "Anvil",
        description:
          "Esperimento focalizzato su strumenti e workflow agentici, interessante per esplorare modalita meno convenzionali di collaborazione con l'AI.",
        url: "https://burkeholland.github.io/anvil/",
        kind: "Esperimento",
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
        title: "Three Agent pattern",
        description:
          "Gist che mostra un pattern a piu agenti, utile per ragionare su separazione dei ruoli e coordinamento tra specialisti.",
        url: "https://gist.github.com/burkeholland/0e68481f96e94bbb98134fa6efd00436#file-three-agent-md",
        kind: "Esperimento",
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
              "radial-gradient(ellipse 78% 70% at 12% 20%, color-mix(in oklch, var(--primary) 12%, transparent) 0%, transparent 60%), radial-gradient(ellipse 68% 90% at 82% 78%, color-mix(in oklch, var(--primary) 7%, transparent) 0%, transparent 62%), linear-gradient(180deg, color-mix(in oklch, var(--muted) 58%, transparent) 0%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <FadeIn
            as="p"
            className="inline-flex items-center gap-2 mb-5 font-sans font-medium text-primary text-xs uppercase tracking-[0.18em]"
          >
            <span className="inline-block bg-primary w-5 h-px" />
            {totalResources} riferimenti selezionati
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="mb-7 font-display font-medium text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Link utili
              <br />
              <em className="text-primary not-italic">per lavorare meglio</em>
            </h1>
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
                  className="group block bg-background hover:shadow-md p-5 border border-border hover:border-primary/40 rounded-xl h-full transition-all duration-200"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono font-medium text-primary text-xs">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-muted-foreground text-xs">
                      {category.resources.length}{" "}
                      {category.resources.length === 1 ? "risorsa" : "risorse"}
                    </span>
                  </div>
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
                <p className="mb-2 font-sans font-medium text-primary text-xs uppercase tracking-[0.18em]">
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
                  <span className="flex-1 bg-border h-px" />
                  <span className="font-mono text-muted-foreground/40 text-xs select-none">
                    ·
                  </span>
                  <span className="flex-1 bg-border h-px" />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* ── CTA footer ── */}
      <section className="border-border border-t">
        <FadeIn className="flex sm:flex-row flex-col justify-between items-start sm:items-end gap-6 mx-auto px-6 py-16 max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-2 font-sans font-medium text-primary text-xs uppercase tracking-[0.18em]">
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
