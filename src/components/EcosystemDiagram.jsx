import React from 'react';
import { ShoppingCart, Factory, Truck, Landmark, Megaphone, FolderKanban, Workflow } from 'lucide-react';

const EcosystemDiagram = () => {
  const nodes = [
    {
      id: 1,
      title: "Vendas e CRM",
      items: ["WhatsApp", "Ecommerce", "Site", "PDV", "CRM", "Vendas"],
      icon: ShoppingCart,
      pos: { top: '15%', left: '18%' },
      color: '#3b82f6'
    },
    {
      id: 2,
      title: "Produção",
      items: ["Fabricação", "PLM", "Qualidade", "Manutenção", "Compras"],
      icon: Factory,
      pos: { top: '85%', left: '18%' },
      color: '#f59e0b'
    },
    {
      id: 3,
      title: "Logística",
      items: ["Frota", "Inventário", "Rotas"],
      icon: Truck,
      pos: { top: '100%', left: '50%' },
      color: '#10b981'
    },
    {
      id: 4,
      title: "Financeiro",
      items: ["Contabilidade", "Faturamento", "Notas fiscais"],
      icon: Landmark,
      pos: { top: '85%', left: '82%' },
      color: '#8b5cf6'
    },
    {
      id: 5,
      title: "Marketing",
      items: ["Automação", "Redes Sociais", "IA"],
      icon: Megaphone,
      pos: { top: '15%', left: '82%' },
      color: '#ec4899'
    },
    {
      id: 6,
      title: "Gestão interna",
      items: ["Projetos", "Documentos", "Planilhas", "Comunicação"],
      icon: FolderKanban,
      pos: { top: '0%', left: '50%' },
      color: '#06b6d4'
    }
  ];

  return (
    <div className="ecosystem-container animate-fade-in" style={{ position: 'relative', width: '100%', height: '550px', margin: '0 auto', maxWidth: '700px' }}>
      
      {/* Connecting Lines */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}>
        {nodes.map(node => (
          <line
            key={`line-${node.id}`}
            x1="50%" y1="50%"
            x2={node.pos.left} y2={node.pos.top}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
        ))}
      </svg>

      {/* Center Node */}
      <div 
        style={{ 
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
          zIndex: 10, background: 'linear-gradient(135deg, var(--primary-blue), #4f46e5)', 
          padding: '1.5rem', borderRadius: '50%', width: '200px', height: '200px', 
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)', textAlign: 'center',
          border: '4px solid rgba(255,255,255,0.1)'
        }}
      >
        <Workflow size={40} color="white" style={{ marginBottom: '0.8rem' }} />
        <h3 style={{ margin: 0, color: 'white', fontSize: '1rem', lineHeight: 1.2, fontWeight: 600 }}>
          Ecossistema Odoo com 6 pilares centrais conectando toda a holding
        </h3>
      </div>

      {/* Outer Nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <div 
            key={node.id}
            className="ecosystem-node"
            style={{ 
              position: 'absolute', top: node.pos.top, left: node.pos.left, 
              transform: 'translate(-50%, -50%)', zIndex: 5,
              background: 'var(--bg-panel)', padding: '1rem', 
              borderRadius: '16px', width: '180px',
              border: `2px solid ${node.color}40`,
              boxShadow: `0 10px 30px rgba(0,0,0,0.3), inset 0 0 20px ${node.color}10`,
              textAlign: 'center',
              animation: 'float 6s ease-in-out infinite',
              animationDelay: `${index * 0.5}s`
            }}
          >
            <div style={{ 
              background: `${node.color}20`, width: '40px', height: '40px', 
              borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',
              margin: '0 auto 0.6rem auto', color: node.color
            }}>
              <Icon size={20} />
            </div>
            <h4 style={{ margin: '0 0 0.6rem 0', color: node.color, fontSize: '0.9rem', fontWeight: 600 }}>{node.title}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3px' }}>
              {node.items.map((item, i) => (
                <span key={i} style={{ 
                  fontSize: '0.65rem', background: 'rgba(255,255,255,0.05)', 
                  padding: '2px 6px', borderRadius: '12px', color: '#cbd5e1'
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EcosystemDiagram;
