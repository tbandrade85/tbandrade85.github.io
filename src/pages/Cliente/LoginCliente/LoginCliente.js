import React, { useState } from 'react';
import './LoginCliente.css'; // Estilos específicos para o Login

const ClientLogin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    // Simulação de autenticação (API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);

    // Simulação de Sucesso/Falha
    if (user === 'cliente' && password === '123') {
      setMessage({ type: 'success', text: 'Login realizado com sucesso! Redirecionando...' });
      // Aqui você faria o redirecionamento para o dashboard do cliente
      console.log('Login OK para:', user);
    } else {
      setMessage({ type: 'error', text: 'Usuário ou senha incorretos. Tente novamente.' });
    }
  };

  return (
    <div className="login-page-container">
      
      <div className="login-card">
        <h3>🔑 Área do Cliente Alfa Telecom</h3>
        <p>Acesse sua fatura, histórico de consumo e solicite suporte humanizado.</p>

        <form onSubmit={handleLogin} className="login-form">
          
          <div className="input-group">
            <label htmlFor="user">CPF / E-mail do Titular</label>
            <input
              id="user"
              type="text"
              placeholder="Digite seu CPF ou E-mail"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          {/* Mensagem de Status */}
          {message.text && (
            <div className={`status-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <button type="submit" disabled={isLoading} className="btn-login-submit">
            {isLoading ? 'Acessando...' : 'Entrar na Área do Cliente'}
          </button>
        </form>

        <div className="login-options">
          <a href="#recuperar-senha">Esqueceu sua senha?</a>
          <a href="#primeiro-acesso">Primeiro Acesso? Cadastre-se</a>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;