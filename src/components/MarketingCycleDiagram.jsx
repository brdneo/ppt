import React from 'react';
import { MessageCircle, Filter, Send, Share2, Sparkles, CheckCircle, HeartHandshake } from 'lucide-react';

const MarketingCycleDiagram = () => {
  const steps = [
    {
      id: 1,
      title: "Lead Capturado",
      text: "WhatsApp ou Site",
      icon: MessageCircle,
      color: '#3b82f6'
    },
    {
      id: 2,
      title: "Qualificação",
      text: "CRM Automático",
      icon: Filter,
      color: '#8b5cf6'
    },
    {
      id: 3,
      title: "Marketing",
      text: "Sequências Diretas",
      icon: Send,
      color: '#ec4899'
    },
    {
      id: 4,
      title: "Redes Sociais",
      text: "Unificadas no Odoo",
      icon: Share2,
      color: '#f43f5e'
    },
    {
      id: 5,
      title: "IA Ativa",
      text: "Prioriza leads quentes",
      icon: Sparkles,
      color: '#f59e0b'
    },
    {
      id: 6,
      title: "Conversão",
      text: "Venda Convertida",
      icon: CheckCircle,
      color: '#10b981'
    },
    {
      id: 7,
      title: "Fidelização",
      text: "PDV e Histórico",
      icon: HeartHandshake,
      color: '#06b6d4'
    }
  ];

  const radius = 37; // % distance from center
  const nodes = steps.map((step, i) => {
     const angle = (i * 360 / steps.length - 90) * (Math.PI / 180);
     return {
        ...step,
        pos: {
           left: `${50 + radius * Math.cos(angle)}%`,
           top: `${50 + radius * Math.sin(angle)}%`
        }
     };
  });

  return (
    <div className="marketing-container animate-fade-in" style={{ position: 'relative', width: '100%', height: '650px', margin: '0 auto', maxWidth: '750px' }}>
      
      {/* Connecting Lines in a Ring */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}>
        {nodes.map((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length];
          return (
            <line
              key={`line-${node.id}`}
              x1={node.pos.left} y1={node.pos.top}
              x2={nextNode.pos.left} y2={nextNode.pos.top}
              stroke="rgba(0,0,0,0.15)"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
          );
        })}
      </svg>

      {/* Center Label (Optional, for context) */}
      <div 
        style={{ 
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
          zIndex: 0, textAlign: 'center', opacity: 0.15, pointerEvents: 'none'
        }}
      >
        <Share2 size={120} color="var(--primary-blue)" />
      </div>

      {/* Nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <div 
            key={node.id}
            className="marketing-node"
            style={{ 
              position: 'absolute', top: node.pos.top, left: node.pos.left, 
              transform: 'translate(-50%, -50%)', zIndex: 5,
              background: 'var(--bg-glass)', padding: '1rem', 
              borderRadius: '50%', width: '150px', height: '150px',
              border: `2px solid ${node.color}50`,
              boxShadow: `0 10px 25px rgba(0,0,0,0.08), inset 0 0 15px ${node.color}10`,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              textAlign: 'center',
              animation: 'float 6s ease-in-out infinite',
              animationDelay: `${index * 0.3}s`,
              backdropFilter: 'blur(10px)'
            }}
          >
            <div style={{ 
              background: `${node.color}15`, width: '36px', height: '36px', 
              borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',
              margin: '0 auto 0.4rem auto', color: node.color
            }}>
              <Icon size={18} />
            </div>
            <h4 style={{ margin: '0 0 0.2rem 0', color: node.color, fontSize: '0.8rem', fontWeight: 700, lineHeight: 1.1 }}>{node.title}</h4>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.2 }}>
              {node.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MarketingCycleDiagram;
