import React, { useState, useContext } from "react";
import {
  IconSunFilled,
  IconMoonFilled,
  IconMenu,
  IconXboxX,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
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
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className="app__navbar"
      data-theme={theme}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="app__navbar-head">
        <h1>Bahaa</h1>
      </div>

      <ul className="app__navbar-links">
        {navigationItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item.id}`}>
            <div />
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-right">
        <motion.button
          className={`theme-toggle-btn ${isRotating ? "rotating" : ""}`}
          onClick={handleThemeToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? (
            <IconMoonFilled aria-hidden="true" />
          ) : (
            <IconSunFilled aria-hidden="true" />
          )}
        </motion.button>

        <div className="app__navbar-menu">
          <IconMenu onClick={() => setToggle(!toggle)} />
          {toggle && (
            <motion.div
              id="mobile-menu"
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <IconXboxX onClick={() => setToggle(!toggle)} />
              <ul>
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} onClick={() => setToggle(!toggle)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
