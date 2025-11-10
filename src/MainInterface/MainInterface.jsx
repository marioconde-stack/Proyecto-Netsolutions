      import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MainInterface.css';

const MainInterface = ({ onLogout }) => {
  return (
    <div className="main-interface" id="sistema">
      <div className="topbar">
        <strong>Usuario:</strong> MCONDEY &nbsp; | &nbsp; <strong>Bodega:</strong> BOGOTÁ
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
        <h1>Bienvenido a Netsolutions Web</h1>
        <p>Seleccione una opción del menú para comenzar.</p>
      </div>
    </div>
  );
};

export default MainInterface;

