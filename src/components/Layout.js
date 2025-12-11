import React from 'react';

// Componente simples de Cabeçalho (Header)
const Header = () => (
  <header className="main-header">
    <div className="logo">
      <span className="logo-alfa">Alfa</span>
      <span className="logo-telecom">Telecom</span>
    </div>
    <nav className="nav-links">
      <a href="#planos">Planos</a>
      <a href="#cobertura">Cobertura</a>
      <a href="#suporte">Suporte</a>
      <a href="#contato" className="btn-contratar-header">Contratar</a>
    </nav>
  </header>
);

// Componente Layout que recebe o conteúdo (seus planos) como children
const Layout = ({ children }) => (
  <div className="app-layout">
    <Header />
    <main className="app-content">
      {children}
    </main>
    {/* Você pode adicionar um Footer aqui */}
  </div>
);

export default Layout;