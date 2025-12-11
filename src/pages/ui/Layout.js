import React from 'react';
import Header from './Header';
import Footer from './Rodape';
import HumanChatWidget from '../../components/widgets/ChatSuporteHumanizado/ChatSuporteHumanizado'; // Ajuste no caminho

const Layout = ({ children }) => (
  <div className="app-layout">
    <Header />
    <main className="app-content">
      {children}
    </main>
    <Footer /> 
    <HumanChatWidget /> 
  </div>
);

export default Layout;