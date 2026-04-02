import { motion } from "framer-motion"
import "./PopupActions.css"

export default function PopupActions({ project }) {
  return (
    <div className="popup-actions">
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="popup-btn live"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Live Demo
      </motion.a>

      <motion.a
        href={project.github || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="popup-btn github"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Source Code
      </motion.a>
    </div>
  )
}