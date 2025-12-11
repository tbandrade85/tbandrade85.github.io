import React from 'react';
import './Depoimentos.css'; 

// Dados de depoimentos estáticos (pode ser movido para um arquivo JSON, se desejar)
const depoimentos = [
    {
        id: 1,
        texto: "A Alfa Telecom me surpreendeu! Estabilidade incrível para trabalhar de casa e jogar online. O ping é imbatível!",
        autor: "Ana C.",
        cidade: "Setor Sul"
    },
    {
        id: 2,
        texto: "O plano Gigabit Pro é o melhor investimento para minha produtividade. Downloads instantâneos e upload simétrico fazem a diferença.",
        autor: "Marcos B.",
        cidade: "Jardim América"
    },
    {
        id: 3,
        texto: "Finalmente um provedor com atendimento que realmente funciona. Rápido e humanizado. Recomendo a todos!",
        autor: "Lúcia S.",
        cidade: "Vila Nova"
    }
];

const DepoimentoCard = ({ texto, autor, cidade }) => (
    <div className="depoimento-card">
        <p className="depoimento-texto">"{texto}"</p>
        <p className="depoimento-autor">
            <strong>— {autor}</strong>, <span className="depoimento-cidade">{cidade}</span>
        </p>
    </div>
);

const DepoimentosSection = () => {
    return (
        <section id="depoimentos" className="depoimentos-container">
            <h2>⭐ O que nossos clientes dizem sobre a Fibra Alfa</h2>
            
            <div className="depoimentos-grid">
                {depoimentos.map(depoimento => (
                    <DepoimentoCard 
                        key={depoimento.id} 
                        texto={depoimento.texto} 
                        autor={depoimento.autor} 
                        cidade={depoimento.cidade} 
                    />
                ))}
            </div>
        </section>
    );
};

export default DepoimentosSection;