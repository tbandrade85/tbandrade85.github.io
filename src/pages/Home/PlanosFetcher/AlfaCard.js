import React from 'react';
import './AlfaCard.css'; 

const AlfaCard = ({ nomePlano, velocidade, idealPara, preco }) => {
    // Ex: "500 Mega" -> ["500", "Mega"]
    const [numVelocidade, unitVelocidade] = velocidade.split(' '); 

    return (
        <div className="alfa-card-plano">
            <h3>{nomePlano}</h3>
            
            <div className="velocidade">
                {numVelocidade}
                <small>{unitVelocidade}</small>
            </div>

            <p className="ideal-para">Ideal para: {idealPara}</p>
            
            <p className="preco">{preco}</p>
            
            <a href="#contato-form" className="btn-contratar">
                Assinar Agora
            </a>
        </div>
    );
};

export default AlfaCard;