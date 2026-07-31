import { motion } from "motion/react";
import { skillGroups } from "@/data/resume";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { TiltCard } from "@/components/motion/TiltCard";
import { Stagger, staggerChild } from "@/components/motion/Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad relative px-5">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for software and data"
          description="Core computer science fundamentals paired with practical machine learning, database and full-stack tooling."
          align="center"
        />

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div key={group.title} variants={staggerChild}>
                <TiltCard className="h-full rounded-3xl" intensity={6}>
                  <div className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition-colors duration-500 hover:border-accent/30">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(400px circle at 50% 0%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 70%)",
                      }}
                    />
                    <div className="relative flex items-center gap-3">
                      <div className="grid size-11 place-items-center rounded-2xl border border-accent/20 bg-accent/8 text-accent transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-display text-base font-semibold">{group.title}</h3>
                    </div>
                    <div className="relative mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-xl border border-border bg-secondary/40 px-3 py-1.5 text-[12px] text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_18px_-6px_color-mix(in_oklab,var(--accent)_70%,transparent)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
