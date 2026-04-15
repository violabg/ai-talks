import * as motion from "motion/react-client";
import { FadeIn } from "./slide-shared";

export function MCPSlide() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <FadeIn delay={0.1} className="text-center">
        <h2 className="font-bold text-[var(--pres-text)] text-4xl md:text-5xl">
          Integrazione MCP
        </h2>
        <p className="text-[var(--pres-text-sub)]">Model Context Protocol</p>
      </FadeIn>

      <div className="px-6 w-full max-w-5xl">
        {/* MCP Server Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4">
            {/* Rubber Duck */}
            <div className="bg-[var(--pres-warning)]/10 p-6 border border-[var(--pres-warning)] rounded-lg text-center">
              <p className="mb-2 font-semibold text-[var(--pres-text)]">
                🦆 Rubber Duck
              </p>
              <p className="text-[var(--pres-text-sub)] text-sm">
                Revisore critico
              </p>
            </div>

            {/* Connector */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <div className="text-[var(--pres-accent)] text-2xl">
                ↓ consulta ↓
              </div>
            </motion.div>

            {/* MCP Server */}
            <div className="p-6 border border-[var(--pres-accent)] rounded-lg bg-[var(--pres-accent-dim)]">
              <p className="mb-3 font-semibold text-[var(--pres-text)]">
                📚 MCP Server (es. Next.js Docs)
              </p>
              <div className="space-y-2 text-[var(--pres-text-sub)] text-sm">
                <p>• Documentazione aggiornata in tempo reale</p>
                <p>• API rinominate o deprecate</p>
                <p>• Esempi di versione corrente</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Use Case */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[var(--pres-success-dim)] p-6 border-[var(--pres-success)] border-l-4 rounded-lg"
        >
          <p className="mb-2 font-mono text-[var(--pres-text-sub)] text-xs">
            CASO D'USO
          </p>
          <p className="mb-2 font-semibold text-[var(--pres-text)]">
            ✓ Un modello addestrato su dati vecchi usa{" "}
            <code className="bg-[var(--pres-bg)] px-1 rounded font-mono">
              useMiddleware()
            </code>
          </p>
          <p className="text-[var(--pres-text-sub)]">
            Rubber Duck consulta la documentazione MCP, scopre il cambiamento e
            blocca l'errore prima che arrivi al codice.
          </p>
        </motion.div>
      </div>

      <FadeIn delay={0.9} className="max-w-3xl text-center">
        <p className="text-[var(--pres-muted)] text-base">
          MCP fornisce{" "}
          <span className="font-semibold text-[var(--pres-text)]">
            conoscenza esterna aggiornata
          </span>{" "}
          che Rubber Duck sfrutta per una revisione più consapevole
        </p>
      </FadeIn>
    </div>
  );
}
