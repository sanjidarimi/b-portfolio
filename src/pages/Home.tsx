// src/pages/Home.tsx
import About from "../components/About";
import { ContactSection } from "../components/ContactSection";
import Hero from "../components/Hero";
import { ProjectSection } from "../components/ProjectSection";
import Services from "../components/Service";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <Skills />
      
      <div id="projects"> 
        <ProjectSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}