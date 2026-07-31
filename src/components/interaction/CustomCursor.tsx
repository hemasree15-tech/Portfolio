import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useIsDesktop, usePrefersReducedMotion } from "@/hooks/use-environment";

export function CustomCursor() {
  const isDesktop = useIsDesktop();
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 220, damping: 24, mass: 0.4 });
  const ry = useSpring(y, { stiffness: 220, damping: 24, mass: 0.4 });

  useEffect(() => {
    if (!isDesktop || reduced) return;
    document.documentElement.classList.add("cursor-hidden");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target as HTMLElement | null;
      setActive(
        !!el?.closest("a, button, [data-cursor='hover'], input, textarea, [role='button']"),
      );
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("cursor-hidden");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [isDesktop, reduced, x, y]);

  if (!isDesktop || reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        className="absolute size-1.5 rounded-full bg-accent"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0, scale: active ? 1.8 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute rounded-full border border-accent/50"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: active ? 56 : 30,
          height: active ? 56 : 30,
          opacity: visible ? (active ? 0.9 : 0.5) : 0,
          backgroundColor: active
            ? "color-mix(in oklab, var(--accent) 12%, transparent)"
            : "transparent",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      />
    </div>
  );
}
