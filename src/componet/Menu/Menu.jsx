import React from 'react';
import '/Users/new/Desktop/hooked/src/componet/Menu/Menu.css';
import { PiXThin } from "react-icons/pi";

const Menu = ({ isOpen, clousMenu }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <PiXThin className='ixt' onClick={clousMenu} />
      <ul>
        <li>Главная</li>
        <li>О нас</li>
        <li>Контакты</li>
      </ul>
    </div>
  );
};

export default Menu;
