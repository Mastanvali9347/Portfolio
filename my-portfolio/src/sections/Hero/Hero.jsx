import { motion } from "framer-motion"
import { useRef } from "react"
import Button from "../../components/Button/Button"
import SocialLinks from "../../components/SocialLinks/SocialLinks"
import "./Hero.css"
import profile from "../../assets/profile.png"

export default function Hero() {

  const imgRef = useRef(null)

  const handleMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -(y - centerY) / 15
    const rotateY = (x - centerX) / 15

    imgRef.current.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
  }

  const reset = () => {
    imgRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"
  }

  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1>
            Hi, I'm <span>Patan Mastanvali</span>
          </h1>

          <h2 className="hero-role">
            Python Full Stack Developer | React Developer
          </h2>

          <p>
            I build modern, responsive, and performance-driven web applications
            using React, JavaScript and Python. I focus on creating clean user
            interfaces, smooth animations and scalable applications.
          </p>

          <p>
            As an Electronics and Communication Engineering student passionate
            about software development, I combine analytical thinking with
            creative problem solving to build impactful digital products.
          </p>

          <p>
            My goal is to create applications that are visually engaging,
            highly optimized and user focused.
          </p>

          <div className="hero-buttons">

            <Button href="/resume.pdf" target="_blank">
              Download Resume
            </Button>

            <Button variant="secondary" href="#projects">
              View Projects
            </Button>

          </div>

          <SocialLinks type="icons" />

        </motion.div>


        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <img
            ref={imgRef}
            src={profile}
            alt="Patan Mastanvali"
            onMouseMove={handleMove}
            onMouseLeave={reset}
          />

        </motion.div>

      </div>

    </section>
  )
}