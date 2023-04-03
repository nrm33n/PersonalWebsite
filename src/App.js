import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import MoreProjects from "./components/MoreProjects";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Sidebar from "./components/Sidebar";
import Typewriter from "typewriter-effect";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/*<Navbar />*/}
      <Sidebar />
      <About />
      <Projects />
      <Skills />
      <MoreProjects />
      <Footer />
      {/*<Testimonials />
      <Contact />*/}
    </main>
   
  );
}

