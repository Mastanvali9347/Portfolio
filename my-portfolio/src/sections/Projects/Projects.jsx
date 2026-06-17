import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight, LayoutGrid, Code, Brain, Database } from "lucide-react";
import projects from "../../data/projects";
import gsap from "gsap";

const categories = ["All", "React", "Python", "AI", "Full Stack"];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const spotlightRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gsap.to(spotlightRef.current, {
      opacity: 1,
      x: x - 150,
      y: y - 150,
      duration: 0.3,
    });

    const rotateX = (y - rect.height / 2) / 20;
    const rotateY = -(x - rect.width / 2) / 20;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(spotlightRef.current, { opacity: 0, duration: 0.5 });
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 0.5 });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative glass-card overflow-hidden group perspective-1000"
    >
      {/* Spotlight Effect */}
      <div 
        ref={spotlightRef}
        className="pointer-events-none absolute w-[300px] h-[300px] bg-gold/10 blur-[100px] rounded-full opacity-0 z-0"
      />

      <div className="relative z-10">
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((t, i) => (
                <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10 text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
          <p className="text-sm text-white/50 line-clamp-2 mb-6 font-light leading-relaxed">
            {project.description}
          </p>

          <div className="flex items-center gap-4">
            <motion.a
              href={project.link}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-gold hover:bg-gold hover:text-black transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <button className="ml-auto text-xs text-gold font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Details <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => 
    filter === "All" || p.tags.includes(filter)
  );

  return (
    <section className="py-24 px-6 relative" id="projects">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gold text-sm font-mono tracking-widest mb-4"
            >
              PROJECT SHOWCASE
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Engineering <span className="text-gradient">Masterpieces</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 glass p-1.5 rounded-full border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === cat 
                  ? "bg-gold text-black font-semibold shadow-lg shadow-gold/20" 
                  : "text-white/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}