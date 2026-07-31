import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/resume";
import { SectionHeading } from "@/components/layout/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden px-5">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 size-[34rem] rounded-full bg-accent2/8 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Internships across data, AI and the full stack"
          description="Four hands-on internships spanning data science, Python development, artificial intelligence and full stack web development."
        />

        <div className="mt-16 space-y-5">
          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="glass relative overflow-hidden rounded-3xl p-6 transition-transform duration-500 group-hover:-translate-y-1.5 sm:p-8">
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] transition-transform duration-700 group-hover:scale-x-100" />
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-2xl border border-accent/25 bg-accent/8 text-accent transition-transform duration-500 group-hover:scale-110">
                      <Briefcase className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold leading-snug">{job.role}</h3>
                      <p className="mt-0.5 text-sm text-accent">{job.company}</p>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    0{i + 1}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 sm:pl-15">
                  {job.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/70" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 sm:pl-15">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-[11px] text-foreground/70 transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
