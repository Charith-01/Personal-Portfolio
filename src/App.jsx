import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={finishLoading} />}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />

      <main className="app">
        <AnimatedBackground />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
