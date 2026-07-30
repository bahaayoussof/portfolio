import { useState, useRef, useEffect } from "react";
import {
  IconSunFilled,
  IconMoonFilled,
  IconMenu2,
  IconX,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { useTheme } from "../../context/theme";

import "./Navbar.scss";

const NAV_ITEMS = [
  { id: "home", label: "Overview" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Career Journey" },
  { id: "contact", label: "Contact" },
] as const;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const rotateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (rotateTimerRef.current) clearTimeout(rotateTimerRef.current);
    };
  }, []);

  const handleThemeToggle = () => {
    setIsRotating(true);
    toggleTheme();
    if (rotateTimerRef.current) clearTimeout(rotateTimerRef.current);
    rotateTimerRef.current = setTimeout(() => setIsRotating(false), 600);
  };

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
            {NAV_ITEMS.map((item) => (
              <li key={`nav-${item.id}`}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="studio-nav-right">
          <button
            className={`theme-toggle-btn ${isRotating ? "rotating" : ""}`}
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <IconMoonFilled size={18} />
            ) : (
              <IconSunFilled size={18} />
            )}
          </button>

          <a
            href="https://github.com/bahaayoussof"
            target="_blank"
            rel="noopener noreferrer"
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

        {toggle && (
          <div className="mobile-menu-overlay">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={`mobile-${item.id}`}>
                  <a href={`#${item.id}`} onClick={() => setToggle(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
