// Bebida Viva
import bv1 from '../../cases/bebida-vida/bv1.jpg';
import bv2 from '../../cases/bebida-vida/bv2.jpg';
import bv3 from '../../cases/bebida-vida/bv3.jpg';
import bvLogo from '../../cases/bebida-vida/logo.png';

// Everbolt
import everboltLogo from '../../cases/everbolt/logo.png';
import everboltImg from '../../cases/everbolt/image.png';

// GAF Food
import gafImg from '../../cases/gaf-food/image.png';
import gafLogo from '../../cases/gaf-food/logo.png';

// Pura Frutta
import pfLogo from '../../cases/pura-frutta/logo.png';
import pfImg1 from '../../cases/pura-frutta/image.png';
import pfImg2 from '../../cases/pura-frutta/image2.png';

// TD Food
import td1 from '../../cases/td-food/bv1.jpg';
import td2 from '../../cases/td-food/bv2.png';

// Top Seedz
import topImg from '../../cases/top-seedz/img.png';
import topSnack from '../../cases/top-seedz/snack.png';
import topLogo from '../../cases/top-seedz/logo.png';

export const casesData = [
  {
    id: "pura-frutta",
    company: "Pura Frutta",
    location: "Argentina 🇦🇷",
    industry: "Bebidas 100% Naturais",
    logo: pfLogo,
    images: [pfImg1, pfImg2],
    apps: ["Vendas", "Inventário", "Fabricação", "Logística", "CRM"],
    challenge: "À medida que escalavam as operações, enfrentavam falhas no rastreamento de perdas, tempos de entrega e gestão contábil ineficiente com um sistema rígido e obsoleto.",
    solution: "Integração total do fluxo logístico, contábil e CRM em uma única plataforma, proporcionando relatórios precisos em tempo real.",
    results: [
      "Redução do tempo de relatórios logísticos de 10 para apenas 2 dias.",
      "Fechamento contábil acelerado e 100% integrado.",
      "Visibilidade completa para tomada de decisões estratégicas."
    ],
    quote: "O sistema consolidado expôs as deficiências que tínhamos e nos ajudou a corrigi-las. Odoo nos deu estrutura e capacidade de otimização."
  },
  {
    id: "bebida-viva",
    company: "Bebida Viva",
    location: "México 🇲🇽",
    industry: "Bebidas Saudáveis (Kombuchas)",
    logo: bvLogo,
    images: [bv1, bv2, bv3],
    apps: ["Fabricação", "Vendas", "Inventário", "Faturamento"],
    challenge: "Processos de fabricação de kombucha longos e complexos (com múltiplos estágios e ativadores) tornavam o controle de qualidade e rastreabilidade um grande pesadelo sem um ERP.",
    solution: "Implementação nativa focada em rastreabilidade de ponta a ponta e gestão ágil de Ordens de Produção (MRP).",
    results: [
      "Controle exato sobre múltiplos passos de produção do SCOBY e envase.",
      "Melhoria drástica no serviço ao cliente com dados confiáveis.",
      "Implementação ágil e completa em menos de 3 meses."
    ],
    quote: "Cada ordem de fabricação requer 5 ou 6 passos. Odoo se destacou por ser o sistema que melhor se ajustou às nossas necessidades complexas."
  },
  {
    id: "top-seedz",
    company: "Top Seedz",
    location: "Estados Unidos 🇺🇸",
    industry: "Alimentos Orgânicos (Snacks)",
    logo: topLogo,
    images: [topImg, topSnack],
    apps: ["Inventário", "Fabricação", "Contabilidade", "CRM"],
    challenge: "Após um crescimento vertiginoso (vencendo um prêmio de US$ 1 Milhão), os antigos sistemas Quickbooks e TradeGecko não suportavam a nova escala de produção (4.000 caixas/hora).",
    solution: "Migração unificada para o Odoo para gerir tudo, desde a cadeia de suprimentos até a contabilidade multi-empresa e multi-moeda.",
    results: [
      "Substituição bem-sucedida de dois sistemas obsoletos.",
      "Base sólida para suportar mais de US$ 10 milhões em faturamento.",
      "Rastreabilidade completa, do grão de semente até o pacote final."
    ],
    quote: "Foi tentador pensar: 'Ok, não temos que pular de um sistema para o outro o dia inteiro'. O Odoo era tudo o que precisávamos para nossa nova era."
  },
  {
    id: "gaf-food",
    company: "GAF FOOD",
    location: "México 🇲🇽",
    industry: "Aditivos Alimentares",
    logo: gafLogo,
    images: [gafImg],
    apps: ["Inventário", "Vendas", "Faturamento", "Código de Barras"],
    challenge: "Necessidade de modernizar processos logísticos (dropshipping, cross-docking) e gestão de múltiplos armazéns para manter a qualidade de aditivos inovadores.",
    solution: "Implantação prática que conectou a prospecção comercial (CRM) até a expedição e o leitor de código de barras no armazém.",
    results: [
      "Configuração ágil de múltiplos armazéns e rotas avançadas.",
      "Rastreamento perfeito de lotes para segurança alimentar.",
      "Faturamento e logística unificados no mesmo ecossistema."
    ],
    quote: "O que mais gostei foi a facilidade de ter tudo no mesmo sistema. Se fôssemos resumir o Odoo em uma palavra, seria: PRÁTICO."
  },
  {
    id: "td-food",
    company: "TD Food & Beverage",
    location: "Tailândia 🇹🇭",
    industry: "Importação e Distribuição (Matcha)",
    images: [td1, td2],
    apps: ["Inventário", "Fabricação", "Qualidade", "Vendas"],
    challenge: "Silos de dados, atrasos de comunicação e frequentes quebras de estoque em múltiplos canais de venda online (Facebook, Shopee).",
    solution: "Um ERP centralizado integrando pedidos online diretamente com MRP e controle de Qualidade rigoroso (cor, aroma, microbiologia).",
    results: [
      "Integração Omnichannel centralizando pedidos da Shopee automaticamente.",
      "Produção Make-To-Stock (MTS) ágil e sob medida para a demanda.",
      "Inspeções de qualidade totalmente registradas para auditorias."
    ],
    quote: "Odoo centraliza todos os pedidos omnicanais num só lugar. Cada movimentação, da matéria-prima ao produto final, é agora 100% rastreada."
  },
  {
    id: "everbolt",
    company: "Everbolt Food",
    location: "Sri Lanka 🇱🇰",
    industry: "Alimentos e Bebidas",
    logo: everboltLogo,
    images: [everboltImg],
    apps: ["Vendas", "eCommerce", "Inventário", "Dashboards"],
    challenge: "Falta de controle centralizado nas operações de varejo e dificuldade em analisar o volume massivo de dados de vendas.",
    solution: "Implantação de e-commerce moderno interligado em tempo real com controle de estoque e painéis dinâmicos.",
    results: [
      "Criação de Dashboards interativos para decisões baseadas em dados.",
      "Gestão eficiente e inteligente dos canais de vendas.",
      "Redução de gargalos na reposição de produtos nas lojas."
    ],
    quote: "Uma verdadeira receita de sucesso. A flexibilidade do Odoo permitiu unificar tudo sob o mesmo teto."
  }
];
