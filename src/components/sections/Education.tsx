import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/resume";
import { SectionHeading } from "@/components/layout/SectionHeading";

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="section-pad relative px-5">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="A consistent academic record across school, intermediate and engineering."
        />

        <div ref={ref} className="relative mt-16 pl-10 sm:pl-14">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-border sm:left-5" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-3 top-0 w-px origin-top sm:left-5"
          >
            <div className="size-full bg-[linear-gradient(180deg,var(--accent),var(--accent2))]" />
          </motion.div>
          <motion.span
            aria-hidden
            style={{ top: glowY }}
            className="absolute left-3 size-3 -translate-x-1/2 rounded-full bg-accent blur-[6px] sm:left-5"
          />

          <div className="space-y-8">
            {education.map((e, i) => (
              <motion.article
                key={e.degree}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="glass shine relative overflow-hidden rounded-2xl p-6"
              >
                <motion.span
                  aria-hidden
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="absolute -left-[2.05rem] top-8 grid size-4 place-items-center rounded-full bg-accent shadow-[0_0_18px_2px_color-mix(in_oklab,var(--accent)_60%,transparent)] sm:-left-[2.3rem]"
                />
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground/70">{e.board}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="rounded-full border border-accent/25 bg-accent/8 px-3 py-1 font-mono text-xs text-accent">
                      {e.score}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                      {e.year}
                    </div>
                  </div>
                </div>
                <GraduationCap
                  aria-hidden
                  className="pointer-events-none absolute -bottom-4 -right-3 size-24 text-accent/5"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
