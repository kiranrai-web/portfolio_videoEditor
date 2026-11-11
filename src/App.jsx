import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilmStrip from "./components/FilmStrip";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reels from "./components/Reels";

export default function App() {
  return (
    <div className="bg-base min-h-screen max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <Hero />
      <FilmStrip />
      <Work />
      <Reels />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
