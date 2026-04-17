import * as motion from "motion/react-client";
import { LAYERS, SectionTitle, SlideFrame } from "./slide-shared";

const positions = [
  { x: 52, y: 54 },
  { x: 394, y: 54 },
  { x: 52, y: 184 },
  { x: 394, y: 184 },
  { x: 52, y: 314 },
  { x: 394, y: 314 },
  { x: 52, y: 444 },
  { x: 394, y: 444 },
];

const familyBands = [
  { y: 22, label: "memoria", color: "var(--pres-accent)" },
  { y: 152, label: "metodo", color: "var(--pres-success)" },
  { y: 282, label: "ruolo e capacita", color: "var(--pres-blue)" },
  { y: 412, label: "automazione", color: "var(--pres-warning)" },
];

export function Slide03Atlas() {
  return (
    <SlideFrame>
      <div className="flex flex-col px-6 py-6 h-full">
        <SectionTitle
          eyebrow="atlante dei livelli"
          title="Otto leve diverse, non otto feature intercambiabili"
          description="La tabella dell'articolo qui diventa una mappa: ogni blocco occupa una posizione precisa dentro una famiglia funzionale, così il confronto smette di essere solo un elenco."
        />

        <div className="flex flex-1 justify-center items-center mt-6">
          <motion.div
            className="w-full max-w-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <svg viewBox="0 0 740 560" className="w-full">
              {familyBands.map((band, index) => (
                <motion.g
                  key={band.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.12 * index, duration: 0.35 }}
                >
                  <rect
                    x="18"
                    y={band.y}
                    width="704"
                    height="102"
                    rx="28"
                    fill="color-mix(in srgb, var(--pres-bg-node) 72%, transparent)"
                    stroke="var(--pres-border)"
                    strokeWidth="1.5"
                  />
                  <text
                    x="42"
                    y={band.y + 20}
                    fill={band.color}
                    fontSize="12"
                    fontFamily="var(--font-mono)"
                  >
                    {band.label}
                  </text>
                </motion.g>
              ))}

              {LAYERS.map((layer, index) => {
                const position = positions[index];
                return (
                  <motion.g
                    key={layer.name}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + index * 0.08, duration: 0.4 }}
                  >
                    <rect
                      x={position.x}
                      y={position.y}
                      width="294"
                      height="58"
                      rx="20"
                      fill={layer.tone}
                      stroke={layer.color}
                      strokeWidth="1.6"
                    />
                    <text
                      x={position.x + 22}
                      y={position.y + 23}
                      fill={layer.color}
                      fontSize="9"
                      fontFamily="var(--font-mono)"
                    >
                      {layer.family}
                    </text>
                    <text
                      x={position.x + 22}
                      y={position.y + 45}
                      fill="var(--pres-text)"
                      fontSize="16"
                      fontWeight="700"
                    >
                      {layer.name}
                    </text>
                  </motion.g>
                );
              })}
            </svg>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
