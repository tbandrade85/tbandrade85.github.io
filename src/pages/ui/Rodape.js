import React from 'react';
import './Rodape.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        
        <div className="footer-section company-info">
          <div className="logo footer-logo">
            <span className="logo-alfa">Alfa</span>
            <span className="logo-telecom">Telecom</span>
          </div>
          <p>
            Provedor 100% Fibra Óptica, focado em alta velocidade e atendimento rápido, ágil e humanizado.
          </p>
          <p className="cnpj">CNPJ: 29.313.991/0001-44</p>
        </div>
        
        <div className="footer-section links-rapidos">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#planos">Nossos Planos</a></li>
            <li><a href="#cobertura">Teste de Cobertura</a></li>
            <li><a href="#suporte">Fale Conosco</a></li>
            <li><a href="/cliente">Área do Cliente</a></li>
          </ul>
        </div>
        
        <div className="footer-section contato">
          <h4>Atendimento e Suporte</h4>
          <p>
            📞 **Central de Vendas:** <span className="contact-highlight">(83) 98121-1323</span>
          </p>
          
          <p>
            📧 **Email:** <a href="mailto:contato@alfatelecom.com.br">contato@alfatelecom.com.br</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Alfa Telecom. Todos os direitos reservados. 
          <a href="#termos">Termos de Uso</a> | <a href="#privacidade">Política de Privacidade</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;