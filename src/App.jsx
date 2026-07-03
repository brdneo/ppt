import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, PackageOpen, ArrowDown, FileText, ArrowRight, CornerRightDown } from 'lucide-react';
import Slide from './components/Slide';

import bioLogo from './assets/bio-logo.png';
import capelinhaLogo from './assets/capelinha-logo.png';
import refazendaLogo from './assets/refazenda-logo.png';

// Import all extracted module images
import imgAccounting from './assets/modules/accounting.png';
import imgAI from './assets/modules/artificial-intelligence.png';
import imgCRM from './assets/modules/crm.png';
import imgDiscuss from './assets/modules/msg.png';
import imgDocuments from './assets/modules/documents.png';
import imgEcommerce from './assets/modules/ecommerce.png';
import imgFleet from './assets/modules/sc.png';
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

// Novos módulos e imagens adicionados
import imgEcossistema from './assets/modules/ecossistema.png';
import imgFunilVendas from './assets/modules/funil-vendas.png';
import imgMarketing from './assets/modules/marketing.png';
import imgStudio from './assets/modules/studio.jpg';
import imgOdooPng from './assets/modules/odoo.png';
import imgOdooSvg from './assets/modules/odoo.svg';
import imgPrecos from './assets/modules/precos.png';
import EcosystemDiagram from './components/EcosystemDiagram';
import SalesFunnelDiagram from './components/SalesFunnelDiagram';
import MarketingCycleDiagram from './components/MarketingCycleDiagram';
import imgWpp1 from '../modulos/wpp1.png';
import imgWpp2 from '../modulos/wpp2.png';

