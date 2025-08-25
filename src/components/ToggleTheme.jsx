import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { IconMoon, IconSun } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="app__theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <IconMoon /> : <IconSun />}
    </div>
  );
};

export default ThemeToggle;
