import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub
} from "react-icons/fa"

import "./Contact.css"

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        "service_bkpnwca",
        "template_6vdavdh",
        formData,
        "Nf8vAIkWRjF6ySFDm"
      )
      .then(() => {
        alert("Message sent successfully 🚀")

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      })
      .catch((error) => {
        console.log(error)
        alert("Failed to send message ❌")
      })
  }

  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <h2>Contact Me</h2>
        <p>Let's build something amazing together 🚀</p>
      </div>

      <div className="contact-container">

        {/* CONTACT FORM */}

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="send-btn">
              Send Message 🚀
            </button>

          </form>

        </motion.div>

        {/* CONTACT INFO */}

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h3>Get In Touch</h3>

          <div className="contact-info">

            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>Martur, Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>patanmastan455@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 9347820465</p>
              </div>
            </div>

          </div>

          {/* SOCIAL LINKS */}

          <div className="social-links">

            <a
              href="https://www.linkedin.com/in/patan-mastan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/Mastanvali9347"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github"
            >
              <FaGithub /> GitHub
            </a>



          </div>

        </motion.div>

      </div>

    </section>
  )
}
