import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Navbar, Loader } from "./components";
import { ThemeProvider } from "./context/theme";

import "./App.scss";

// Lazy load section components
const Header = lazy(() => import("./container/Header/Header"));
const Work = lazy(() => import("./container/Work/Work"));
const Experience = lazy(() => import("./container/Experience/Experience"));
const Footer = lazy(() => import("./container/Footer/Footer"));

const App = () => {
  return (
    <ThemeProvider>
      <div className="app bg-grid-pattern">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <main>
            <Header />
            <Suspense fallback={null}>
              <Work />
            </Suspense>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </main>
        </Suspense>
        <Toaster position="bottom-right" />
      </div>
    </ThemeProvider>
  );
};

export default App;
