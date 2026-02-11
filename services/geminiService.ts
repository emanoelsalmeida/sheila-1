
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBusinessDiagnosis = async (problemDescription: string): Promise<string> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Você é uma assistente de IA da Sheilla Almeida, uma consultora com 20 anos de mercado em estruturação empresarial para arquitetura e obras. 
    Um cliente descreveu o seguinte problema na empresa dele: "${problemDescription}".
    Com base na filosofia da Sheilla (organizar para que a empresa não viva no improviso), forneça uma análise curta e profissional (máximo 150 palavras) e 3 dicas acionáveis. 
    Responda de forma empática e autoritária, convidando-o a conhecer a consultoria completa no final.`,
    config: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
    }
  });

  return response.text || "Desculpe, não conseguimos processar seu diagnóstico agora. Por favor, entre em contato diretamente.";
};
