import React from 'react';
import './DestaquePerformance.css'; 

const DestaquePerformance = () => {
  return (
    <section className="performance-section">
      <div className="performance-container">
        
        <div className="text-content">
          <h2>🚀 Velocidade Máxima e Estabilidade Incomparável</h2>
          <p className="lead-text">
            Não se contente com menos. A Fibra Alfa Telecom é construída com tecnologia **100% Giga-Ready**, oferecendo a latência mais baixa do mercado e velocidade simétrica para download e upload.
          </p>
          
          <div className="metrics-grid">
            <div className="metric-item">
              <h3>Latência Ultra Baixa</h3>
              <p>Perfeito para gamers e videoconferências sem atraso (lag).</p>
            </div>
            <div className="metric-item">
              <h3>Fibra Óptica Pura</h3>
              <p>Imunidade a interferências e clima, garantindo estabilidade 24/7.</p>
            </div>
            <div className="metric-item">
              <h3>Velocidade Garantida</h3>
              <p>Entregamos a velocidade contratada, sem quedas ou surpresas.</p>
            </div>
          </div>
        </div>

        <div className="image-content">
          {/* Onde a imagem de fibra/tecnologia ficaria */}
          
        </div>

      </div>
    </section>
  );
};

export default DestaquePerformance;