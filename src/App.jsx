// src/App.jsx
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateMessagesPage from "./pages/PrivateMessagesPage";
import Navbar from "./components/Navbar";
import { forumData } from "./data";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // État pour la catégorie sélectionnée
  const [selectedTopicId, setSelectedTopicId] = useState(null); // État pour le sujet sélectionné

  // Réinitialiser les états pour revenir à la liste des catégories
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
            currentUser={currentUser}
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
            selectedTopicId={selectedTopicId}
            setSelectedTopicId={setSelectedTopicId}
            onAddComment={(topicId, newComment) => {
              const updatedData = { ...forumData };
              updatedData.categories.forEach((category) => {
                const topic = category.topics.find((t) => t.id === topicId);
                if (topic) topic.comments.push(newComment);
              });
              setForumData(updatedData);
            }}
            onDeleteComment={(topicId, commentId) => {
              const updatedData = { ...forumData };
              updatedData.categories.forEach((category) => {
                const topic = category.topics.find((t) => t.id === topicId);
                if (topic) {
                  topic.comments = topic.comments.filter((comment) => comment.id !== commentId);
                }
              });
              setForumData(updatedData);
            }}
          />
        );
      case "login":
        return <LoginPage setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />;
      case "profile":
        return <ProfilePage currentUser={currentUser} />;
      case "privateMessages":
        return <PrivateMessagesPage currentUser={currentUser} />;
      default:
        return <HomePage forumData={forumData} currentUser={currentUser} />;
    }
  };

  return (
    <div>
      {/* Navbar avec gestion du bouton Catégories */}
      <Navbar
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onShowCategories={handleShowCategories} // Passer la fonction pour gérer le clic sur "Catégories"
      />
      {renderPage()}
    </div>
  );
};

export default App;