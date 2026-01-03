
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    q: "Como recebo o meu acesso?",
    a: "Imediatamente após a confirmação do pagamento, você receberá seus dados de acesso (usuário e senha) e o link para download do nosso aplicativo exclusivo via E-mail e WhatsApp."
  },
  {
    q: "Preciso de uma internet muito rápida?",
    a: "Recomendamos pelo menos 10mbps para conteúdos em HD e 25mbps para conteúdos em 4K. Nosso sistema utiliza codecs de compressão avançados que permitem rodar mesmo em conexões mais lentas sem travar."
  },
  {
    q: "Funciona em quais aparelhos?",
    a: "Praticamente todos! Smart TVs (Samsung, LG, Android TV), TV Box, Celulares Android e iOS, Tablets, Computadores e até consoles de videogame."
  },
  {
    q: "Tem fidelidade ou contrato?",
    a: "Não! Você é livre para cancelar quando quiser. Basta parar de renovar seu plano. Não cobramos multas nem taxas ocultas."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Dúvidas Frequentes</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Ainda com dúvidas?</h3>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden transition-all"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all"
              >
                <span className="text-lg font-bold text-white">{item.q}</span>
                {openIndex === index ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-gray-500" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 animate-fadeIn">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
