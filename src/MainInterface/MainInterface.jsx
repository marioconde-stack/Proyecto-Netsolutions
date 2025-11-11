import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MainInterface.css';

const MainInterface = ({ onLogout, username, warehouse }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showFactura, setShowFactura] = useState(false);

  const displayUsername = username || 'Invitado';
  const displayWarehouse = warehouse || 'BOGOTÁ';

  // ✅ Manejamos clics del Sidebar
  const handleSubmenuClick = (submenu) => {
    if (submenu === 'Factura') {
      setShowFactura(true);
    }
  };

  const handleLogoutClick = () => {
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    setShowConfirm(false);
    onLogout();
  };

  const cancelLogout = () => {
    setShowConfirm(false);
  };

  const closeFactura = () => {
    setShowFactura(false);
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

      {/* Pasamos la función al Sidebar */}
      <Sidebar onSubmenuClick={handleSubmenuClick} />

      <div className="content">
        <h1>Bienvenido a Netsolutions Web, {displayUsername}!</h1>
        <p>Seleccione una opción del menú para comenzar.</p>
      </div>

      {/* Confirmación de cierre */}
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

      {/* 🧾 Modal de factura */}
      {showFactura && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h2>Factura</h2>
              <button className="close-btn" onClick={closeFactura}>✖</button>
            </div>

            <div className="modal-content">
              <p>Aquí irá la información o formulario de la factura.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainInterface;