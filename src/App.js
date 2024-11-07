import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import ScrollToTop from './components/ScrollToTop.js';

function App() {
  return (
  <>
  <NavBar/>
  <Home/>
  <About/>
  <Projects/>
  <Skills/>
  <Contact/>
  <ScrollToTop />
  </>
  );
}

export default App;
