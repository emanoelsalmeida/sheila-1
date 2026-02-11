
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
              SHEILLA ALMEIDA
            </span>
          </div>
          <div className="hidden md:flex space-x-8 uppercase text-xs font-semibold tracking-widest text-slate-600">
            <a href="#inicio" className="hover:text-amber-600 transition">Início</a>
            <a href="#quem-sou" className="hover:text-amber-600 transition">Quem Sou</a>
            <a href="#servicos" className="hover:text-amber-600 transition">Serviços</a>
            <a href="#contato" className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition">Agendar Consultoria</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-6 space-y-4">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-amber-600">Início</a>
          <a href="#quem-sou" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-amber-600">Quem Sou</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-amber-600">Serviços</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="block font-bold text-amber-600">Agendar Consultoria</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
