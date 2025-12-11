import React, { useState } from 'react';
import './FAQ.css';

// Dados das Perguntas e Respostas
const faqData = [
  {
    id: 1,
    question: "O que é a fibra óptica 100% da Alfa Telecom (FTTH)?",
    answer: "FTTH (Fiber To The Home) significa que a fibra óptica chega diretamente dentro da sua casa, sem conversão para cabos de cobre. Isso garante a velocidade total e a máxima estabilidade, eliminando perdas de sinal comuns em outras tecnologias."
  },
  {
    id: 2,
    question: "O atendimento da Alfa Telecom é realmente humanizado e rápido?",
    answer: "Sim! É o nosso maior diferencial. Nossa equipe de suporte é local, treinada para resolver problemas sem robôs ou protocolos demorados. Nosso foco é na solução ágil e no tratamento empático com o cliente."
  },
  {
    id: 3,
    question: "A velocidade contratada é garantida?",
    answer: "Garantimos a entrega de 100% da velocidade contratada, tanto para download quanto para upload, graças à nossa infraestrutura 100% fibra óptica e baixa taxa de latência. A estabilidade do sinal é uma prioridade."
  },
  {
    id: 4,
    question: "Como posso verificar se meu endereço tem cobertura?",
    answer: "É simples! Utilize nossa ferramenta 'Teste de Cobertura' no topo da página. Digite seu CEP e endereço, e você saberá em instantes se já estamos em sua região."
  },
  {
    id: 5,
    question: "Como faço para pagar minha fatura?",
    answer: "Você pode acessar a Área do Cliente (login) e emitir a segunda via do boleto, ou configurar o débito automático em sua conta bancária."
  },
];

// Componente individual do Acordeão
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button className="accordion-header" onClick={onClick}>
        <span className="question-text">{question}</span>
        {/* Ícone de abrir/fechar, Laranja quando ativo */}
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span> 
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};


const FAQSection = () => {
  // Estado para controlar qual item está aberto
  const [openItem, setOpenItem] = useState(null); 

  const handleToggle = (id) => {
    // Se o item clicado já estiver aberto, fecha. Senão, abre o novo item.
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section-container">
      <div className="faq-header">
        <h2>❓ Respostas Rápidas: Dúvidas Frequentes</h2>
        <p>Encontre a solução para as perguntas mais comuns sobre planos, cobertura e suporte técnico.</p>
      </div>

      <div className="accordion-list">
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === item.id}
            onClick={() => handleToggle(item.id)}
          />
        ))}
      </div>
      
      <div className="faq-callout">
          <p>Não encontrou sua resposta?</p>
          <a href="#contato" className="btn-fale-conosco">Fale com nosso Atendimento Humanizado</a>
      </div>
    </section>
  );
};

export default FAQSection;