import React  from 'react';
import './App.css';
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
