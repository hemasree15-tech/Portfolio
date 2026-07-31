import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/resume";

function Counter({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative z-10 -mt-6 px-5 pb-4">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="glass shine relative overflow-hidden rounded-2xl px-5 py-6 text-center"
          >
            <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
              <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            </div>
            <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {s.label}
            </div>
            <span className="absolute inset-x-6 bottom-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] opacity-60" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
