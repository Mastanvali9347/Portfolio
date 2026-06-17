import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 700 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 700 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring — spring-lagged */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#F4B942] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ left: springX, top: springY }}
      />
      {/* Inner dot — instant */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#F4B942] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ left: cursorX, top: cursorY }}
      />
    </>
  );
};

export default CustomCursor;
