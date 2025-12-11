import React, { useState, useEffect } from 'react';
import './CarrosselHero.css';

const slides = [
  {
    id: 1,
    title: "100% Fibra Óptica, 100% Estabilidade",
    subtitle: "A velocidade que você merece, sem quedas ou lentidão. A fibra de ponta a ponta.",
    buttonText: "Consultar Cobertura",
    buttonLink: "#cobertura",
    theme: 'blue', // Team azul para Fibra
  },
  {
    id: 2,
    title: "Internet Ultrarrápida para o seu Mundo",
    subtitle: "Streaming 4K, Home Office e Gaming sem limites. Planos de até 1 Giga!",
    buttonText: "Ver Planos",
    buttonLink: "#planos",
    theme: 'orange', // Team laranja para Velocidade
  },
  {
    id: 3,
    title: "Suporte Ágil e Humanizado ao seu Lado",
    subtitle: "Resolves rápido, com empatia. Diga adeus ao atendimento robótico.",
    buttonText: "Falar com Suporte",
    buttonLink: "#suporte",
    theme: 'blue', // Team azul para Atendimento
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efeito para trocar o slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % slides.length
      );
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  // const currentSlide = slides[currentIndex];

  return (
    <section className="hero-carousel-container">
      {/* Mapeia os slides para criar o conteúdo */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`hero-slide ${slide.theme} ${index === currentIndex ? 'active' : 'inactive'}`}
        >
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <a href={slide.buttonLink} className="hero-btn">
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
      
      {/* Indicadores de navegação */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;