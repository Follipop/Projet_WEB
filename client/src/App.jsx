// client/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import AuthService from './services/AuthService';
import Stats from './components/Stats'
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const user = AuthService.getCurrentUser();
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
    }
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage('home');
  };

  return (
    <Router>
      <div className="App">
        <Navbar 
          setCurrentPage={setCurrentPage} 
          isLoggedIn={isLoggedIn} 
          currentUser={currentUser}
          onLogout={handleLogout}
        />
        <MainContent 
          currentPage={currentPage}
          selectedCategoryId={selectedCategoryId}
          selectedTopicId={selectedTopicId}
          currentUser={currentUser}
          setSelectedCategoryId={setSelectedCategoryId}
          setSelectedTopicId={setSelectedTopicId}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentUser={setCurrentUser}
        />
        <Stats/>
      </div>
    </Router>
  );
}

export default App;