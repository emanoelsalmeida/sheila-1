
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="quem-sou" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition duration-700">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Sheilla Almeida" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-serif font-bold">20+</p>
              <p className="text-sm font-bold uppercase tracking-widest">Anos de experiência</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-amber-600 font-bold uppercase tracking-widest mb-4">A Consultora</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8">Sou Sheilla Almeida.</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p className="font-semibold text-slate-900">Consultora em Estruturação e Proteção Empresarial.</p>
              <p>
                Atuo na organização de empresas que estão cansadas de viver no limite. Com mais de duas décadas de vivência no mercado de arquitetura e obras, entendo as dores específicas do canteiro, do escritório e da mesa de negociação.
              </p>
              <p>
                Meu trabalho é organizar a empresa por dentro, para que ela funcione como empresa — e não como um improviso diário.
              </p>
              <div className="pt-8 border-t border-slate-200">
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    <span className="font-bold text-slate-900">Arquitetura</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    <span className="font-bold text-slate-900">Obras</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    <span className="font-bold text-slate-900">Vendas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    <span className="font-bold text-slate-900">Treinamento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
