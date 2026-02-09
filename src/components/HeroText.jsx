import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { useTheme } from "../ThemeContext";

const HeroText = ({ }) => {
  const { isBright, mainTextColor, secondaryTextColor } = useTheme();
  // Use this boolean to conditionally apply classes or styles



  const words = ["Computer Vision", "Diffusion Models", "Reinforcement Learning", "Scalable AI"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={`absolute left-0 top-0 w-full z-10 mt-40 text-left md:mt-64 rounded-3xl bg-clip-text flex items-start justify-start max-w-7xl px-4`}>
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className={`text-4xl font-medium ${mainTextColor}`}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Aaron
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className={`text-5xl font-medium ${secondaryTextColor}`}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            ML Engineer & Researcher <br /> Specializing in <br /> Advancing
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className={`font-black ${mainTextColor} text-8xl`}
            />
          </motion.div>
          <motion.p
            className={`text-4xl font-medium ${secondaryTextColor}`}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            AI Research to Production
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className={`text-4xl font-medium ${mainTextColor}`}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Aaron
        </motion.p>
        <div>
          <motion.p
            className={`text-4xl font-black ${secondaryTextColor}`}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Advancing
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className={`font-bold ${isBright ? "text-black" : "text-white"} text-7xl`}
              duration={0.1}
            />
          </motion.div>
          <motion.p
            className={`text-4xl font-black ${secondaryTextColor}`}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            to Production
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
