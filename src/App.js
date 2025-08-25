import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components";
import { ThemeProvider } from "./context/theme";

import "./App.scss";
// Lazy load components for better performance
const Header = React.lazy(() => import("./container/Header/Header"));
const About = React.lazy(() => import("./container/About/About"));
const Work = React.lazy(() => import("./container/Work/Work"));
const Experience = React.lazy(() =>
  import("./container/Experience/Experience")
);
const Footer = React.lazy(() => import("./container/Footer/Footer"));

// Loading component
const LoadingFallback = () => (
  <div className="loading">Loading...</div>
);

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Header />
          <About />
          <Work />
          <Experience />
          <Footer />
        </Suspense>
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default App;
