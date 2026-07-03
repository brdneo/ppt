import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, CornerRightDown } from 'lucide-react';

const Slide = ({
  id,
  title,
  badge,
  icon: Icon,
  logos = [],
  odooLogo,
  image,
  leftImage,
  leftImageTitle,
  leftImageSubtitle,
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
      { threshold: 0.1 }
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

          <div
            className={`title-intro-wrapper flex-center ${isVisible ? 'animate-slide-up delay-100' : ''}`}
            style={{ opacity: 0, flexDirection: 'row', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}
          >
            <h1 className="text-gradient title-intro" style={{ margin: 0 }}>
              {title}
            </h1>
            {odooLogo && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.8rem', color: '#cbd5e1', fontWeight: 500 }}>
                <span style={{ marginTop: '0.2rem' }}>x</span>
                <img src={odooLogo} alt="Odoo Logo" style={{ height: '72px', objectFit: 'contain' }} />
              </div>
            )}
          </div>

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

          {image && (
            <div
              className={`floating-comparative-card ${isVisible ? 'animate-fade-in delay-600' : ''}`}
              style={{
                position: 'absolute',
                right: '4%',
                top: '55%',
                transform: 'translateY(-50%)',
                background: 'var(--bg-panel)',
                padding: '1.5rem',
                borderRadius: '16px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                maxWidth: '400px',
                opacity: 0,
                border: '1px solid rgba(255,255,255,0.05)',
                zIndex: 20
              }}
            >
              <div className="floating-card-label" style={{ position: 'absolute', top: '-50px', left: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '1rem', color: '#60a5fa', fontWeight: 'bold', whiteSpace: 'nowrap', transform: 'rotate(-5deg)', marginBottom: '4px' }}>
                  Diferencial com outros ERPs
                </span>
                <CornerRightDown size={28} color="#60a5fa" style={{ transform: 'rotate(10deg)' }} />
              </div>
              <img src={image} alt="Comparativo" style={{ width: '100%', objectFit: 'contain', borderRadius: '8px' }} />
            </div>
          )}

          {leftImage && (
            <div
              className={`floating-comparative-left ${isVisible ? 'animate-fade-in delay-600' : ''}`}
              style={{
                position: 'absolute',
                left: '4%',
                top: '55%',
                transform: 'translateY(-50%)',
                background: 'var(--bg-panel)',
                padding: '1.5rem',
                borderRadius: '16px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                maxWidth: '400px',
                opacity: 0,
                border: '1px solid rgba(255,255,255,0.05)',
                zIndex: 20
              }}
            >
              <div className="floating-card-label" style={{ position: 'absolute', top: '-50px', right: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '1rem', color: '#4ade80', fontWeight: 'bold', whiteSpace: 'nowrap', transform: 'rotate(5deg)', marginBottom: '4px' }}>
                  {leftImageTitle}
                </span>
                <CornerRightDown size={28} color="#4ade80" style={{ transform: 'scaleX(-1) rotate(-10deg)' }} />
              </div>
              <img src={leftImage} alt="Preços" style={{ width: '100%', objectFit: 'contain', borderRadius: '8px', marginBottom: '1rem' }} />
              {leftImageSubtitle && (
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center', margin: 0, lineHeight: 1.4 }}>
                  {leftImageSubtitle}
                </p>
              )}
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
      
      {/* Watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontSize: '15vw', fontWeight: 900, color: 'rgba(0, 127, 199, 0.03)',
        whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 0, userSelect: 'none',
        letterSpacing: '-2px'
      }}>
        NEXT FOODS
      </div>

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
