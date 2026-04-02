import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import "./ScrollToTop.css"

export default function ScrollToTop({ type = "floating" }) {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (type === "minimal") {
    return (
      <AnimatePresence>
        {visible && (
          <motion.button
            className="scroll-top minimal"
            onClick={scrollTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    )
  }

  if (type === "progress") {
    const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100

    return (
      <AnimatePresence>
        {visible && (
          <motion.button
            className="scroll-top progress"
            onClick={scrollTop}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            {Math.round(progress)}%
          </motion.button>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-top floating"
          onClick={scrollTop}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ⬆
        </motion.button>
      )}
    </AnimatePresence>
  )
}