import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import ProjectPopup from "./projectPopup/projectPopup/ProjectPopup"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator"
import { ThemeProvider } from "./context/ThemeContext"
import { PopupProvider } from "./context/PopupContext"
import Background3D from "./components/Background3D/Background3D"

const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}

export default function App() {
  const location = useLocation()

  return (
    <ThemeProvider>
      <PopupProvider>
        <Background3D />
        <ScrollIndicator />
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        <ProjectPopup />
        <ScrollToTop />
        <Footer />
      </PopupProvider>
    </ThemeProvider>
  )
}