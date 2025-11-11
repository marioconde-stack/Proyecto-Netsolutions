import React, { useState } from 'react';
import MenuItem from './MenuItem';
import FacturaModal from './FacturaModal';
import './Sidebar.css';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showFacturaModal, setShowFacturaModal] = useState(false);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  // Función para abrir el modal cuando se hace clic en "Factura"
  const handleSubmenuClick = (subItem) => {
    if (subItem === 'Factura') {
      setShowFacturaModal(true);
    }
  };

  const menuItems = [
    { name: 'INICIO', icon: '🏠' },
    { 
      name: 'Entradas', 
      icon: '📥',
      submenu: ['Factura', 'Docum. Transp.', 'Fecha']
    },
    { name: 'Referencias', icon: '🧾', submenu: ['Ubicacion', 'Estado'] },
    { name: 'Separaciones', icon: '🔄', submenu: ['Picking', 'Packing'] },
    { name: 'Salidas', icon: '🚚', submenu: ['Pedido', 'Vehiculo'] },
    { name: 'Transferencias', icon: '🔁', submenu: ['Ubicación', 'Referencia'] },
    { name: 'Movimientos Estiba', icon: '📦', submenu: ['Estiba', 'Fecha'] },
    { name: 'Consultas', icon: '🔍' },
    { name: 'Inventarios Cíclicos', icon: '📋', submenu: ['Conteo', 'Cliente'] },
    { name: 'Opciones', icon: '⚙️', submenu: ['Cambio Contraseña', 'Prueba'] },
    { name: 'Manual Usuario', icon: '📘', submenu: ['Ver Presentación', 'Fotos'] }
  ];

  return (
    <div className="sidebar">
      <h2>NETSOLUTIONS WEB</h2>
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            isOpen={openMenu === item.name}
            onToggle={() => toggleMenu(item.name)}
            onSubmenuClick={handleSubmenuClick}
          />
        ))}
      </ul>

      {showFacturaModal && <FacturaModal onClose={() => setShowFacturaModal(false)} />}
    </div>
  );
};

export default Sidebar;
