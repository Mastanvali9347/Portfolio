import { motion } from "framer-motion"
import { useTheme } from "../../context/ThemeContext"
import "./ThemeToggle.css"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 20 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle Theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="icon"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </motion.div>
    </motion.button>
  )
}