import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import UserService from '../services/UserService';
import '../styles/ProfilePage.css';

const ProfilePage = ({ currentUser }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await UserService.getUserProfile(currentUser._id);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    
    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  const handleUpdateProfile = async (updatedData) => {
    try {
      const updatedUser = await UserService.updateProfile(currentUser._id, updatedData);
      setUserData(updatedUser);
      return true;
    } catch (error) {
      console.error('Error updating profile:', error);
      return false;
    }
  };

  if (!userData) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <Profile 
        user={userData} 
        onUpdate={handleUpdateProfile} 
      />
    </div>
  );
};

export default ProfilePage;