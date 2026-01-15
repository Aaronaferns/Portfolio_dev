import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "../ThemeContext";

const ScrollProgress = () => {
  const { isBright } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 origin-left"
      style={{ scaleX }}
    >
      <div className={`w-full h-full ${
        isBright
          ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
          : 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
      }`} />
    </motion.div>
  );
};

export default ScrollProgress;