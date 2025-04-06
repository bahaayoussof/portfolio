import React, { useContext } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { ThemeContext } from "../context/theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="app__theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </div>
  );
};

export default ThemeToggle;
