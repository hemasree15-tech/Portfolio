import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-environment";

const NODES = [
  { x: 50, y: 20, r: 5 },
  { x: 22, y: 46, r: 4 },
  { x: 78, y: 44, r: 4 },
  { x: 34, y: 78, r: 4 },
  { x: 66, y: 80, r: 4 },
  { x: 50, y: 52, r: 7 },
  { x: 12, y: 22, r: 3 },
  { x: 88, y: 74, r: 3 },
  { x: 14, y: 78, r: 3 },
  { x: 86, y: 18, r: 3 },
];

const EDGES: [number, number][] = [
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [6, 1],
  [7, 2],
  [8, 3],
  [9, 0],
  [1, 3],
  [2, 4],
  [0, 2],
];

export function NeuralVisual() {
  const reduced = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 });
  const sy = useSpring(my, { stiffness: 70, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduced]);

  return (
    <motion.div
      style={reduced ? {} : { rotateX, rotateY, transformPerspective: 1000 }}
      className="relative mx-auto aspect-square w-full max-w-[26rem]"
    >
      <div className="glass absolute inset-0 rounded-[2rem] shine" />
      <div className="absolute inset-0 rounded-[2rem] bg-accent/5 blur-2xl" />
      <svg viewBox="0 0 100 100" className="relative size-full p-4">
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--accent2)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a]!.x}
            y1={NODES[a]!.y}
            x2={NODES[b]!.x}
            y2={NODES[b]!.y}
            stroke="url(#edge)"
            strokeWidth="0.4"
            strokeDasharray="3 4"
            style={reduced ? {} : { animation: `dash-flow ${8 + i}s linear infinite` }}
          />
        ))}
        {NODES.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r * 1.9} fill="var(--accent)" opacity="0.08" />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r * 0.55}
              fill={i === 5 ? "var(--accent2)" : "var(--accent)"}
              animate={reduced ? {} : { opacity: [0.45, 1, 0.45], scale: [1, 1.25, 1] }}
              transition={{
                duration: 3 + (i % 4),
                delay: i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          </g>
        ))}
      </svg>

      <div className="glass absolute -bottom-5 left-6 rounded-xl px-3.5 py-2 font-mono text-[10px] text-muted-foreground">
        <span className="text-accent">model</span>.fit(X_train, y_train)
      </div>
      <motion.div
        className="glass absolute -right-4 top-8 rounded-xl px-3.5 py-2 font-mono text-[10px] text-muted-foreground"
        animate={reduced ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        accuracy <span className="text-accent">↑</span>
      </motion.div>
    </motion.div>
  );
}
