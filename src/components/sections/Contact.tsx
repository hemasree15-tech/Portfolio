import { motion } from "motion/react";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/resume";
import resumeAsset from "@/assets/resume.docx.asset.json";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MagneticButton } from "@/components/motion/MagneticButton";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: Linkedin, label: "LinkedIn", value: "mv-hema-sree", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "mvhemasree", href: profile.github },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden px-5">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[160px]"
      />
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth shipping"
          description="Open to Software Developer, Data Analyst and AI/ML internship or full-time opportunities. I usually reply within a day."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="bg-[linear-gradient(120deg,var(--accent),var(--accent2))] text-primary-foreground glow"
          >
            <Mail className="size-4" /> Email me
          </MagneticButton>
          <MagneticButton
            href={resumeAsset.url}
            download
            className="glass text-foreground hover:text-accent"
          >
            <Download className="size-4" /> Download resume
          </MagneticButton>
        </motion.div>

        <div className="mt-12 grid gap-3.5 sm:grid-cols-2">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass group flex items-center gap-4 rounded-2xl p-5 text-left transition-colors duration-300 hover:border-accent/35"
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-2xl border border-accent/20 bg-accent/8 text-accent transition-transform duration-500 group-hover:scale-110">
                  <Icon className="size-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="truncate text-[14px] text-foreground/90">{c.value}</div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-[13px] text-muted-foreground">
          <MapPin className="size-3.5 text-accent" /> {profile.location}
        </p>
      </div>
    </section>
  );
}
