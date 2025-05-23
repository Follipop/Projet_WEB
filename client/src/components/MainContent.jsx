import React from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import PrivateMessagesPage from './PrivateMessagesPage';

const MainContent = ({
  currentPage,
  selectedCategoryId,
  selectedTopicId,
  currentUser,
  setSelectedCategoryId,
  setSelectedTopicId,
  setIsLoggedIn,
  setCurrentUser
}) => {
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            selectedCategoryId={selectedCategoryId}
            selectedTopicId={selectedTopicId}
            currentUser={currentUser}
            setSelectedCategoryId={setSelectedCategoryId}
            setSelectedTopicId={setSelectedTopicId}
          />
        );
      case 'login':
        return (
          <LoginPage 
            setIsLoggedIn={setIsLoggedIn}
            setCurrentUser={setCurrentUser}
            setCurrentPage={() => {}}
          />
        );
      case 'profile':
        return <ProfilePage currentUser={currentUser} />;
      case 'privateMessages':
        return <PrivateMessagesPage currentUser={currentUser} />;
      default:
        return (
          <HomePage 
            selectedCategoryId={selectedCategoryId}
            selectedTopicId={selectedTopicId}
            currentUser={currentUser}
            setSelectedCategoryId={setSelectedCategoryId}
            setSelectedTopicId={setSelectedTopicId}
          />
        );
    }
  };

  return (
    <div className="main-content">
      {renderPage()}
    </div>
  );
};

export default MainContent;