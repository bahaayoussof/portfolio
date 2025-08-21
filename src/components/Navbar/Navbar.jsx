import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`app__navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="app__navbar-head">
        <h1>Bahaa</h1>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-right">
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(!toggle)} />
              <ul>
                {[
                  "home",
                  "about",
                  "work",
                  "skills",
                  "contact",
                ].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(!toggle)}>
                      {item}
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
