import { motion } from "motion/react";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { profile } from "@/data/resume";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { NeuralVisual } from "@/components/hero/NeuralVisual";
import { MagneticButton } from "@/components/motion/MagneticButton";

const resumeAsset = new URL(
  "../../assets/MV_Hema_Sree_Resume.docx",
  import.meta.url
).href;

const headline = ["Hi,", "I'm", "MV", "Hema", "Sree"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.6 }}
            className="glass mb-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-accent" />
            B.Tech CSE · 9.73 CGPA · The Apollo University
          </motion.div>

          <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] sm:text-6xl lg:text-[4.2rem]">
            {headline.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 1.6 + i * 0.09,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`mr-3 inline-block ${i > 1 ? "text-gradient" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.15, duration: 0.7 }}
            className="mt-5 font-display text-base font-medium tracking-tight text-accent sm:text-lg"
          >
            Software Developer <span className="text-muted-foreground/50">|</span> Data Analyst{" "}
            <span className="text-muted-foreground/50">|</span> AI/ML Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.7 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          >
            {profile.summary} I build full-stack web applications and research-driven AI/ML
            solutions — from sentiment analysis to reinforcement-learning recommenders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              onClick={() => scrollTo("projects")}
              className="bg-[linear-gradient(120deg,var(--accent),var(--accent2))] text-primary-foreground glow"
            >
              Explore My Work <ArrowDown className="size-4" />
            </MagneticButton>

            <MagneticButton
              href={resumeAsset}
              download
              className="glass text-foreground hover:text-accent"
            >
              <Download className="size-4" /> Download Resume
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollTo("contact")}
              className="text-foreground/80 hover:text-accent"
              strength={0.2}
            >
              <Mail className="size-4" /> Let&apos;s Connect
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <NeuralVisual />
        </motion.div>
      </div>
    </section>
  );
}