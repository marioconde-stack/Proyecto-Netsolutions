import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MainInterface.css';

const MainInterface = ({ onLogout, username, warehouse }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  // Valores por defecto
  const displayUsername = username || 'Invitado';
  const displayWarehouse = warehouse || 'BOGOTÁ';

  // Al hacer clic en “Cerrar sesión”
  const handleLogoutClick = () => {
    setShowConfirm(true);
  };

  // Confirmar cierre de sesión
  const confirmLogout = () => {
    setShowConfirm(false);
    onLogout();
  };

  // Cancelar cierre de sesión
  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <div className="main-interface" id="sistema">
      <div className="topbar">
        <strong>Usuario:</strong> {displayUsername} &nbsp; | &nbsp;
        <strong>Bodega:</strong> {displayWarehouse}
        &nbsp; | &nbsp;
        <button
          onClick={handleLogoutClick}
          style={{
            backgroundColor: '#2642ab',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🔒 Cerrar sesión
        </button>
      </div>

      <Sidebar />

      <div className="content">
        <h1>Bienvenido a Netsolutions Web, {displayUsername}!</h1>
        <p>Seleccione una opción del menú para comenzar.</p>
      </div>

      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <h3>¿Desea cerrar sesión?</h3>
            <div className="confirm-buttons">
              <button onClick={confirmLogout} className="btn-si">Sí</button>
              <button onClick={cancelLogout} className="btn-no">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainInterface;