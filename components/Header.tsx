
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vantagens', href: '#features' },
    { name: 'Planos', href: '#pricing' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <span className="text-white font-bold text-xl tracking-tighter italic">EFTV</span>
          </div>
          <span className="text-white font-extrabold text-2xl tracking-tight hidden sm:block">ELITE <span className="text-blue-500 italic">FLIX TV</span></span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20">
            Assinar Agora
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={handleLinkClick}
              className="text-xl font-bold text-white hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#pricing" 
            onClick={handleLinkClick}
            className="bg-blue-600 text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20"
          >
            Assinar Agora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
