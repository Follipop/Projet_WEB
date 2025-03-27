// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ setCurrentPage, isLoggedIn, currentUser, onShowCategories }) => {
  return (
    <nav>
      <button onClick={() => setCurrentPage("home")}>Accueil</button>
      <button onClick={onShowCategories}>Catégories</button> {/* Bouton Catégories */}
      <button onClick={() => setCurrentPage("trends")}>Tendances</button>
      {isLoggedIn ? (
        <button onClick={() => setCurrentPage("profile")}>
          {currentUser?.name || "Profil"}
        </button>
      ) : (
        <button onClick={() => setCurrentPage("login")}>Signin/Login</button>
      )}
    </nav>
  );
};

export default Navbar;