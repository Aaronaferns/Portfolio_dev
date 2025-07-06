import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = ({ isBright }) => {
  // Use this boolean to conditionally apply classes or styles

  // Example: text color classes
  const mainTextColor = isBright ? "text-gray-900" : "text-white";
  const secondaryTextColor = isBright ? "text-gray-700" : "text-neutral-300";

  const words = ["Hi-Perf", "Secure", "SOTA", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={`z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text`}>
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
            An ML Engineer <br /> And Developer <br /> Dedicated to bring 
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className={`font-black ${isBright ? "text-black" : "text-white"} text-8xl`}
            />
          </motion.div>
          <motion.p
            className={`text-4xl font-medium ${secondaryTextColor}`}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            AI to the Real-World
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
            Building
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
            ML Solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
