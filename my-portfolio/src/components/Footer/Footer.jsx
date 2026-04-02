import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import SocialLinks from "../SocialLinks/SocialLinks"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import "./Footer.css"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="footer"
    >
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <h3>Mastan's Portfolio</h3>
          <p>
            Building modern web experiences using React, JavaScript and modern
            UI technologies.
          </p>

          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt className="icon"/> Hyderabad, India
            </p>

            <p>
              <FaEnvelope className="icon"/> patanmastan455@gmail.com
            </p>

            <p>
              <FaPhoneAlt className="icon"/> +91 9347820465
            </p>
          </div>
        </div>


        {/* CENTER SECTION */}
        <div className="footer-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>

          <Link to="/resume">Resume</Link>

          <Link to="/contact">Contact</Link>
        </div>


        {/* RIGHT SECTION */}
        <div className="footer-right">
          <h4>Connect With Me</h4>
          <p>Follow me on social platforms</p>

          <SocialLinks />
        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>
          © {year} Patan Mastanvali — Designed & Built with React
        </span>
      </div>

    </motion.footer>
  )
}