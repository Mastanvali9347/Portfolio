import { motion } from "framer-motion";
import { Mic, GraduationCap, Code2, Rocket, Trophy, Target } from "lucide-react";

const cards = [
  {
    title: "Education",
    icon: GraduationCap,
    content: "B.Tech Graduate 2025 at Bharath University. Strong foundation in ECE and Computer Science.",
    color: "gold"
  },
  {
    title: "Skills",
    icon: Code2,
    content: "Expertise in React, Python, FastAPI, and more. Crafting seamless user experiences.",
    color: "blue"
  },
  {
    title: "Projects",
    icon: Rocket,
    content: "Built Housie Multiplayer, AI DSA Instructor, and MalwareScope Analyzer.",
    color: "orange"
  },
  {
    title: "Achievements",
    icon: Trophy,
    content: "Certified Full Stack Developer. Winner of various hackathons and technical challenges.",
    color: "gold"
  },
  {
    title: "Career Goals",
    icon: Target,
    content: "Aiming to build scalable AI-driven products and contribute to open-source innovation.",
    color: "blue"
  }
];

export default function AIIntro() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="ai-intro">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mb-6 relative"
          >
            <Mic className="w-8 h-8 text-gold animate-pulse" />
            <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping ring-4 ring-gold/10" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            "Hello <span className="text-gradient">Recruiter</span> 👋"
          </motion.h2>
          <p className="text-white/60 text-center max-w-2xl font-light">
            I am your digital guide to Patan's professional journey. Let me introduce his key highlights through this holographic interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 flex flex-col items-start gap-4 hover:border-gold/30 group transition-all"
            >
              <div className={`p-3 rounded-xl bg-${card.color}/10 border border-${card.color}/20 text-${card.color} group-hover:bg-${card.color}/20 transition-colors`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-semibold text-white group-hover:text-gold transition-colors`}>
                {card.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {card.content}
              </p>
              
              {/* Voice Waves */}
              <div className="mt-auto pt-6 w-full flex items-center gap-1">
                {[1, 2, 3, 4, 5, 2, 4, 3, 1].map((h, j) => (
                  <motion.div
                    key={j}
                    animate={{ height: [h * 4, h * 8, h * 4] }}
                    transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                    className={`flex-1 bg-${card.color}/40 rounded-full`}
                    style={{ height: h * 4 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/5 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
