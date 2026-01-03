
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Escolha seu plano</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Investimento que vale a pena</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sem taxas de adesão, sem multa por cancelamento. Escolha o período que melhor se adapta ao seu bolso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-[#1a1a1a] rounded-3xl p-8 border-2 transition-all transform hover:-translate-y-2 flex flex-col ${
                plan.recommended ? 'border-blue-500 shadow-2xl shadow-blue-500/20' : 'border-white/5'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} fill="white" /> Recomendado
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-gray-400 font-bold text-lg mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-gray-400">R$</span>
                  <span className="text-5xl font-black text-white">{plan.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="text-gray-500 mt-1 font-medium italic">/ {plan.period}</div>
                
                {plan.savings && (
                  <div className="mt-4 bg-green-500/10 text-green-500 py-1 px-3 rounded-md text-sm font-bold inline-block border border-green-500/20">
                    {plan.savings}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="bg-blue-500/20 rounded-full p-1">
                      <Check className="text-blue-500" size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={plan.checkoutUrl} 
                className={`w-full py-4 rounded-xl font-extrabold text-center transition-all ${
                  plan.recommended 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                ASSINAR AGORA
              </a>
              
              <p className="text-[10px] text-gray-500 text-center mt-4 uppercase tracking-tighter">
                Pagamento 100% seguro via Kirvano
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
