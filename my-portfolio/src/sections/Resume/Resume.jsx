import { motion } from "framer-motion"
import { FaDownload, FaEye } from "react-icons/fa"
import "./Resume.css"

export default function ResumeSection() {
  const resumePdf = "/Mastan_ATS_resume.pdf"

  return (
    <section className="resume-section-home" id="resume">
      <div className="resume-section-container">
        <motion.div 
          className="resume-content-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Resume</h2>
          <p className="resume-desc">
            Download my full ATS-optimized resume to see my detailed work experience, 
            technical skills, and academic achievements.
          </p>
          
          <div className="resume-btns">
            <a href={resumePdf} target="_blank" rel="noreferrer" className="resume-btn secondary">
              <FaEye /> View Resume
            </a>
            <a href={resumePdf} download="Mastan_Valli_Resume.pdf" className="resume-btn primary">
              <FaDownload /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
