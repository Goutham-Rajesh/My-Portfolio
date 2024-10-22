import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Project';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>My Portfolio</h1>
       <About/>
       <Contact/>
       <Projects/>
       <Skill/>
      </header>
    </div>
  );
}

export default App;
