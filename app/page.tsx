import { About } from "@/components/About";
import { AIEngineering } from "@/components/AIEngineering";
import { Architecture } from "@/components/Architecture";
import { Contact } from "@/components/Contact";
import { EngineeringPhilosophy } from "@/components/EngineeringPhilosophy";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WhatIBuild } from "@/components/WhatIBuild";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <WhatIBuild />
        <Projects />
        <EngineeringPhilosophy />
        <Experience />
        <AIEngineering />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
