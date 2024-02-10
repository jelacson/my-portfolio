import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="text-black-400 bg-white-900 body-font">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
