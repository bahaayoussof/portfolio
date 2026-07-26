import { useState, useContext } from "react";
import {
  IconSunFilled,
  IconMoonFilled,
  IconMenu2,
  IconX,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../context/theme";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setIsRotating(true);
    toggleTheme();
    setTimeout(() => setIsRotating(false), 600);
  };

  const navigationItems = [
    { id: "home", label: "Overview" },
    { id: "work", label: "Projects" },
    { id: "experience", label: "Career Journey" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="studio-nav-header">
      <nav className="studio-nav" aria-label="Main navigation">
        <a href="#home" className="studio-logo" aria-label="Bahaa Youssof Portfolio">
          <span className="logo-name">
            bahaa<span className="logo-dot">.</span>
          </span>
        </a>

        <div className="studio-nav-center">
          <ul className="studio-nav-links">
            {navigationItems.map((item) => (
              <li key={`nav-${item.id}`}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="studio-nav-right">
          <motion.button
            className={`theme-toggle-btn ${isRotating ? "rotating" : ""}`}
            onClick={handleThemeToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <IconMoonFilled size={18} /> : <IconSunFilled size={18} />}
          </motion.button>

          <a
            href="https://github.com/bahaayoussof"
            target="_blank"
            rel="noreferrer"
            className="btn-github-link"
          >
            <span>GitHub</span>
            <IconArrowUpRight size={14} />
          </a>

          <button
            className="mobile-menu-trigger"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle Navigation Menu"
          >
            {toggle ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <ul>
                {navigationItems.map((item) => (
                  <li key={`mobile-${item.id}`}>
                    <a href={`#${item.id}`} onClick={() => setToggle(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mobile-menu-footer">
                <a
                  href="mailto:bahaayoussof@gmail.com"
                  className="mobile-contact-btn"
                  onClick={() => setToggle(false)}
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
