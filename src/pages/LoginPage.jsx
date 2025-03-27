// src/pages/LoginPage.jsx
import React, { useState } from "react";
import AuthForm from "../components/AuthForm";

const LoginPage = ({ setIsLoggedIn, setCurrentUser }) => {
  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user); // Définir l'utilisateur connecté
  };

  return (
    <div>
      <h2>Connexion/Inscription</h2>
      <AuthForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;