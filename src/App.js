import React from "react";

import { Toaster } from "react-hot-toast";
import { About, Footer, Header, Experience, Work } from "./container";
import { Navbar, ToggleTheme } from "./components";
import "./App.scss";
import { ThemeProvider } from "./context/theme";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Experience />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default App;
