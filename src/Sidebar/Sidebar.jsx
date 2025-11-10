      import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './Sidebar.css';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const menuItems = [
    { name: 'INICIO', icon: '🏠' },
    { 
      name: 'Entradas', 
      icon: '📥',
      submenu: ['Packing List', 'Estado', 'Fecha']
    },
    { name: 'Referencias', icon: '🧾',submenu: ['Packing List', 'Estado', 'Fecha'] },
    { name: 'Separaciones', icon: '🔄',submenu: ['Packing List', 'Estado', 'Fecha'] },
    { name: 'Salidas', icon: '🚚',submenu: ['Packing List', 'Estado', 'Fecha'] },
    { name: 'Transferencias', icon: '🔁',submenu: ['Packing List', 'Estado', 'Fecha'] },
    { name: 'Movimientos Estiba', icon: '📦',submenu: ['Packing List', 'Estado', 'Fecha'] },
    { name: 'Consultas', icon: '🔍',submenu: ['Packing List', 'Estado', 'Fecha'] },
    { name: 'Inventarios Cíclicos', icon: '📋',submenu: ['Packing List', 'Estado', 'Fecha'] },
    { name: 'Opciones', icon: '⚙️',submenu: ['Packing List', 'Estado', 'Fecha'] },
    { name: 'Manual Usuario', icon: '📘',submenu: ['Packing List', 'Estado', 'Fecha'] }
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
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
