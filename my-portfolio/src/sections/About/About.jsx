import { motion } from "framer-motion";
import { User, GraduationCap, Code, Rocket } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-6 relative" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Who <span className="text-gradient">Am I?</span>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                I am a passionate **Full Stack Developer** specializing in React, JavaScript, Python, and FastAPI. 
                Currently a **B.Tech Graduate 2025** from Bharath University, I blend technical precision with creative digital storytelling.
              </p>
              <p className="text-white/40 font-light leading-relaxed">
                My journey in tech began with a curiosity about how digital products change lives. 
                Today, I focus on building scalable, performance-optimized, and visually stunning applications 
                that bridge the gap between complex backend logic and intuitive frontend design.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: GraduationCap, label: "B.Tech 2025", sub: "ECE Graduate" },
                  { icon: Code, label: "Tech Addict", sub: "Python/React" },
                ].map((item, i) => (
                  <div key={i} className="glass p-4 rounded-2xl border-white/5 group hover:border-gold/30 transition-all">
                    <item.icon className="w-6 h-6 text-gold mb-2 group-hover:scale-110 transition-transform" />
                    <div className="font-bold text-sm">{item.label}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { title: "Frontend", color: "blue", desc: "Crafting beautiful interfaces with React, Tailwind, and GSAP." },
              { title: "Backend", color: "gold", desc: "Scalable server logic with Python, FastAPI, and Node.js." },
              { title: "AI/ML", color: "orange", desc: "Integrating intelligent models into modern web apps." },
              { title: "Performance", color: "blue", desc: "Optimizing for speed, accessibility, and SEO." },
            ].map((card, i) => (
              <div 
                key={i} 
                className={`glass-card p-6 border-${card.color}/10 hover:border-${card.color}/40 transition-all ${i % 2 !== 0 ? "mt-8" : ""}`}
              >
                <div className={`w-8 h-8 rounded-lg bg-${card.color}/10 flex items-center justify-center mb-4 text-${card.color}`}>
                  <Rocket className="w-4 h-4" />
                </div>
                <h3 className="font-bold mb-2">{card.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}