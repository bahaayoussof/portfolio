import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="app__theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </div>
  );
};

export default ThemeToggle;
