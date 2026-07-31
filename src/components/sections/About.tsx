import { motion } from "motion/react";
import { GraduationCap, Languages, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/resume";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { TiltCard } from "@/components/motion/TiltCard";

const learning = ["Machine Learning", "Reinforcement Learning", "Agentic AI Basics", "Data Analysis"];

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden px-5">
      <div
        className="pointer-events-none absolute left-1/2 top-24 size-[30rem] -translate-x-1/2 rounded-full bg-accent/6 blur-[130px]"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading eyebrow="About" title="Turning curiosity into working software." />
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            {profile.longSummary}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{profile.seeking}</p>

          <div className="mt-8 flex flex-wrap gap-3 text-[13px] text-muted-foreground">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5">
              <MapPin className="size-3.5 text-accent" /> {profile.location}
            </span>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5">
              <Languages className="size-3.5 text-accent" /> {profile.languages.join(" · ")}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.span
            aria-hidden
            className="absolute -left-6 -top-6 size-24 rounded-2xl border border-accent/25"
            animate={{ rotate: [0, 12, 0], y: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden
            className="absolute -bottom-8 -right-4 size-16 rounded-full border border-accent2/30"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <TiltCard className="relative rounded-3xl">
            <div className="glass shine relative overflow-hidden rounded-3xl p-7">
              <div className="flex items-center gap-4">
                <div
                  className="grid size-14 shrink-0 place-items-center rounded-2xl font-display text-lg font-bold text-primary-foreground"
                  style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
                >
                  MV
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-lg font-semibold">{profile.name}</h3>
                  <p className="truncate text-xs text-muted-foreground">{profile.tagline}</p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  { k: "CGPA", v: "9.73" },
                  { k: "Internships", v: "4" },
                  { k: "Certifications", v: "15+" },
                  { k: "Projects", v: "7" },
                ].map((item) => (
                  <div key={item.k} className="rounded-2xl border border-border/70 px-4 py-3">
                    <div className="font-display text-xl font-bold text-accent">{item.v}</div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                      {item.k}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  <Sparkles className="size-3.5 text-accent" /> Currently building & learning
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {learning.map((l, i) => (
                    <motion.span
                      key={l}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                      className="rounded-full border border-accent/25 bg-accent/8 px-3 py-1 text-[11px] text-foreground/80"
                    >
                      {l}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center gap-2 border-t border-border/70 pt-5 text-xs text-muted-foreground">
                <GraduationCap className="size-4 text-accent" />
                B.Tech Computer Science · The Apollo University
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
