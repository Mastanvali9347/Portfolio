import { motion } from "framer-motion"
import { useEffect } from "react"
import "./Backdrop.css"

export default function Backdrop({ onClick }) {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === "Escape") {
        onClick()
      }
    }

    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClick])

  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    />
  )
}