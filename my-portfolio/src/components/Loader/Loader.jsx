import { motion } from "framer-motion"
import "./Loader.css"

export default function Loader({ type = "spinner" }) {
  if (type === "dots") {
    return (
      <div className="loader-container">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            className="dot"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    )
  }

  if (type === "bar") {
    return (
      <div className="loader-container">
        <motion.div
          className="loading-bar"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </div>
    )
  }

  if (type === "pulse") {
    return (
      <div className="loader-container">
        <motion.div
          className="pulse-circle"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    )
  }

  return (
    <div className="loader-container">
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}