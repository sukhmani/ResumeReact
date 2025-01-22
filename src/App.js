import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Resume from './Resume';
import Hobbies from './Hobbies';
import './Resume.css'; // 

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
      <div id="hobbies">
        <Hobbies />
      </div>
    </div>
  );
}

export default App;

