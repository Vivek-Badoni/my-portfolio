// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Blog/>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
