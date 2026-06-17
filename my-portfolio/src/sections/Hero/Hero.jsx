import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail, ChevronRight } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';
import profile from "../../assets/profile.png";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      gsap.to(imageRef.current, {
        rotateY: x * 20,
        rotateX: -y * 20,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(glowRef.current, {
        x: (clientX - left) - 150,
        y: (clientY - top) - 150,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6"
      id="home"
    >
      {/* Searchlight / Glow effect */}
      <div 
        ref={glowRef}
        className="pointer-events-none absolute w-[300px] h-[300px] bg-blue/20 blur-[120px] rounded-full z-0 opacity-50"
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            I'm <span className="text-gradient">Patan Mastanvali</span>
          </h1>

          <div className="h-12 text-2xl md:text-3xl font-display text-white/80 mb-8 font-light">
            <Typewriter
              words={[
                'Full Stack Developer',
                'React Developer',
                'Python Developer',
                'Frontend Engineer',
                'Problem Solver',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <p className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed font-light">
            Building scalable digital experiences through modern web technologies. 
            Focused on creating high-performance applications with cinematic user interfaces.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              Hire Me <ChevronRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Download Resume
            </motion.a>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-white/80 hover:text-white transition-colors"
            >
              View Projects
            </motion.a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { icon: Mail, href: "mailto:patan@example.com", label: "Email" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#F4B942" }}
                className="text-white/40 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative"
        >
          <div 
            ref={imageRef}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto"
            style={{ perspective: "1000px" }}
          >
            {/* Animated Neon Rings */}
            <div className="absolute inset-0 rounded-full border border-gold/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute -inset-4 rounded-full border border-blue/20 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute -inset-8 rounded-full border border-orange/10 animate-[spin_20s_linear_infinite]" />
            
            {/* Glow Orbs */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gold/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue/20 blur-3xl rounded-full animate-pulse" />

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-gold/20 backdrop-blur-sm">
              <img 
                src={profile} 
                alt="Patan Mastanvali" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl text-xs font-semibold text-gold"
            >
              React Specialist
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-8 glass px-4 py-2 rounded-xl text-xs font-semibold text-blue"
            >
              Full Stack
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}