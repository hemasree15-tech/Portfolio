import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useMemo } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-environment";

const TECH_LABELS = [
  { label: "Python", x: "8%", y: "18%", d: 0 },
  { label: "Java", x: "78%", y: "12%", d: 1.2 },
  { label: "SQL", x: "16%", y: "72%", d: 2.4 },
  { label: "Machine Learning", x: "62%", y: "78%", d: 0.8 },
  { label: "AI", x: "42%", y: "8%", d: 1.8 },
  { label: "Data Analytics", x: "84%", y: "58%", d: 3 },
  { label: "Git", x: "4%", y: "46%", d: 2 },
  { label: "MongoDB", x: "50%", y: "62%", d: 1.4 },
];

export function HeroBackground() {
  const reduced = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const slowX = useTransform(sx, (v) => v * 18);
  const slowY = useTransform(sy, (v) => v * 18);
  const fastX = useTransform(sx, (v) => v * 42);
  const fastY = useTransform(sy, (v) => v * 42);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduced]);

  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        left: `${(i * 37.5) % 100}%`,
        top: `${(i * 61.3) % 100}%`,
        size: 1.5 + ((i * 7) % 4),
        dur: 9 + ((i * 3) % 11),
        delay: (i % 9) * 0.7,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div style={{ x: slowX, y: slowY }} className="absolute -inset-[10%]">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000,transparent)]" />
      </motion.div>

      <div className="absolute -left-24 top-0 size-[38rem] rounded-full bg-accent/12 blur-[120px] animate-blob" />
      <div
        className="absolute -right-32 top-32 size-[34rem] rounded-full blur-[130px] animate-blob"
        style={{ background: "color-mix(in oklab, var(--accent2) 14%, transparent)", animationDelay: "-8s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 size-[26rem] rounded-full bg-accent/8 blur-[110px] animate-blob"
        style={{ animationDelay: "-15s" }}
      />

      <svg className="absolute inset-0 size-full opacity-[0.35]" preserveAspectRatio="none">
        {[18, 38, 58, 78].map((y, i) => (
          <line
            key={y}
            x1="0"
            y1={`${y}%`}
            x2="100%"
            y2={`${y - 6}%`}
            stroke="var(--accent)"
            strokeWidth="1"
            strokeOpacity="0.18"
            strokeDasharray="6 22"
            style={{ animation: `dash-flow ${14 + i * 4}s linear infinite` }}
          />
        ))}
      </svg>

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent/60"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={reduced ? {} : { y: [0, -40, 0], opacity: [0.15, 0.75, 0.15] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div style={{ x: fastX, y: fastY }} className="absolute inset-0 hidden md:block">
        {TECH_LABELS.map((t) => (
          <motion.span
            key={t.label}
            className="glass absolute rounded-full px-3 py-1 font-mono text-[10px] tracking-wide text-foreground/55"
            style={{ left: t.x, top: t.y }}
            animate={reduced ? {} : { y: [0, -14, 0] }}
            transition={{ duration: 10 + t.d, delay: t.d, repeat: Infinity, ease: "easeInOut" }}
          >
            {t.label}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
