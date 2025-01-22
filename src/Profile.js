import React from 'react';
import './Profile.css';

function Profile() {
  const user = {
    name: 'Sukhmani Thukral',
    bio: 'Software Developer from Seattle, WA.',
    linkedin: 'https://www.linkedin.com/in/sukhmani-thukral/',
    contact: 'thukralsukhmani@cityuniversity.edu',
    phone: '(206) 225-8829',
    avatar: 'https://github.com/sukhmani/ResumeReact/raw/main/Screenshot%202025-01-14%20114954.png' // Use the raw URL of the image
  };

  return (
    <div className="profile">
      <img src={user.avatar} alt="Avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Email: 
        <a href={`mailto:${user.contact}`}>{user.contact}</a>
      </p>
      <p>Phone: 
        <a href={`tel:+1${user.phone.replace(/\D/g, '')}`}>{user.phone}</a>
      </p>
      <p>LinkedIn: 
        <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
          {user.linkedin}
        </a>
      </p>
    </div>
  );
}

export default Profile;
