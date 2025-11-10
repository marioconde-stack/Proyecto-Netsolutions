import React, { useState } from 'react';
import './Login.css';

const LoginForm = ({ onClose, onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación básica de campos vacíos
    if (!usuario.trim() || !password.trim()) {
      setError('⚠️ Por favor ingrese usuario y contraseña.');
      return;
    }

    // Validación simulada (puedes ajustar estos valores)
    const usuarioValido = 'admin';
    const passwordValida = '1234';

    if (usuario !== usuarioValido || password !== passwordValida) {
      setError('❌ Usuario o contraseña incorrectos.');
      return;
    }

    // Si pasa la validación
    setError('');
    const datosUsuario = { usuario, password };
    onLogin(datosUsuario);
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
          />
        </div>

        {/* Mensaje de error */}
        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

        <button type="submit" className="btn-login">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

