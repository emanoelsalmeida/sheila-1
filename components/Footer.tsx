
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-xl font-serif font-bold tracking-tight text-slate-900">
            SHEILLA ALMEIDA
          </span>
          <p className="text-sm text-slate-500 mt-2 italic">Consultoria & Proteção Empresarial</p>
        </div>
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-amber-600 transition">Instagram</a>
          <a href="#" className="hover:text-amber-600 transition">LinkedIn</a>
          <a href="#" className="hover:text-amber-600 transition">YouTube</a>
        </div>
        <div className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Sheilla Almeida. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
