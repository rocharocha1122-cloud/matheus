
import React from 'react';
import { Instagram, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <span className="text-white font-bold text-xl tracking-tighter italic">EFTV</span>
            </div>
            <span className="text-white font-extrabold text-2xl tracking-tight">ELITE <span className="text-blue-500 italic">FLIX TV</span></span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 transition-all"><Instagram size={20} /></a>
            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 transition-all"><Youtube size={20} /></a>
            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 transition-all"><Send size={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-500 mb-12 border-b border-white/5 pb-12">
          <div>
            <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Início</h5>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-blue-500 transition-all">Vantagens</a></li>
              <li><a href="#pricing" className="hover:text-blue-500 transition-all">Preços</a></li>
              <li><a href="#faq" className="hover:text-blue-500 transition-all">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Suporte</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-all">WhatsApp</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-all">Ativação</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-all">Guia de Uso</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Aviso Legal</h5>
            <p className="leading-relaxed text-xs">
              Elite Flix TV é um player de mídia que permite aos usuários acessar conteúdos próprios ou licenciados. Não hospedamos conteúdos em nossos servidores. Ao assinar, você concorda com nossos termos de uso.
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600">
          <p>© 2024 Elite Flix TV. Todos os direitos reservados. Design premium para performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
