import React from 'react';
import '../styles/Menu.css';
const Menu = ({ data }) => {
  return (
    <ul className="menu">
      {data.map((item, index) => (
        <li key={index}>
          <a href={item.url}>{item.label}</a>
          {item.subMenu && <Menu data={item.subMenu} />}
        </li>
      ))}
    </ul>
  );
};

export default Menu;