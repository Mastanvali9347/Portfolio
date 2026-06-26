import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Projects Completed", value: 15, suffix: "+", color: "gold" },
  { label: "Technologies Learned", value: 20, suffix: "+", color: "blue" },
  { label: "Certificates", value: 10, suffix: "+", color: "orange" },
  { label: "Coding Hours", value: 2500, suffix: "+", color: "gold" },
  { label: "GitHub Repos", value: 30, suffix: "+", color: "blue" },
];

const StatCard = ({ label, value, suffix, color, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-10 flex flex-col items-center justify-center text-center group hover:border-gold/30"
    >
      <motion.div
        className={`text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 mb-4`}
      >
        {count}{suffix}
      </motion.div>
      <div className={`text-sm uppercase tracking-widest text-${color} font-medium`}>
        {label}
      </div>

      {/* Background glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${color}/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
    </motion.div>
  );
};

export default function LiveStats() {
  return (
    <section className="py-24 px-6 relative bg-black/40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />
    </section>
  );
}
