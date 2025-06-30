import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Features from "./components/Features";
import TechStack from "./components/TechStack";

import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Banner theme={theme} />
      <Skills />
      <Projects />
      <TechStack />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

