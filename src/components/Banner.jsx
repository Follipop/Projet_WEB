// src/components/Banner.jsx
import React from "react";
import "./Banner.css";

function Banner({ user, setCurrentPage, onShowCategories }) {
  return (
    <div className="banner">
      <div className="banner-logo">
        <img src="/assets/logo.png" alt="Logo" />
      </div>
      <div className="banner-categories">
        <button className="category" onClick={() => setCurrentPage("home")}>
          Home
        </button>
        <button className="category" onClick={() => setCurrentPage("profile")}>
          Profile
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
            <button className="category" onClick={() => setCurrentPage("privateMessages")}>
              Private Messages
            </button>
          </>
        )}

       
      </div>
    </div>
  );
}

export default Banner;
