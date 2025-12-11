import React, { useState } from 'react';
import './TesteDeCobertura.css';
import { initialAreasCobertas } from '../../../data/cobertura_areas'; // IMPORTANDO O JSON

// Função utilitária para padronizar a entrada
const standardizeBairro = (bairro) => {
    return bairro
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, '');
};

const CoverageChecker = () => {
  const [bairroInput, setBairroInput] = useState('');
  const [cepInput, setCepInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [hasCobertura, setHasCobertura] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResultado(null);
    setHasCobertura(false);
    
    if (!bairroInput || bairroInput.length < 3) {
      setResultado("Por favor, digite um nome de bairro válido.");
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const bairroPadronizado = standardizeBairro(bairroInput);
      let statusCobertura = 'nao_coberto';

      if (initialAreasCobertas.includes(bairroPadronizado)) {
          statusCobertura = 'coberto'; 
      }
      
      if (statusCobertura === 'coberto') {
        setResultado(`🎉 Ótima Notícia! O bairro "${bairroInput}" tem cobertura Fibra Alfa Telecom!`);
        setHasCobertura(true);
      } else {
        setResultado(`😢 Lamentamos, mas o bairro "${bairroInput}" ainda não tem cobertura. Deixe seu contato para avisarmos!`);
        setHasCobertura(false);
      }

    } catch (error) {
      console.error("Erro na consulta de cobertura:", error);
      setResultado('❌ Erro de comunicação. Tente novamente ou ligue para o suporte.');
      setHasCobertura(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="cobertura" className="coverage-checker-container">
      <h2>🌐 Consultar Cobertura Fibra Alfa</h2>
      <p>Verifique em instantes se a ultravelocidade 100% fibra está disponível no seu endereço.</p>
      
      <form onSubmit={handleSubmit} className="coverage-form">
        <input
          type="text"
          placeholder="Digite o nome do seu Bairro"
          value={bairroInput}
          onChange={(e) => setBairroInput(e.target.value)}
          required
          disabled={isLoading}
        // />
        // <input
        //  type="text"
        //  placeholder="CEP (Opcional)"
        //  value={cepInput}
        //  onChange={(e) => setCepInput(e.target.value)}
        //  disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Verificando...' : 'Verificar Agora'}
        </button>
      </form>

      {resultado && (
        <div className={`result-box ${hasCobertura ? 'success' : 'failure'}`}>
          <p>{resultado}</p>
          {hasCobertura ? (
            <a href="#planos" className="btn-call-to-action">Ver Planos Disponíveis!</a>
          ) : (
            <a href="#contato" className="btn-call-to-action">Quero ser Avisado!</a>
          )}
        </div>
      )}
    </section>
  );
};

export default CoverageChecker;