import dynamic from "next/dynamic"
import type { ComponentType } from "react"

export const covers: Record<string, ComponentType> = {
  "chronicle-copilot-cli": dynamic(() => import("./chronicle-copilot-cli").then(m => ({ default: m.ChronicleCopilotCli }))),
  "cli-vs-ide-agenti-ai": dynamic(() => import("./cli-vs-ide-agenti-ai").then(m => ({ default: m.CliVsIdeAgentiAi }))),
  "deep-modules-react-typescript": dynamic(() => import("./deep-modules-react-typescript").then(m => ({ default: m.DeepModulesReactTypescript }))),
  "lsp-tool-agenti-ai": dynamic(() => import("./lsp-tool-agenti-ai").then(m => ({ default: m.LspToolAgentiAi }))),
  "migrare-librerie-con-ai": dynamic(() => import("./migrare-librerie-con-ai").then(m => ({ default: m.MigrareLibrerieConAi }))),
  "multi-modello-copilot-cli-orchestrazione": dynamic(() => import("./multi-modello-copilot-cli-orchestrazione").then(m => ({ default: m.MultiModelloCopilotCliOrchestrazione }))),
  "prompting-e-workflow": dynamic(() => import("./prompting-e-workflow").then(m => ({ default: m.PromptingEWorkflow }))),
  "refactoring-codice-legacy": dynamic(() => import("./refactoring-codice-legacy").then(m => ({ default: m.RefactoringCodiceLegacy }))),
  "rubber-duck-github-copilot-cli": dynamic(() => import("./rubber-duck-github-copilot-cli").then(m => ({ default: m.RubberDuckGithubCopilotCli }))),
  "strumenti-e-configurazioni": dynamic(() => import("./strumenti-e-configurazioni").then(m => ({ default: m.StrumentiEConfigurazioni }))),
  "sviluppo-agent-first-copilot-vscode": dynamic(() => import("./sviluppo-agent-first-copilot-vscode").then(m => ({ default: m.SviluppoAgentFirstCopilotVscode }))),
  "sviluppo-con-agenti-ai-guida-riferimento": dynamic(() => import("./sviluppo-con-agenti-ai-guida-riferimento").then(m => ({ default: m.SviluppoConAgentiAiGuidaRiferimento }))),
  "testing-feedback-loop-agenti-ai": dynamic(() => import("./testing-feedback-loop-agenti-ai").then(m => ({ default: m.TestingFeedbackLoopAgentiAi }))),
}
