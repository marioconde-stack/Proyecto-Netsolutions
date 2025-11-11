import React from 'react';

const MenuItem = ({ item, isOpen, onToggle, onSubmenuClick = () => {} }) => {
  return (
    <li
      className={`menu-item ${isOpen ? 'open' : ''}`}
      onClick={item.submenu ? onToggle : undefined}
    >
      {item.icon} {item.name}
      {item.submenu && (
        <ul className="submenu">
          {item.submenu.map((subItem, index) => (
            <li
              key={index}
              onClick={(e) => {
                e.stopPropagation(); // evita cerrar el menú
                onSubmenuClick(subItem); // ya nunca será undefined
              }}
            >
              {subItem}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;