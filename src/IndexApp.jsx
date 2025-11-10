import React, { useState, useEffect } from 'react';
import Background from './Background/Background.jsx';
import LoginModal from './Login/LoginModal.jsx';
import LoginForm from './Login/LoginForm.jsx';
import MainInterface from './MainInterface/MainInterface.jsx';
import './Background/Background.css';

function IndexApp() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  // Cargar sesión guardada si existe
  useEffect(() => {
    const userData = localStorage.getItem('usuarioActivo');
    if (userData) {
      setUsuarioActivo(JSON.parse(userData));
      setIsLoggedIn(true);
    }
  }, []);

  const handleShowLogin = () => setShowLoginForm(true);
  const handleCloseLogin = () => setShowLoginForm(false);

  const handleLogin = (datosUsuario) => {
    // Guardar datos del usuario
    localStorage.setItem('usuarioActivo', JSON.stringify(datosUsuario));
    setUsuarioActivo(datosUsuario);
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('usuarioActivo');
    setUsuarioActivo(null);
    setIsLoggedIn(false);
    setShowLoginForm(false);
  };

  return (
    <div className="IndexApp">
      {!isLoggedIn && <Background />}

      {!isLoggedIn && !showLoginForm && (
        <LoginModal onShowLogin={handleShowLogin} />
      )}

      {showLoginForm && !isLoggedIn && (
        <LoginForm onClose={handleCloseLogin} onLogin={handleLogin} />
      )}

      {isLoggedIn && (
        <MainInterface onLogout={handleLogout} usuario={usuarioActivo} />
      )}
    </div>
  );
}

export default IndexApp;