const WhatsappCompare = () => (
  <div className="whatsapp-compare-container animate-fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', width: '85%', maxWidth: '900px', height: '100%', margin: '0 auto', paddingRight: '2rem' }}>
    <img src={imgWpp1} alt="WhatsApp 1" style={{ flex: '1 1 40%', maxWidth: '42%', maxHeight: '65vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }} />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-blue)', textAlign: 'center', marginBottom: '0.5rem', background: 'rgba(0,127,199,0.08)', padding: '0.4rem 0.8rem', borderRadius: '20px', whiteSpace: 'nowrap' }}>
        Mensagens em lote eficientes
      </span>
      <ArrowRight size={28} color="var(--primary-blue)" />
    </div>
    <img src={imgWpp2} alt="WhatsApp 2" style={{ flex: '1 1 40%', maxWidth: '42%', maxHeight: '65vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }} />
  </div>
);

import MulticompanyDiagram from './components/MulticompanyDiagram';

function App() {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: "intro",
      badge: null,
      title: "NEXT FOODS",
      odooLogo: imgOdooPng,
      logos: [bioLogo, capelinhaLogo, refazendaLogo],
      description: "Um ecossistema empresarial totalmente conectado. Informações centralizadas, processos fluidos e zero retrabalho. Uma parceria poderosa com o Odoo para preparar a infraestrutura com tecnologia Open Source, garantindo um sistema sem limites e sem aprisionamento.",
      image: imgOdooSvg,
      leftImage: imgPrecos,
      leftImageTitle: "Cortando custos com Odoo",
      leftImageSubtitle: "Custo Odoo: R$ 9.216,00 /ano (para 20 usuários). Economia real de R$ 994.387,73 ao substituir sistemas isolados.",
      modules: [],
      features: [
        "Fim das planilhas isoladas e centralização da gestão em uma única plataforma",
        "Visão gerencial em tempo real de todas as operações do grupo",
        "Código aberto (Open Source) apoiado por mais de 100 mil desenvolvedores",
        "Sem Aprisionamento (Lock-in): Propriedade total dos dados no PostgreSQL",
        "Preço Justo e Escalável: Valor único por usuário com acesso a mais de 40.000 apps"
      ]
    },
    {
      id: "ecossistema",
      badge: "Módulos Integrados",
      title: "O Ecossistema",
      description: "Uma visão consolidada de todas as ferramentas conversando entre si em tempo real.",
      customRightContent: <EcosystemDiagram />,
      modules: ["Vendas & CRM", "Inventário", "Financeiro", "RH"],
      features: [
        "Fim das ilhas de informação: um dado inserido aqui reflete lá",
        "Rastreabilidade completa de ponta a ponta",
        "Automação inteligente entre departamentos"
      ]
    },
    {
      id: "multi-empresa",
      badge: "Arquitetura de Vendas",
      title: "Operação Multi-Empresas",
      description: "A operação comercial unificada é o grande diferencial deste modelo. Facilita o processo de vendas, otimiza o Centro de Distribuição e garante o cumprimento das obrigações fiscais sem atritos.",
      customRightContent: <MulticompanyDiagram />,
      modules: ["Multi-Company", "Vendas", "Estoque"],
      features: [
        "Venda consolidada na ponta: experiência sem burocracia para o cliente",
        "Logística inteligente: consolidação de entregas otimizando frete e tempo",
        "Separação fiscal automatizada: cada CNPJ fatura apenas as suas respectivas vendas"
      ]
    },
    {
      id: "fiscal",
      badge: "Conformidade e Segurança",
      title: "Setor Fiscal",
      description: "Garantir que a operação ocorra em total conformidade com as normas é fundamental. O módulo fiscal automatiza cálculos complexos, emissão de notas e a geração nativa do SPED, blindando as empresas contra passivos fiscais.",
      image: imgFiscal,
      modules: ["Localização Fiscal", "Emissão de Notas"],
      features: [
        "Cálculo automático de impostos (ICMS, PIS, COFINS) nas operações",
        "Emissão de NF-e, NFC-e e NFS-e de forma nativa e integrada",
        "Geração de arquivos SPED diretamente pelo sistema"
      ]
    },
    {
      id: "whatsapp",
      badge: "Comunicação Inteligente",
      title: "WhatsApp",
      description: "A integração do canal de comunicação mais utilizado diretamente no ERP permite que o histórico de conversas não fique isolado em dispositivos móveis. A equipe ganha produtividade e a empresa ganha controle e rastreabilidade.",
      customRightContent: <WhatsappCompare />,
      modules: ["API do WhatsApp Business"],
      features: [
        "Atendimento centralizado pelo sistema, sem aplicativos paralelos",
        "Histórico de conversas salvo diretamente no cadastro do cliente",
        "Envio automatizado de boletos e orçamentos diretamente no chat"
      ]
    },
    {
      id: "ecommerce-website",
      badge: "Presença Digital",
      title: "E-commerce & Website",
      description: "A presença digital trabalha em sincronia com o backoffice. Não é mais necessário gerenciar o site em plataformas externas (como Nuvemshop) e o sistema em outra: tudo é nativo e integrado, onde cada pedido atualiza estoques e o fluxo financeiro instantaneamente.",
      image: imgEcommerce,
      modules: ["Comércio Eletrônico", "Website"],
      features: [
        "Sincronização em tempo real de vendas online com o estoque físico",
        "Captação de leads conectada diretamente ao funil comercial",
        "Criação ágil de landing pages e campanhas promocionais"
      ]
    },
    {
      id: "crm",
      badge: "Gestão de Relacionamento",
      title: "CRM",
      description: "Uma evolução na gestão de clientes. Contatos provenientes do WhatsApp e do site são direcionados para um funil de vendas visual e intuitivo, garantindo que todas as oportunidades de negócio sejam acompanhadas de perto.",
      customRightContent: <SalesFunnelDiagram />,
      modules: ["CRM", "Funil de Vendas"],
      features: [
        "Visualização em Kanban para acompanhamento prático do pipeline de vendas",
        "Automações e lembretes para cadência de follow-ups",
        "Integração nativa com orçamentos e histórico de comunicações"
      ]
    },
    {
      id: "sales-pos",
      badge: "Força Comercial",
      title: "Vendas & PDV",
      description: "Tanto a força de vendas externa realizando cotações via mobile, quanto o atendimento em lojas físicas via PDV, convergem para a mesma base de dados. As informações são sincronizadas com a matriz em questão de segundos.",
      image: imgSales,
      modules: ["Vendas", "Ponto de Venda (PDV)"],
      features: [
        "Conversão de cotações em pedidos de produção com apenas um clique",
        "PDV com operação offline e sincronização em segundo plano",
        "Programas de fidelidade e recompensas integrados ao balcão"
      ]
    },
    {
      id: "manufacturing-quality",
      badge: "Produção Industrial",
      title: "Fabricação & Qualidade",
      description: "Controle total sobre as ordens de produção e rastreabilidade dos ingredientes. Pontos de controle de qualidade são inseridos diretamente no fluxo produtivo para assegurar o mais alto padrão nos produtos finais.",
      image: imgManufacturing,
      modules: ["Fabricação (MRP)", "Qualidade"],
      features: [
        "Gestão de Receitas e Listas de Materiais (BOM) para o chão de fábrica",
        "Rastreabilidade ponta a ponta, da matéria-prima até o produto final",
        "Checklists e alertas preventivos de controle de qualidade"
      ]
    },
    {
      id: "plm-maintenance",
      badge: "Engenharia e Estrutura",
      title: "PLM & Manutenção",
      description: "O lançamento de novos produtos e atualizações de embalagens são geridos via PLM para manter a organização da operação. Simultaneamente, a manutenção preventiva garante a disponibilidade contínua dos maquinários.",
      image: imgPLM,
      modules: ["Ciclo de Vida (PLM)", "Manutenção"],
      features: [
        "Fluxos estruturados de aprovação para criação e revisão de receitas",
        "Agendamento de manutenções sem impacto não planejado na produção",
        "Sincronia completa com o setor de Fabricação e ordens de serviço"
      ]
    },
    {
      id: "purchase-inventory",
      carouselItems: [
        {
          title: "Compras",
          badge: "Abastecimento Estratégico",
          description: "Otimização do ciclo de suprimentos. Automação de pedidos de compra baseados em regras de estoque e integração do recebimento de mercadorias com as diretrizes da equipe de qualidade.",
          image: imgPurchase,
          features: [
            "Sugestões automatizadas de ressuprimento baseadas na demanda e lead time",
            "Gestão de acordos de compra e concorrências de preços (Tenders)",
            "Portal do fornecedor para maior transparência e agilidade"
          ]
        },
        {
          title: "Inventário",
          badge: "Controle Operacional",
          description: "Precisão na gestão de materiais e produtos acabados. Visibilidade completa das transferências entre as unidades do grupo, rastreamento de lotes e validade para garantir o nível ideal de estoque.",
          image: imgInventory,
          features: [
            "Estoque unificado no nível do grupo, porém segmentado por empresa",
            "Operações logísticas suportadas nativamente por coletores de código de barras",
            "Regras inteligentes para rotatividade e reposição de produtos"
          ]
        }
      ]
    },

    {
      id: "fleet",
      badge: "Logística",
      title: "Gestão de Rotas",
      description: "A gestão logística demanda controle rigoroso dos ativos. O rastreamento de manutenções, contratos e consumo de combustível é fundamental para otimizar rotas e reduzir custos operacionais.",
      image: imgFleet,
      modules: ["Frota"],
      features: [
        "Gestão centralizada de contratos, apólices de seguro e licenciamentos",
        "Monitoramento do consumo de combustível e registros de odômetro",
        "Análise de eficiência e custo por veículo da frota"
      ]
    },
    {
      id: "project",
      badge: "Gestão Estratégica",
      title: "Gestão de Projetos e Tarefas",
      description: "Gestão completa de demandas internas, implantações e novos desenvolvimentos. Os projetos e entregáveis são monitorados quanto a prazos e orçamentos, integrados diretamente ao ERP.",
      image: imgProject,
      modules: ["Gestão de Projetos"],
      features: [
        "Visualizações em Kanban e Gráfico de Gantt para acompanhamento visual",
        "Registro de apontamento de horas das equipes alocadas em projetos",
        "Centralização da documentação e comunicação de cada projeto"
      ]
    },
    {
      id: "documents",
      badge: "Gestão Eletrônica",
      title: "Documentos em Nuvem",
      description: "Um repositório em nuvem centralizado, seguro e inteligente para toda a documentação corporativa. A eliminação do papel e a facilidade de acesso remoto modernizam os processos burocráticos.",
      image: imgDocuments,
      modules: ["Documentos em Nuvem"],
      features: [
        "Leitura inteligente de faturas através de Inteligência Artificial (OCR)",
        "Assinatura digital e fluxos de aprovação remotos com um clique",
        "Níveis de acesso seguros e compartilhamento simplificado com a diretoria"
      ]
    },
    {
      id: "discuss",
      badge: "Comunicação Corporativa",
      title: "Mensagens",
      description: "Um ambiente de colaboração interno seguro e organizado. A comunicação entre as equipes flui de forma nativa no sistema, mantendo o histórico de decisões e alinhamentos vinculado aos processos empresariais.",
      image: imgDiscuss,
      modules: ["Comunicação Interna"],
      features: [
        "Chat interno nativo, eliminando a dependência de plataformas não homologadas",
        "Canais de comunicação segregados por projeto, departamento ou empresa",
        "Possibilidade de mencionar (@) colaboradores diretamente nos registros do ERP"
      ]
    },
    {
      id: "marketing-automation",
      badge: "Aquisição e Engajamento",
      title: "Marketing & Automação",
      description: "Gestão unificada de canais sociais e nutrição de leads. O agendamento de postagens e a criação de gatilhos para e-mails automatizados operam de maneira integrada ao ciclo de vida do cliente no CRM.",
      customRightContent: <MarketingCycleDiagram />,
      modules: ["Marketing Social", "Automação"],
      features: [
        "Planejamento centralizado de publicações e monitoramento de engajamento",
        "Desenvolvimento de jornadas de nutrição (workflows) baseadas em comportamento",
        "Análise de ROI, identificando campanhas que geram conversões reais"
      ]
    },
    {
      id: "spreadsheet",
      badge: "Inteligência de Negócios",
      title: "Dashboards",
      description: "Business Intelligence em tempo real. A união da flexibilidade das planilhas com a base de dados centralizada do ERP permite a extração de métricas precisas para apoiar a tomada de decisão da diretoria.",
      image: imgSpreadsheet,
      modules: ["Planilhas (BI)"],
      features: [
        "Dados operacionais atualizados dinamicamente sem necessidade de exportação",
        "Construção de painéis de controle (Dashboards) executivos customizados",
        "Análises financeiras avançadas consolidadas de todas as unidades de negócio"
      ]
    },
    {
      id: "accounting",
      badge: "Resultados Financeiros",
      title: "Contabilidade e Faturamento",
      description: "A base de toda a operação. O controle financeiro, o faturamento e a escrituração contábil são mantidos de forma consolidada, transparente e simplificada, com forte apoio de automações.",
      image: imgAccounting,
      modules: ["Contabilidade", "Faturamento"],
      features: [
        "Reconciliação bancária acelerada por reconhecimento inteligente",
        "Visualização contábil consolidada ou segmentada por CNPJ",
        "Geração ágil de DREs, balancetes e relatórios para auditoria"
      ]
    },
    {
      id: "studio",
      badge: "Flexibilidade Extrema",
      title: "Odoo Studio",
      description: "O sistema se adapta à empresa, e não o contrário. Com o Odoo Studio, é possível personalizar telas, criar novos campos e desenhar fluxos de aprovação do zero, mantendo a robustez e a segurança do ERP intactas.",
      image: imgStudio,
      modules: ["Odoo Studio", "Customização"],
      features: [
        "Criação de aplicativos e customizações sem a necessidade de programação",
        "Ajuste visual e adição de campos através de um simples arrastar e soltar",
        "Configuração de automações e fluxos de aprovação condicionados a regras de negócio"
      ]
    },
    {
      id: "obrigado",
      title: "MUITO OBRIGADO!",
      odooLogo: imgOdooPng,
      logos: [bioLogo, capelinhaLogo, refazendaLogo]
    }
  ];

  // Update active dot on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const slideElements = container.querySelectorAll('.slide');
      const viewportCenter = window.innerHeight / 2;

      let currentSlideIndex = activeSlide;

      slideElements.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          currentSlideIndex = index;
        }
      });

      if (currentSlideIndex !== activeSlide) {
        setActiveSlide(currentSlideIndex);
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
    const container = containerRef.current;
    const slideElements = container.querySelectorAll('.slide');

    if (slideElements[index]) {
      container.scrollTo({
        top: slideElements[index].offsetTop,
        behavior: 'smooth'
      });
    }
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
