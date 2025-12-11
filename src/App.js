import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa apenas as páginas essenciais
import HomePage from './pages/Home/HomePage';
import ClientLoginPage from './pages/Cliente/LoginCliente/LoginCliente';
import ClientRegisterPage from './pages/Cliente/CadastroCliente/CadastroCliente';
// Removida todas as importações de Admin.

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota principal (Home Page) */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rota de Login e Cadastro */}
        <Route path="/cliente" element={<ClientLoginPage />} />
        <Route path="/cadastro" element={<ClientRegisterPage />} />
        
        {/* Rotas administrativas removidas */}
      </Routes>
    </Router>
  );
};

export default App;