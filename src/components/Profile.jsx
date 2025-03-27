import React, { useState } from 'react';

const Profile = ({ setCurrentPage }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    profilePicture: ''
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour mettre à jour le profil
  };

  return (
    <div>
      <h2>Profil</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="file"
          onChange={(e) => setUser({ ...user, profilePicture: e.target.files[0] })}
        />
        <button type="submit">Mettre à jour</button>
      </form>
      <button onClick={() => setCurrentPage('privateMessages')}>Messages Privés</button>
    </div>
  );
};

export default Profile;