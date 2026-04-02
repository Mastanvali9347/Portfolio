import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import useScroll from "../../hooks/useScroll"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import "./Navbar.css"

export default function Navbar() {

  const { direction, scrollY } = useScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: .4 } }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (

    <motion.header
      variants={navVariants}
      initial="hidden"
      animate={direction === "down" && scrollY > 80 ? "hidden" : "visible"}
      className={`navbar ${scrollY > 50 ? "scrolled" : ""}`}

    >

      <div className="navbar-container">

        <NavLink to="/" className="logo">
          <span>Mastan's</span> Portfolio
        </NavLink>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About </NavLink>

          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            Projects </NavLink>

          <NavLink to="/resume" className="resume-link" onClick={() => setMenuOpen(false)}>
            Resume </NavLink>

          <NavLink
            to="/contact"
            className="contact-btn"
            onClick={() => setMenuOpen(false)}

          >

            Contact </NavLink>

        </nav>

        <div className="nav-right">

          <ThemeToggle />

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </div>

    </motion.header>

  )

}
