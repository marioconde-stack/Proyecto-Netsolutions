import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MainInterface.css';

const MainInterface = ({ onLogout, username, warehouse }) => {
  // Asegurarnos de que siempre haya un valor
  const displayUsername = username && username !== 'Invitado' ? username : 'Invitado';
  const displayWarehouse = warehouse || 'BOGOTÁ';

  return (
    <div className="main-interface" id="sistema">
      <div className="topbar">
        <strong>Usuario:</strong> {displayUsername} &nbsp; | &nbsp; 
        <strong>Bodega:</strong> {displayWarehouse}
        &nbsp; | &nbsp;
        <button
          onClick={onLogout}
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
    </div>
  );
};

export default MainInterface;

