import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Resume from './Resume';
import Hobbies from './Hobbies';
import Projects from './Projects';
import './Resume.css'; // 
import Project from './Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="profile">
        <Profile />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="hobbies">
        <Hobbies />
      </div>
      
    </div>
  );
}

export default App;

