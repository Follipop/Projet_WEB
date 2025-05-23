import React, { useState } from 'react';

const Profile = ({ user, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    profilePicture: user.profilePicture || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await onUpdate(formData);
    if (success) {
      setEditMode(false);
    }
  };

  return (
    <div className="profile">
      {editMode ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Profile Picture URL</label>
            <input
              type="url"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="profile-view">
          <div className="profile-header">
            <img 
              src={user.profilePicture || '/default-avatar.png'} 
              alt={user.username}
              className="profile-avatar"
            />
            <h3>{user.username}</h3>
          </div>
          
          <div className="profile-details">
            <p><strong>Email:</strong> {user.email}</p>
            <p> <strong>Member since:</strong> {new Date(user.joinedDate).toLocaleDateString()}</p>
          </div>
              <button 
            onClick={() => setEditMode(true)}
            className="edit-profile-btn"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;