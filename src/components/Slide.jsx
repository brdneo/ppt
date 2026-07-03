import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, CornerRightDown, CornerLeftDown } from 'lucide-react';

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
  isActive = false,
  carouselItems = null
}) => {
  const slideRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (carouselItems && carouselItems.length > 0 && isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % carouselItems.length);
      }, 3000); // Troca a cada 3 segundos
      return () => clearInterval(interval);
    }
  }, [carouselItems, isVisible]);

  const displayBadge = carouselItems ? carouselItems[activeIndex].badge : badge;
  const displayDescription = carouselItems ? carouselItems[activeIndex].description : description;
  const displayFeatures = carouselItems ? carouselItems[activeIndex].features : features;
  const displayImage = carouselItems ? carouselItems[activeIndex].image : image;

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
  const isObrigado = id === 'obrigado';

  if (isObrigado) {
    return (
      <div id={id} ref={slideRef} className="slide slide-intro-container" style={{ justifyContent: 'center' }}>
        <div className="bg-glow"></div>
        <div className="slide-content-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

          <div className={`title-intro-wrapper flex-center ${isVisible ? 'animate-slide-up delay-100' : ''}`} style={{ opacity: 0, flexDirection: 'row', flexWrap: 'nowrap', gap: '3vw', marginBottom: '3rem', width: '100%' }}>
            <h1 className="text-gradient title-intro" style={{ margin: 0, fontSize: 'min(8vw, 8rem)', lineHeight: 1, whiteSpace: 'nowrap' }}>
              NEXT FOODS
            </h1>
            {odooLogo && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '3vw', fontSize: 'min(4vw, 4rem)', color: '#cbd5e1', fontWeight: 500 }}>
                <span style={{ marginTop: '0.2rem' }}>x</span>
                <img src={odooLogo} alt="Odoo Logo" style={{ height: 'min(9vw, 140px)', objectFit: 'contain' }} />
              </div>
            )}
          </div>

          {logos && logos.length > 0 && (
            <div className={`intro-logos-container ${isVisible ? 'animate-slide-up delay-300' : ''}`} style={{ opacity: 0 }}>
              {logos.map((logo, idx) => (
                <img key={idx} src={logo} alt="Company Logo" className="intro-logo" />
              ))}
            </div>
          )}

        </div>
      </div>
    );
  }

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
                right: '8rem',
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

          {displayBadge && (
            <div className={`badge ${isVisible ? 'animate-slide-up' : ''}`} style={{ opacity: 0, marginBottom: '1.5rem', border: 'none', background: 'var(--bg-panel)', fontSize: '0.9rem' }}>
              {displayBadge}
            </div>
          )}

          <div style={{ position: 'relative', width: 'fit-content' }}>
            <h1
              className={`text-gradient title-regular ${isVisible ? 'animate-slide-up delay-100' : ''}`}
              style={{ opacity: 0, display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
            >
              {carouselItems ? (
                carouselItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span style={{ 
                      color: activeIndex === idx ? 'inherit' : 'var(--text-muted)', 
                      filter: activeIndex === idx ? 'none' : 'blur(1.5px)', 
                      opacity: activeIndex === idx ? 1 : 0.4,
                      transition: 'all 0.5s ease' 
                    }}>
                      {item.title}
                    </span>
                    {idx < carouselItems.length - 1 && (
                      <span style={{ color: 'var(--text-muted)', opacity: 0.3 }}> e </span>
                    )}
                  </React.Fragment>
                ))
              ) : (
                title
              )}
            </h1>
            {id === 'plm-maintenance' && (
              <div 
                className={`floating-card-label ${isVisible ? 'animate-fade-in delay-500' : ''}`}
                style={{ 
                  position: 'absolute', 
                  left: '260px', 
                  top: '-35px', 
                  background: 'linear-gradient(135deg, var(--primary-blue) 0%, #2563eb 100%)', 
                  padding: '0.6rem 1.2rem', 
                  borderRadius: '100px', 
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  opacity: 0,
                  zIndex: 20
                }}
              >
                <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 700, whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>
                  Product Lifecycle Management
                </span>
                
                {/* Grande seta customizada que desvia da badge e aponta pro PLM */}
                <svg width="260" height="60" style={{ position: 'absolute', left: '-240px', top: '15px', pointerEvents: 'none', overflow: 'visible' }}>
                  <path d="M 240 0 L 20 0 Q 0 0, 0 15 L 0 30" fill="transparent" stroke="var(--primary-blue)" strokeWidth="4" />
                  <path d="M -10 18 L 0 34 L 10 18" fill="transparent" stroke="var(--primary-blue)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>

          <p
            className={`desc-regular ${isVisible ? 'animate-fade-in delay-200' : ''}`}
            style={{ opacity: 0 }}
            key={`desc-${activeIndex}`}
          >
            {displayDescription}
          </p>

          {displayFeatures && displayFeatures.length > 0 && (
            <div className="flex-column" style={{ gap: '1.5rem' }} key={`feat-${activeIndex}`}>
              {displayFeatures.map((feature, idx) => (
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
          ) : displayImage ? (
            <>
              <img
                key={`img-${activeIndex}`}
                src={displayImage}
                alt={`Print do Módulo`}
                className="module-image animate-fade-in"
                style={{ animationDuration: '0.8s' }}
              />
              
              {id === 'fiscal' && (
                <div 
                  className={`floating-comparative-left ${isVisible ? 'animate-fade-in delay-600' : ''}`}
                  style={{ 
                    position: 'absolute', 
                    left: '-140px', 
                    top: '30px', 
                    background: 'var(--bg-panel)', 
                    padding: '0.8rem 1.2rem', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.3)', 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '0.8rem',
                    opacity: 0,
                    zIndex: 20,
                    transform: 'rotate(-4deg)'
                  }}
                >
                  <span style={{ fontSize: '1.4rem', transform: 'rotate(4deg)' }}>🇧🇷</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                    NFe e NFSe compatível com RFB
                  </span>
                  
                  <div style={{ position: 'absolute', right: '-25px', bottom: '-35px' }}>
                    <CornerRightDown size={42} color="var(--primary-blue)" style={{ strokeWidth: 2, transform: 'rotate(-10deg)' }} />
                  </div>
                </div>
              )}
            </>
          ) : Icon ? (
            <Icon size={180} strokeWidth={1} color="var(--primary-blue)" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Slide;
