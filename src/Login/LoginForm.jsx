import React, { useState } from 'react';
import './Login.css';

const LoginForm = ({ onClose, onLoginSuccess }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que los campos no estén vacíos
    if (usuario.trim() && password.trim()) {
      console.log('Intentando hacer login con:', usuario);
      // Llamar a la función de éxito con el usuario
      onLoginSuccess(usuario);
    } else {
      alert('Por favor complete ambos campos');
    }
  };

  return (
    <div className="login-box" id="loginBox">
      <span className="cerrar" onClick={onClose}>×</span>
      <h3>Netsolutions Web</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label><strong>Usuario:</strong></label><br />
          <input 
            type="text" 
            name="usuario" 
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingrese su usuario" 
            required 
          />
        </div>
        <div>
          <label><strong>Contraseña:</strong></label><br />
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña" 
            required 
          />
        </div>
        <button type="submit" className="btn-login">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;