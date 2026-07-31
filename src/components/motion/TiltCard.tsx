import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-environment";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  intensity = 8,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 160, damping: 20 });
  const sy = useSpring(my, { stiffness: 160, damping: 20 });
  const rotateY = useTransform(sx, [0, 1], [-intensity, intensity]);
  const rotateX = useTransform(sy, [0, 1], [intensity, -intensity]);
  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (reduced) return;
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      style={reduced ? {} : { rotateX, rotateY, transformPerspective: 900 }}
      whileHover={reduced ? {} : { y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className={cn("group relative", className)}
    >
      {glow && !reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(320px circle at ${glowX.get()} ${glowY.get()}, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)`,
            backgroundPositionX: glowX,
            backgroundPositionY: glowY,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
