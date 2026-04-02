import { useInView } from "framer-motion"
import { useRef } from "react"

export default function useAnimation(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px", ...options })

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return { ref, isInView, variants }
}