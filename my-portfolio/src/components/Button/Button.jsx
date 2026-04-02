import { motion } from "framer-motion"
import "./Button.css"

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  href,
  target = "_self"
}) {
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      target={href ? target : undefined}
      type={!href ? type : undefined}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`btn btn-${variant}`}
    >
      {children}
    </Component>
  )
}