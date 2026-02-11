
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Consultoria Estrutural",
      desc: "Reorganização total do fluxo de caixa, processos internos e proteção jurídica da operação.",
      points: ["Fluxo de Caixa", "Processos Operacionais", "Proteção de Ativos"]
    },
    {
      title: "Treinamento de Equipes",
      desc: "Capacitação técnica e comportamental para que sua equipe execute com excelência sem você por perto.",
      points: ["Gestão de Projetos", "Atendimento de Elite", "Produtividade"]
    },
    {
      title: "Gestão de Vendas",
      desc: "Estruturação do funil de vendas para obras e arquitetura focado em clientes de alto padrão.",
      points: ["Prospecção Ativa", "Fechamento de Contratos", "Precificação Lucrativa"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Como posso ajudar sua empresa?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Soluções personalizadas para o mercado de construção e arquitetura.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-slate-800 p-10 rounded-3xl border border-slate-700 hover:border-amber-500/50 transition duration-500">
              <h3 className="text-2xl font-bold mb-6 text-amber-500">{s.title}</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">{s.desc}</p>
              <ul className="space-y-4">
                {s.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
