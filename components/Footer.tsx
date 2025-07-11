import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} Conferência Futuro IA. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Github</a>
        </div>
        <p className="text-xs mt-4 text-slate-500">Uma página de exemplo para uma conferência fictícia.</p>
      </div>
    </footer>
  );
};

export default Footer;
