"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const TOTAL_SLIDES = 9;

/* ─── Navigation shell ─── */

export function PresentationSlides({ slug }: { slug: string }) {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);

  const goTo = useCallback(
    (i: number) => {
      if (i < 0 || i >= TOTAL_SLIDES) return;
      setDir(i > current ? 1 : -1);
      setCurrent(i);
    },
    [current],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slides = [
    <TitleSlide key="title" />,
    <StatementSlide key="statement" />,
    <ComparisonSlide key="comparison" />,
    <ModelRolesSlide key="roles" />,
    <OrchestrationFlowSlide key="flow" />,
    <FleetSlide key="fleet" />,
    <AdversarialSlide key="adversarial" />,
    <PlanningSlide key="planning" />,
    <ClosingSlide key="closing" />,
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0f172a] text-[#e2e8f0]">
      {/* Top bar */}
      <div className="flex shrink-0 items-center justify-between px-6 py-4 text-sm text-[#94a3b8]">
        <Link
          href={`/articles/${slug}`}
          className="transition-colors hover:text-white"
        >
          &larr; Torna all&apos;articolo
        </Link>
        <span className="font-mono tabular-nums">
          {current + 1} / {TOTAL_SLIDES}
        </span>
      </div>

      {/* Slide area */}
      <div
        className="flex flex-1 items-center justify-center overflow-hidden px-6 md:px-16 lg:px-24"
        onClick={(e) => {
          const x = e.clientX;
          const w = window.innerWidth;
          if (x > w * 0.6) next();
          else if (x < w * 0.4) prev();
        }}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-5xl"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="shrink-0 px-6 py-4">
        <div className="flex gap-1.5">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i === current
                  ? "bg-[#a78bfa]"
                  : i < current
                    ? "bg-[#a78bfa]/40"
                    : "bg-[#334155]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Animation helpers ─── */

function FadeIn({
  delay = 0,
  children,
  className,
}: {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeInLeft({
  delay = 0,
  children,
  className,
}: {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Colors for model identity ─── */
const MODEL_COLORS = {
  haiku: "#34d399",
  sonnet: "#60a5fa",
  gpt4: "#fbbf24",
  opus: "#a78bfa",
} as const;

/* ═══════════════════════════════════════════
   SLIDE 1 — Title
   ═══════════════════════════════════════════ */

function TitleSlide() {
  const tags = [
    "GitHub Copilot",
    "CLI",
    "agenti AI",
    "orchestrazione",
    "multi-modello",
  ];
  return (
    <div className="text-center">
      <FadeIn delay={0.1}>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#a78bfa]/20 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#a78bfa]"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Orchestrazione Multi-Modello
        </h1>
      </FadeIn>
      <FadeIn delay={0.4}>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[#94a3b8] md:text-2xl">
          Come costruire un sistema di agenti specializzati
          <br />
          con GitHub Copilot CLI
        </p>
      </FadeIn>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SLIDE 2 — Statement: core thesis
   ═══════════════════════════════════════════ */

function StatementSlide() {
  return (
    <div className="text-center">
      <FadeIn delay={0.15}>
        <p className="text-3xl font-bold leading-snug md:text-5xl">
          Il modello migliore{" "}
          <span className="text-[#f87171]">non esiste.</span>
        </p>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-8 text-2xl leading-snug text-[#94a3b8] md:text-4xl">
          Esiste il modello giusto
          <br />
          <span className="text-[#34d399]">per il task giusto.</span>
        </p>
      </FadeIn>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SLIDE 3 — Comparison: single vs distributed
   ═══════════════════════════════════════════ */

function ComparisonSlide() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-10 text-center text-2xl font-bold text-[#a78bfa] md:text-4xl">
          Agente singolo vs. Sistema distribuito
        </h2>
      </FadeIn>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Single agent side */}
        <FadeInLeft delay={0.2}>
          <div className="rounded-xl border border-[#fbbf24]/30 bg-[#fbbf24]/5 p-6">
            <svg
              viewBox="0 0 300 220"
              className="mx-auto mb-4 w-full max-w-75"
            >
              {/* Single overloaded box */}
              <rect
                x="75"
                y="30"
                width="150"
                height="160"
                rx="12"
                fill="#fbbf24"
                fillOpacity="0.15"
                stroke="#fbbf24"
                strokeWidth="2"
              />
              <text
                x="150"
                y="65"
                textAnchor="middle"
                fill="#fbbf24"
                fontSize="14"
                fontWeight="bold"
              >
                Un solo modello
              </text>
              {/* Stacked tasks inside */}
              {["Plan", "Code", "Review", "Explore"].map((label, i) => (
                <g key={label}>
                  <rect
                    x="95"
                    y={85 + i * 28}
                    width="110"
                    height="22"
                    rx="4"
                    fill="#fbbf24"
                    fillOpacity="0.1"
                    stroke="#fbbf24"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                  />
                  <text
                    x="150"
                    y={100 + i * 28}
                    textAnchor="middle"
                    fill="#fbbf24"
                    fontSize="11"
                  >
                    {label}
                  </text>
                </g>
              ))}
            </svg>
            <p className="text-center text-sm text-[#fbbf24]">
              Tutto accettabile, niente eccellente
            </p>
          </div>
        </FadeInLeft>

        {/* Distributed side */}
        <FadeInLeft delay={0.5}>
          <div className="rounded-xl border border-[#34d399]/30 bg-[#34d399]/5 p-6">
            <svg
              viewBox="0 0 300 220"
              className="mx-auto mb-4 w-full max-w-75"
            >
              {/* Orchestrator hub */}
              <circle
                cx="150"
                cy="50"
                r="28"
                fill="#a78bfa"
                fillOpacity="0.2"
                stroke="#a78bfa"
                strokeWidth="2"
              />
              <text
                x="150"
                y="54"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="10"
                fontWeight="bold"
              >
                Orchestratore
              </text>
              {/* Specialist nodes */}
              {[
                { cx: 60, label: "Plan", color: MODEL_COLORS.sonnet },
                { cx: 150, label: "Code", color: MODEL_COLORS.gpt4 },
                { cx: 240, label: "Review", color: MODEL_COLORS.opus },
              ].map((n) => (
                <g key={n.label}>
                  <line
                    x1="150"
                    y1="78"
                    x2={n.cx}
                    y2="130"
                    stroke={n.color}
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                  />
                  <rect
                    x={n.cx - 40}
                    y={130}
                    width="80"
                    height="36"
                    rx="8"
                    fill={n.color}
                    fillOpacity="0.15"
                    stroke={n.color}
                    strokeWidth="1.5"
                  />
                  <text
                    x={n.cx}
                    y={153}
                    textAnchor="middle"
                    fill={n.color}
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
              {/* Explore node small */}
              <line
                x1="80"
                y1="40"
                x2="30"
                y2="25"
                stroke={MODEL_COLORS.haiku}
                strokeWidth="1"
                strokeDasharray="3 2"
              />
              <rect
                x="2"
                y="10"
                width="56"
                height="28"
                rx="6"
                fill={MODEL_COLORS.haiku}
                fillOpacity="0.15"
                stroke={MODEL_COLORS.haiku}
                strokeWidth="1"
              />
              <text
                x="30"
                y="28"
                textAnchor="middle"
                fill={MODEL_COLORS.haiku}
                fontSize="10"
              >
                Explore
              </text>
            </svg>
            <p className="text-center text-sm text-[#34d399]">
              Ogni agente eccelle nel suo dominio
            </p>
          </div>
        </FadeInLeft>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SLIDE 4 — Model roles diagram
   ═══════════════════════════════════════════ */

function ModelRolesSlide() {
  const roles = [
    {
      model: "Haiku",
      role: "Explore",
      desc: "Analisi struttura, lettura veloce",
      color: MODEL_COLORS.haiku,
      angle: -135,
    },
    {
      model: "Sonnet",
      role: "Plan",
      desc: "Pianificazione, decomposizione task",
      color: MODEL_COLORS.sonnet,
      angle: -45,
    },
    {
      model: "GPT-4",
      role: "Code",
      desc: "Generazione codice precisa",
      color: MODEL_COLORS.gpt4,
      angle: 45,
    },
    {
      model: "Opus",
      role: "Architect",
      desc: "Design, ragionamento complesso",
      color: MODEL_COLORS.opus,
      angle: 135,
    },
  ];

  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 text-center text-2xl font-bold text-[#a78bfa] md:text-4xl">
          Ogni modello ha un ruolo
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {roles.map((r, i) => (
          <FadeIn key={r.model} delay={0.2 + i * 0.15}>
            <div
              className="rounded-xl border p-5 md:p-6"
              style={{
                borderColor: `${r.color}40`,
                backgroundColor: `${r.color}08`,
              }}
            >
              <div className="mb-2 flex items-center gap-3">
                <svg viewBox="0 0 32 32" className="size-8 shrink-0">
                  <circle cx="16" cy="16" r="14" fill={r.color} fillOpacity="0.2" stroke={r.color} strokeWidth="2" />
                  <text x="16" y="20" textAnchor="middle" fill={r.color} fontSize="11" fontWeight="bold">
                    {r.model.charAt(0)}
                  </text>
                </svg>
                <div>
                  <p className="font-bold" style={{ color: r.color }}>
                    {r.model}
                  </p>
                  <p className="text-xs text-[#94a3b8]">{r.role}</p>
                </div>
              </div>
              <p className="text-sm text-[#94a3b8]">{r.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.9}>
        <p className="mt-6 text-center text-sm italic text-[#94a3b8]">
          Non tutti i task richiedono il modello più potente — un modello veloce
          è spesso la scelta migliore.
        </p>
      </FadeIn>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SLIDE 5 — Orchestration flowchart
   ═══════════════════════════════════════════ */

function OrchestrationFlowSlide() {
  const steps = [
    {
      label: "Plan",
      sub: "Produce un piano d'azione",
      color: MODEL_COLORS.sonnet,
      y: 20,
    },
    {
      label: "Parallelize",
      sub: "Identifica task indipendenti",
      color: "#a78bfa",
      y: 90,
    },
    {
      label: "Delegate",
      sub: "Invia ai modelli specializzati",
      color: MODEL_COLORS.gpt4,
      y: 160,
    },
    {
      label: "Verify",
      sub: "Controlla coerenza finale",
      color: MODEL_COLORS.opus,
      y: 230,
    },
  ];

  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 text-center text-2xl font-bold text-[#a78bfa] md:text-4xl">
          Il workflow di orchestrazione
        </h2>
      </FadeIn>
      <div className="flex justify-center">
        <svg viewBox="0 0 500 300" className="w-full max-w-xl">
          {/* Arrows between steps */}
          {[0, 1, 2].map((i) => (
            <motion.line
              key={`arrow-${i}`}
              x1="250"
              y1={steps[i].y + 46}
              x2="250"
              y2={steps[i + 1].y + 4}
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="6 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.3 }}
            />
          ))}

          {/* Step boxes */}
          {steps.map((s, i) => (
            <motion.g
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.3 }}
            >
              <rect
                x="130"
                y={s.y}
                width="240"
                height="50"
                rx="10"
                fill={s.color}
                fillOpacity="0.12"
                stroke={s.color}
                strokeWidth="1.5"
              />
              <text
                x="250"
                y={s.y + 22}
                textAnchor="middle"
                fill={s.color}
                fontSize="15"
                fontWeight="bold"
              >
                {i + 1}. {s.label}
              </text>
              <text
                x="250"
                y={s.y + 40}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="11"
              >
                {s.sub}
              </text>
            </motion.g>
          ))}

          {/* Branch lines from Parallelize */}
          {[-1, 1].map((side) => (
            <motion.g
              key={`branch-${side}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <line
                x1={250 + side * 120}
                y1={steps[1].y + 25}
                x2={250 + side * 50}
                y2={steps[1].y + 25}
                stroke="#a78bfa"
                strokeWidth="1"
                strokeDasharray="3 2"
              />
              <rect
                x={250 + side * 120 + (side > 0 ? 0 : -60)}
                y={steps[1].y + 8}
                width="60"
                height="34"
                rx="6"
                fill="#a78bfa"
                fillOpacity="0.08"
                stroke="#a78bfa"
                strokeWidth="1"
              />
              <text
                x={250 + side * 120 + (side > 0 ? 30 : -30)}
                y={steps[1].y + 30}
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="10"
              >
                {side < 0 ? "Task A" : "Task B"}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SLIDE 6 — Fleet parallelization
   ═══════════════════════════════════════════ */

function FleetSlide() {
  const lanes = [
    { label: "UI Component", color: MODEL_COLORS.gpt4, x: 80 },
    { label: "API Route", color: MODEL_COLORS.sonnet, x: 250 },
    { label: "Database", color: MODEL_COLORS.opus, x: 420 },
  ];

  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 text-center text-2xl font-bold text-[#a78bfa] md:text-4xl">
          Fleet: parallelizzazione nativa
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mb-8 text-center text-sm text-[#94a3b8]">
          <code className="rounded bg-[#1e293b] px-2 py-0.5 font-mono text-[#a78bfa]">
            /fleet
          </code>{" "}
          analizza la richiesta, la decompone e distribuisce i task in parallelo
        </p>
      </FadeIn>
      <div className="flex justify-center">
        <svg viewBox="0 0 500 280" className="w-full max-w-xl">
          {/* User request at top */}
          <motion.g
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <rect
              x="150"
              y="10"
              width="200"
              height="36"
              rx="18"
              fill="#a78bfa"
              fillOpacity="0.2"
              stroke="#a78bfa"
              strokeWidth="1.5"
            />
            <text
              x="250"
              y="33"
              textAnchor="middle"
              fill="#a78bfa"
              fontSize="13"
              fontWeight="bold"
            >
              Richiesta utente
            </text>
          </motion.g>

          {/* Split arrows */}
          {lanes.map((lane, i) => (
            <motion.line
              key={`split-${lane.label}`}
              x1="250"
              y1="46"
              x2={lane.x}
              y2="80"
              stroke={lane.color}
              strokeWidth="1.5"
              strokeDasharray="5 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            />
          ))}

          {/* Parallel lanes */}
          {lanes.map((lane, i) => (
            <motion.g
              key={lane.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
            >
              <rect
                x={lane.x - 55}
                y="80"
                width="110"
                height="120"
                rx="8"
                fill={lane.color}
                fillOpacity="0.06"
                stroke={lane.color}
                strokeWidth="1"
                strokeDasharray="4 2"
              />
              {/* Agent icon */}
              <circle
                cx={lane.x}
                cy="110"
                r="16"
                fill={lane.color}
                fillOpacity="0.2"
                stroke={lane.color}
                strokeWidth="1.5"
              />
              <text
                x={lane.x}
                y="114"
                textAnchor="middle"
                fill={lane.color}
                fontSize="10"
                fontWeight="bold"
              >
                AI
              </text>
              <text
                x={lane.x}
                y="150"
                textAnchor="middle"
                fill={lane.color}
                fontSize="11"
                fontWeight="bold"
              >
                {lane.label}
              </text>
              {/* Progress dots */}
              {[0, 1, 2].map((d) => (
                <motion.circle
                  key={d}
                  cx={lane.x - 10 + d * 10}
                  cy="170"
                  r="3"
                  fill={lane.color}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.2,
                    delay: 1.0 + i * 0.15 + d * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.g>
          ))}

          {/* Converge arrows */}
          {lanes.map((lane, i) => (
            <motion.line
              key={`converge-${lane.label}`}
              x1={lane.x}
              y1="200"
              x2="250"
              y2="235"
              stroke={lane.color}
              strokeWidth="1.5"
              strokeDasharray="5 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
            />
          ))}

          {/* Output */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.7 }}
          >
            <rect
              x="175"
              y="235"
              width="150"
              height="36"
              rx="18"
              fill="#34d399"
              fillOpacity="0.2"
              stroke="#34d399"
              strokeWidth="1.5"
            />
            <text
              x="250"
              y="258"
              textAnchor="middle"
              fill="#34d399"
              fontSize="13"
              fontWeight="bold"
            >
              Output unificato
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SLIDE 7 — Adversarial review diagram
   ═══════════════════════════════════════════ */

function AdversarialSlide() {
  const reviewers = [
    {
      model: "Sonnet",
      finding: "Tipo di ritorno non sicuro",
      color: MODEL_COLORS.sonnet,
      x: 80,
    },
    {
      model: "Opus",
      finding: "Race condition nel lock",
      color: MODEL_COLORS.opus,
      x: 250,
    },
    {
      model: "GPT-4",
      finding: "SQL injection nel filtro",
      color: MODEL_COLORS.gpt4,
      x: 420,
    },
  ];

  return (
    <div>
      <FadeIn>
        <h2 className="mb-4 text-center text-2xl font-bold text-[#a78bfa] md:text-4xl">
          Adversarial Review
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mb-6 text-center text-sm text-[#94a3b8]">
          Modelli diversi trovano errori diversi — i punti ciechi non si
          propagano
        </p>
      </FadeIn>
      <div className="flex justify-center">
        <svg viewBox="0 0 500 300" className="w-full max-w-xl">
          {/* Code block in center */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <rect
              x="175"
              y="10"
              width="150"
              height="50"
              rx="8"
              fill="#1e293b"
              fillOpacity="0.8"
              stroke="#334155"
              strokeWidth="1.5"
            />
            <text
              x="250"
              y="30"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="10"
            >
              {"{ codice prodotto }"}
            </text>
            <text
              x="250"
              y="48"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="12"
              fontWeight="bold"
            >
              Output da revisionare
            </text>
          </motion.g>

          {/* Review lines from code to reviewers */}
          {reviewers.map((r, i) => (
            <motion.line
              key={`line-${r.model}`}
              x1="250"
              y1="60"
              x2={r.x}
              y2="100"
              stroke={r.color}
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.15 }}
            />
          ))}

          {/* Reviewer nodes */}
          {reviewers.map((r, i) => (
            <motion.g
              key={r.model}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
            >
              <circle
                cx={r.x}
                cy="120"
                r="22"
                fill={r.color}
                fillOpacity="0.15"
                stroke={r.color}
                strokeWidth="1.5"
              />
              <text
                x={r.x}
                y="124"
                textAnchor="middle"
                fill={r.color}
                fontSize="11"
                fontWeight="bold"
              >
                {r.model}
              </text>
              {/* Finding bubble */}
              <rect
                x={r.x - 60}
                y="155"
                width="120"
                height="30"
                rx="6"
                fill={r.color}
                fillOpacity="0.08"
                stroke={r.color}
                strokeWidth="1"
              />
              <text
                x={r.x}
                y="174"
                textAnchor="middle"
                fill={r.color}
                fontSize="9"
              >
                {r.finding}
              </text>
            </motion.g>
          ))}

          {/* Converge arrows to consolidated */}
          {reviewers.map((r, i) => (
            <motion.line
              key={`converge-${r.model}`}
              x1={r.x}
              y1="185"
              x2="250"
              y2="220"
              stroke={r.color}
              strokeWidth="1"
              strokeDasharray="4 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
            />
          ))}

          {/* Consolidated output */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <rect
              x="130"
              y="220"
              width="240"
              height="60"
              rx="10"
              fill="#34d399"
              fillOpacity="0.08"
              stroke="#34d399"
              strokeWidth="1.5"
            />
            <text
              x="250"
              y="242"
              textAnchor="middle"
              fill="#34d399"
              fontSize="12"
              fontWeight="bold"
            >
              Lista consolidata
            </text>
            <text
              x="250"
              y="262"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="10"
            >
              3 issue trovate da 3 prospettive diverse
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SLIDE 8 — Planning reduces hallucinations
   ═══════════════════════════════════════════ */

function PlanningSlide() {
  return (
    <div>
      <FadeIn>
        <h2 className="mb-8 text-center text-2xl font-bold text-[#a78bfa] md:text-4xl">
          Il planning riduce le allucinazioni
        </h2>
      </FadeIn>
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Plan document */}
        <FadeInLeft delay={0.2}>
          <div className="rounded-lg border border-[#334155] bg-[#1e293b]/80 p-5 font-mono text-sm">
            <p className="mb-3 text-xs uppercase tracking-wider text-[#94a3b8]">
              PLAN.md
            </p>
            {[
              { n: "1", text: "Analizzare schema DB", color: MODEL_COLORS.sonnet },
              { n: "2", text: "Creare endpoint REST", color: MODEL_COLORS.gpt4 },
              { n: "3", text: "Aggiungere validazione", color: MODEL_COLORS.gpt4 },
              { n: "4", text: "Scrivere test", color: MODEL_COLORS.opus },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="mb-2 flex items-center gap-2"
              >
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: `${step.color}20`,
                    color: step.color,
                  }}
                >
                  {step.n}
                </span>
                <span className="text-[#e2e8f0]">{step.text}</span>
              </motion.div>
            ))}
          </div>
        </FadeInLeft>

        {/* Funnel visual */}
        <FadeIn delay={0.7}>
          <div className="flex flex-col items-center gap-4">
            <svg viewBox="0 0 200 180" className="w-full max-w-50">
              {/* Wide top - "senza piano" */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <path
                  d="M 20 20 L 180 20 L 140 90 L 60 90 Z"
                  fill="#f87171"
                  fillOpacity="0.08"
                  stroke="#f87171"
                  strokeWidth="1.5"
                />
                <text
                  x="100"
                  y="45"
                  textAnchor="middle"
                  fill="#f87171"
                  fontSize="10"
                >
                  Senza piano
                </text>
                <text
                  x="100"
                  y="60"
                  textAnchor="middle"
                  fill="#f87171"
                  fontSize="9"
                  opacity="0.7"
                >
                  spazio libero = allucinazioni
                </text>
              </motion.g>
              {/* Narrow bottom - "con piano" */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <path
                  d="M 60 95 L 140 95 L 120 160 L 80 160 Z"
                  fill="#34d399"
                  fillOpacity="0.08"
                  stroke="#34d399"
                  strokeWidth="1.5"
                />
                <text
                  x="100"
                  y="120"
                  textAnchor="middle"
                  fill="#34d399"
                  fontSize="10"
                >
                  Con piano
                </text>
                <text
                  x="100"
                  y="135"
                  textAnchor="middle"
                  fill="#34d399"
                  fontSize="9"
                  opacity="0.7"
                >
                  output vincolato
                </text>
              </motion.g>
            </svg>
            <p className="text-center text-xs text-[#94a3b8]">
              I token generati seguono il contesto strutturale del piano
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SLIDE 9 — Closing: conceptual shift
   ═══════════════════════════════════════════ */

function ClosingSlide() {
  return (
    <div className="text-center">
      <FadeIn delay={0.15}>
        <p className="mb-4 text-lg text-[#94a3b8]">Il cambio di prospettiva</p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-6 md:gap-10">
          {/* Single chatbot */}
          <div className="flex flex-col items-center gap-3">
            <svg viewBox="0 0 80 80" className="size-16 md:size-20">
              <rect
                x="10"
                y="10"
                width="60"
                height="60"
                rx="12"
                fill="#94a3b8"
                fillOpacity="0.1"
                stroke="#94a3b8"
                strokeWidth="1.5"
              />
              <text
                x="40"
                y="46"
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="24"
              >
                ?
              </text>
            </svg>
            <span className="text-sm text-[#94a3b8]">Chatbot</span>
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <svg viewBox="0 0 60 24" className="w-12 md:w-16">
              <path
                d="M 5 12 L 45 12 M 38 5 L 48 12 L 38 19"
                stroke="#a78bfa"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* Distributed system */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <svg viewBox="0 0 120 100" className="h-16 w-24 md:h-20 md:w-28">
              {/* Orchestrator */}
              <circle
                cx="60"
                cy="25"
                r="14"
                fill="#a78bfa"
                fillOpacity="0.2"
                stroke="#a78bfa"
                strokeWidth="1.5"
              />
              <text
                x="60"
                y="29"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="8"
                fontWeight="bold"
              >
                CLI
              </text>
              {/* Agents */}
              {[
                { cx: 20, cy: 75, color: MODEL_COLORS.haiku },
                { cx: 60, cy: 75, color: MODEL_COLORS.sonnet },
                { cx: 100, cy: 75, color: MODEL_COLORS.gpt4 },
              ].map((a) => (
                <g key={`${a.cx}-${a.cy}`}>
                  <line
                    x1="60"
                    y1="39"
                    x2={a.cx}
                    y2={a.cy - 12}
                    stroke={a.color}
                    strokeWidth="1"
                    strokeDasharray="3 2"
                  />
                  <circle
                    cx={a.cx}
                    cy={a.cy}
                    r="12"
                    fill={a.color}
                    fillOpacity="0.2"
                    stroke={a.color}
                    strokeWidth="1.5"
                  />
                </g>
              ))}
            </svg>
            <span className="text-sm text-[#a78bfa]">Sistema distribuito</span>
          </motion.div>
        </div>
      </FadeIn>

      <FadeIn delay={1.2}>
        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-[#a78bfa]/20 bg-[#a78bfa]/5 p-6 md:p-8">
          <p className="text-lg leading-relaxed md:text-xl">
            Separare{" "}
            <span className="font-bold text-[#60a5fa]">planning</span>,{" "}
            <span className="font-bold text-[#fbbf24]">esecuzione</span> e{" "}
            <span className="font-bold text-[#a78bfa]">review</span> non è solo
            più veloce.
          </p>
          <p className="mt-2 text-lg leading-relaxed text-[#94a3b8] md:text-xl">
            È strutturalmente più affidabile.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
