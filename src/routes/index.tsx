import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/interaction/LoadingScreen";
import { ScrollProgress } from "@/components/interaction/ScrollProgress";
import { CustomCursor } from "@/components/interaction/CustomCursor";
import { BackToTop } from "@/components/interaction/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Research } from "@/components/sections/Research";
import { Contact } from "@/components/sections/Contact";

const title = "MV Hema Sree — Software Developer & AI/ML Portfolio";
const description =
  "Portfolio of MV Hema Sree: B.Tech CSE (9.73 CGPA), 4 internships and 15+ certifications across software development, data analysis and machine learning.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Research />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
