import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#palestrantes', label: 'Palestrantes' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#local', label: 'Local' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white tracking-wider">
          Futuro<span className="text-cyan-400">IA</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a href="#inscricao" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
            Inscreva-se
          </a>
        </nav>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 py-2">
                {link.label}
              </a>
            ))}
            <a href="#inscricao" onClick={() => setIsOpen(false)} className="mt-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
              Inscreva-se
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
