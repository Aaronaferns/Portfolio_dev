import { useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "../ThemeContext";

function Navigation() {
  const { isBright } = useTheme();

  const linkColor = isBright ? "text-gray-900" : "text-white";

  return (
    <ul className="nav-ul flex flex-col sm:flex-row gap-4 sm:gap-6">
      <li className="nav-li">
        <a className={`nav-link ${linkColor} hover:text-lavender`} href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className={`nav-link ${linkColor} hover:text-lavender`} href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className={`nav-link ${linkColor} hover:text-lavender`} href="#projects">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className={`nav-link ${linkColor} hover:text-lavender`} href="#contact">
          Contact
        </a>
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
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#home"
            className={`text-xl font-bold transition-colors ${textColor} hover:text-lavender`}
          >
            Aaron
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex cursor-pointer focus:outline-none ${textColor} hover:text-lavender sm:hidden`}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
