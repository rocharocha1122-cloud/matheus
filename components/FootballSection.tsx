
import React from 'react';
import { Trophy, Tv2, Calendar } from 'lucide-react';

const FootballSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/30 blur-[100px] rounded-full"></div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Futebol 4K" 
                className="rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Estádio" 
                className="rounded-2xl shadow-2xl mt-8 transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-blue-600 text-white p-4 rounded-xl shadow-2xl font-bold flex items-center gap-2 animate-bounce">
              <Trophy size={20} /> AO VIVO EM 4K
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
              O seu time do coração <br/> <span className="text-blue-500 italic">onde você estiver.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Não perca nenhum lance da Libertadores, Brasileirão, Champions League e os estaduais. No Elite Flix, você tem Premiere, SporTV, ESPN e canais internacionais inclusos.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg h-fit text-blue-500">
                  <Tv2 size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Delay Zero</h4>
                  <p className="text-gray-500">Transmissão otimizada para você não ouvir o vizinho gritando gol antes de você.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg h-fit text-blue-500">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Grade Completa</h4>
                  <p className="text-gray-400">Jogos de todos os campeonatos nacionais e internacionais 24 horas por dia.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-6">
              <img src="https://images.unsplash.com/photo-1517603951060-125811cc009c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" className="w-20 h-20 rounded-xl object-cover" alt="TV" />
              <div>
                <p className="text-white font-bold">Assista na Smart TV ou Celular</p>
                <p className="text-blue-500 text-sm font-medium">Compatível com todos dispositivos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FootballSection;
