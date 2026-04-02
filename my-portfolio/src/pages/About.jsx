import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"
import "./About.css"

export default function About() {

    const [filter, setFilter] = useState("ALL")

    const skills = [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "Backend" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" }
    ]

    const filteredSkills = filter === "ALL" ? skills : skills.filter(s => s.category === filter)

    const education = [
        {
            year: "2021 - 2025",
            title: "B.Tech, Electronics and Communication Engineering",
            place: "Bharath Institute of Higher Education and Research, Chennai"
        },
        {
            year: "2019 - 2021",
            title: "Intermediate (MPC)",
            place: "Royal Junior College, Martur"
        },
        {
            year: "2018 - 2019",
            title: "Secondary School",
            place: "Sri Srinivasa High School, Martur"
        }
    ]

    return (

        <section className="about-page" id="about">
            <div className="about-container">

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}

                >

                    <h2 className="section-title">About Me</h2>

                    <h4 className="subtitle">
                        Full Stack Python Developer | Problem Solver
                    </h4>

                    <p>
                        I'm a passionate Full Stack Python Developer with expertise in Django, Flask, React, Node.js,
                        and SQL, dedicated to crafting scalable and user-centered digital experiences.
                        My approach combines technical proficiency with creative problem solving.
                    </p>

                    <p>
                        I thrive on solving real-world problems through innovative web solutions.
                        Whether it's optimizing performance or integrating cutting-edge technologies,
                        I continuously aim to build impactful products.
                    </p>

                </motion.div>

                <div className="skills-section">

                    <h3 className="section-subtitle">My Skills</h3>

                    <div className="skills-filter">
                        {["ALL", "Frontend", "Backend", "Database"].map(cat => (
                            <button
                                key={cat}
                                className={filter === cat ? "active" : ""}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        layout
                        className="skills-grid"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    layout
                                    key={skill.name}
                                    className="skill-card"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img src={skill.logo} alt={skill.name} />
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                </div>

                <div className="education-section">

                    <h3 className="section-subtitle">Education</h3>

                    <div className="timeline">

                        {education.map((edu, index) => (
                            <div
                                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                                key={index}
                            >
                                <motion.div
                                    className="timeline-icon"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <FaGraduationCap />
                                </motion.div>

                                <motion.div
                                    className="timeline-card"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ 
                                        y: -10, 
                                        scale: 1.03,
                                        transition: { type: "spring", stiffness: 400, damping: 10 }
                                    }}
                                    transition={{ duration: 0.7, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h5>{edu.year}</h5>
                                    <h4>{edu.title}</h4>
                                    <p>{edu.place}</p>
                                </motion.div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>

    )
}
