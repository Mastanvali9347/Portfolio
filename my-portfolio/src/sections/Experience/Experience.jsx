import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Star } from "lucide-react";

const events = [
  {
    year: "2021 - 2025",
    title: "B.Tech Graduation",
    company: "Bharath University",
    description: "Specializing in Electronics and Communication Engineering with a focus on Software Development.",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "2024",
    title: "Full Stack Developer Intern",
    company: "Tech Solution Corp",
    description: "Developed and optimized frontend components using React and integrated REST APIs with Python Flask.",
    icon: Briefcase,
    type: "experience"
  },
  {
    year: "2023 - Present",
    title: "Freelance Developer",
    company: "Various Clients",
    description: "Building custom web applications, automation scripts, and UI/UX designs for international clients.",
    icon: Star,
    type: "experience"
  },
  {
    year: "2024",
    title: "Hackathon Winner",
    company: "Regional Tech Summit",
    description: "Awarded 1st place for developing an AI-driven waste management monitoring system.",
    icon: Award,
    type: "achievement"
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-6 relative" id="experience">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Journey & <span className="text-gradient">Experience</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light">My professional evolution and academic milestones.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-blue/50 to-transparent" />

          <div className="space-y-24">
            {events.map((event, i) => (
              <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex-1"
                >
                  <div className={`glass-card p-6 relative ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="text-gold font-mono text-sm mb-2">{event.year}</div>
                    <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    <div className="text-blue text-sm mb-4">{event.company}</div>
                    <p className="text-white/50 text-sm leading-relaxed font-light">{event.description}</p>
                    
                    {/* Corner Accent */}
                    <div className={`absolute top-0 ${i % 2 === 0 ? "left-0" : "right-0"} w-8 h-8 border-t-2 border-${i % 2 === 0 ? "l" : "r"}-2 border-gold/20`} />
                  </div>
                </motion.div>

                {/* Dot */}
                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="w-12 h-12 rounded-full bg-black border-2 border-gold flex items-center justify-center shadow-[0_0_20px_rgba(244,185,66,0.3)]"
                  >
                    <event.icon className="w-5 h-5 text-gold" />
                  </motion.div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}