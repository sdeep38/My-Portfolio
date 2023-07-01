import './App.css';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import HamburgerMenu from './components/HamburgerMenu';
import { useState } from 'react';
import Skills from './pages/Skills';
import Education from './pages/Education';

function App() {
  return (
    <div className="App">
      <HamburgerMenu />
      <Navbar showTooltip = {true} addClass={''}/>
      <LeftSidebar />
      <main className='wrapper'>
        <LeftSidebar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
