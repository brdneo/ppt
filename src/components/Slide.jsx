import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Slide = ({
  id,
  title,
  badge,
  icon: Icon,
  logos = [],
  image,
  customRightContent,
  description,
  modules = [],
  features = [],
  isActive = false
}) => {
  const slideRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      if (slideRef.current) observer.unobserve(slideRef.current);
    };
  }, []);

  // Layout diferenciado para o Intro vs Outros módulos
  const isIntro = id === 'intro';

  if (isIntro) {
    return (
      <div id={id} ref={slideRef} className="slide slide-intro-container">
        <div className="bg-glow"></div>
        <div className="slide-content-container">

          <h1
            className={`text-gradient title-intro ${isVisible ? 'animate-slide-up delay-100' : ''}`}
            style={{ opacity: 0 }}
          >
            {title}
          </h1>

          {logos && logos.length > 0 && (
            <div
              className={`intro-logos-container ${isVisible ? 'animate-slide-up delay-200' : ''}`}
              style={{ opacity: 0 }}
            >
              {logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt="Company Logo"
                  className="intro-logo"
                />
              ))}
            </div>
          )}

          <p
            className={`desc-intro ${isVisible ? 'animate-slide-up delay-300' : ''}`}
            style={{ opacity: 0 }}
          >
            {description}
          </p>

          {features && features.length > 0 && (
            <div
              className={`feature-box-intro ${isVisible ? 'animate-slide-up delay-400' : ''}`}
              style={{ opacity: 0 }}
            >
              {features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <CheckCircle2 color="var(--primary-blue)" style={{ marginTop: '0.2rem', flexShrink: 0 }} size={24} />
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    );
  }

  // Layout Corporativo para os Módulos (Esquerda: Texto Clean, Direita: Imagem Destacada)
  return (
    <div id={id} ref={slideRef} className="slide slide-regular-padding">
      <div className="bg-glow"></div>

      <div className="grid-2" style={{ zIndex: 10, flex: 1, alignItems: 'center' }}>
        {/* Coluna Esquerda: Textos, Títulos e Features Clean */}
        <div className="flex-column col-left">

          {badge && (
            <div className={`badge ${isVisible ? 'animate-slide-up' : ''}`} style={{ opacity: 0, marginBottom: '1.5rem', border: 'none', background: 'var(--bg-panel)', fontSize: '0.9rem' }}>
              {badge}
            </div>
          )}

          <h1
            className={`text-gradient title-regular ${isVisible ? 'animate-slide-up delay-100' : ''}`}
            style={{ opacity: 0 }}
          >
            {title}
          </h1>

          <p
            className={`desc-regular ${isVisible ? 'animate-fade-in delay-200' : ''}`}
            style={{ opacity: 0 }}
          >
            {description}
          </p>

          {features && features.length > 0 && (
            <div className="flex-column" style={{ gap: '1.5rem' }}>
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`feature-item ${isVisible ? 'animate-slide-up' : ''}`}
                  style={{
                    opacity: 0,
                    animationDelay: `${400 + (idx * 100)}ms`
                  }}
                >
                  <CheckCircle2 color="var(--primary-blue)" style={{ marginTop: '0.2rem', flexShrink: 0 }} size={22} />
                  <span className="feature-text-regular">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Coluna Direita: Imagem Grandiosa e Flutuante ou Conteudo Customizado */}
        <div className={`flex-center ${isVisible ? 'animate-fade-in delay-300' : ''}`} style={{ opacity: 0, height: '100%', position: 'relative' }}>
          {customRightContent ? (
            customRightContent
          ) : image ? (
            <img
              src={image}
              alt={`Print do Módulo ${title}`}
              className="module-image"
            />
          ) : Icon ? (
            <Icon size={180} strokeWidth={1} color="var(--primary-blue)" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Slide;
