
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-amber-500 uppercase border border-amber-500/30 bg-amber-500/10 rounded-full">
            +20 Anos de Mercado
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Sua empresa de Obras e Arquitetura <span className="text-amber-500">não pode ser um improviso.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Consultoria e Treinamento para empresários que vendem muito, mas não veem o lucro crescer. Transforme sua operação em uma estrutura de proteção e lucro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition text-center"
            >
              Quero Organizar Minha Empresa
            </a>
            <a 
              href="#quem-sou" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition text-center border border-white/20"
            >
              Conhecer Sheilla Almeida
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
