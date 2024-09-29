import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Patinho Feio do Legume</div>
      <input type="text" placeholder="Buscar..." className="search-bar" />
      <nav className="nav-links">
        <a href="#"><i className="fas fa-box"></i> Meus pedidos</a>
        <a href="#"><i className="fas fa-user"></i> Minha conta</a>
        <a href="#"><i className="fas fa-shopping-cart"></i> Carrinho de compras</a>
      </nav>
    </header>
  );
};

export default Header;
