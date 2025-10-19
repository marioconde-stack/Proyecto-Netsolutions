import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MainInterface.css';

const MainInterface = () => {
  return (
    <div className="main-interface" id="sistema">
      <div className="topbar">
        <strong>Usuario:</strong> MCONDEY &nbsp; | &nbsp; <strong>Bodega:</strong> BOGOTÁ
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