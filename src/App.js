import React, { useEffect, useState } from "react";
import Backdrop from "./components/Backdrop";
import Boot from "./components/Boot";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";
import "./styles/global.css";

function App() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 1300);
    return () => clearTimeout(timer);
  }, []);

  useReveal();

  return (
    <>
      <Boot done={booted} />
      <Backdrop />
      <div className="shell">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
