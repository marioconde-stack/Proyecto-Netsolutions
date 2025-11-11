import React, { useState } from 'react';
import FacturaModal from './FacturaModal';
import DocumentoTransporteModal from './DocumentoTransporteModal';
import FechaModal from './FechaModal';
import ConsultaModal from './ConsultaModal';
import './Sidebar.css';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  // Abre o cierra un menú
  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  // ✅ Abre el modal correspondiente al submenú
  const handleSubmenuClick = (subItem) => {
    if (subItem === 'Factura') setActiveModal('factura');
    if (subItem === 'Docum. Transp.') setActiveModal('transporte');
    if (subItem === 'Fecha') setActiveModal('fecha');
  };

  // ✅ Abre modal al hacer clic en “Consultas”
  const handleMenuClick = (menuName) => {
    if (menuName === 'Consultas') setActiveModal('consulta');
  };

  // ✅ Cierra el modal activo
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
          <li
            key={index}
            className={`menu-item ${openMenu === item.name ? 'open' : ''}`}
            onClick={() => {
              if (item.name === 'Consultas') {
                handleMenuClick(item.name); // ✅ Aquí se usa handleMenuClick
              } else if (item.submenu) {
                toggleMenu(item.name);
              }
            }}
          >
            <span className="icon">{item.icon}</span>
            <span className="text">{item.name}</span>

            {item.submenu && openMenu === item.name && (
              <ul className="submenu">
                {item.submenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={(e) => {
                      e.stopPropagation(); // evita cerrar el menú
                      handleSubmenuClick(subItem);
                    }}
                    className="submenu-item"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>   
        ))}
      </ul>

      {/* ✅ Mostrar el modal activo */}
      {activeModal === 'factura' && <FacturaModal onClose={closeModal} />}
      {activeModal === 'transporte' && <DocumentoTransporteModal onClose={closeModal} />}
      {activeModal === 'fecha' && <FechaModal onClose={closeModal} />}
      {activeModal === 'consulta' && <ConsultaModal onClose={closeModal} />}
    </div>
  );
};

export default Sidebar;
