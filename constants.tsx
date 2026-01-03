
import React from 'react';
import { Monitor, Smartphone, Tv, Zap, ShieldCheck, Film } from 'lucide-react';
import { PricingPlan, Feature } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'mensal',
    name: 'Plano Mensal',
    price: 29.90,
    period: 'mês',
    features: [
      'Acesso em 1 tela',
      'Canais em HD/4K',
      'Filmes e Séries',
      'Suporte 24h',
      'Sem fidelidade'
    ],
    checkoutUrl: '#'
  },
  {
    id: 'trimestral',
    name: 'Plano Trimestral',
    price: 79.90,
    period: '3 meses',
    savings: 'Economize R$ 9,80',
    recommended: true,
    features: [
      'Acesso em 2 telas',
      'Canais em HD/4K',
      'Filmes e Séries',
      'Prioridade no Suporte',
      'Guia de Programação'
    ],
    checkoutUrl: '#'
  },
  {
    id: 'semestral',
    name: 'Plano Semestral',
    price: 159.90,
    period: '6 meses',
    savings: 'Economize R$ 19,50',
    features: [
      'Acesso em 3 telas',
      'Canais em HD/4K',
      'Filmes e Séries',
      'Suporte VIP',
      'Canais Adultos (Opcional)'
    ],
    checkoutUrl: '#'
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'Qualidade 4K Ultra HD',
    description: 'Assista seus canais favoritos com a melhor definição do mercado sem travamentos.',
    icon: 'Tv'
  },
  {
    title: 'Conteúdo On Demand',
    description: 'Milhares de filmes e séries atualizados diariamente para você assistir quando quiser.',
    icon: 'Film'
  },
  {
    title: 'Multi-Dispositivos',
    description: 'Compatível com Smart TVs, Celulares, Tablets, TV Box e Computadores.',
    icon: 'Monitor'
  },
  {
    title: 'Ativação Instantânea',
    description: 'Comprou, recebeu! Nosso sistema libera seu acesso em poucos minutos após o pagamento.',
    icon: 'Zap'
  },
  {
    title: 'Suporte Premium',
    description: 'Equipe dedicada para tirar todas as suas dúvidas 7 dias por semana via WhatsApp.',
    icon: 'ShieldCheck'
  },
  {
    title: 'App Próprio',
    description: 'Interface intuitiva e leve que funciona perfeitamente em qualquer conexão de internet.',
    icon: 'Smartphone'
  }
];
