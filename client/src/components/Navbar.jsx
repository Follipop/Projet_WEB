import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../styles/Navbar.css';

const Navbar = ({ setCurrentPage, isLoggedIn, currentUser, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={() => setCurrentPage('home')}>Forum</Link>
      </div>
      
      <SearchBar setCurrentPage={setCurrentPage} />
      
      <div className="navbar-links">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('trending')}>Trending</button>
        
        {isLoggedIn ? (
          <div className="user-section">
            <button onClick={() => setCurrentPage('profile')}>
              <img 
                src={currentUser.profilePicture || '/default-avatar.png'} 
                alt="Profile" 
                className="profile-pic"
              />
            </button>
            <button onClick={() => setCurrentPage('privateMessages')}>
              Messages
            </button>
            <button onClick={onLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => setCurrentPage('login')}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;