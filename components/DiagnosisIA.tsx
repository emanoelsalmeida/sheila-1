
import React, { useState } from 'react';
import { getBusinessDiagnosis } from '../services/geminiService';

const DiagnosisIA: React.FC = () => {
  const [problem, setProblem] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;

    setLoading(true);
    try {
      const diagnosis = await getBusinessDiagnosis(problem);
      setResult(diagnosis);
    } catch (error) {
      console.error(error);
      setResult("Erro ao conectar com a IA. Tente novamente em alguns instantes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="diagnostico" className="py-24 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100">
          <div className="bg-amber-600 p-8 text-white text-center">
            <h2 className="text-3xl font-serif mb-2">Diagnóstico Empresarial IA</h2>
            <p className="opacity-90">Descreva o maior desafio atual da sua empresa e receba um feedback preliminar da metodologia Sheilla Almeida.</p>
          </div>
          <div className="p-8 md:p-12">
            {!result ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    Qual o seu principal problema hoje?
                  </label>
                  <textarea 
                    rows={4}
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="Ex: Minha equipe é boa, mas os processos atrasam e o cliente reclama..."
                    className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analisando seu cenário...
                    </>
                  ) : "Gerar Diagnóstico Gratuito"}
                </button>
              </form>
            ) : (
              <div className="space-y-8 animate-fade-in">
                <div className="prose prose-slate max-w-none">
                  <div className="whitespace-pre-wrap text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-100">
                    {result}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {setResult(null); setProblem('');}}
                    className="px-6 py-3 border border-slate-300 rounded-lg text-slate-600 font-bold hover:bg-slate-50 transition"
                  >
                    Fazer outra análise
                  </button>
                  <a 
                    href="#contato"
                    className="px-6 py-3 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 transition text-center"
                  >
                    Falar com Sheilla Almeida
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisIA;
