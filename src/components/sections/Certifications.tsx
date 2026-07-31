import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BadgeCheck } from "lucide-react";
import { certCategories, certifications } from "@/data/resume";
import { SectionHeading } from "@/components/layout/SectionHeading";

export function Certifications() {
  const [active, setActive] = useState<string>("All");
  const list = certifications.filter((c) => active === "All" || c.category === active);

  return (
    <section id="certifications" className="section-pad relative px-5">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="16 certifications, verified and applied"
          description="Google, IBM, Microsoft, MongoDB, NPTEL, Simplilearn and more — each one backing a skill used in real projects."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {certCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="relative rounded-full px-3.5 py-1.5 text-[12px] transition-colors duration-300"
            >
              {active === c && (
                <motion.span
                  layoutId="cert-filter"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  className="absolute inset-0 rounded-full border border-accent/40 bg-accent/12"
                />
              )}
              <span
                className={`relative ${active === c ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
              >
                {c}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((c) => (
              <motion.div
                layout
                key={c.title}
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-2xl p-5"
              >
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent transition-transform duration-500 group-hover:scale-125" />
                  <div className="min-w-0">
                    <h3 className="text-[14px] font-semibold leading-snug">{c.title}</h3>
                    <p className="mt-1 text-[12px] text-accent/80">{c.org}</p>
                    <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                      {c.skills}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
