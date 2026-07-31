import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";
import { projects } from "@/data/resume";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProjectVisual } from "@/components/projects/ProjectVisual";

const filters = ["All", "AI / ML", "Full Stack", "Research"] as const;

function matches(filter: (typeof filters)[number], subtitle: string) {
  if (filter === "All") return true;
  if (filter === "AI / ML")
    return /Machine Learning|Applied RL/.test(subtitle);
  if (filter === "Full Stack")
    return /Full Stack|Core Application/.test(subtitle);
  return /Research/.test(subtitle);
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => matches(filter, p.subtitle));

  return (
    <section id="projects" className="section-pad relative overflow-hidden px-5">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 size-[32rem] rounded-full bg-accent/8 blur-[150px]"
      />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've designed, trained and shipped"
          description="From NLP sentiment models and reinforcement-learning recommenders to full-stack CRM tooling and published research."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="relative rounded-full px-4 py-2 text-[13px] transition-colors duration-300"
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  className="absolute inset-0 rounded-full border border-accent/40 bg-accent/12"
                />
              )}
              <span
                className={`relative ${filter === f ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
              >
                {f}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className={`glass shine group relative overflow-hidden rounded-3xl p-6 ${
                  p.featured ? "md:col-span-1" : ""
                }`}
              >
                {p.featured && (
                  <span className="absolute right-5 top-5 z-10 inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-accent">
                    <Star className="size-3" /> Featured
                  </span>
                )}
                <ProjectVisual kind={p.visual} />
                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent">{p.subtitle}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight
                  aria-hidden
                  className="absolute bottom-6 right-6 size-5 text-muted-foreground/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
