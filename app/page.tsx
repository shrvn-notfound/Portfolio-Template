import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import LearningJourney from "@/components/sections/LearningJourney";
import Contact from "@/components/sections/Contact";

/**
 * PROMPT.md §4.1: single-page scroll site.
 * Section order: Hero → About → Featured Projects → Technical Skills →
 * Education → Certifications → Learning Journey → Contact.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <LearningJourney />
      <Contact />
    </>
  );
}
