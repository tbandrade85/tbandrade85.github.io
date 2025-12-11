import React, { useState } from 'react';
import './ChatSuporteHumanizado.css';

// Ícone simples de balão de chat (você usaria um ícone SVG ou de biblioteca na produção)
const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const HumanChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Seja bem-vindo(a) à Alfa Telecom. Como posso ajudar com sua conexão hoje?", sender: 'support' }
  ]);
  const [inputText, setInputText] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Adiciona uma mensagem de boas-vindas ao abrir, se o chat estiver vazio
    if (!isOpen && messages.length === 0) {
      setMessages([{ id: 1, text: "Olá! Seja bem-vindo(a) à Alfa Telecom. Como posso ajudar com sua conexão hoje?", sender: 'support' }]);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
    };

    // Adiciona a mensagem do usuário
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputText('');

    // Simulação de resposta "Humanizada"
    setTimeout(() => {
      const supportResponse = {
        id: messages.length + 2,
        text: `Obrigado por sua mensagem! Um dos nossos atendentes humanizados está revisando sua solicitação sobre "${inputText.substring(0, 20)}..." e responderá em instantes.`,
        sender: 'support',
      };
      setMessages(prevMessages => [...prevMessages, supportResponse]);
      
      // Simulação de um botão de ação rápida
      if (inputText.toLowerCase().includes('velocidade') || inputText.toLowerCase().includes('lenta')) {
        const actionMessage = {
          id: messages.length + 3,
          text: "Para acelerar, posso verificar o status da sua fibra? Clique abaixo:",
          sender: 'support',
          action: 'Verificar Status',
        };
        setMessages(prevMessages => [...prevMessages, actionMessage]);
      }
    }, 1500);
  };
  
  const handleActionClick = (action) => {
      alert(`Ação de suporte iniciada: ${action}`);
      // Em um ambiente real, esta ação faria uma chamada de API para verificar o status do cliente
  };

  return (
    <>
      {/* O Chat Widget Flutuante */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Suporte Humano Alfa Telecom</h4>
            <span className="status-indicator">Online</span>
          </div>
          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-bubble ${msg.sender}`}>
                <p>{msg.text}</p>
                {msg.action && (
                    <button 
                        className="btn-chat-action"
                        onClick={() => handleActionClick(msg.action)}>
                        {msg.action}
                    </button>
                )}
              </div>
            ))}
            {/* Scroll para o final da conversa */}
            <div ref={(el) => { if (el) { el.scrollIntoView({ behavior: 'smooth' }); } }} />
          </div>
          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="btn-send">
              Enviar
            </button>
          </form>
        </div>
      )}

      {/* Botão Flutuante (sempre visível) */}
      <button 
        className={`chat-toggle-button ${isOpen ? 'active' : ''}`} 
        onClick={toggleChat}>
        {isOpen ? 'X' : <ChatIcon />}
      </button>
    </>
  );
};

export default HumanChatWidget;