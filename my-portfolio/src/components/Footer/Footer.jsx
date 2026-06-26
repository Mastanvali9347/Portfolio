import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Mastanvali9347",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/patan-mastan",
    },
    {
      icon: FaInstagram,
      href: "#",
    },
    {
      icon: Mail,
      href: "mailto:patanmastan455@gmail.com",
    },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black py-20 px-6 overflow-hidden">
      <div className="container mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-yellow-500/30">
                PM
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Patan Mastanvali
                </h3>

                <p className="text-yellow-400 text-xs uppercase tracking-[4px]">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="max-w-md text-white/50 leading-relaxed">
              Turning ideas into powerful digital experiences.
              Building modern web applications with React,
              JavaScript, Python, AI and cloud technologies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/70 mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-white/40">
              <li>
                <a
                  href="#home"
                  className="hover:text-yellow-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-yellow-400 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-yellow-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/70 mb-6">
              Connect
            </h4>

            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">

          <p>
            © {year} PATAN MASTANVALI. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            Built with
            <Heart
              size={14}
              className="text-red-500 fill-red-500"
            />
            Passion
          </div>

          <p className="font-mono">
            v2.0.0
          </p>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
    </footer>
  );
}