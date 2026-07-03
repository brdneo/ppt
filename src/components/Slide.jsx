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
      <div id={id} ref={slideRef} className="slide" style={{ justifyContent: 'center', alignItems: 'center', padding: '0 4rem' }}>
        <div className="bg-glow"></div>
        <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1000px', textAlign: 'center' }}>

          <h1
            className={`text-gradient ${isVisible ? 'animate-slide-up delay-100' : ''}`}
            style={{ fontSize: '5rem', letterSpacing: '-2px', marginBottom: '1.5rem', opacity: 0 }}
          >
            {title}
          </h1>

          {logos && logos.length > 0 && (
            <div
              className={`flex-center ${isVisible ? 'animate-slide-up delay-200' : ''}`}
              style={{ opacity: 0, gap: '4rem', marginBottom: '3rem', flexWrap: 'wrap' }}
            >
              {logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt="Company Logo"
                  style={{ height: '80px', width: '180px', objectFit: 'contain' }}
                />
              ))}
            </div>
          )}

          <p
            className={`${isVisible ? 'animate-slide-up delay-300' : ''}`}
            style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.5, opacity: 0, maxWidth: '800px' }}
          >
            {description}
          </p>

          {features && features.length > 0 && (
            <div
              className={`${isVisible ? 'animate-slide-up delay-400' : ''}`}
              style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-start', textAlign: 'left', background: 'var(--bg-panel)', padding: '2.5rem', borderRadius: '16px' }}
            >
              {features.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <CheckCircle2 color="var(--primary-blue)" style={{ marginTop: '0.2rem', flexShrink: 0 }} size={24} />
                  <span style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 500 }}>{feature}</span>
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
    <div id={id} ref={slideRef} className="slide" style={{ padding: '4rem 6rem' }}>
      <div className="bg-glow"></div>

      <div className="grid-2" style={{ zIndex: 10, flex: 1, alignItems: 'center' }}>
        {/* Coluna Esquerda: Textos, Títulos e Features Clean */}
        <div className="flex-column" style={{ paddingRight: '2rem' }}>

          {badge && (
            <div className={`badge ${isVisible ? 'animate-slide-up' : ''}`} style={{ opacity: 0, marginBottom: '1.5rem', border: 'none', background: 'var(--bg-panel)', fontSize: '0.9rem' }}>
              {badge}
            </div>
          )}

          <h1
            className={`text-gradient ${isVisible ? 'animate-slide-up delay-100' : ''}`}
            style={{ fontSize: '3.8rem', marginBottom: '1.5rem', opacity: 0, letterSpacing: '-1px', lineHeight: 1.1 }}
          >
            {title}
          </h1>

          <p
            className={`${isVisible ? 'animate-fade-in delay-200' : ''}`}
            style={{ fontSize: '1.35rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6, opacity: 0, fontWeight: 400 }}
          >
            {description}
          </p>

          {features && features.length > 0 && (
            <div className="flex-column" style={{ gap: '1.5rem' }}>
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`${isVisible ? 'animate-slide-up' : ''}`}
                  style={{
                    opacity: 0,
                    animationDelay: `${400 + (idx * 100)}ms`,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <CheckCircle2 color="var(--primary-blue)" style={{ marginTop: '0.2rem', flexShrink: 0 }} size={22} />
                  <span style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.4 }}>{feature}</span>
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
              style={{
                width: '100%',
                maxHeight: '650px',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 30px 60px rgba(0, 127, 199, 0.15)',
                border: '1px solid rgba(0, 127, 199, 0.05)',
                background: '#fff',
                padding: '0.5rem'
              }}
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
