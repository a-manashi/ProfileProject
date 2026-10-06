import { About } from "@/components/About";
import { Architecture } from "@/components/Architecture";
import { AskAbdulAIMount } from "@/components/chatbot/AskAbdulAIMount";
import { Contact } from "@/components/Contact";
import { CredibilityBar } from "@/components/CredibilityBar";
import { EngineeringPhilosophy } from "@/components/EngineeringPhilosophy";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WhatIBuild } from "@/components/WhatIBuild";
import { WhoIWorkWith } from "@/components/WhoIWorkWith";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <CredibilityBar />
        <WhatIBuild />
        <Projects />
        <WhoIWorkWith />
        <Architecture />
        <About />
        <Skills />
        <EngineeringPhilosophy />
        <Contact />
      </main>
      <Footer />
      <AskAbdulAIMount />
    </>
  );
}
