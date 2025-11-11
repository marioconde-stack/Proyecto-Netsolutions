import React, { useState } from 'react';
import MenuItem from './MenuItem';
import FacturaModal from './FacturaModal';
import DocumentoTransporteModal from './DocumentoTransporteModal';
import FechaModal from './FechaModal';
import './Sidebar.css';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  // ✅ Abre el modal correspondiente
  const handleSubmenuClick = (subItem) => {
    if (subItem === 'Factura') setActiveModal('factura');
    if (subItem === 'Docum. Transp.') setActiveModal('transporte');
    if (subItem === 'Fecha') setActiveModal('fecha');
  };

  const closeModal = () => setActiveModal(null);

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

      {/* ✅ Mostrar los modales según el submenú clicado */}
      {activeModal === 'factura' && <FacturaModal onClose={closeModal} />}
      {activeModal === 'transporte' && <DocumentoTransporteModal onClose={closeModal} />}
      {activeModal === 'fecha' && <FechaModal onClose={closeModal} />}
    </div>
  );
};

export default Sidebar;
