      import React from 'react';
import './Login.css';

const LoginForm = ({ onClose, onLogin }) => {
  return (
    <div className="login-box" id="loginBox">
      <span className="cerrar" onClick={onClose}>×</span>
      <h3>Netsolutions Web</h3>
      <form onSubmit={onLogin}>
        <div>
          <label><strong>Usuario:</strong></label><br />
          <input type="text" name="usuario" defaultValue="MCONDEY" />
        </div>
        <div>
          <label><strong>Contraseña:</strong></label><br />
          <input type="password" name="password" defaultValue="••••" />
        </div>
        <button type="submit" className="btn-login">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

