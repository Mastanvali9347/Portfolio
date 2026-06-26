import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronRight,
  X,
  Sparkles,
  Loader2,
} from "lucide-react";
import { getAIResponse } from "../../utils/ai";
import { FaGithub } from "react-icons/fa";
import projects from "../../data/projects";
import gsap from "gsap";

const categories = ["All", "React", "Python", "AI", "Full Stack"];

const ProjectCard = ({ project, onOpenDetails }) => {
  const cardRef = useRef(null);
  const spotlightRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !spotlightRef.current) return;

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
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(spotlightRef.current, {
      opacity: 0,
      duration: 0.5,
    });

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
    });
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
      className="relative glass-card overflow-hidden group h-full flex flex-col"
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute w-75 h-75 bg-yellow-500/10 blur-[100px] rounded-full opacity-0 z-0"
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex flex-wrap gap-2">
              {project.tech?.slice(0, 3).map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10 text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-white/50 line-clamp-2 mb-6 font-light leading-relaxed">
            {project.description}
          </p>

          <div className="mt-auto flex items-center gap-4">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white transition-all"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>

            <button 
              onClick={() => onOpenDetails(project)}
              className="ml-auto text-xs text-yellow-400 font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              Details
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiInsight, setAiInsight] = useState("");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.tags?.includes(filter)
  );

  const fetchAIInsight = async () => {
    setAiLoading(true);
    const response = await getAIResponse("", selectedProject.id === "mahabharath-ai" ? "mahabharata" : "general");
    setAiInsight(response);
    setAiLoading(false);
  };

  return (
    <section className="py-24 px-6 relative" id="projects">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-yellow-400 text-sm font-mono tracking-widest mb-4"
            >
              PROJECT SHOWCASE
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Engineering{" "}
              <span className="bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Masterpieces
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-xl p-1.5 rounded-full border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === cat
                    ? "bg-yellow-400 text-black font-semibold"
                    : "text-white/50 hover:text-white"
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
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpenDetails={(p) => {
                  setSelectedProject(p);
                  setAiInsight(""); // Reset insight when opening new project
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white z-10 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  </div>

                  <div className="p-8 md:p-12 flex flex-col">
                    <div className="text-yellow-400 text-xs font-mono mb-2 uppercase tracking-widest">
                      {selectedProject.category} Project
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">
                      {selectedProject.title}
                    </h2>

                    <div className="space-y-6 flex-1 overflow-y-auto pr-4 max-h-96 custom-scrollbar">
                      <div>
                        <h4 className="text-sm font-semibold text-white/80 mb-2 uppercase tracking-tighter">Description</h4>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-tighter">Core Features</h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {selectedProject.features?.map((f, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-white/40">
                              <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AI Connection Section */}
                      <div className="p-6 rounded-2xl bg-yellow-400/5 border border-yellow-400/10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 text-yellow-400">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">AI Connection</span>
                          </div>
                        </div>

                        {aiInsight ? (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-sm text-yellow-400/80 italic font-light leading-relaxed"
                          >
                            "{aiInsight}"
                          </motion.div>
                        ) : (
                          <button
                            onClick={fetchAIInsight}
                            disabled={aiLoading}
                            className="w-full py-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-yellow-400/20 transition-all disabled:opacity-50"
                          >
                            {aiLoading ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              "Fetch AI Insights"
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3 rounded-xl bg-yellow-400 text-black font-bold text-center hover:scale-[1.02] active:scale-95 transition-all"
                      >
                        Launch App
                      </a>
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white transition-all"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}