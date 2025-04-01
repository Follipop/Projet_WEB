// src/App.jsx
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateMessagesPage from "./pages/PrivateMessagesPage";
import Banner from "./components/Banner"; 
import { forumData } from "./data";

const App = () => {
  const [user, setUser] = useState({ isLoggedIn: false, currentUser: null });
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");

  const handleShowCategories = () => {
    setSelectedCategoryId(null);
    setSelectedTopicId(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            forumData={forumData}
            currentUser={user.currentUser}
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
            selectedTopicId={selectedTopicId}
            setSelectedTopicId={setSelectedTopicId}
          />
        );
      case "login":
        return <LoginPage setUser={setUser} />;
      case "profile":
        return <ProfilePage currentUser={user.currentUser} />;
      case "privateMessages":
        return <PrivateMessagesPage currentUser={user.currentUser} />;
      default:
        return <HomePage forumData={forumData} currentUser={user.currentUser} />;
    }
  };

  return (
    <div>
      <Banner user={user} setCurrentPage={setCurrentPage} onShowCategories={handleShowCategories} />
      {renderPage()}
    </div>
  );
};

export default App;
