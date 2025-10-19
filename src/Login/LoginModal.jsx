import React from 'react';
import './Login.css';
import wmsLogo from '../Imagenes1/logo2.jpeg';
import conectaLogo from '../Imagenes1/logo3.jpeg';

const LoginModal = ({ onShowLogin }) => {
  return (
    <div className="modal" id="inicio">
      <h2>Iniciar Sesión Netsolutions</h2>
      <button className="boton" onClick={onShowLogin}>
        Click aquí
      </button>
      <div className="logos">
        <img src={wmsLogo} alt="WMS Logo" />
        <img src={conectaLogo} alt="Conecta Logo" />
      </div>
    </div>
  );
};

export default LoginModal;