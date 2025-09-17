import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../ThemeContext";
import { Menu, X, FileText } from "lucide-react";
import { trackResumeDownload } from "../utils/analytics";
import { Link } from "react-router-dom";

function Navigation({ isMobile, onLinkClick }) {
  const { isBright } = useTheme();
  const linkColor = isBright ? "text-gray-900" : "text-white";
  const baseClasses = `nav-link ${linkColor} transition-all hover:text-lavender hover:drop-shadow-[0_0_8px_#c4b5fd]`;

  return (
    <ul
      className={`flex gap-6 ${
        isMobile ? "flex-col items-center" : "flex-row items-center"
      }`}
    >
      {["home", "about", "projects", "contact"].map((section) => (
        <li key={section}>
          <a
            href={`#${section}`}
            className={baseClasses}
            onClick={isMobile ? onLinkClick : undefined}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        </li>
      ))}
      <li>
        <Link
          to="/resume"
          onClick={(e) => {
            trackResumeDownload(e);
            if (isMobile) onLinkClick?.();
          }}
          className={`${baseClasses} flex items-center gap-2`}
        >
          <FileText className="hidden sm:inline w-4 h-4" />
          Resume
        </Link>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const { isBright } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const textColor = isBright ? "text-gray-900" : "text-white";

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 relative">
          {/* Brand */}
          <a
            href="#home"
            className={`text-xl font-bold transition-colors ${textColor} hover:text-lavender`}
          >
            Aaron
          </a>

          {/* Burger / X Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`sm:hidden p-1 rounded-md hover:bg-white/10 transition-colors relative z-30 ${textColor}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: [1, 1.2, 1] }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: [1, 1.2, 1] }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex justify-center py-4">
              <Navigation isMobile onLinkClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
