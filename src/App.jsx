import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, PackageOpen, ArrowDown, FileText } from 'lucide-react';
import Slide from './components/Slide';

import bioLogo from './assets/bio-logo.png';
import capelinhaLogo from './assets/capelinha-logo.png';
import refazendaLogo from './assets/refazenda-logo.png';

// Import all extracted module images
import imgAccounting from './assets/modules/accounting.png';
import imgAI from './assets/modules/artificial-intelligence.png';
import imgCRM from './assets/modules/crm.png';
import imgDiscuss from './assets/modules/discuss.png';
import imgDocuments from './assets/modules/documents.png';
import imgEcommerce from './assets/modules/ecommerce.png';
import imgFleet from './assets/modules/fleet.png';
import imgInventory from './assets/modules/inventory.png';
import imgManufacturing from './assets/modules/manufacturing.png';
import imgMarketingAuto from './assets/modules/marketing-automation.png';
import imgWhatsapp from './assets/modules/odoo_whatsapp.png';
import imgPLM from './assets/modules/plm.png';
import imgProject from './assets/modules/project.png';
import imgPurchase from './assets/modules/purchase.png';
import imgSales from './assets/modules/sales.png';
import imgSpreadsheet from './assets/modules/spreadsheet.png';
import imgFiscal from '../modulos/fiscal_dashboard.png';

