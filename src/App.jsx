import AnimatedBackground from "./components/AnimatedBackground";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="app">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
