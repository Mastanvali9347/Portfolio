import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePopup } from "../context/PopupContext"
import "../pages/Projects.css"

import aiImg from "../assets/projects/ai.png"
import chatbotImg from "../assets/projects/chatbot.png"
import crudImg from "../assets/projects/crud.png"
import healthImg from "../assets/projects/health.png"
import recordsImg from "../assets/projects/records.png"
import housiegameImg from "../assets/projects/housiegame.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  },
  hover: {
    y: -15,
    scale: 1.02,
    boxShadow: "0px 30px 60px rgba(0,0,0,0.6), 0px 0px 40px rgba(168,85,247,0.4)",
    transition: { duration: 0.4 }
  }
}

// Variants for the hidden reveal items
const revealVariants = {
  initial: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

export default function ProjectsPage() {
  const { openPopup } = usePopup()
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "Health-Consent-System",
      category: "Full Stack",
      image: healthImg,
      tech: ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
      description: "A secure healthcare platform that manages patient consent digitally, ensuring data privacy and regulatory compliance while facilitating seamless information sharing between providers.",
      link: "https://health-data-consent-management-system.onrender.com"
    },
    {
      title: "Customer CRUD App",
      category: "Full Stack",
      image: crudImg,
      tech: ["Flask", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
      description: "A robust customer management system implementing full CRUD operations. Features a clean interface for tracking client data, history, and engagement metrics with high performance.",
      link: "https://customer-crud-app-90na.onrender.com"
    },
    {
      title: "AI Code Detection",
      category: "AI",
      image: aiImg,
      tech: ["React", "JavaScript", "CSS", "HTML", "Bootstrap"],
      description: "Advanced AI tool designed to analyze and detect patterns in source code. It helps developers identify potential vulnerabilities, optimize logic, and maintain high standards of code hygiene.",
      link: "https://ai-code-detection-nine.vercel.app"
    },
    {
      title: "Chatbot Application",
      category: "Frontend",
      image: chatbotImg,
      tech: ["HTML", "CSS", "JavaScript"],
      description: "An interactive and responsive chatbot UI that simulates real-time conversations. Implements modern UX patterns and smooth animations to provide a natural user interface for AI systems.",
      link: "https://mastanvali9347.github.io/Chatbot_application/"
    },
    {
      title: "Patient Health Records",
      category: "Full Stack",
      image: recordsImg,
      tech: ["React", "HTML", "CSS", "JavaScript"],
      description: "A comprehensive system for managing structured patient health records. Focuses on accessibility and clarity, allowing healthcare professionals to quickly retrieve and update vital patient data.",
      link: "https://patient-health-records.vercel.app"
    },
    {
      title: "Housie Game",
      category: "Full Stack",
      image: housiegameImg,
      tech: ["FastAPI", "Python", "Supabase", "React", "javascript", "HTML", "CSS"],
      description: "A real-time multiplayer Housie game built with FastAPI and React. Features include ticket generation, number calling, and win detection with a modern, responsive interface.",
      link: "https://game-gamma-puce.vercel.app/lobby"
    }
  ]

  const categories = ["All", "Full Stack", "Frontend", "AI"]

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = filter === "All" || project.category === filter
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.tech.join(" ").toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [search, filter])

  return (
    <section className="projects-page">
      <div className="projects-page-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            My Project
          </motion.h2>
          <motion.div
            className="title-underline"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Crafting the next generation of digital solutions.
          </motion.p>
        </motion.div>

        <div className="projects-controls">
          <motion.div
            className="search-box"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <input
              type="text"
              placeholder="Search tech stack or title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </motion.div>

          <motion.div
            className="filter-buttons"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.4 }
              }
            }}
          >
            {categories.map((cat, index) => (
              <motion.button
                key={index}
                className={filter === cat ? "active" : ""}
                onClick={() => setFilter(cat)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.15, y: -3, boxShadow: "0px 10px 20px rgba(168,85,247,0.3)" }}
                whileTap={{ scale: 0.9 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                className="project-card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-img" />

                  {/* Skills atop image - Visible by default, hidden on hover */}
                  <motion.div
                    className="initial-tech-overlay-bottom"
                    variants={{
                      initial: { opacity: 1 },
                      hover: { opacity: 0 }
                    }}
                  >
                    <div className="tech-stack-mini">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="mini-badge-glow">{tech}</span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Hover Details Overlay - Triggered on card hover */}
                  <motion.div
                    className="hover-details-overlay"
                    variants={{
                      initial: { opacity: 0, backdropFilter: "blur(0px)" },
                      hover: { opacity: 1, backdropFilter: "blur(10px)", transition: { staggerChildren: 0.1 } }
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="overlay-content">
                      <motion.span
                        className="category-label"
                        variants={revealVariants}
                      >
                        {project.category}
                      </motion.span>
                      <motion.h3 variants={revealVariants}>
                        {project.title}
                      </motion.h3>
                      <motion.p variants={revealVariants}>
                        {project.description}
                      </motion.p>

                      <motion.div
                        className="project-actions"
                        variants={revealVariants}
                      >
                        <motion.button
                          className="action-btn-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.link, '_blank');
                          }}
                        >
                          Visit Project
                        </motion.button>
                        <motion.button
                          className="action-btn-secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            openPopup(project);
                          }}
                        >
                          Discover More
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
