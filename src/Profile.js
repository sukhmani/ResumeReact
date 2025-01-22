import React from 'react';
import './Profile.css'

function Profile() {
  const user = {
    name: 'Sukhmani Thukral',
    bio: 'Software Developer from Seattle, WA.',
    //avatar: 'https://via.placeholder.com/150'
  };

  return (
    <div className="profile">
      
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Contact: thukralsukhmani@cityuniversity.edu | (206) 225-8829</p>
    </div>
  );
}

export default Profile;
//<img src={user.avatar} alt="Avatar" />