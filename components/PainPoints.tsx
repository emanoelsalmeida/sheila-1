
import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    {
      title: "Vende, mas não vê lucro",
      desc: "O faturamento entra, mas a margem desaparece no caos operacional.",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Equipe sem controle",
      desc: "Você tem pessoas, mas a gestão é frouxa e as falhas são constantes.",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Vire refém da empresa",
      desc: "Se você se ausenta por 2 dias, tudo para. A empresa depende 100% de você.",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Caos com clientes",
      desc: "Você vive resolvendo problemas e apagando incêndios em vez de focar no estratégico.",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">Você está cansado de viver no limite?</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Trabalho diretamente com empresários que sentem que a empresa é uma areia movediça.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((p, idx) => (
          <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-amber-200 transition-all hover:shadow-xl group">
            <div className="mb-6 inline-block p-3 bg-white rounded-xl shadow-sm group-hover:bg-amber-50 transition-colors">
              {p.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h3>
            <p className="text-slate-600 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PainPoints;
