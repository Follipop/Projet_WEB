// src/components/AuthForm.jsx
import React, { useState } from "react";

const AuthForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler un utilisateur connecté
    const user = {
      id: 1, // ID unique (à remplacer par une valeur dynamique en production)
      name: formData.name || "Utilisateur Anonyme",
      email: formData.email,
    };
    onLogin(user); // Appeler la fonction de connexion
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <input
          type="text"
          placeholder="Nom"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {!isLogin && (
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, profilePicture: e.target.files[0] })}
        />
      )}
      <button type="submit">{isLogin ? "Se connecter" : "S'inscrire"}</button>
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Créer un compte" : "Se connecter"}
      </button>
    </form>
  );
};

export default AuthForm;