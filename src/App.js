import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Hero from './components/Hero';
import ProjectInfo from './components/ProjectInfo';

function App() {
  return (
    <Router>
      <div className="App bg-[#000] text-white">
        {/* Define Routes */}
        <Routes>
          {/* Define route for the Hero section */}
          <Route path="/" element={<Hero />} />

          {/* Define other routes */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects/:id" element={<ProjectInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
