import React from 'react';
import { MessageCircle, Users, Smartphone, ShoppingCart, Store, Database, ArrowDown } from 'lucide-react';

const SalesFunnelDiagram = () => {
  const steps = [
    {
      id: 1,
      text: "WhatsApp captura contato automaticamente",
      title: "Funil Integrado",
      icon: MessageCircle,
      width: '100%',
      color: '#3b82f6',
      bg: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.02) 100%)'
    },
    {
      id: 2,
      text: "Qualifica e distribui lead",
      title: "CRM",
      icon: Users,
      width: '92%',
      color: '#8b5cf6',
      bg: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.02) 100%)'
    },
    {
      id: 3,
      text: "Fecha pedido no app",
      title: "Vendedor Externo",
      icon: Smartphone,
      width: '84%',
      color: '#ec4899',
      bg: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(236,72,153,0.02) 100%)'
    },
    {
      id: 4,
      text: "Geram pedidos automáticos",
      title: "E-commerce e Site",
      icon: ShoppingCart,
      width: '76%',
      color: '#f59e0b',
      bg: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.02) 100%)'
    },
    {
      id: 5,
      text: "Finaliza venda presencial",
      title: "PDV",
      icon: Store,
      width: '68%',
      color: '#10b981',
      bg: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.02) 100%)'
    },
    {
      id: 6,
      text: "Sincronizados em tempo real",
      title: "Todos os dados no Odoo",
      icon: Database,
      width: '60%',
      color: '#06b6d4',
      bg: 'linear-gradient(135deg, var(--primary-blue), #4f46e5)',
      isHighlight: true
    }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '600px', margin: '0 auto', paddingTop: '1rem' }}>
      
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;
        
        return (
          <React.Fragment key={step.id}>
            <div 
              style={{
                width: step.width,
                background: step.bg,
                border: step.isHighlight ? 'none' : `1px solid ${step.color}30`,
                borderTop: step.isHighlight ? 'none' : `3px solid ${step.color}`,
                borderRadius: '12px',
                padding: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                boxShadow: step.isHighlight ? '0 15px 30px rgba(99, 102, 241, 0.4)' : `0 10px 20px rgba(0,0,0,0.15), inset 0 2px 10px ${step.color}05`,
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = step.isHighlight 
                  ? '0 20px 40px rgba(99, 102, 241, 0.6)' 
                  : `0 15px 25px rgba(0,0,0,0.2), inset 0 2px 10px ${step.color}10`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = step.isHighlight 
                  ? '0 15px 30px rgba(99, 102, 241, 0.4)' 
                  : `0 10px 20px rgba(0,0,0,0.15), inset 0 2px 10px ${step.color}05`;
              }}
            >
              <div style={{
                background: step.isHighlight ? 'rgba(255,255,255,0.2)' : `${step.color}20`,
                minWidth: '44px', height: '44px',
                borderRadius: '50%',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                color: step.isHighlight ? 'white' : step.color,
                flexShrink: 0
              }}>
                <Icon size={22} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span style={{ color: step.isHighlight ? 'white' : step.color, fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '3px' }}>
                  {step.title}
                </span>
                <span style={{ color: step.isHighlight ? '#e2e8f0' : 'var(--text-secondary)', fontSize: '1rem', fontWeight: 500, lineHeight: 1.3 }}>
                  {step.text}
                </span>
              </div>
            </div>
            
            {!isLast && (
              <div style={{ height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ArrowDown size={18} color="rgba(0,0,0,0.2)" />
              </div>
            )}
          </React.Fragment>
        );
      })}
      
    </div>
  );
};

export default SalesFunnelDiagram;
