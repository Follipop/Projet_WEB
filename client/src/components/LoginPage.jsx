import React, { useState } from 'react';
import AuthForm from './AuthForm';
import AuthService from '../services/AuthService';
import '../styles/LoginPage.css';

const LoginPage = ({ setIsLoggedIn, setCurrentUser, setCurrentPage }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleAuth = async (formData) => {
    try {
      let response;
      if (isLogin) {
        response = await AuthService.login(formData.email, formData.password);
      } else {
        response = await AuthService.register(
          formData.username,
          formData.email,
          formData.password,
          formData.profilePicture
        );
      }
      
      setIsLoggedIn(true);
      setCurrentUser(response.user);
      setCurrentPage('home');
    } catch (err) {
      setError(err.message || 'Authentication failed');
    }
  };

  return (
    <div className="login-page">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {error && <div className="error-message">{error}</div>}
      <AuthForm 
        isLogin={isLogin} 
        onSubmit={handleAuth} 
      />
      <button 
        onClick={() => setIsLogin(!isLogin)}
        className="toggle-auth"
      >
        {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default LoginPage;