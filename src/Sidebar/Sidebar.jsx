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
    { name: 'Referencias', icon: '🧾' },
    { name: 'Separaciones', icon: '🔄' },
    { name: 'Salidas', icon: '🚚' },
    { name: 'Transferencias', icon: '🔁' },
    { name: 'Movimientos Estiba', icon: '📦' },
    { name: 'Consultas', icon: '🔍' },
    { name: 'Inventarios Cíclicos', icon: '📋' },
    { name: 'Opciones', icon: '⚙️' },
    { name: 'Manual Usuario', icon: '📘' }
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