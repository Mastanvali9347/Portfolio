import { lazy, Suspense } from "react"
import Loader from "../components/Loader/Loader"
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator"

const Hero = lazy(() => import("../sections/Hero/Hero"))
const About = lazy(() => import("../sections/About/About"))
const Skills = lazy(() => import("../sections/Skills/Skills"))
const Experience = lazy(() => import("../sections/Experience/Experience"))
const Projects = lazy(() => import("../sections/Projects/Projects"))
const ResumeSection = lazy(() => import("../sections/Resume/Resume"))
const Contact = lazy(() => import("../sections/Contact/Contact"))

export default function Home() {
  return (
    <>
      <ScrollIndicator type="top-bar" />

      <Suspense fallback={<Loader type="spinner" />}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ResumeSection />
        <Contact />
      </Suspense>
    </>
  )
}