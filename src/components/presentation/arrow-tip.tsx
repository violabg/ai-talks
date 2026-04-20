import * as motion from "motion/react-client";

export function ArrowTip({
  x,
  y,
  angle = 0,
  color,
  delay,
  size = 11,
  duration = 0.2,
}: {
  x: number;
  y: number;
  angle?: number;
  color: string;
  delay: number;
  size?: number;
  duration?: number;
}) {
  const back = -size;
  const half = size * 0.7;
  const points = `${back},${-half} 0,0 ${back},${half}`;
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <motion.polygon
        points={points}
        fill={color}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration, delay, ease: "easeOut" }}
        style={{ transformOrigin: "0 0" }}
      />
    </g>
  );
}
