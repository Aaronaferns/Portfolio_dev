// "use client";
// import { useScroll, useTransform, motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// import { useTheme } from "../ThemeContext"; // import your ThemeProvider hook

// export const Timeline = ({ data }) => {
//   const { isBright, mainTextColor, secondaryTextColor } = useTheme(); // access colors
//   const ref = useRef(null);
//   const containerRef = useRef(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div className="c-space section-spacing" ref={containerRef}>
//       <h2 className={`text-heading ${mainTextColor}`}>My Work Experience</h2>
//       <div ref={ref} className="relative pb-20">
//         {data.map((item, index) => (
//           <div key={index} className={`flex justify-start min-h-[50vh] ml-12 md:ml-20 p-10 mt-10 md:mt-20 md:gap-10 rounded-lg p-4 mb-4 ${
//             index % 4 === 0
//               ? 'grid-default-color'
//               : index % 4 === 1
//               ? 'grid-special-color'
//               : index % 4 === 2
//               ? 'grid-black-color'
//               : 'grid-teal-color'
//           }`}>
//             <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              
//               <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[6rem] bg-midnight">
//                 <div className="w-4 h-4 p-2 border rounded-full border-neutral-700 bg-neutral-800" />
//               </div>
//               <div
//                 className={`flex-col hidden gap-2 text-xl font-bold md:flex  md:text-3xl text-inherit`}
//               >
//                 <h3>{item.date}</h3>
//                 <h3 className={`text-4xl text-inherit`}>{item.title}</h3>
//                 <h3 className="text-3xl">{item.job}</h3>
//               </div>
//             </div>

//             <div className="relative w-full pr-4 md:pl-4 flex flex-col items-center justify-center">
//               <div className={`block mb-6 text-2xl font-bold text-center md:hidden text-inherit `}>
//                 <h3>{item.date}</h3>
//                 <h3 className={`text-4xl text-inherit`}>{item.title}</h3>
//                 <h3>{item.job}</h3>
//               </div>
//               <div className="max-w-4xl w-full">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                   {item.contents.map((content, idx) => (
//                     <motion.div
//                       key={idx}
//                       className={`aspect-square p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
//                         idx % 4 === 0
//                           ? 'grid-black-color'
//                           : idx % 4 === 1
//                           ? 'grid-special-color'
//                           : idx % 4 === 2
//                           ? 'grid-teal-color'
//                           : 'grid-light-gray'
//                       } flex flex-col justify-center items-center text-center`}
//                       data-color-scheme={
//                         idx % 4 === 0 ? 'dark' :
//                         idx % 4 === 1 ? 'light' :
//                         idx % 4 === 2 ? 'dark' : 'light'
//                       }
//                       whileHover={{
//                         y: -4,
//                         scale: 1.05
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 400,
//                         damping: 25,
//                         mass: 0.6
//                       }}
//                     >
//                       <p className="text-sm md:text-base leading-relaxed font-medium">
//                         {(() => {
//                           const words = content.split(' ');
//                           const colorScheme = idx % 4 === 0 ? 'dark' : idx % 4 === 1 ? 'light' : idx % 4 === 2 ? 'dark' : 'light';

//                           // Highlight important keywords - ensure each tile has at least one highlight
//                           const highlightWords = ['50%', '90%', '15%', '55%', '100%', '100K+', '99.9%', '12%', '3%', 'PyTorch', 'MLflow', 'SAC', 'HER', 'Java', 'Spring Boot', 'HPC', 'CUDA', 'MPI', 'Slurm'];
//                           const foundHighlights = words.filter(word =>
//                             highlightWords.some(hw => word.includes(hw) || word === hw.replace('%', ''))
//                           );

