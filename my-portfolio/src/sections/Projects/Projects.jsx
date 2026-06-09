import { motion } from "framer-motion"
import { usePopup } from "../../context/PopupContext"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "./Projects.css"

import healthImg from "../../assets/projects/health.png"
import crudImg from "../../assets/projects/crud.png"
import aiImg from "../../assets/projects/ai.png"
import chatbotImg from "../../assets/projects/chatbot.png"
import recordsImg from "../../assets/projects/records.png"
import housiegameImg from "../../assets/projects/housiegame.png"

export default function Projects() {
  const { openPopup } = usePopup()

  const projects = [
    {
      title: "Health-Data-Consent-Management-System",
      description: "A secure web application built to manage patient health data consent with proper authentication and authorization.",
      link: "https://health-data-consent-management-system.onrender.com",
      github: "https://github.com/Mastanvali9347/Health-Data-Consent-Management-System",
      image: healthImg,
      skills: ["Django", "Python", "HTML", "CSS", "MySQL"]
    },
    {
      title: "Customer_CRUD_App",
      description: "Full-stack CRUD application to manage customer data with create, read, update, and delete functionalities.",
      link: "https://customer-crud-app-90na.onrender.com",
      github: "https://github.com/Mastanvali9347/Customer_CRUD_App",
      image: crudImg,
      skills: ["HTML", "CSS", "JavaScript", "Python", "MySQL"]
    },
    {
      title: "AI-Code-Detection",
      description: "AI-based application that detects and analyzes code patterns for intelligent debugging and validation.",
      link: "https://ai-code-detection-nine.vercel.app",
      github: "https://github.com/Mastanvali9347/AI-Code-Detection",
      image: aiImg,
      skills: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      title: "Chatbot_Application",
      description: "Interactive chatbot application designed to simulate real-time conversation with a clean user interface.",
      link: "https://mastanvali9347.github.io/Chatbot_application/",
      github: "https://github.com/Mastanvali9347/Chatbot_application",
      image: chatbotImg,
      skills: ["JavaScript", "HTML", "CSS"]
    },
    {
      title: "Patient-Health-Records",
      description: "Web platform to manage and maintain patient health records with structured data management.",
      link: "https://patient-health-records.vercel.app",
      github: "https://github.com/Mastanvali9347/Patient-Health-Records",
      image: recordsImg,
      skills: ["HTML", "CSS", "JavaScript", "Django", "MySQL"]
    },
    {
      title: "Housie Game",
      description: "A real-time multiplayer Housie game built with FastAPI and React. Features include ticket generation, number calling, and win detection with a modern, responsive interface.",
      link: "https://game-gamma-puce.vercel.app/lobby",
      github: "https://github.com/Mastanvali9347/game",
      image: housiegameImg,
      skills: ["FastAPI", "Python", "Supabase", "React", "javascript", "HTML", "CSS"]
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 }
  }

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    reveal: { opacity: 1, y: 0 }
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <div className="header-underline" />
        </motion.div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="card-img" />

                {/* Default Bottom Content */}
                <div className="card-default-content">
                  <div className="skills-row">
                    {project.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Animated Hover Overlay */}
                <motion.div
                  className="project-overlay-details"
                  initial="hidden"
                  whileHover="reveal"
                  variants={{
                    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
                    reveal: { opacity: 1, backdropFilter: "blur(12px)", transition: { staggerChildren: 0.08 } }
                  }}
                >
                  <div className="overlay-inner">
                    <motion.h3 variants={revealVariants}>{project.title}</motion.h3>
                    <motion.p variants={revealVariants}>{project.description}</motion.p>

                    <motion.div className="overlay-buttons-row" variants={revealVariants}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" title="Live Demo">
                        <FaExternalLinkAlt />
                      </a>
                      <button
                        className="details-reveal-btn"
                        onClick={() => openPopup(project)}
                      >
                        View Details
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}