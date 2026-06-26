import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Download, ChevronDown, Mail, Terminal, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const matter =
    "I am a Full Stack Developer & AI Engineer from Andhra Pradesh, India. I build high-performance web apps, intelligent AI systems, and real-time platforms using React, Python, FastAPI & Node.js. Passionate about crafting seamless user experiences, scalable backend architectures, and integrating AI into modern digital products — turning complex ideas into clean, production-ready solutions that make a real impact.";

  return (
    <section id="home" className="hero-section">
      {/* Background Video */}
      <div className="hero-video-container">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-motion-of-white-particles-on-a-black-background-34509-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-grid">
        {/* LEFT: Name and Matter */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 text-[#00f3ff] text-[10px] tracking-[0.3em] font-bold">
            <Terminal size={14} />
            <span>AI_ARCHITECT_v2.0</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">PATAN</span>
            <span className="title-line title-outline">MASTANVALI</span>
          </h1>

          <p className="hero-description">
            {matter}
          </p>
        </motion.div>

        {/* MIDDLE: Visual Gap for Video */}
        <div className="hero-center" />

        {/* RIGHT: Buttons Vertical stack */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <a href="#projects" className="btn-primary group">
            Explore Projects
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a href="/resume.pdf" className="btn-secondary group">
            Source Code (CV)
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>

          <a href="mailto:patanmastan455@gmail.com" className="btn-secondary group">
            Direct Link (Email)
            <Mail size={20} className="group-hover:scale-110 transition-transform" />
          </a>

          <a href="#contact" className="btn-secondary group">
            Initiate Contact
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Socials Bottom Left */}
      <div className="hero-socials">
        {[
          { icon: <FaGithub size={20} />, href: "https://github.com/Mastanvali9347" },
          { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/patan-mastan" },
          { icon: <FaInstagram size={20} />, href: "https://instagram.com" }
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-icon">
            {s.icon}
          </a>
        ))}
      </div>

      {/* Scroll Down Button */}
      <button className="scroll-down-btn" onClick={scrollDown}>
        <span>SCROLL_TO_SYSTEM</span>
        <ChevronDown size={24} className="animate-bounce" />
      </button>
    </section>
  );
}