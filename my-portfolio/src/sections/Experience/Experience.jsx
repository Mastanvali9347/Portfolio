import { motion } from "framer-motion"
import "./Experience.css"

export default function Experience() {
  const experiences = [
    {
      company: "Codsoft",
      role: "Python Developer Intern",
      period: "04/2024 - 06/2024",
      description: [
        "Completed a structured online internship focused on Python development and real-world application building.",
        "Developed multiple mini-projects to strengthen concepts such as object-oriented programming, file handling, and data structures.",
        "Worked on problem-solving tasks and logical challenges to improve coding efficiency and algorithmic thinking.",
        "Implemented backend logic for small-scale applications using Python best practices.",
        "Gained hands-on experience in writing clean, modular, and reusable code.",
        "Improved debugging skills and learned how to analyze and fix runtime errors effectively.",
        "Enhanced understanding of software development workflow, version control basics, and project structuring."
      ]
    }
  ]

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span>{exp.company}</span>
              <p>{exp.period}</p>
            </div>

            <ul className="experience-description">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}