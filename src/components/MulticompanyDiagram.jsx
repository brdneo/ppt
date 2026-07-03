import React from 'react';
import { Smartphone, PackageOpen, FileText, ArrowDown } from 'lucide-react';

const MulticompanyDiagram = () => {
  const steps = [
    {
      id: 1,
      title: "Vendedor Externo",
      text: "Acessa o portfólio e vende produtos das 3 empresas em um único pedido.",
      icon: Smartphone,
      color: '#3b82f6',
      bg: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.02) 100%)'
    },
    {
      id: 2,
      title: "Centro de Distribuição (CD)",
      text: "Recebe 1 documento consolidado e faz 1 única separação/entrega para o cliente.",
      icon: PackageOpen,
      color: '#8b5cf6',
      bg: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0.02) 100%)'
    },
    {
      id: 3,
      title: "Faturamento Desmembrado",
      text: "Odoo gera e envia documentos fiscais de forma automática para cada CNPJ.",
      icon: FileText,
      color: '#10b981',
      bg: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.02) 100%)'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;
        
        return (
          <React.Fragment key={step.id}>
            <div 
              style={{
                width: '100%',
                background: step.bg,
                border: `1px solid ${step.color}20`,
                borderLeft: `4px solid ${step.color}`,
                borderRadius: '12px',
                padding: '1.2rem',
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                gap: '1rem',
                boxShadow: `0 10px 20px rgba(0,0,0,0.05), inset 0 2px 10px ${step.color}05`,
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 15px 25px rgba(0,0,0,0.1), inset 0 2px 10px ${step.color}10`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 10px 20px rgba(0,0,0,0.05), inset 0 2px 10px ${step.color}05`;
              }}
            >
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                <div style={{
                  background: `${step.color}15`,
                  minWidth: '44px', height: '44px',
                  borderRadius: '50%',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  color: step.color,
                  flexShrink: 0
                }}>
                  <Icon size={22} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', flex: 1 }}>
                  <span style={{ color: step.color, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                    {step.title}
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.3 }}>
                    {step.text}
                  </span>
                </div>
              </div>

              {/* Faturamento desmembrado boxes for step 3 */}
              {step.id === 3 && (
                <div style={{ display: 'flex', gap: '0.5rem', width: '100%', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  {['Capelinha', 'Refazenda', 'Bio Alimentos'].map((empresa) => (
                    <div key={empresa} style={{
                      flex: '1 1 30%', background: 'rgba(0,0,0,0.02)', border: `1px solid ${step.color}30`,
                      padding: '0.7rem', borderRadius: '8px', textAlign: 'center',
                      fontSize: '0.8rem', color: 'var(--text-secondary)'
                    }}>
                      NF + Boleto<br/>
                      <b style={{ color: step.color, display: 'inline-block', marginTop: '4px' }}>{empresa}</b>
                    </div>
                  ))}
                </div>
              )}

            </div>
            
            {!isLast && (
              <div style={{ height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ArrowDown size={20} color="rgba(0,0,0,0.2)" />
              </div>
            )}
          </React.Fragment>
        );
      })}
      
    </div>
  );
};

export default MulticompanyDiagram;
