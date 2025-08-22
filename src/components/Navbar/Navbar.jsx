import React, { useState, useContext } from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/theme";
import { HiMenuAlt4, HiX } from "react-icons/hi";

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

  return (
    <nav className="app__navbar" data-theme={theme}>
      <div className="app__navbar-head">
        <h1>Bahaa</h1>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "experience", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
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
        >
          {theme === "light" ? <LuMoon /> : <LuSun />}
        </motion.button>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(!toggle)} />
              <ul>
                {["home", "about", "work", "experience", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(!toggle)}>
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
