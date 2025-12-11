import React from 'react';
import './Valores.css';

const coreValues = [
  {
    icon: '⚡',
    title: "Velocidade Real",
    description: "Entregamos 100% da velocidade contratada graças à tecnologia FTTH, garantindo performance superior para toda a sua casa ou negócio."
  },
  {
    icon: '🤝',
    title: "Atendimento Humano",
    description: "Você fala com pessoas de verdade, sem robôs. Nosso suporte é empático, ágil e focado em resolver seu problema na primeira chamada."
  },
  {
    icon: '🛡️',
    title: "Estabilidade Inabalável",
    description: "Com fibra óptica de ponta a ponta, sua conexão não sofre com interferências ou quedas de sinal. Estabilidade total 24 horas por dia."
  },
  {
    icon: '📍',
    title: "Foco no Cliente Local",
    description: "Somos uma empresa local, dedicados a oferecer o melhor serviço e suporte direto para a nossa comunidade, com agilidade na instalação e manutenção."
  }
];

const ValuesSection = () => {
  return (
    <section id="valores" className="values-section-container">
      <div className="values-header">
        <h2>✨ Por que a Alfa Telecom é a Melhor Escolha?</h2>
        <p>Nossos valores guiam cada conexão que fazemos e cada cliente que atendemos.</p>
      </div>
      
      <div className="values-grid">
        {coreValues.map((value, index) => (
          <div key={index} className="value-card">
            <span className="value-icon">{value.icon}</span>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;