const MulticompanyFlow = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%', maxWidth: '550px', padding: '2rem', background: 'var(--bg-glass)', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)' }}>
    {/* Step 1: Vendedor */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
       <Smartphone size={36} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
       <div>
         <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: '#0f172a' }}>1. Vendedor Externo (App Único)</h4>
         <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.4 }}>Acessa o portfólio e vende produtos das 3 empresas em um único pedido.</p>
       </div>
    </div>
    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ArrowDown color="#cbd5e1" size={24} />
    </div>

    {/* Step 2: CD */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
       <PackageOpen size={36} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
       <div>
         <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: '#0f172a' }}>2. Centro de Distribuição (CD)</h4>
         <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.4 }}>Recebe 1 documento consolidado e faz 1 única separação/entrega para o cliente.</p>
       </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ArrowDown color="#cbd5e1" size={24} />
    </div>

    {/* Step 3: Faturamento */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
       <FileText size={36} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
       <div style={{ width: '100%' }}>
         <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#0f172a' }}>3. Faturamento Desmembrado</h4>
         <div style={{ display: 'flex', gap: '0.5rem' }}>
           <div style={{ flex: 1, background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.75rem', borderRadius: '8px', textAlign: 'center', fontSize: '0.85rem', color: '#334155' }}>NF + Boleto<br/><b style={{ color: 'var(--primary-blue)' }}>Empresa A</b></div>
           <div style={{ flex: 1, background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.75rem', borderRadius: '8px', textAlign: 'center', fontSize: '0.85rem', color: '#334155' }}>NF + Boleto<br/><b style={{ color: 'var(--primary-blue)' }}>Empresa B</b></div>
           <div style={{ flex: 1, background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.75rem', borderRadius: '8px', textAlign: 'center', fontSize: '0.85rem', color: '#334155' }}>NF + Boleto<br/><b style={{ color: 'var(--primary-blue)' }}>Empresa C</b></div>
         </div>
       </div>
    </div>
  </div>
);

function App() {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: "intro",
      badge: null,
      title: "NEXT FOODS",
      logos: [bioLogo, capelinhaLogo, refazendaLogo],
      description: "Imagine as nossas 5 empresas conectadas em um único ecossistema. Sem retrabalho, sem informações desencontradas e com uma fluidez incrível. Chegou a hora de dar o próximo passo e preparar a nossa casa para um crescimento sem limites.",
      modules: ["O Ecossistema", "Alta Performance"],
      features: [
        "Fim das planilhas isoladas que ninguém sabe quem atualizou",
        "Tchau Bitrix e Monday: tudo o que precisamos, em um só lugar",
        "Visão transparente e em tempo real de cada braço da holding"
      ]
    },
    {
      id: "multi-empresa",
      badge: "Arquitetura de Vendas",
      title: "Operação Multi-Empresas",
      description: "Nossa operação comercial unificada é o grande diferencial desse ecossistema. Facilitamos a vida do vendedor, otimizamos o Centro de Distribuição e cumprimos as obrigações fiscais sem nenhum atrito.",
      customRightContent: <MulticompanyFlow />,
      modules: ["Multi-Company", "Vendas", "Estoque"],
      features: [
        "Venda consolidada na ponta: o cliente não sofre com burocracia",
        "Logística inteligente: uma única entrega otimiza frete e tempo",
        "Separação fiscal perfeita: cada empresa fatura apenas o que vendeu"
      ]
    },
    {
      id: "fiscal",
      badge: "Conformidade e Segurança",
      title: "Fiscal",
      description: "Garantir que a holding opere 100% dentro das normas é fundamental. O módulo fiscal automatiza cálculos complexos, emissões de notas e a geração nativa do SPED, blindando as nossas 5 empresas contra multas.",
      image: imgFiscal,
      modules: ["Localização Fiscal", "Emissão de Notas"],
      features: [
        "Cálculo automático de ICMS, PIS, COFINS na compra e venda",
        "Emissão de NF-e, NFC-e e NFS-e totalmente nativa",
        "Geração direta de arquivos SPED sem intervenção manual"
      ]
    },
    {
      id: "whatsapp",
      badge: "Comunicação Inteligente",
      title: "WhatsApp",
      description: "Se 90% das nossas conversas com clientes já acontecem no WhatsApp, por que deixá-las isoladas em celulares? Ao integrar nosso canal mais forte diretamente no sistema, nossa equipe ganha tempo e a Next Foods ganha controle.",
      image: imgWhatsapp,
      modules: ["API do WhatsApp Business"],
      features: [
        "A equipe atende pelo sistema, sem precisar de apps paralelos",
        "Histórico de conversas salvo diretamente no perfil do cliente",
        "Envio de boletos e orçamentos direto no chat, sem fricção"
      ]
    },
    {
      id: "ecommerce-website",
      badge: "Nossa Vitrine Digital",
      title: "E-commerce & Website",
      description: "Nossa presença digital deve trabalhar para nós. Um site que capta visitantes e os transforma em leads no CRM, aliado a uma loja online onde cada pedido já atualiza o estoque e o financeiro em tempo real. É vender e sorrir.",
      image: imgEcommerce,
      modules: ["Comércio Eletrônico (e-Commerce)", "Site (Website)"],
      features: [
        "Vendeu online? O estoque da fábrica já é ajustado na hora",
        "Captura de leads conectada magicamente ao funil comercial",
        "Criação de páginas e campanhas promocionais em minutos"
      ]
    },
    {
      id: "crm",
      badge: "Relacionamento de Ouro",
      title: "CRM",
      description: "Chegou o momento de nos despedirmos do Bitrix. Vamos receber contatos do WhatsApp e do site em um funil de vendas intuitivo, onde nenhum cliente é esquecido e o acompanhamento flui com naturalidade.",
      image: imgCRM,
      modules: ["CRM", "Funil de Vendas (Leads)"],
      features: [
        "Quadro visual (Kanban) super prático para os vendedores",
        "Lembretes e automações para aquele follow-up certeiro",
        "Integração perfeita com orçamentos e conversas do WhatsApp"
      ]
    },
    {
      id: "sales-pos",
      badge: "Força Comercial",
      title: "Vendas & PDV",
      description: "Seja na rua com nossos vendedores externos enviando cotações elegantes pelo celular, ou no balcão das lojas físicas com o PDV rápido, toda venda cai no mesmo banco de dados, alinhando a matriz em segundos.",
      image: imgSales,
      modules: ["Vendas", "Cotações", "Ponto de Venda (PDV)"],
      features: [
        "Transforme cotação em pedido de produção com 1 clique",
        "PDV que continua operando normalmente mesmo sem internet",
        "Sistema inteligente de recompensas e fidelização no balcão"
      ]
    },
    {
      id: "manufacturing-quality",
      badge: "O Coração da Next Foods",
      title: "Fabricação & Qualidade",
      description: "A cozinha da nossa holding! Controlar as ordens de produção ficou transparente. E como comida é coisa séria, inserimos pontos de controle de qualidade direto no fluxo, garantindo que só o melhor chegue aos clientes.",
      image: imgManufacturing,
      modules: ["Fabricação (MRP)", "Controle de Qualidade"],
      features: [
        "Receitas e Listas de Materiais (BOM) que guiam o chão de fábrica",
        "Rastreabilidade lote a lote, da matéria-prima até a mesa",
        "Alertas preventivos e checklists caso algo fuja do padrão"
      ]
    },
    {
      id: "plm-maintenance",
      badge: "Engenharia e Estrutura",
      title: "PLM & Manutenção",
      description: "Lançar uma nova receita ou atualizar embalagens exige o PLM para não bagunçar a operação. Em paralelo, o módulo de Manutenção cuida das nossas máquinas, evitando paradas de surpresa na produção.",
      image: imgPLM,
      modules: ["Gestão do Ciclo de Vida (PLM)", "Manutenção"],
      features: [
        "Fluxos de aprovação inteligente para criar novas receitas",
        "Agendamento de manutenção preventiva sem parar a fábrica",
        "Sintonia total com Fabricação: inovação e máquinas em dia"
      ]
    },
    {
      id: "purchase",
      badge: "Abastecimento Estratégico",
      title: "Compras",
      description: "Comprar bem é o primeiro passo para lucrar bem. Automatizamos os pedidos para nossos fornecedores e amarramos o recebimento de mercadorias com a nossa equipe de qualidade.",
      image: imgPurchase,
      modules: ["Compras"],
      features: [
        "O sistema avisa (e sugere) quando precisamos comprar algo",
        "Comparativo fácil de preços em negociações grandes (Tenders)",
        "Transparência total na relação com nossos fornecedores"
      ]
    },
    {
      id: "inventory",
      badge: "Controle Absoluto",
      title: "Inventário",
      description: "Nosso estoque é o nosso dinheiro na prateleira. Precisamos de uma visão cristalina sobre as transferências entre as 5 empresas, rastreando lotes e garantindo que nunca falte (ou sobre) produto.",
      image: imgInventory,
      modules: ["Gestão de Inventário"],
      features: [
        "Um estoque unificado para a holding, mas separado por empresa",
        "Apoio nativo a leitores de código de barras",
        "Inteligência para reposição automática baseada na demanda"
      ]
    },
    {
      id: "fleet",
      badge: "Nossa Logística",
      title: "Frota (Fleet)",
      description: "A logística da Next Foods não para de crescer, e ter nossos caminhões na rua exige cuidado. Rastrear rotas, manutenções e o combustível é essencial para entregar rápido e gastar menos.",
      image: imgFleet,
      modules: ["Frota"],
      features: [
        "Toda a papelada de contratos e licenciamentos em dia",
        "Acompanhamento direto do consumo de combustível e odômetro",
        "Visão clara de quais veículos rodam mais eficientemente"
      ]
    },
    {
      id: "project",
      badge: "Mãos à Obra",
      title: "Projetos",
      description: "O Monday cumpriu seu papel, mas agora precisamos de algo nosso. Vamos gerenciar todas as demandas internas, novos projetos e entregáveis sem perder prazos e, o principal, linkados ao ERP.",
      image: imgProject,
      modules: ["Gestão de Projetos"],
      features: [
        "Quadro Kanban, Gantt e visualização fácil do que está pendente",
        "Controle preciso do tempo que cada equipe dedica aos projetos",
        "Adeus reuniões improdutivas: tudo documentado e claro"
      ]
    },
    {
      id: "documents",
      badge: "A Nuvem Next Foods",
      title: "Documentos",
      description: "Salvar arquivos na área de trabalho e perder a última versão? Passado. Vamos ter uma central na nuvem, acessível, segura e super inteligente para lidar com toda a papelada da holding.",
      image: imgDocuments,
      modules: ["Documentos em Nuvem"],
      features: [
        "Ele 'lê' notas fiscais usando IA (Reconhecimento de Texto OCR)",
        "Fluxos de aprovação de contratos a distância com um clique",
        "Nossos diretores acessam tudo sem precisar pedir por e-mail"
      ]
    },
    {
      id: "discuss",
      badge: "Sintonia Interna",
      title: "Discuss",
      description: "Enquanto o WhatsApp brilha lá fora com os clientes, o Discuss é o nosso ambiente seguro e organizado aqui dentro. Uma comunicação de equipe fluida que fica gravada no histórico da empresa para o futuro.",
      image: imgDiscuss,
      modules: ["Discussão (Comunicação)"],
      features: [
        "O nosso próprio chat interno, sem precisar sair do sistema",
        "Canais separados por projeto, por setor ou por empresa",
        "Marque (@) colegas diretamente em uma ordem de produção"
      ]
    },
    {
      id: "ai",
      badge: "Pensando no Futuro",
      title: "A Revolução da IA",
      description: "Não estamos apenas adotando um sistema, estamos abraçando a Inteligência Artificial. Ela vai operar nos bastidores, eliminando trabalhos braçais para que nossa equipe use a cabeça para faturar mais.",
      image: imgAI,
      modules: ["Inteligência Artificial"],
      features: [
        "Preenche dados de despesas e notas fiscais sozinha",
        "Ajuda o time de marketing e vendas a redigir textos persuasivos",
        "Evita que setores diferentes façam a mesma tarefa duas vezes"
      ]
    },
    {
      id: "marketing",
      badge: "Voz e Crescimento",
      title: "Marketing & Automação",
      description: "Unimos nossas redes sociais e a nutrição de leads. Agende postagens para todas as mídias em um só lugar e crie gatilhos que enviam e-mails automaticamente na hora exata, trabalhando como um vendedor 24 horas.",
      image: imgMarketingAuto,
      modules: ["Marketing Social", "Automação de Marketing"],
      features: [
        "Planejamento de posts e respostas a comentários no ERP",
        "Jornadas de nutrição baseadas no comportamento do cliente",
        "Descubra exatamente qual post de sexta gerou vendas reais"
      ]
    },
    {
      id: "spreadsheet",
      badge: "Inteligência Estratégica",
      title: "Planilhas (BI)",
      description: "Nós sabemos que a diretoria adora os números rápidos e precisos. Trouxemos o melhor do Excel para dentro do ERP. Um Business Intelligence em tempo real para embasar decisões certeiras.",
      image: imgSpreadsheet,
      modules: ["Planilhas (BI)"],
      features: [
        "Dados vivos da operação: fechou venda, o painel atualiza",
        "Criação de gráficos e Dashboards deslumbrantes",
        "O poder das fórmulas para entender a saúde das 5 empresas"
      ]
    },
    {
      id: "accounting",
      badge: "Resultados Visíveis",
      title: "Contabilidade e Faturamento",
      description: "Onde toda a operação deságua. Controlar o dinheiro, faturar e manter a saúde contábil da Next Foods unificada, transparente e incrivelmente fácil de gerenciar, suportada pela nossa IA.",
      image: imgAccounting,
      modules: ["Contabilidade", "Faturamento"],
      features: [
        "Reconciliação bancária turbinada por Inteligência Artificial",
        "Visão consolidada e limpa das 5 empresas em um único balanço",
        "DREs e balancetes prontos para a diretoria, com apenas 1 clique"
      ]
    }
  ];

  // Update active dot on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { scrollTop, clientHeight } = containerRef.current;
      const currentSlide = Math.round(scrollTop / clientHeight);
      
      if (currentSlide !== activeSlide) {
        setActiveSlide(currentSlide);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeSlide]);

  const scrollToSlide = (index) => {
    if (!containerRef.current) return;
    const { clientHeight } = containerRef.current;
    containerRef.current.scrollTo({
      top: index * clientHeight,
      behavior: 'smooth'
    });
  };

  // Keyboard navigation for presentation remote (Arrow Keys, PageUp/PageDown)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
        if (activeSlide < slides.length - 1) {
          scrollToSlide(activeSlide + 1);
        }
      } else if (['ArrowUp', 'PageUp', 'ArrowLeft'].includes(e.key)) {
        e.preventDefault();
        if (activeSlide > 0) {
          scrollToSlide(activeSlide - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, slides.length]);

  return (
    <>
      <div className="nav-dots">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`nav-dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => scrollToSlide(index)}
            title={`Ir para o slide ${index + 1}`}
          ></div>
        ))}
      </div>
      
      <div className="presentation-container" ref={containerRef}>
        {slides.map((slide, index) => (
          <Slide 
            key={slide.id}
            {...slide}
            isActive={index === activeSlide}
          />
        ))}
      </div>
    </>
  );
}

export default App;
