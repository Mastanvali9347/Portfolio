import { motion } from "framer-motion"
import "./PopupHeader.css"

export default function PopupHeader({ title, onClose }) {
  return (
    <div className="popup-header">
      <motion.h3
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h3>

      <motion.button
        className="popup-close"
        onClick={onClose}
        whileHover={{ rotate: 90, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        ✕
      </motion.button>
    </div>
  )
}