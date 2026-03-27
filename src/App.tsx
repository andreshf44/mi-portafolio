import './App.css'
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Stack } from "./components/Stack";

function App() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-5 -z-10"></div>
        <Hero />
      </section>
      <Projects />
      <Stack />
      <Footer />
    </>
  );
}

export default App;
