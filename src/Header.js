import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      
      <nav>
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
