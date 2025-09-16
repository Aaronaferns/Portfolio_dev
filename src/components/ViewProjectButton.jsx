import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ViewProjectButton = ({ href, name, isGithub = false, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    // Call the onClick prop if provided
    if (onClick) {
      onClick();
    }

    setTimeout(() => {
      setClicked(false);

      if (isGithub) {
        // open in new tab if it's GitHub/external
        window.open(href, "_blank");
      } else {
        // smooth scroll if href is in-page (e.g. #projects)
        if (href.startsWith("#")) {
          const el = document.querySelector(href);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.location.href = href; // normal navigation
        }
      }
    }, 500);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-4 py-2 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {clicked ? (
          <motion.p
            key="clicked"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            Opening Project
          </motion.p>
        ) : (
          <motion.p
            key="view"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {name || "View Projects"}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ViewProjectButton;
