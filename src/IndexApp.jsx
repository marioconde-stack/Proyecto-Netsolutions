import React, { useState } from 'react';
import Background from './Background/Background.jsx';
import LoginModal from './Login/LoginModal.jsx';
import LoginForm from './Login/LoginForm.jsx';
import MainInterface from './MainInterface/MainInterface.jsx';
import './Background/Background.css';

function IndexApp() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('Invitado');

  const handleShowLogin = () => {
    setShowLoginForm(true);
  };

  const handleCloseLogin = () => {
    setShowLoginForm(false);
  };

  // Nueva función que recibe directamente el usuario
  const handleLoginSuccess = (username) => {
    console.log('Login exitoso para usuario:', username);
    setCurrentUser(username);
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLoginForm(false);
    setCurrentUser('Invitado');
  };

  return (
    <div className="IndexApp">
      <Background />

      {!isLoggedIn && !showLoginForm && (
        <LoginModal onShowLogin={handleShowLogin} />
      )}

      {showLoginForm && !isLoggedIn && (
        <LoginForm 
          onClose={handleCloseLogin} 
          onLoginSuccess={handleLoginSuccess} 
        />
      )}

      {isLoggedIn && (
        <MainInterface 
          onLogout={handleLogout} 
          username={currentUser}
          warehouse="BOGOTÁ"
        />
      )}
    </div>
  );
}

export default IndexApp;