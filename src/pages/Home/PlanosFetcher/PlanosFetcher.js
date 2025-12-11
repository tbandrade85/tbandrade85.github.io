import React, { useState, useEffect } from 'react';
import AlfaCard from './AlfaCard';
import './PlanosFetcher.css';
import { initialPlanos } from '../../../data/planos_data'; 
// Aqui é onde você usaria uma imagem de logos de streaming (se tiver o arquivo)
//  

const PlanosFetcher = () => {
  const [planos, setPlanos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const loadPlanos = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        const data = initialPlanos;
        setPlanos(data);
        setError(null); 
      } catch (err) {
        console.error("Erro no carregamento dos planos:", err.message);
        setError('Não foi possível carregar os planos do arquivo de dados.');
      } finally {
        setIsLoading(false);
      }
    };
    loadPlanos();
  }, []);

  if (isLoading) { return <div className="loading-message">Carregando planos Alfa Telecom... 🚀</div>; }
  if (error) { return <div className="error-message">Erro: {error}</div>; }

  // Separa os planos por tipo
  const planosResidenciais = planos.filter(p => p.tipo === 'residencial');
  const planosEmpresariais = planos.filter(p => p.tipo === 'empresarial');

  return (
    <>
      {/* ------------------------------------------- */}
      {/* SEÇÃO RESIDENCIAL */}
      {/* ------------------------------------------- */}
      <section id="planos" className="container-planos-api">
        <h2>Planos Exclusivos Residenciais</h2>
        <p>Ultra velocidade para streaming 4K, jogos online e toda a família conectada.</p>
        
        <div className="lista-cards">
          {planosResidenciais.map((plano) => (
            <AlfaCard
              key={plano.id}
              nomePlano={plano.nome}
              velocidade={plano.velocidade + ' Mega'}
              idealPara={plano.descricaoCurta}
              preco={`R$ ${plano.preco.toFixed(2).replace('.', ',')}`}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------- */}
      {/* SEÇÃO EMPRESARIAL */}
      {/* ------------------------------------------- */}
      {planosEmpresariais.length > 0 && (
        <section id="planos-empresariais" className="container-planos-api planos-empresariais-bg">
          <div className="empresarial-header">
              <h2>Soluções Alfa Telecom para Empresas 💼</h2>
              <p>Link dedicado com 99.9% SLA, IP Fixo e suporte técnico prioritário para manter seu negócio sempre online.</p>
              <button className="btn-empresarial-contato">Consultar Soluções Personalizadas</button>
          </div>

          <div className="lista-cards lista-cards-empresarial">
            {planosEmpresariais.map((plano) => (
              <AlfaCard
                key={plano.id}
                nomePlano={plano.nome}
                velocidade={plano.velocidade + ' Mega'}
                idealPara={plano.descricaoCurta}
                preco={`R$ ${plano.preco.toFixed(2).replace('.', ',')}`}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default PlanosFetcher;