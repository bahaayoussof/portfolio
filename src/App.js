import React from "react";

import { Toaster } from "react-hot-toast";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
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
        <Skills />
        <Testimonial />
        <Footer />
        <Toaster />
      </div>
      <ToggleTheme />
    </ThemeProvider>
  );
};

export default App;
