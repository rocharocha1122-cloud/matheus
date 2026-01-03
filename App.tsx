
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BrandShowcase from './components/BrandShowcase';
import FootballSection from './components/FootballSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-blue-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        
        {/* Banner de Prova Social Rápido */}
        <div className="bg-blue-600 py-4 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee uppercase font-black text-sm tracking-tighter text-white/90 px-4">
             Futebol ao vivo • Filmes 2024 • BBB 24H • Canais 4K • Sem Travamentos • Suporte 24h • Ativação Imediata • Elite Flix TV • Premiere • Combate • Disney+ • Netflix • HBO Max •
          </div>
          <div className="inline-block animate-marquee uppercase font-black text-sm tracking-tighter text-white/90 px-4">
             Futebol ao vivo • Filmes 2024 • BBB 24H • Canais 4K • Sem Travamentos • Suporte 24h • Ativação Imediata • Elite Flix TV • Premiere • Combate • Disney+ • Netflix • HBO Max •
          </div>
        </div>

        <BrandShowcase />
        
        <Features />
        
        <FootballSection />
        
        {/* Image / Stats Section */}
        <section className="py-24 bg-[#111111] relative overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                A melhor experiência <br/> de <span className="text-blue-500">streaming</span> que você já teve.
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Esqueça as contas caras de TV a cabo. Com o Elite Flix TV, você tem tudo o que precisa em um único lugar, pagando menos de 1 real por dia.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-white/10 p-4 rounded-xl">
                  <span className="text-3xl font-black text-blue-500 block">100k+</span>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Conteúdos</span>
                </div>
                <div className="border border-white/10 p-4 rounded-xl">
                  <span className="text-3xl font-black text-blue-500 block">99.9%</span>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Uptime</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full"></div>
               <img 
                 src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Gaming and Tech" 
                 className="rounded-3xl shadow-2xl relative z-10 border border-white/10"
               />
            </div>
          </div>
        </section>

        <Pricing />
        <FAQ />
      </main>
      <Footer />
      
      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <a href="#pricing" className="bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-between shadow-2xl shadow-blue-600/50">
          <span>Assinar Agora</span>
          <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">A partir de R$ 29,90</span>
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default App;
