import React from 'react';
import Profile from '../components/Profile';

const ProfilePage = ({ setCurrentPage }) => {
  return (
    <div>
      <Profile setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default ProfilePage;