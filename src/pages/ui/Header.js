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
      {/* Link de contato atualizado para o WhatsApp */}
    <a 
        href="https://wa.me/5588999998888" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-header-whatsapp"
    >
        <i className="whatsapp-icon">📞</i> Fale pelo WhatsApp
      <a href="#depoimentos">Depoimentos</a>
      <a href="#faq">FAQ</a>
      {/* <a href="/cliente" className="btn-contratar-header">Área do Cliente</a> */}
      

    {/* ... outros links ... */}
    
    
    </a>


    </nav>
  </header>
);

export default Header;