import { motion, useScroll, useSpring } from "framer-motion"
import "./ScrollIndicator.css"

export default function ScrollIndicator({ type = "top-bar" }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  if (type === "circular") {
    return (
      <div className="scroll-indicator circular">
        <svg width="60" height="60">
          <motion.circle
            cx="30"
            cy="30"
            r="25"
            strokeWidth="5"
            fill="transparent"
            style={{
              pathLength: scrollYProgress
            }}
          />
        </svg>
      </div>
    )
  }

  if (type === "side-bar") {
    return (
      <motion.div
        className="scroll-indicator side-bar"
        style={{ scaleY: scaleX }}
      />
    )
  }

  return (
    <motion.div
      className="scroll-indicator top-bar"
      style={{ scaleX }}
    />
  )
}