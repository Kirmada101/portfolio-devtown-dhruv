import NavBar from "./components/NavBar";
import About from "./components/About";
import "./styles.css";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
