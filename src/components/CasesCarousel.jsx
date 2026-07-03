import React, { useState, useEffect, useRef } from 'react';
import { casesData } from '../data/casesData';
import { ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import '../index.css';

const CasesCarousel = ({ isActive }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const currentCase = casesData[activeIndex];

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % casesData.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + casesData.length) % casesData.length);
  };

  // Background style using the first image blurred
  const bgImage = currentCase.images && currentCase.images.length > 0 ? currentCase.images[0] : '';

  return (
    <div 
      id="cases" 
      ref={sectionRef} 
      className="slide" 
      style={{ 
        padding: 0, 
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-main)'
      }}
    >
      {/* Main Content Area */}
      <div 
        className="grid-2" 
        style={{ 
          zIndex: 10, 
          height: '100%', 
          padding: '4rem',
          maxWidth: '1800px',
          margin: '0 auto',
          position: 'relative',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Details */}
        <div 
          key={`details-${activeIndex}`}
          className={`flex-column ${isVisible ? 'animate-fade-in' : ''}`}
          style={{ gap: '2rem', animationDuration: '0.6s' }}
        >
          <div>
            <div style={{ 
              display: 'inline-block',
              background: 'var(--bg-panel)', 
              border: '1px solid rgba(0,0,0,0.05)',
              padding: '6px 14px', 
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '2px',
              color: 'var(--primary-blue)',
              marginBottom: '1.5rem',
              textTransform: 'uppercase'
            }}>
              Caso de Sucesso
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              {currentCase.logo ? (
                <img src={currentCase.logo} alt={currentCase.company} style={{ maxHeight: '60px', objectFit: 'contain', filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.1))' }} />
              ) : (
                <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0, lineHeight: 1 }}>{currentCase.company}</h2>
              )}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>
              <span>{currentCase.location}</span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span>{currentCase.industry}</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {currentCase.apps.map((app, idx) => (
              <span key={idx} style={{ 
                background: 'rgba(59, 130, 246, 0.1)', 
                border: '1px solid rgba(59, 130, 246, 0.2)',
                color: 'var(--primary-blue)',
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                {app}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            <div>
              <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>O Desafio</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 400 }}>{currentCase.challenge}</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>A Solução Odoo</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 400 }}>{currentCase.solution}</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Resultados</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {currentCase.results.map((res, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                    <CheckCircle2 size={18} color="var(--primary-blue)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Right Column: Images & Quote */}
        <div className="flex-column" style={{ position: 'relative', height: '100%', justifyContent: 'center' }}>
          
          <div 
            key={`visuals-${activeIndex}`}
            className={`animate-fade-in delay-200`}
            style={{ position: 'relative', width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {currentCase.images && currentCase.images.length > 0 ? (
              currentCase.images.map((img, idx) => {
                // Layout for up to 3 images overlapping beautifully
                let transform = 'translate(0, 0) scale(1)';
                let zIndex = 10 - idx;
                
                if (currentCase.images.length === 2) {
                  transform = idx === 0 ? 'translate(-10%, -10%) scale(0.9)' : 'translate(15%, 15%) scale(0.95)';
                  zIndex = idx === 1 ? 10 : 5;
                } else if (currentCase.images.length >= 3) {
                  if (idx === 0) transform = 'translate(-20%, -15%) scale(0.85)';
                  if (idx === 1) transform = 'translate(20%, -5%) scale(0.9)';
                  if (idx === 2) transform = 'translate(0%, 20%) scale(1)';
                  zIndex = idx; // Last image on top
                }

                return (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`Print ${idx}`} 
                    style={{ 
                      position: currentCase.images.length > 1 ? 'absolute' : 'relative',
                      maxWidth: currentCase.images.length === 1 ? '100%' : '75%',
                      maxHeight: '100%',
                      borderRadius: '16px',
                      boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      objectFit: 'cover',
                      transform: transform,
                      zIndex: zIndex,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} 
                  />
                );
              })
            ) : (
              <div style={{ 
                width: '100%', height: '100%', 
                background: 'rgba(0,0,0,0.02)', 
                borderRadius: '24px', 
                border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}>
                <span style={{ color: 'var(--text-muted)' }}>Sem imagens disponíveis</span>
              </div>
            )}
          </div>

          <div 
            key={`quote-${activeIndex}`}
            className="animate-slide-up delay-300"
            style={{
              marginTop: '3rem',
              background: 'var(--bg-panel)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0,0,0,0.05)',
              borderLeft: '4px solid var(--primary-blue)',
              padding: '1.5rem 2rem',
              borderRadius: '12px',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}
          >
            <Quote size={32} color="rgba(59, 130, 246, 0.1)" style={{ position: 'absolute', top: '10px', right: '10px' }} />
            <p style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontStyle: 'italic', margin: 0, fontWeight: 300, lineHeight: 1.6 }}>
              "{currentCase.quote}"
            </p>
          </div>

        </div>
      </div>

      {/* Controls Container */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        background: 'var(--bg-panel)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0,0,0,0.05)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        padding: '0.8rem 1.5rem',
        borderRadius: '100px',
        zIndex: 50
      }}>
        <button 
          onClick={prevCase}
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', padding: '0.5rem', borderRadius: '50%', transition: 'background 0.3s ease' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
        >
          <ChevronLeft size={24} />
        </button>

        <div style={{ display: 'flex', gap: '0.8rem' }}>
          {casesData.map((_, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveIndex(idx)}
              style={{
                width: activeIndex === idx ? '30px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: activeIndex === idx ? 'var(--primary-blue)' : 'rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button 
          onClick={nextCase}
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', padding: '0.5rem', borderRadius: '50%', transition: 'background 0.3s ease' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CasesCarousel;
