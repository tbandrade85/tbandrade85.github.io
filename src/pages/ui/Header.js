import React from 'react';

// Observação: os estilos estão em Rodape.css e global.css
const Header = () => (
  <header className="main-header">
    <div className="logo">
      <span className="logo-alfa">Alfa</span>
      <span className="logo-telecom">Telecom</span>
    </div>
    <nav className="nav-links">
      <a href="#valores">Valores</a>
      <a href="#cobertura">Cobertura</a>
      <a href="#planos">Planos</a>
      <a href="#depoimentos">Depoimentos</a>
      <a href="#faq">FAQ</a>
      <a href="/cliente" className="btn-contratar-header">Área do Cliente</a>
    </nav>
  </header>
);

export default Header;