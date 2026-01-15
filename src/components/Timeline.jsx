"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../ThemeContext"; // import your ThemeProvider hook

export const Timeline = ({ data }) => {
  const { isBright, mainTextColor, secondaryTextColor } = useTheme(); // access colors
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className={`text-heading ${mainTextColor}`}>My Work Experience</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div key={index} className={`flex justify-start min-h-[50vh] ml-12 md:ml-20 p-10 mt-10 md:mt-20 md:gap-10 rounded-lg p-4 mb-4 ${
            index % 4 === 0
              ? 'grid-default-color'
              : index % 4 === 1
              ? 'grid-special-color'
              : index % 4 === 2
              ? 'grid-black-color'
              : 'grid-teal-color'
          }`}>
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[6rem] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full border-neutral-700 bg-neutral-800" />
              </div>
              <div
                className={`flex-col hidden gap-2 text-xl font-bold md:flex  md:text-3xl text-inherit`}
              >
                <h3>{item.date}</h3>
                <h3 className={`text-4xl text-inherit`}>{item.title}</h3>
                <h3 className="text-3xl">{item.job}</h3>
              </div>
            </div>

            <div className="relative w-full pr-4 md:pl-4 flex flex-col items-center justify-center">
              <div className={`block mb-6 text-2xl font-bold text-center md:hidden text-inherit `}>
                <h3>{item.date}</h3>
                <h3 className={`text-4xl text-inherit`}>{item.title}</h3>
                <h3>{item.job}</h3>
              </div>
              <div className="max-w-2xl text-center">
                {item.contents.map((content, idx) => (
                  <motion.p
                    key={idx}
                    className={`mb-4 text-lg leading-relaxed p-4 rounded-xl cursor-pointer transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:text-2xl font-semibold text-inherit bg-opacity-10 hover:bg-opacity-20`}
                    whileHover={{
                      y: -12,
                      rotateX: 8,
                      scale: 1.2
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 700,
                      damping: 25,
                      mass: 0.6
                    }}
                  >
                    {content}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
