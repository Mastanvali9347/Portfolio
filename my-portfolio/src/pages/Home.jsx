import { lazy, Suspense } from "react";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import AIIntro from "../sections/AIIntro/AIIntro";
import SkillsGalaxy from "../sections/SkillsGalaxy/SkillsGalaxy";
import LiveStats from "../sections/LiveStats/LiveStats";
import Projects from "../sections/Projects/Projects";
import Experience from "../sections/Experience/Experience";
import GithubStats from "../sections/GithubStats/GithubStats";
import AIAssistant from "../components/AIAssistant/AIAssistant";

// Lazy load if needed, but for premium feel we can load main sections
const Contact = lazy(() => import("../sections/Contact/Contact"));

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <AIIntro />
      <SkillsGalaxy />
      <LiveStats />
      <Projects />
      <Experience />
      <GithubStats />
      
      <Suspense fallback={<div className="h-20" />}>
        <Contact />
      </Suspense>
      
      <AIAssistant />
    </div>
  );
}