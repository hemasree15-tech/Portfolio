import { motion } from "motion/react";
import { FileText, Sparkles } from "lucide-react";
import { research, strengths, workshops } from "@/data/resume";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Stagger, staggerChild } from "@/components/motion/Reveal";

export function Research() {
  return (
    <section id="research" className="section-pad relative overflow-hidden px-5">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 size-[28rem] rounded-full bg-accent2/8 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Research & Strengths"
          title="Writing, researching and working with people"
          description="Published research work alongside the soft skills that make the technical work land."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="space-y-5">
            {research.map((r, i) => (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="glass shine relative overflow-hidden rounded-3xl p-6"
              >
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent">
                  <FileText className="size-3.5" /> {r.type}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{r.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {r.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="space-y-5">
            <Stagger className="glass rounded-3xl p-6">
              <motion.h3
                variants={staggerChild}
                className="font-display text-base font-semibold"
              >
                Core strengths
              </motion.h3>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {strengths.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.label}
                      variants={staggerChild}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 rounded-2xl border border-border/70 px-3.5 py-3 transition-colors duration-300 hover:border-accent/35"
                    >
                      <Icon className="size-4 shrink-0 text-accent" />
                      <span className="text-[13px] text-foreground/85">{s.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Stagger>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent">
                <Sparkles className="size-3.5" /> Workshops & webinars
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{workshops}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
