import React from 'react';
import './Hobbies.css'; 

function Hobbies() {
  const hobbies = ['Coding', 'Hiking', 'Reading', 'Traveling'];

  return (
    <div className="hobbies">
      <h3>Hobbies and Interests:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;