import React, { useState } from 'react';
import Background from './Background/Background.jsx';
import LoginModal from './Login/LoginModal.jsx';
import LoginForm from './Login/LoginForm.jsx';
import MainInterface from './MainInterface/MainInterface.jsx';
import './Background/Background.css';

function IndexApp () {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowLogin = () => {
    setShowLoginForm(true);
  };

  const handleCloseLogin = () => {
    setShowLoginForm(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  return (
    <div className="IndexApp">
      <Background />
      
      {!isLoggedIn && (
        <LoginModal onShowLogin={handleShowLogin} />
      )}
      
      {showLoginForm && (
        <LoginForm 
          onClose={handleCloseLogin} 
          onLogin={handleLogin} 
        />
      )}
      
      {isLoggedIn && (
        <MainInterface />
      )}
    </div>
  );
}

export default IndexApp;
