import React from 'react';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackTop from './components/BackTop';
import Footer from './components/Footer';


function App() {


  AOS.init(
    {easing:"ease-out-back",duration:1200,delay:200}
  );
  
  return (
    
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Projects />
      <Contact/>
  
      <BackTop/>
      <Footer/>
    </div>
  );
}

export default App;
