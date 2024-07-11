import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import './header.css'; 
import Order from '../order/order';
import Menu from '../Menu/Menu';
import Contact from '../contact/contact';

const Header = ({ orders, deliteOrder }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const clousMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleCart = () => {
    setCartOpen(
      !cartOpen
    );
  };

  
  const openContact = () => {
    setContactOpen(!contactOpen)
  }
  const clousContact = () => {
    setContactOpen(!contactOpen)
  }

  return (
    <div className="header">
      <div className="header-mein">
        <div className="header-menu">
          <CiMenuBurger onClick={toggleMenu} />
          <Menu isOpen={menuOpen} clousMenu={clousMenu} />
          <p>Menu</p>
        </div>
        <div className="header-logo">
          {/* Проверьте путь к изображению */}
          <img src="/path/to/logo.svg" alt="Логотип" />
        </div>
        <div className="header-icons">
          <IoSearch />

          <Contact openContact={openContact} clousContact={clousContact} />
          <FiShoppingCart
            onClick={toggleCart}
            className={`shop ${cartOpen ? 'active' : ''}`}
          />
          {cartOpen && (
            <div className='shop-cart'>
              {orders.length > 0 ? (
                orders.map((el, index) => (
                  <Order key={index} item={el} deliteOrder={deliteOrder} />
                ))
              ) : (
                <p>Корзина пуста</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
