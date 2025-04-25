// src/components/Header.jsx
import React from "react";
import "./Header.css";

function Header({ user, setCurrentPage, onShowCategories }) {
  return (
    <div className="header">
      <div className="head">
        <img className="logo" src="/assets/logo.png" alt="Logo" />
        <h1 className="nomWeb">Forum de Xinyu et Warsamé</h1>
      </div>
      <nav className="navbar">
        <button className="category" onClick={() => setCurrentPage("home")}>
          Home
        </button>
        <button className="category" onClick={onShowCategories}>
          Categories
        </button>
        <button className="category" onClick={() => setCurrentPage("trends")}>
          Tendances
        </button>

        {!user.isLoggedIn ? (
          <>
            <button className="category" onClick={() => setCurrentPage("login")}>
              Signin/Login
            </button>
          </>
        ) : (
          <>
            <button className="category" onClick={() => setCurrentPage("profile")}>
              Profile
            </button>
            <button className="category" onClick={() => setCurrentPage("privateMessages")}>
              Private Messages
            </button>
          </>
        )}

       
      </nav>
    </div>
  );
}

export default Header;
