import React from 'react';
import './Header.css'; // Stil dosyası

function Header() {
  return (
    <header className="header">
      <div className="header-left">bedragoksu</div>
      <div className="header-right">
        <a href="#portfolio" className="header-link">Portfolio</a>
        <a href="#education" className="header-link">Education</a>
        <a href="#contact" className="header-link">Contact</a>
      </div>
    </header>
  );
}

export default Header;
