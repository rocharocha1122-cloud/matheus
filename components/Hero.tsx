
import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-6 animate-pulse">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Qualidade 4K Liberada</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            O Cinema <span className="gradient-text">na sua casa</span> com um clique.
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Tenha acesso a mais de 100.000 conteúdos incluindo todos os canais de TV, filmes que acabaram de sair do cinema e as séries mais populares do mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/40">
              GARANTIR MINHA VAGA
            </a>
            <a href="#features" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
              <Play className="fill-white" size={20} /> Ver Vantagens
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-gray-400">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} className="h-10 w-10 rounded-full border-2 border-black object-cover" src={`https://picsum.photos/100/100?random=${i}`} alt="User" />
              ))}
            </div>
            <p className="text-sm font-medium">
              <span className="text-white">+15.400 clientes</span> satisfeitos hoje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
