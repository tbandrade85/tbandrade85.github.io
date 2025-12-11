import React, { useState } from 'react';
import './CadastroCliente.css'; 

const ClientRegister = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    celular: '',
    senha: '',
    confirmarSenha: '',
    cep: '',
    endereco: '',
    numero: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Verifica a correspondência das senhas em tempo real
    if (name === 'senha' || name === 'confirmarSenha') {
      const otherValue = name === 'senha' ? formData.confirmarSenha : formData.senha;
      setPasswordMatch(value === otherValue);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');

    if (formData.senha !== formData.confirmarSenha) {
      setMessage({ type: 'error', text: 'As senhas digitadas não coincidem. Por favor, verifique.' });
      return;
    }
    
    setIsLoading(true);

    // Simulação de envio para a API de Cadastro
    await new Promise(resolve => setTimeout(resolve, 2500)); 

    setIsLoading(false);

    // Simulação de Sucesso (em um projeto real, você verificaria o retorno da API)
    console.log('Dados de Cadastro:', formData);
    setMessage({ 
      type: 'success', 
      text: 'Cadastro realizado com sucesso! Você já pode contratar seu plano Fibra Óptica.' 
    });
    // Limpar o formulário após sucesso, se desejado
    // setFormData({ ... }); 
  };

  return (
    <div className="register-page-container">
      <div className="register-card">
        <h3>📝 Cadastro Novo Cliente Alfa Telecom</h3>
        <p>Preencha os dados abaixo para criar seu acesso e começar a navegar na fibra óptica.</p>

        <form onSubmit={handleRegister} className="register-form">
          
          {/* Dados Pessoais */}
          <fieldset>
            <legend>Informações Pessoais</legend>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="nome">Nome Completo</label>
                <input id="nome" type="text" name="nome" value={formData.nome} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label htmlFor="cpf">CPF</label>
                <input id="cpf" type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label htmlFor="celular">Celular</label>
                <input id="celular" type="tel" name="celular" value={formData.celular} onChange={handleChange} required />
              </div>
            </div>
          </fieldset>

          {/* Dados de Login e Senha */}
          <fieldset>
            <legend>Criação de Acesso</legend>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" name="senha" value={formData.senha} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label htmlFor="confirmarSenha">Confirmar Senha</label>
                <input id="confirmarSenha" type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required />
                {!passwordMatch && <span className="password-error">As senhas não conferem!</span>}
              </div>
            </div>
          </fieldset>

          {/* Dados de Endereço */}
          <fieldset>
            <legend>Endereço</legend>
            <div className="input-row">
                <div className="input-group cep-group">
                  <label htmlFor="cep">CEP</label>
                  <input id="cep" type="text" name="cep" value={formData.cep} onChange={handleChange} required />
                </div>
                <div className="input-group address-group">
                  <label htmlFor="endereco">Rua/Avenida</label>
                  <input id="endereco" type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
                </div>
                <div className="input-group num-group">
                  <label htmlFor="numero">Número</label>
                  <input id="numero" type="text" name="numero" value={formData.numero} onChange={handleChange} required />
                </div>
            </div>
            {/* Campos adicionais de endereço (Bairro, Cidade, Estado) seriam adicionados aqui */}
          </fieldset>


          {/* Mensagem de Status */}
          {message.text && (
            <div className={`status-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <button type="submit" disabled={isLoading || !passwordMatch} className="btn-register-submit">
            {isLoading ? 'Cadastrando...' : 'Finalizar Cadastro'}
          </button>
        </form>

        <div className="register-link-login">
          Já possui cadastro? <a href="#login">Acesse sua conta aqui.</a>
        </div>
      </div>
    </div>
  );
};

export default ClientRegister;