import type { ProjectVisualKind } from "@/data/resume";
import { motion } from "motion/react";

export function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  const common = "size-full";
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-border/70 bg-secondary/30">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <svg viewBox="0 0 200 100" className={common} preserveAspectRatio="none">
        <defs>
          <linearGradient id={`g-${kind}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent2)" />
          </linearGradient>
        </defs>

        {kind === "nlp" && (
          <>
            {[20, 45, 70, 95, 120, 145, 170].map((x, i) => (
              <motion.rect
                key={x}
                x={x}
                width="10"
                rx="3"
                fill={`url(#g-${kind})`}
                initial={{ height: 8, y: 72 }}
                animate={{ height: [10, 20 + (i % 4) * 14, 10], y: [70, 60 - (i % 4) * 14, 70] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                opacity="0.85"
              />
            ))}
            <path
              d="M10 30 Q60 10 100 28 T190 20"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1"
              strokeDasharray="4 5"
              style={{ animation: "dash-flow 10s linear infinite" }}
            />
          </>
        )}

        {kind === "graph" && (
          <>
            {[
              [40, 30],
              [100, 20],
              [160, 40],
              [70, 70],
              [130, 75],
            ].map((pt, i) => {
              const [x, y] = pt as [number, number];
              return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="5"
                fill={`url(#g-${kind})`}
                animate={{ r: [4, 7, 4], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              />
              );
            })}
            <path
              d="M40 30 L100 20 L160 40 M40 30 L70 70 L130 75 L160 40"
              fill="none"
              stroke="var(--accent)"
              strokeOpacity="0.5"
              strokeWidth="1"
              strokeDasharray="5 6"
              style={{ animation: "dash-flow 9s linear infinite" }}
            />
          </>
        )}

        {kind === "predict" && (
          <>
            <motion.path
              d="M10 80 C50 70 60 30 100 35 S160 25 190 15"
              fill="none"
              stroke={`url(#g-${kind})`}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            {[30, 70, 110, 150].map((x, i) => (
              <motion.circle
                key={x}
                cx={x}
                cy={78 - i * 16}
                r="3"
                fill="var(--accent)"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.4, delay: i * 0.4, repeat: Infinity }}
              />
            ))}
          </>
        )}

        {kind === "dashboard" && (
          <>
            <rect x="10" y="12" width="52" height="76" rx="5" fill="var(--accent)" opacity="0.1" />
            {[0, 1, 2].map((i) => (
              <motion.rect
                key={i}
                x="72"
                y={14 + i * 26}
                height="18"
                rx="4"
                fill={`url(#g-${kind})`}
                opacity="0.7"
                initial={{ width: 20 }}
                whileInView={{ width: 60 + i * 20 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              />
            ))}
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                x="18"
                y={22 + i * 16}
                width="36"
                height="5"
                rx="2.5"
                fill="var(--accent)"
                opacity="0.35"
              />
            ))}
          </>
        )}

        {kind === "traffic" && (
          <>
            <path d="M0 55 H200 M100 0 V100" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="6" />
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={i}
                r="3.5"
                fill={`url(#g-${kind})`}
                animate={{ cx: [-10, 210] }}
                transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "linear", delay: i }}
                cy={55 - 8 + i * 8}
              />
            ))}
            {[20, 55, 90].map((y, i) => (
              <motion.rect
                key={y}
                x="96"
                y={y}
                width="8"
                height="8"
                rx="4"
                fill="var(--accent)"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
              />
            ))}
          </>
        )}

        {kind === "campus" && (
          <>
            {[
              [30, 70],
              [70, 40],
              [110, 65],
              [150, 35],
              [175, 70],
            ].map((pt, i) => {
              const [x, y] = pt as [number, number];
              return (
              <g key={i}>
                <rect
                  x={x - 8}
                  y={y - 12}
                  width="16"
                  height="24"
                  rx="3"
                  fill="var(--accent)"
                  opacity="0.18"
                />
                <motion.circle
                  cx={x}
                  cy={y - 20}
                  r="2.5"
                  fill={`url(#g-${kind})`}
                  animate={{ opacity: [0.25, 1, 0.25], cy: [y - 20, y - 26, y - 20] }}
                  transition={{ duration: 3.5, delay: i * 0.5, repeat: Infinity }}
                />
              </g>
              );
            })}
            <path
              d="M30 50 L70 20 L110 45 L150 15 L175 50"
              fill="none"
              stroke="var(--accent)"
              strokeOpacity="0.4"
              strokeDasharray="4 6"
              style={{ animation: "dash-flow 12s linear infinite" }}
            />
          </>
        )}

        {kind === "code" && (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.rect
                key={i}
                x={18 + (i % 2) * 12}
                y={16 + i * 15}
                height="6"
                rx="3"
                fill={i % 2 === 0 ? `url(#g-${kind})` : "var(--accent)"}
                opacity={i % 2 === 0 ? 0.8 : 0.35}
                initial={{ width: 0 }}
                whileInView={{ width: 60 + ((i * 37) % 90) }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
              />
            ))}
            <motion.rect
              x="18"
              y="90"
              width="7"
              height="6"
              fill="var(--accent)"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
