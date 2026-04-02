import { motion } from "framer-motion"
import { FaDownload, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaEye } from "react-icons/fa"
import "./Resume.css"

export default function Resume() {
  const resumePdf = "/Mastan_ATS_resume.pdf"
  const resumeData = {
    name: "Mastan Vali",
    title: "Full Stack Python Developer",
    contact: {
      email: "patanmastan455@gmail.com",
      phone: "+91 9347820465",
      location: "Martur, Andhra Pradesh, India",
      linkedin: "https://linkedin.com/in/mastanvalli",
      github: "https://github.com/mastanvalli"
    },
    summary: "Dedicated Full Stack Python Developer with a strong foundation in building scalable web applications. Currently pursuing B.Tech in Electronics and Communication Engineering. Expert in Django, React, and modern web technologies, with a focus on creating efficient, user-centric solutions.",
    experience: [
      {
        company: "Portfolio Project",
        role: "Full Stack Developer",
        period: "2023 - Present",
        desc: "Designed and developed a comprehensive portfolio website using React.js and Three.js for 3D interactions. Implemented responsive layouts and glassmorphic UI components."
      },
      {
        company: "Academic Projects",
        role: "Developer",
        period: "2021 - 2024",
        desc: "Developed various web applications using Python and Django. Integrated REST APIs and managed database schemas with PostgreSQL and MySQL."
      }
    ],
    education: [
      {
        degree: "B.Tech, Electronics and Communication Engineering",
        school: "Bharath Institute of Higher Education and Research, Chennai",
        year: "2021 - 2025"
      },
      {
        degree: "Intermediate (MPC)",
        school: "Royal Junior College, Martur",
        year: "2019 - 2021"
      },
      {
        degree: "Secondary School (SSC)",
        school: "Sri Srinivasa High School, Martur",
        year: "2018 - 2019"
      }
    ],
    skills: [
      "Python", "Django", "Flask", "React.js", "JavaScript", "HTML5", "CSS3", "Node.js", "MySQL", "PostgreSQL", "MongoDB", "Git", "C++", "C"
    ]
  }

  return (
    <div className="resume-page">
      <div className="resume-container">
        <motion.div
          className="resume-actions"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href={resumePdf} target="_blank" rel="noreferrer" className="view-btn">
            <FaEye /> View Full PDF
          </a>
          <a href={resumePdf} download="Mastan_Valli_Resume.pdf" className="download-btn">
            <FaDownload /> Download ATS CV
          </a>
        </motion.div>

        <motion.div
          className="resume-paper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <header className="resume-header">
            <div className="header-info">
              <h1>{resumeData.name}</h1>
              <h3>{resumeData.title}</h3>
            </div>
            <div className="contact-grid">
              <a href={`mailto:${resumeData.contact.email}`} className="contact-item">
                <FaEnvelope /> {resumeData.contact.email}
              </a>
              <a href={`tel:${resumeData.contact.phone}`} className="contact-item">
                <FaPhone /> {resumeData.contact.phone}
              </a>
              <div className="contact-item">
                <FaMapMarkerAlt /> {resumeData.contact.location}
              </div>
              <div className="social-links">
                <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={resumeData.contact.github} target="_blank" rel="noreferrer"><FaGithub /></a>
              </div>
            </div>
          </header>

          <div className="resume-content">
            {/* Left Column */}
            <div className="resume-main">
              <section className="resume-section">
                <h2 className="section-title">Summary</h2>
                <p>{resumeData.summary}</p>
              </section>

              <section className="resume-section">
                <h2 className="section-title">Experience</h2>
                <div className="experience-list">
                  {resumeData.experience.map((exp, i) => (
                    <div key={i} className="exp-item">
                      <div className="exp-header">
                        <h4>{exp.role}</h4>
                        <span>{exp.period}</span>
                      </div>
                      <h5>{exp.company}</h5>
                      <p>{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column */}
            <aside className="resume-sidebar">
              <section className="resume-section">
                <h2 className="section-title">Skills</h2>
                <div className="skills-tags">
                  {resumeData.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </section>

              <section className="resume-section">
                <h2 className="section-title">Education</h2>
                <div className="edu-list">
                  {resumeData.education.map((edu, i) => (
                    <div key={i} className="edu-item">
                      <h4>{edu.degree}</h4>
                      <p>{edu.school}</p>
                      <span>{edu.year}</span>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>

          <div className="resume-preview-section">
            <h2 className="section-title">PDF Preview</h2>
            <div className="pdf-container">
              <iframe
                src={`${resumePdf}#toolbar=0&view=FitH`}
                title="Resume Preview"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