//                           // If no highlights found, highlight the first metric/technical term
//                           let highlightIndices = [];
//                           if (foundHighlights.length > 0) {
//                             highlightIndices = words.map((word, i) =>
//                               highlightWords.some(hw => word.includes(hw) || word === hw.replace('%', '')) ? i : -1
//                             ).filter(i => i !== -1);
//                           } else {
//                             // Find first metric or technical term to highlight
//                             const fallbackWords = ['boosted', 'reduced', 'achieved', 'implemented', 'developed', 'optimized'];
//                             const fallbackIdx = words.findIndex(word =>
//                               fallbackWords.some(fw => word.toLowerCase().includes(fw))
//                             );
//                             if (fallbackIdx !== -1) {
//                               highlightIndices = [fallbackIdx];
//                             } else {
//                               // Last resort: highlight first number/percentage
//                               const numberIdx = words.findIndex(word => /\d+%?|\d+K\+/.test(word));
//                               highlightIndices = numberIdx !== -1 ? [numberIdx] : [0];
//                             }
//                           }

//                           return words.map((word, wordIdx) => {
//                             const shouldHighlight = highlightIndices.includes(wordIdx);

//                             return shouldHighlight ? (
//                               <span
//                                 key={wordIdx}
//                                 className={`text-base md:text-lg font-bold ${
//                                   colorScheme === 'dark'
//                                     ? 'text-gray-300'
//                                     : 'text-gray-700'
//                                 }`}
//                               >
//                                 {word}{' '}
//                               </span>
//                             ) : (
//                               <span key={wordIdx}>{word}{' '}</span>
//                             );
//                           });
//                         })()}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div
//           style={{ height: height + "px" }}
//           className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../ThemeContext";

export const Timeline = ({ data }) => {
  const { mainTextColor } = useTheme();
  const containerRef = useRef(null);
  const ghostRef = useRef(null); // Used to measure actual content height
  const [contentHeight, setContentHeight] = useState(0);

  // Robust height tracking
  useEffect(() => {
    const updateHeight = () => {
      if (ghostRef.current) {
        setContentHeight(ghostRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  // Smooth out the line progress
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heightTransform = useTransform(scaleY, [0, 1], [0, contentHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-16 ${mainTextColor}`}>
          Technical Experience
        </h2>
      </div>

      <div ref={ghostRef} className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-32 last:mb-0 relative">
            
            {/* Left Side: Role Info */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="sticky top-40 z-10 pr-8">
                {/* Mobile Dot */}
                <div className="md:hidden absolute -left-[25px] top-2 w-4 h-4 rounded-full bg-[#748D92] shadow-[0_0_10px_#748D92]" />

                <span className="text-xs font-mono text-[#748D92] uppercase tracking-widest block mb-2">
                  {item.date}
                </span>
                <h3 className="text-2xl font-black text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-neutral-400 mt-1 italic">{item.job}</p>
              </div>
            </div>

            {/* Right Side: Cards */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {item.highlights.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`p-6 rounded-2xl border backdrop-blur-md flex flex-col justify-between ${
                    index % 4 === 0
                      ? 'grid-default-color'
                      : index % 4 === 1
                      ? 'grid-special-color'
                      : index % 4 === 2
                      ? 'grid-black-color'
                      : 'grid-teal-color'
                  }`}
                >
                  <div>
                    <span className={`text-2xl font-semibold block mb-3 ${
                      index % 4 === 1 ? 'text-[#212A31]/80' : 'text-white/80'
                    }`}>
                      {card.metric}
                    </span>
                    <p className={`text-sm leading-relaxed ${
                      index % 4 === 1 ? 'text-[#212A31]' : 'text-neutral-300'
                    }`}>
                      {card.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {card.tags?.map((tag) => (
                      <span key={tag} className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${
                        index % 4 === 1
                          ? 'bg-[#212A31]/20 border border-[#212A31]/30 text-[#212A31]'
                          : 'bg-white/10 border border-white/20 text-white'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* The Vertical Line */}
        <div className="absolute left-0 md:left-[1px] top-0 w-[2px] h-full bg-neutral-800 pointer-events-none">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform
            }}
            className="absolute top-0 w-full bg-gradient-to-b from-[#748D92] via-[#748D92]/50 to-transparent shadow-[0_0_15px_#748D92]"
          />
          {/* Desktop Indicator Dot */}
          <motion.div
            style={{ top: heightTransform, opacity: opacityTransform }}
            className="hidden md:block absolute -left-[7px] w-4 h-4 rounded-full bg-white border-4 border-[#748D92] shadow-[0_0_20px_white]"
          />
        </div>
      </div>
    </div>
  );
};