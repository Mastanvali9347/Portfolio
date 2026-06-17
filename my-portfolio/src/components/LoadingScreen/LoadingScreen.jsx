import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl font-bold text-gold mb-8 tracking-tighter"
        >
          PM
        </motion.div>
        
        {/* Particle explosion effect placeholder */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold/20 blur-[80px] rounded-full animate-pulse" />
      </div>

      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gold"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.div 
        className="mt-4 text-gold/50 font-mono text-sm uppercase tracking-widest"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Initializing Systems... {progress}%
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
