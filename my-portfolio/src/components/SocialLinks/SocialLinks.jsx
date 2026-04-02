import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6"
import "./SocialLinks.css"

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Mastanvali9347",
    icon: <FaGithub />,
    color: "#333"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/patan-mastan/",
    icon: <FaLinkedin />,
    color: "#0A66C2"
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaXTwitter />,
    color: "#1DA1F2"
  },
  {
    name: "Email",
    url: "mailto:patanmastan455@gmail.com",
    icon: <FaEnvelope />,
    color: "#EA4335"
  }
]

export default function SocialLinks({ type = "icons" }) {
  if (type === "vertical") {
    return (
      <div className="social-links vertical">
        {socials.map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 8, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ "--clr": item.color }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    )
  }

  if (type === "buttons") {
    return (
      <div className="social-links buttons">
        {socials.map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="social-btn"
            style={{ "--clr": item.color }}
          >
            {item.icon}
            <span>{item.name}</span>
          </motion.a>
        ))}
      </div>
    )
  }

  return (
    <div className="social-links icons">
      {socials.map((item, i) => (
        <motion.a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.25, rotate: 6 }}
          whileTap={{ scale: 0.9 }}
          style={{ "--clr": item.color }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  )
}